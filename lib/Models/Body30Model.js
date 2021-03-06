/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body30Model
 */
class Body30Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.contactId = this.constructor.getValue(obj.contactId);
        this.contactType = this.constructor.getValue(obj.contactType);
        this.publicNumber = this.constructor.getValue(obj.publicNumber);
        this.ext = this.constructor.getValue(obj.ext);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'contactId', realName: 'contactId' },
            { name: 'contactType', realName: 'contactType' },
            { name: 'publicNumber', realName: 'publicNumber' },
            { name: 'ext', realName: 'ext' },
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

module.exports = Body30Model;
