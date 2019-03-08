/*
List the devices in an organization and their current status.

/*
 * $ node listHttpServers.js -a 2f301bccd61b6c6BOGUSf76e5eb66ebd170f -f http-servers.csv
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
  // Get Networks
  const networks = await meraki.NetworksController.getOrganizationNetworks(
    ORG_ID
  ).catch(e => errorHandler(e));
  //console.log("Networks", networks);

  let allServers = [];
  try {
    for (let n of networks) {
      // Get Servers
      const servers = await meraki.HTTPServersController.getNetworkHttpServers(
        n.id
      ).then(res => res);
      if (!servers) {
        continue;
      }
      allServers = [...allServers, ...servers];
    }
  } catch (error) {}

  // Write CSV to File
  let file = program.file;
  if (file) {
    writeCSVfile(allServers, file);
  }
}

// Launch main script
main();
