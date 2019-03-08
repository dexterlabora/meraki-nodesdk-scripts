"use strict";

const lib = require("./lib");
const configuration = lib.Configuration;
const controller = lib.OrganizationsController;

configuration.xCiscoMerakiAPIKey = "093b24e85df15a3e66f1fc359f4c48493eaa1b73";

const promise = controller.getOrganizations();
promise.then(
  response => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'mixed'
    console.log(response);
  },
  err => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
  }
);
