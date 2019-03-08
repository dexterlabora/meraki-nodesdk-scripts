/**
  * @module MerakiDashboardAPILib
  *
  * Meraki Dashboard API - NFO - Feb26
  */

'use strict';

const Configuration = require('./configuration');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const PIIController = require('./Controllers/PIIController');
const NetworksController = require('./Controllers/NetworksController');
const PhoneNumbersController = require('./Controllers/PhoneNumbersController');
const PhoneContactsController = require('./Controllers/PhoneContactsController');
const PhoneConferenceRoomsController = require('./Controllers/PhoneConferenceRoomsController');
const PhoneCallgroupsController = require('./Controllers/PhoneCallgroupsController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const PhoneAssignmentsController = require('./Controllers/PhoneAssignmentsController');
const PhoneAnnouncementsController = require('./Controllers/PhoneAnnouncementsController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const SMController = require('./Controllers/SMController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const DevicesController = require('./Controllers/DevicesController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const ClientsController = require('./Controllers/ClientsController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const ClientSecurityEventsController = require('./Controllers/ClientSecurityEventsController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const AnalyticsController = require('./Controllers/AnalyticsController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const AdminsController = require('./Controllers/AdminsController');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const CamerasController = require('./Controllers/CamerasController');
const StaticRoutesController = require('./Controllers/StaticRoutesController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const VLANsController = require('./Controllers/VLANsController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SSIDsController = require('./Controllers/SSIDsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const Body34Model = require('./Models/Body34Model');
const Body33Model = require('./Models/Body33Model');
const Body30Model = require('./Models/Body30Model');
const Body28Model = require('./Models/Body28Model');
const Body27Model = require('./Models/Body27Model');
const Body26Model = require('./Models/Body26Model');
const Body22Model = require('./Models/Body22Model');
const Body19Model = require('./Models/Body19Model');
const Body18Model = require('./Models/Body18Model');
const Body50Model = require('./Models/Body50Model');
const Body52Model = require('./Models/Body52Model');
const Rule3Model = require('./Models/Rule3Model');
const Body47Model = require('./Models/Body47Model');
const Body48Model = require('./Models/Body48Model');
const Body45Model = require('./Models/Body45Model');
const Body46Model = require('./Models/Body46Model');
const Body69Model = require('./Models/Body69Model');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const Rule2Model = require('./Models/Rule2Model');
const Body43Model = require('./Models/Body43Model');
const Body44Model = require('./Models/Body44Model');
const Body37Model = require('./Models/Body37Model');
const Body42Model = require('./Models/Body42Model');
const Body66Model = require('./Models/Body66Model');
const Body62Model = require('./Models/Body62Model');
const Body61Model = require('./Models/Body61Model');
const RuleModel = require('./Models/RuleModel');
const ServerModel = require('./Models/ServerModel');
const Body9Model = require('./Models/Body9Model');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const Body58Model = require('./Models/Body58Model');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const Body6Model = require('./Models/Body6Model');
const AlertModel = require('./Models/AlertModel');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const RadiusServerModel = require('./Models/RadiusServerModel');
const Body56Model = require('./Models/Body56Model');
const Body54Model = require('./Models/Body54Model');
const Body3Model = require('./Models/Body3Model');
const Body53Model = require('./Models/Body53Model');
const Body51Model = require('./Models/Body51Model');
const Body49Model = require('./Models/Body49Model');
const Body2Model = require('./Models/Body2Model');
const Body40Model = require('./Models/Body40Model');
const Network2Model = require('./Models/Network2Model');
const Tag2Model = require('./Models/Tag2Model');
const Body38Model = require('./Models/Body38Model');
const SubnetModel = require('./Models/SubnetModel');
const Body32Model = require('./Models/Body32Model');
const Body31Model = require('./Models/Body31Model');
const HubModel = require('./Models/HubModel');
const Body21Model = require('./Models/Body21Model');
const Body20Model = require('./Models/Body20Model');
const Body15Model = require('./Models/Body15Model');
const Body14Model = require('./Models/Body14Model');
const Body71Model = require('./Models/Body71Model');
const Body13Model = require('./Models/Body13Model');
const Body68Model = require('./Models/Body68Model');
const Body12Model = require('./Models/Body12Model');
const Body7Model = require('./Models/Body7Model');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const Body4Model = require('./Models/Body4Model');
const Body65Model = require('./Models/Body65Model');
const NetworkModel = require('./Models/NetworkModel');
const TagModel = require('./Models/TagModel');
const ActionModel = require('./Models/ActionModel');
const Body64Model = require('./Models/Body64Model');
const Body63Model = require('./Models/Body63Model');
const BodyModel = require('./Models/BodyModel');
const Body60Model = require('./Models/Body60Model');
const Body36Model = require('./Models/Body36Model');
const Body35Model = require('./Models/Body35Model');
const Body29Model = require('./Models/Body29Model');
const Body25Model = require('./Models/Body25Model');
const Body23Model = require('./Models/Body23Model');
const Body17Model = require('./Models/Body17Model');
const Body11Model = require('./Models/Body11Model');
const Body10Model = require('./Models/Body10Model');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const SsidsModel = require('./Models/SsidsModel');
const Body8Model = require('./Models/Body8Model');
const Body5Model = require('./Models/Body5Model');
const Body1Model = require('./Models/Body1Model');
const Body55Model = require('./Models/Body55Model');
const Body57Model = require('./Models/Body57Model');
const Body59Model = require('./Models/Body59Model');
const Rule4Model = require('./Models/Rule4Model');
const Rule5Model = require('./Models/Rule5Model');
const Rule6Model = require('./Models/Rule6Model');
const Body67Model = require('./Models/Body67Model');
const Body70Model = require('./Models/Body70Model');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of MerakiDashboardAPILib
    Configuration,
    // controllers of MerakiDashboardAPILib
    SAMLRolesController,
    PIIController,
    NetworksController,
    PhoneNumbersController,
    PhoneContactsController,
    PhoneConferenceRoomsController,
    PhoneCallgroupsController,
    MerakiAuthUsersController,
    PhoneAssignmentsController,
    PhoneAnnouncementsController,
    OrganizationsController,
    HTTPServersController,
    MX1ManyNATRulesController,
    MX11NATRulesController,
    MXPortForwardingRulesController,
    SMController,
    MRL3FirewallController,
    MXVPNFirewallController,
    MXL3FirewallController,
    MXCellularFirewallController,
    DevicesController,
    GroupPoliciesController,
    ClientsController,
    MXL7FirewallController,
    ClientSecurityEventsController,
    ConfigTemplatesController,
    BluetoothClientsController,
    AnalyticsController,
    AlertSettingsController,
    AdminsController,
    ActionBatchesController,
    CamerasController,
    StaticRoutesController,
    UplinkSettingsController,
    VLANsController,
    WirelessHealthController,
    NamedTagScopeController,
    FirewalledServicesController,
    ContentFilteringRulesController,
    ContentFilteringCategoriesController,
    SyslogServersController,
    SwitchPortsController,
    SwitchSettingsController,
    SSIDsController,
    SplashSettingsController,
    SplashLoginAttemptsController,
    OpenAPISpecController,
    // models of MerakiDashboardAPILib
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
    // exceptions of MerakiDashboardAPILib
    APIException,
};

module.exports = initializer;
