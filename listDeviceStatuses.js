/*
List the devices in an organization and their current status.

/*
 * $ node listDeviceStatuses.js -a 093b24e85df15a3e66f1fc359f4c48493eaa1b73 -o 537758 -f deviceStatuses.csv
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
  let networks = await meraki.NetworksController.getOrganizationNetworks(
    ORG_ID
  ).catch(e => errorHandler(e));
  console.log("Networks", networks);

  // Get Devices
  let devices = await meraki.OrganizationsController.getOrganizationDeviceStatuses(
    ORG_ID
  ).catch(e => errorHandler(e));

  // Add network info to data
  devicesWithNetName = devices.map(d => {
    let network = networks.find(n => n.id === d.networkId);
    d.networkName = network.name;
    d.networkTags = network.tags;
    d.networkTimeZone = network.timeZone;
    return d;
  });
  console.log("Devices with network info", devicesWithNetName);

  // Write CSV to File
  let file = program.file;
  if (file) {
    csv.writeCSVfile(devicesWithNetName, file);
  }
}

// Launch main script
main(program.apiKey, program.orgId, program.file);
