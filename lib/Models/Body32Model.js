/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Body32Model
 */
class Body32Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.ext = this.constructor.getValue(obj.ext);
        this.publicNumber = this.constructor.getValue(obj.publicNumber);
        this.ringStrategy = this.constructor.getValue(obj.ringStrategy);
        this.scope = this.constructor.getValue(obj.scope);
        this.tags = this.constructor.getValue(obj.tags);
        this.allowExternalForwards = this.constructor.getValue(obj.allowExternalForwards);
        this.waitTimeEnabled = this.constructor.getValue(obj.waitTimeEnabled);
        this.maxWaitTime = this.constructor.getValue(obj.maxWaitTime);
        this.noAnswerAction = this.constructor.getValue(obj.noAnswerAction);
        this.transferExtension = this.constructor.getValue(obj.transferExtension);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'ext', realName: 'ext' },
            { name: 'publicNumber', realName: 'publicNumber' },
            { name: 'ringStrategy', realName: 'ringStrategy' },
            { name: 'scope', realName: 'scope' },
            { name: 'tags', realName: 'tags' },
            { name: 'allowExternalForwards', realName: 'allowExternalForwards' },
            { name: 'waitTimeEnabled', realName: 'waitTimeEnabled' },
            { name: 'maxWaitTime', realName: 'maxWaitTime' },
            { name: 'noAnswerAction', realName: 'noAnswerAction' },
            { name: 'transferExtension', realName: 'transferExtension' },
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

module.exports = Body32Model;
