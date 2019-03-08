/*
Traverse the Meraki Dashboard API to display the Clients of an Organization in a given timespan.

/*
 * $ node listSSIDs-org.js -a 093b24e85df15a3e66f1fc359f4c48493eaa1b73 -o 537758 -f ssids-org-sandbox.csv
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

// Primary Script
async function main() {
  let ssidsOrg = [];

  // Get networkss
  const networks = await meraki.NetworksController.getOrganizationNetworks(
    ORG_ID
  ).catch(e => errorHandler(e));

  // Get SSIDs for each network and merge data
  // errors will be thrown for networks that do not support wireless
  try {
    for (let n of networks) {
      const ssids = await meraki.SSIDsController.getNetworkSsids(n.id).catch(
        e => errorHandler(e)
      );

      console.log("network ssids", n.id, ssids);
      if (!ssids) {
        continue;
      }
      ssids.map(s => {
        s.networkId = n.id;
        s.networkName = n.name;
        s.networkTemplateId = n.configTemplateId;
        return s;
      });

      ssidsOrg = [...ssidsOrg, ...ssids];
    }
  } catch (error) {
    e => errorHandler(e);
  }

  // Write CSV to File
  let file = program.file;
  if (file) {
    csv.writeCSVfile(ssidsOrg, file);
  }
}

// Launch main script
main();
