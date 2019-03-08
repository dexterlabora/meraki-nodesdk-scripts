# A collection of sample scripts using the Meraki Dashboard API - NodeJS SDK

`Meraki Dashboard API - NFO - Feb26`
https://www.apimatic.io/apidocs/meraki-api-oas-nfo/v/1#/node-js/

## Install

`git clone <repo>`
`npm install`

## Running Sample Scripts

There are several sample JS scripts that demonstrate using the SDK, creating a command line utility and exporting the data to a CSV file.

The first script you should run is `listOrgs` to return the names and IDs for your organizations.

`$ node listOrgs.js -a 093b24e85df15a3e66f1fc359f4c48493eaa1b73 -f ./csv/orgs.csv`

Then, run the other calls that require an **orgId** such as `listDeviceStatuses`

`$ node listDeviceStatuses.js -a 093b24e85df15a3e66f1fc359f4c48493eaa1b73 -o 537758 -f deviceStatuses.csv`

###########################################################################################################

## License

Apache

## Written by

Cory Guynn | 2019
# meraki-nodesdk-scripts
