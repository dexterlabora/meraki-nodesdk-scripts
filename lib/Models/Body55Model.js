/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body55Model
 */
class Body55Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.wifiMacs = this.constructor.getValue(obj.wifiMacs);
        this.ids = this.constructor.getValue(obj.ids);
        this.serials = this.constructor.getValue(obj.serials);
        this.scope = this.constructor.getValue(obj.scope);
        this.newNetwork = this.constructor.getValue(obj.newNetwork);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'wifiMacs', realName: 'wifiMacs' },
            { name: 'ids', realName: 'ids' },
            { name: 'serials', realName: 'serials' },
            { name: 'scope', realName: 'scope' },
            { name: 'newNetwork', realName: 'newNetwork' },
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

module.exports = Body55Model;
