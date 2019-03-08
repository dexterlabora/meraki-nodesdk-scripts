/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body6Model
 */
class Body6Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.mac = this.constructor.getValue(obj.mac);
        this.name = this.constructor.getValue(obj.name);
        this.devicePolicy = this.constructor.getValue(obj.devicePolicy);
        this.groupPolicyId = this.constructor.getValue(obj.groupPolicyId);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'mac', realName: 'mac' },
            { name: 'name', realName: 'name' },
            { name: 'devicePolicy', realName: 'devicePolicy' },
            { name: 'groupPolicyId', realName: 'groupPolicyId' },
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

module.exports = Body6Model;