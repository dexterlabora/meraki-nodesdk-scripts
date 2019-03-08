/*
List the Templates of an Organization

/*
 * $ node listTemplates.js -a 2f301bccd61b6c6BOGUSf76e5eb66ebd170f -o 537758 -f templates.csv
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
  // Get Templates
  let templates = await meraki.ConfigTemplatesController.getOrganizationConfigTemplates(
    ORG_ID
  ).catch(e => errorHandler(e));
  console.log("Templates: \n", templates);

  // Write CSV to File
  let file = program.file;
  if (file) {
    csv.writeCSVfile(templates, file);
  }
}

// Launch main script
main();
