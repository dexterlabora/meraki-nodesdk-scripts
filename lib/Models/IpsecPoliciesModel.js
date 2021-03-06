/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of IpsecPoliciesModel
 */
class IpsecPoliciesModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.ikeCipherAlgo = this.constructor.getValue(obj.ikeCipherAlgo);
        this.ikeAuthAlgo = this.constructor.getValue(obj.ikeAuthAlgo);
        this.ikeDiffieHellmanGroup = this.constructor.getValue(obj.ikeDiffieHellmanGroup);
        this.ikeLifetime = this.constructor.getValue(obj.ikeLifetime);
        this.childCipherAlgo = this.constructor.getValue(obj.childCipherAlgo);
        this.childAuthAlgo = this.constructor.getValue(obj.childAuthAlgo);
        this.childPfsGroup = this.constructor.getValue(obj.childPfsGroup);
        this.childLifetime = this.constructor.getValue(obj.childLifetime);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'ikeCipherAlgo', realName: 'ikeCipherAlgo' },
            { name: 'ikeAuthAlgo', realName: 'ikeAuthAlgo' },
            { name: 'ikeDiffieHellmanGroup', realName: 'ikeDiffieHellmanGroup' },
            { name: 'ikeLifetime', realName: 'ikeLifetime' },
            { name: 'childCipherAlgo', realName: 'childCipherAlgo' },
            { name: 'childAuthAlgo', realName: 'childAuthAlgo' },
            { name: 'childPfsGroup', realName: 'childPfsGroup' },
            { name: 'childLifetime', realName: 'childLifetime' },
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

module.exports = IpsecPoliciesModel;
