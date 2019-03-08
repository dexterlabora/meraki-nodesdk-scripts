/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const Body34Model = require('../lib/Models/Body34Model');
const Body33Model = require('../lib/Models/Body33Model');
const Body30Model = require('../lib/Models/Body30Model');
const Body28Model = require('../lib/Models/Body28Model');
const Body27Model = require('../lib/Models/Body27Model');
const Body26Model = require('../lib/Models/Body26Model');
const Body22Model = require('../lib/Models/Body22Model');
const Body19Model = require('../lib/Models/Body19Model');
const Body18Model = require('../lib/Models/Body18Model');
const Body50Model = require('../lib/Models/Body50Model');
const Body52Model = require('../lib/Models/Body52Model');
const Rule3Model = require('../lib/Models/Rule3Model');
const Body47Model = require('../lib/Models/Body47Model');
const Body48Model = require('../lib/Models/Body48Model');
const Body45Model = require('../lib/Models/Body45Model');
const Body46Model = require('../lib/Models/Body46Model');
const Body69Model = require('../lib/Models/Body69Model');
const BandwidthLimitsModel = require('../lib/Models/BandwidthLimitsModel');
const Rule2Model = require('../lib/Models/Rule2Model');
const Body43Model = require('../lib/Models/Body43Model');
const Body44Model = require('../lib/Models/Body44Model');
const Body37Model = require('../lib/Models/Body37Model');
const Body42Model = require('../lib/Models/Body42Model');
const Body66Model = require('../lib/Models/Body66Model');
const Body62Model = require('../lib/Models/Body62Model');
const Body61Model = require('../lib/Models/Body61Model');
const RuleModel = require('../lib/Models/RuleModel');
const ServerModel = require('../lib/Models/ServerModel');
const Body9Model = require('../lib/Models/Body9Model');
const PowerExceptionModel = require('../lib/Models/PowerExceptionModel');
const Body58Model = require('../lib/Models/Body58Model');
const ApTagsAndVlanIdModel = require('../lib/Models/ApTagsAndVlanIdModel');
const Body6Model = require('../lib/Models/Body6Model');
const AlertModel = require('../lib/Models/AlertModel');
const RadiusAccountingServerModel = require('../lib/Models/RadiusAccountingServerModel');
const RadiusServerModel = require('../lib/Models/RadiusServerModel');
const Body56Model = require('../lib/Models/Body56Model');
const Body54Model = require('../lib/Models/Body54Model');
const Body3Model = require('../lib/Models/Body3Model');
const Body53Model = require('../lib/Models/Body53Model');
const Body51Model = require('../lib/Models/Body51Model');
const Body49Model = require('../lib/Models/Body49Model');
const Body2Model = require('../lib/Models/Body2Model');
const Body40Model = require('../lib/Models/Body40Model');
const Network2Model = require('../lib/Models/Network2Model');
const Tag2Model = require('../lib/Models/Tag2Model');
const Body38Model = require('../lib/Models/Body38Model');
const SubnetModel = require('../lib/Models/SubnetModel');
const Body32Model = require('../lib/Models/Body32Model');
const Body31Model = require('../lib/Models/Body31Model');
const HubModel = require('../lib/Models/HubModel');
const Body21Model = require('../lib/Models/Body21Model');
const Body20Model = require('../lib/Models/Body20Model');
const Body15Model = require('../lib/Models/Body15Model');
const Body14Model = require('../lib/Models/Body14Model');
const Body71Model = require('../lib/Models/Body71Model');
const Body13Model = require('../lib/Models/Body13Model');
const Body68Model = require('../lib/Models/Body68Model');
const Body12Model = require('../lib/Models/Body12Model');
const Body7Model = require('../lib/Models/Body7Model');
const DefaultDestinationsModel = require('../lib/Models/DefaultDestinationsModel');
const Body4Model = require('../lib/Models/Body4Model');
const Body65Model = require('../lib/Models/Body65Model');
const NetworkModel = require('../lib/Models/NetworkModel');
const TagModel = require('../lib/Models/TagModel');
const ActionModel = require('../lib/Models/ActionModel');
const Body64Model = require('../lib/Models/Body64Model');
const Body63Model = require('../lib/Models/Body63Model');
const BodyModel = require('../lib/Models/BodyModel');
const Body60Model = require('../lib/Models/Body60Model');
const Body36Model = require('../lib/Models/Body36Model');
const Body35Model = require('../lib/Models/Body35Model');
const Body29Model = require('../lib/Models/Body29Model');
const Body25Model = require('../lib/Models/Body25Model');
const Body23Model = require('../lib/Models/Body23Model');
const Body17Model = require('../lib/Models/Body17Model');
const Body11Model = require('../lib/Models/Body11Model');
const Body10Model = require('../lib/Models/Body10Model');
const IpsecPoliciesModel = require('../lib/Models/IpsecPoliciesModel');
const SsidsModel = require('../lib/Models/SsidsModel');
const Body8Model = require('../lib/Models/Body8Model');
const Body5Model = require('../lib/Models/Body5Model');
const Body1Model = require('../lib/Models/Body1Model');
const Body55Model = require('../lib/Models/Body55Model');
const Body57Model = require('../lib/Models/Body57Model');
const Body59Model = require('../lib/Models/Body59Model');
const Rule4Model = require('../lib/Models/Rule4Model');
const Rule5Model = require('../lib/Models/Rule5Model');
const Rule6Model = require('../lib/Models/Rule6Model');
const Body67Model = require('../lib/Models/Body67Model');
const Body70Model = require('../lib/Models/Body70Model');

const classMap = {
    Body34Model,
    Body33Model,
    Body30Model,
    Body28Model,
    Body27Model,
    Body26Model,
    Body22Model,
    Body19Model,
    Body18Model,
    Body50Model,
    Body52Model,
    Rule3Model,
    Body47Model,
    Body48Model,
    Body45Model,
    Body46Model,
    Body69Model,
    BandwidthLimitsModel,
    Rule2Model,
    Body43Model,
    Body44Model,
    Body37Model,
    Body42Model,
    Body66Model,
    Body62Model,
    Body61Model,
    RuleModel,
    ServerModel,
    Body9Model,
    PowerExceptionModel,
    Body58Model,
    ApTagsAndVlanIdModel,
    Body6Model,
    AlertModel,
    RadiusAccountingServerModel,
    RadiusServerModel,
    Body56Model,
    Body54Model,
    Body3Model,
    Body53Model,
    Body51Model,
    Body49Model,
    Body2Model,
    Body40Model,
    Network2Model,
    Tag2Model,
    Body38Model,
    SubnetModel,
    Body32Model,
    Body31Model,
    HubModel,
    Body21Model,
    Body20Model,
    Body15Model,
    Body14Model,
    Body71Model,
    Body13Model,
    Body68Model,
    Body12Model,
    Body7Model,
    DefaultDestinationsModel,
    Body4Model,
    Body65Model,
    NetworkModel,
    TagModel,
    ActionModel,
    Body64Model,
    Body63Model,
    BodyModel,
    Body60Model,
    Body36Model,
    Body35Model,
    Body29Model,
    Body25Model,
    Body23Model,
    Body17Model,
    Body11Model,
    Body10Model,
    IpsecPoliciesModel,
    SsidsModel,
    Body8Model,
    Body5Model,
    Body1Model,
    Body55Model,
    Body57Model,
    Body59Model,
    Rule4Model,
    Rule5Model,
    Rule6Model,
    Body67Model,
    Body70Model,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
