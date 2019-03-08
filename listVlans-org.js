/*
 * $ node listVlans-org.js -a 2f301bccd61b6c6BOGUSf76e5eb66ebd170f -o 537758 -f templates.csv
 * 
 * 
 * This will generate a report of the MX VLAN and subnet information for an organization, along with the applied templates. 
 * The data is exported to a CSV file for easy analysis. 
 

*/

var program = require("commander");
const csv = require("./js/writeCSVfile");

program
  .option("-f, --file <file>", "CSV file to write")
  .option("-a, --apiKey <apiKey>", "The Meraki API Key")
  .option("-o, --orgId <orgId>", "The organization ID")
  .parse(process.argv);

// Environment Defaults
const API_KEY = program.apiKey || "093b24e85df15a3e66f1fc359f4c48493eaa1b73"; // Demo Sandbox API Key
const ORG_ID = program.orgId || "537758"; // Demo Org "Meraki Launchpad"

// Meraki API Service
const meraki = require("./lib");
const configuration = meraki.Configuration;
configuration.xCiscoMerakiAPIKey = API_KEY;

function errorHandler(e) {
  console.log(e);
}

// Meraki Handlers

async function fetchVlans(nets) {
  console.log("fetchNets nets", nets);
  try {
    if (!nets) {
      throw "missing networks";
    }
    console.log("\n Getting VLAN information..");
    let allVlans = [];
    if (nets) {
      for (let n of nets) {
        const vlans = await meraki.VLANsController.getNetworkVlans(n.id).catch(
          e => errorHandler(e)
        );
        if (!vlans) {
          continue;
        }
        allVlans = [...allVlans, ...vlans];
      }
    }
    return allVlans;
  } catch (error) {
    errorHandler(error);
  }
}

// Primary Script
async function main() {
  // Get Networks
  const networks = await meraki.NetworksController.getOrganizationNetworks(
    ORG_ID
  ).catch(e => errorHandler(e));
  console.log("Networks: ", networks);

  // Get Template Info
  const templates = await meraki.ConfigTemplatesController.getOrganizationConfigTemplates(
    ORG_ID
  ).catch(e => errorHandler(e));
  console.log("Templates: ", templates);

  // Get VLANs for every network
  let vlans = await fetchVlans(networks);

  // attach template and network name info to results
  vlans.map(v => {
    // attach network name
    let net = networks.filter(n => n.id === v.networkId)[0];
    v.networkName = net.name;

    // attach template name
    if (net.configTemplateId) {
      v.configTemplateId = net.configTemplateId;
      let template = templates.filter(t => t.id === v.configTemplateId)[0];
      v.configTemplateName = template.name;
    }
    return v;
  });

  // Print Final Results
  console.log("VLANS with Network Template Info", vlans);

  // Write CSV to File
  let file = program.file;
  if (file) {
    csv.writeCSVfile(vlans, file);
  }
}

// Launch main script
main();
