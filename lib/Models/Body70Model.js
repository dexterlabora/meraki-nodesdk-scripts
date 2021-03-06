/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body70Model
 */
class Body70Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.subnet = this.constructor.getValue(obj.subnet);
        this.applianceIp = this.constructor.getValue(obj.applianceIp);
        this.fixedIpAssignments = this.constructor.getValue(obj.fixedIpAssignments);
        this.reservedIpRanges = this.constructor.getValue(obj.reservedIpRanges);
        this.vpnNatSubnet = this.constructor.getValue(obj.vpnNatSubnet);
        this.dnsNameservers = this.constructor.getValue(obj.dnsNameservers);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'subnet', realName: 'subnet' },
            { name: 'applianceIp', realName: 'applianceIp' },
            { name: 'fixedIpAssignments', realName: 'fixedIpAssignments' },
            { name: 'reservedIpRanges', realName: 'reservedIpRanges' },
            { name: 'vpnNatSubnet', realName: 'vpnNatSubnet' },
            { name: 'dnsNameservers', realName: 'dnsNameservers' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Body70Model;
