/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body22Model
 */
class Body22Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.scanningEnabled = this.constructor.getValue(obj.scanningEnabled);
        this.advertisingEnabled = this.constructor.getValue(obj.advertisingEnabled);
        this.uuid = this.constructor.getValue(obj.uuid);
        this.majorMinorAssignmentMode = this.constructor.getValue(obj.majorMinorAssignmentMode);
        this.major = this.constructor.getValue(obj.major);
        this.minor = this.constructor.getValue(obj.minor);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'scanningEnabled', realName: 'scanningEnabled' },
            { name: 'advertisingEnabled', realName: 'advertisingEnabled' },
            { name: 'uuid', realName: 'uuid' },
            { name: 'majorMinorAssignmentMode', realName: 'majorMinorAssignmentMode' },
            { name: 'major', realName: 'major' },
            { name: 'minor', realName: 'minor' },
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

module.exports = Body22Model;
