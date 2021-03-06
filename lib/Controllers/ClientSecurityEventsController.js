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

class ClientSecurityEventsController {
    /**
     * List the security events
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET
     * 'https://api.meraki.com/api/v0/networks/[networkId]/clients/[clientId]/securityEvents?
     * timespan=7200'
     * ```
     *
     * @param {string} networkId TODO: type description here
     * @param {string} clientId TODO: type description here
     * @param {string} timespan (optional) The timespan, in seconds, to look back from now for
     * events
     * @param {string} perPage (optional) The number of entries per page returned
     * @param {string} startingAfter (optional) A token used by the server to indicate the start of
     * the page. Often this is a timestamp or an ID but it is not
     * limited to those. This parameter should not be defined by
     * client applications. The link for the first, last, next or
     * prev page in the HTTP Link header should define it.
     * @param {string} endingBefore (optional) A token used by the server to indicate the end of
     * the page. Often this is a timestamp or an ID but it is not
     * limited to those. This parameter should not be defined by
     * client applications. The link for the first, last, next or prev
     * page in the HTTP Link header should define it.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientSecurityEvents(networkId,
        clientId,
        timespan,
        perPage,
        startingAfter,
        endingBefore,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (networkId === null || networkId === undefined) {
            const _err = { errorMessage: 'The parameter `networkId` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (clientId === null || clientId === undefined) {
            const _err = { errorMessage: 'The parameter `clientId` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/securityEvents';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId,
            clientId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            timespan,
            perPage,
            startingAfter,
            endingBefore,
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
module.exports = ClientSecurityEventsController;
