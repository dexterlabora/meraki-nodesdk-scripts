/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body34Model
 */
class Body34Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.description = this.constructor.getValue(obj.description);
        this.ext = this.constructor.getValue(obj.ext);
        this.publicNumber = this.constructor.getValue(obj.publicNumber);
        this.maxMembers = this.constructor.getValue(obj.maxMembers);
        this.pin = this.constructor.getValue(obj.pin);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'description', realName: 'description' },
            { name: 'ext', realName: 'ext' },
            { name: 'publicNumber', realName: 'publicNumber' },
            { name: 'maxMembers', realName: 'maxMembers' },
            { name: 'pin', realName: 'pin' },
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

module.exports = Body34Model;
