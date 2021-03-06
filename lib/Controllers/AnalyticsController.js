/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class AnalyticsController {
    /**
     * Returns live state from camera of analytics zones
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/devices/[serial]/camera/analytics/live'
     * ```
     *
     * @param {string} serial TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDeviceCameraAnalyticsLive(serial, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (serial === null || serial === undefined) {
            const _err = { errorMessage: 'The parameter `serial` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/devices/{serial}/camera/analytics/live';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            serial,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Returns most recent record for analytics zones
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/devices/[serial]/camera/analytics/recent'
     * ```
     *
     * @param {string} serial TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDeviceCameraAnalyticsRecent(serial, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (serial === null || serial === undefined) {
            const _err = { errorMessage: 'The parameter `serial` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/devices/{serial}/camera/analytics/recent';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            serial,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Returns all configured analytic zones for this camera
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/devices/[serial]/camera/analytics/zones'
     * ```
     *
     * @param {string} serial TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDeviceCameraAnalyticsZones(serial, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (serial === null || serial === undefined) {
            const _err = { errorMessage: 'The parameter `serial` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/devices/{serial}/camera/analytics/zones';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            serial,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Returns an overview of aggregate analytics data for a timespan
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/devices/{serial}/camera/analytics/overview'
     * ```
     *
     * @param {string} serial TODO: type description here
     * @param {int} t0 (optional) The beginning of the timespan for the data. The maximum lookback
     * period is 12 months from today.
     * @param {int} t1 (optional) The end of the timespan for the data. t1 can be a maximum of 1
     * week after t0.
     * @param {int} timespan (optional) The timespan for which the information will be fetched. If
     * specifying timespan, do not specify parameters t0 and t1. The value
     * must be in seconds and be less than or equal to 604800. The default is
     * 3600.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDeviceCameraAnalyticsOverview(serial, t0, t1, timespan, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (serial === null || serial === undefined) {
            const _err = { errorMessage: 'The parameter `serial` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/devices/{serial}/camera/analytics/overview';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            serial,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0,
            t1,
            timespan,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return historical records for analytic zones
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/devices/{serial}/camera/analytics/zones/{zoneId}/history'
     * ```
     *
     * @param {string} serial TODO: type description here
     * @param {string} zoneId TODO: type description here
     * @param {int} t0 (optional) The beginning of the timespan for the data. The maximum lookback
     * period is 12 months from today.
     * @param {int} t1 (optional) The end of the timespan for the data. t1 can be a maximum of 14
     * hours after t0.
     * @param {int} timespan (optional) The timespan for which the information will be fetched. If
     * specifying timespan, do not specify parameters t0 and t1. The value
     * must be in seconds and be less than or equal to 50400. The default is
     * 3600.
     * @param {int} resolution (optional) The time resolution in seconds for returned data. The
     * valid resolutions are: 60. The default is 60.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDeviceCameraAnalyticsZoneHistory(serial,
        zoneId,
        t0,
        t1,
        timespan,
        resolution,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (serial === null || serial === undefined) {
            const _err = { errorMessage: 'The parameter `serial` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (zoneId === null || zoneId === undefined) {
            const _err = { errorMessage: 'The parameter `zoneId` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/devices/{serial}/camera/analytics/zones/{zoneId}/history';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            serial,
            zoneId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0,
            t1,
            timespan,
            resolution,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = AnalyticsController;
