/*! msal v1.1.0 2019-07-23 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var Constants_2 = __webpack_require__(2);
/**
 * @hidden
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    //#region General Util
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Utils.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    Utils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    /**
     * MSAL JS Library Version
     */
    Utils.getLibraryVersion = function () {
        return Constants_2.Library.version;
    };
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    Utils.createNewGuid = function () {
        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
        // pseudo-random numbers.
        // The algorithm is as follows:
        //     Set the two most significant bits (bits 6 and 7) of the
        //        clock_seq_hi_and_reserved to zero and one, respectively.
        //     Set the four most significant bits (bits 12 through 15) of the
        //        time_hi_and_version field to the 4-bit version number from
        //        Section 4.1.3. Version4
        //     Set all the other bits to randomly (or pseudo-randomly) chosen
        //     values.
        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
        // time-low               = 4hexOctet
        // time-mid               = 2hexOctet
        // time-high-and-version  = 2hexOctet
        // clock-seq-and-reserved = hexOctet:
        // clock-seq-low          = hexOctet
        // node                   = 6hexOctet
        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
        // y values are 8, 9, A, B
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
            return Utils.decimalToHex(buffer[0]) + Utils.decimalToHex(buffer[1])
                + Utils.decimalToHex(buffer[2]) + Utils.decimalToHex(buffer[3])
                + "-" + Utils.decimalToHex(buffer[4]) + Utils.decimalToHex(buffer[5])
                + "-" + Utils.decimalToHex(buffer[6]) + Utils.decimalToHex(buffer[7])
                + "-" + Utils.decimalToHex(buffer[8]) + Utils.decimalToHex(buffer[9])
                + "-" + Utils.decimalToHex(buffer[10]) + Utils.decimalToHex(buffer[11])
                + Utils.decimalToHex(buffer[12]) + Utils.decimalToHex(buffer[13])
                + Utils.decimalToHex(buffer[14]) + Utils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    //#endregion
    //#region Time
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    Utils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expiresIn) {
            expiresIn = "3599";
        }
        return parseInt(expiresIn, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    Utils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    //#endregion
    //#region String Ops
    /**
     * Check if a string is empty
     *
     * @param str
     */
    Utils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    //#endregion
    //#region Token Processing (Extract to TokenProcessing.ts)
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    Utils.decodeJwt = function (jwtToken) {
        if (this.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            //this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    Utils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = this.base64Decode(base64IdToken);
            if (!base64Decoded) {
                //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    //#endregion
    //#region Encode and Decode
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    Utils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    Utils.base64Decode = function (input) {
        return decodeURIComponent(atob(input).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    Utils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    //#endregion
    //#region Scopes (extract to Scopes.ts)
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    Utils.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    Utils.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    Utils.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    Utils.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    //#endregion
    //#region URL Processing (Extract to UrlProcessing.ts?)
    Utils.getDefaultRedirectUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    Utils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    Utils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    Utils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    Utils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !Utils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    Utils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    Utils.urlRemoveQueryStringParameter = function (url, name) {
        if (this.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    Utils.getHashFromUrl = function (urlStringOrFragment) {
        var index = urlStringOrFragment.indexOf("#");
        var indexWithSlash = urlStringOrFragment.indexOf("#/");
        if (indexWithSlash > -1) {
            return urlStringOrFragment.substring(indexWithSlash + 2);
        }
        if (index > -1) {
            return urlStringOrFragment.substring(index + 1);
        }
        return urlStringOrFragment;
    };
    //#endregion
    //#region ExtraQueryParameters Processing (Extract?)
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    //TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    Utils.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject.upn;
            }
            else {
                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                ssoData = null;
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
        }
        return serverReqParam;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    Utils.addSSOParameter = function (ssoType, ssoData, ssoParam) {
        if (!ssoParam) {
            ssoParam = {};
        }
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                var homeAccountId = ssoData.split(".");
                var uid = Utils.base64Decode(homeAccountId[0]);
                var utid = Utils.base64Decode(homeAccountId[1]);
                // TODO: domain_req and login_req are not needed according to eSTS team
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
                if (utid === Constants_1.Constants.consumersUtid) {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                }
                else {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                }
                break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    Utils.generateQueryParametersString = function (queryParameters) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                if (paramsString == null) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    Utils.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    //#endregion
    //#region Response Helpers
    Utils.setResponseIdToken = function (originalResponse, idTokenObj) {
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Configuration_1 = __webpack_require__(8);
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "errorDescription", {
        get: function () { return "error_description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "error", {
        get: function () { return "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scope", {
        get: function () { return "scope"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientInfo", {
        get: function () { return "client_info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idToken", {
        get: function () { return "id_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessToken", {
        get: function () { return "access_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expiresIn", {
        get: function () { return "expires_in"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sessionState", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalClientInfo", {
        get: function () { return "msal.client.info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalError", {
        get: function () { return "msal.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalErrorDescription", {
        get: function () { return "msal.error.description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalSessionState", {
        get: function () { return "msal.session.state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenKeys", {
        get: function () { return "msal.token.keys"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessTokenKey", {
        get: function () { return "msal.access.token.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expirationKey", {
        get: function () { return "msal.expiration.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateLogin", {
        get: function () { return "msal.state.login"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateAcquireToken", {
        get: function () { return "msal.state.acquireToken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateRenew", {
        get: function () { return "msal.state.renew"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "nonceIdToken", {
        get: function () { return "msal.nonce.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userName", {
        get: function () { return "msal.username"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idTokenKey", {
        get: function () { return "msal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginRequest", {
        get: function () { return "msal.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginError", {
        get: function () { return "msal.login.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewStatus", {
        get: function () { return "msal.token.renew.status"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "urlHash", {
        get: function () { return "msal.urlHash"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "angularLoginRequest", {
        get: function () { return "msal.angular.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msal", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
        get: function () { return "Canceled"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
        get: function () { return "Completed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
        get: function () { return "In Progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationLocal", {
        get: function () { return Configuration_1.CacheLocationChoices.LocalStorage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationSession", {
        get: function () { return Configuration_1.CacheLocationChoices.SessionStorage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * @hidden
 * CacheKeys for 'authority' and 'account'
 */
exports.CacheKeys = {
    AUTHORITY: "msal.authority",
    ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount"
};
exports.AADTrustedHostList = {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
exports.SSOTypes = {
    ACCOUNT: "account",
    SID: "sid",
    LOGIN_HINT: "login_hint",
    ID_TOKEN: "id_token",
    DOMAIN_HINT: "domain_hint",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers",
    ACCOUNT_ID: "accountIdentifier",
    HOMEACCOUNT_ID: "homeAccountIdentifier",
    LOGIN_REQ: "login_req",
    DOMAIN_REQ: "domain_req"
};
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    exports.SSOTypes.SID,
    exports.SSOTypes.LOGIN_HINT
];
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * @hidden
 */
exports.Library = {
    version: "1.0.2"
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(4);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    invalidCacheLocation: {
        code: "invalid_cache_location",
        desc: "The cache location provided is not valid."
    },
    noStorageSupported: {
        code: "browser_storage_not_supported",
        desc: "localStorage and sessionStorage are not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createInvalidCacheLocationConfigError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCacheLocation.code, exports.ClientConfigurationErrorMessage.invalidCacheLocation.desc + " Provided value: " + givenCacheLocation + ". Possible values are: " + Constants_1.Constants.cacheLocationLocal + ", " + Constants_1.Constants.cacheLocationSession + ".");
    };
    ClientConfigurationError.createNoStorageSupportedError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noStorageSupported.code, exports.ClientConfigurationErrorMessage.noStorageSupported.desc);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AuthError_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(0);
exports.ClientAuthErrorMessage = {
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
    },
    multipleCacheAuthorities: {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    //TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    //TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
* General error class thrown by the MSAL.js library.
*/
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientConfigurationError_1 = __webpack_require__(3);
var XHRClient_1 = __webpack_require__(14);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = Utils_1.Utils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = Utils_1.Utils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /*enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        var _this = this;
        var openIdConfigurationEndpoint = "";
        return this.GetOpenIdConfigurationEndpointAsync().then(function (openIdConfigurationEndpointResponse) {
            openIdConfigurationEndpoint = openIdConfigurationEndpointResponse;
            return _this.DiscoverEndpoints(openIdConfigurationEndpoint);
        }).then(function (tenantDiscoveryResponse) {
            _this.tenantDiscoveryResponse = tenantDiscoveryResponse;
            return _this;
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Logger_1 = __webpack_require__(9);
var Utils_1 = __webpack_require__(0);
/**
 * Cache location options supported by MSAL are:
 * - local storage: MSAL uses browsers local storage to store its cache
 * - session storage: MSAL uses the browsers session storage to store its cache
 */
var CacheLocationChoices;
(function (CacheLocationChoices) {
    CacheLocationChoices["LocalStorage"] = "localStorage";
    CacheLocationChoices["SessionStorage"] = "sessionStorage";
})(CacheLocationChoices = exports.CacheLocationChoices || (exports.CacheLocationChoices = {}));
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: CacheLocationChoices.SessionStorage,
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 *
 * @returns TConfiguration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
    var overlayedConfig = {
        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
        cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
        system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
        framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!Utils_1.Utils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AuthError_1 = __webpack_require__(5);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AccessTokenKey_1 = __webpack_require__(24);
var AccessTokenValue_1 = __webpack_require__(25);
var ServerRequestParameters_1 = __webpack_require__(26);
var ClientInfo_1 = __webpack_require__(27);
var Constants_1 = __webpack_require__(2);
var IdToken_1 = __webpack_require__(28);
var Storage_1 = __webpack_require__(29);
var Account_1 = __webpack_require__(12);
var Utils_1 = __webpack_require__(0);
var AuthorityFactory_1 = __webpack_require__(31);
var Configuration_1 = __webpack_require__(8);
var AuthenticationParameters_1 = __webpack_require__(16);
var ClientConfigurationError_1 = __webpack_require__(3);
var AuthError_1 = __webpack_require__(5);
var ClientAuthError_1 = __webpack_require__(4);
var ServerError_1 = __webpack_require__(10);
var InteractionRequiredAuthError_1 = __webpack_require__(17);
var AuthResponse_1 = __webpack_require__(18);
var TelemetryManager_1 = __webpack_require__(32);
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * @hidden
 * @ignore
 * A wrapper to handle the token response/error within the iFrame always
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
var resolveTokenOnlyIfOutOfIframe = function (target, propertyKey, descriptor) {
    var tokenAcquisitionMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.isInIframe()
            ? new Promise(function () {
                return;
            })
            : tokenAcquisitionMethod.apply(this, args);
    };
    return descriptor;
};
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
  
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // track login and acquireToken in progress
        this.loginInProgress = false;
        this.acquireTokenInProgress = false;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        try {
            this.cacheStorage = new Storage_1.Storage(this.config.cache.cacheLocation);
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCacheLocationConfigError(this.config.cache.cacheLocation);
        }
        // Initialize window handling code
        window.openedWindows = [];
        window.activeRenewals = {};
        window.renewStates = [];
        window.callbackMappedToRenewStates = {};
        window.promiseMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = this.urlContainsHash(urlHash);
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            if (urlContainsHash) {
                this.handleAuthenticationResponse(urlHash);
            }
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (cachedHash) {
                this.processCallBack(cachedHash, null);
            }
        }
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            resolve(response);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else {
                this.authResponseCallback(authErr, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            reject(authErr);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    //#endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        });
    };
    //#region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        // If already in progress, do not proceed
        if (this.loginInProgress || this.acquireTokenInProgress) {
            var thrownError = this.loginInProgress ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request && request.state));
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // if extraScopesToConsent is passed in loginCall, append them to the login request
        var scopes = isLoginCall ? this.appendScopes(request) : request.scopes;
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(scopes, !isLoginCall);
        // Get the account object if a session exists
        var account = (request && request.account && !isLoginCall) ? request.account : this.getAccount();
        // If no session exists, prompt the user to login.
        if (!account && !Utils_1.Utils.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.info("User login is required");
                throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
            }
        }
        // User session exists
        else {
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, scopes, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, scopes, resolve, reject) {
        var _this = this;
        // Track the acquireToken progress
        if (isLoginCall) {
            this.loginInProgress = true;
        }
        else {
            this.acquireTokenInProgress = true;
        }
        var scope = scopes ? scopes.join(" ").toLowerCase() : this.clientId.toLowerCase();
        var serverAuthenticationRequest;
        var acquireTokenAuthority = (!isLoginCall && request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        var popUpWindow;
        if (interactionType === Constants_1.Constants.interactionTypePopup) {
            // Generate a popup window
            popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
            if (!popUpWindow) {
                // We pass reject in openWindow, we reject there during an error
                return;
            }
        }
        acquireTokenAuthority.resolveEndpointsAsync().then(function () {
            // On Fulfillment
            var responseType = isLoginCall ? ResponseTypes.id_token : _this.getTokenType(account, scopes, false);
            var loginStartPage;
            if (isLoginCall) {
                // if the user sets the login start page - angular only??
                loginStartPage = _this.cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
                if (!loginStartPage || loginStartPage === "") {
                    loginStartPage = window.location.href;
                }
                else {
                    _this.cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
                }
            }
            serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, scopes, responseType, _this.getRedirectUri(), request && request.state);
            _this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            // Construct url to navigate to
            var urlNavigate = serverAuthenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            // set state in cache
            if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                if (!isLoginCall) {
                    _this.cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, serverAuthenticationRequest.state, _this.inCookie);
                }
            }
            else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                window.renewStates.push(serverAuthenticationRequest.state);
                window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                // Register callback to capture results from server
                _this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
            }
            else {
                throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
            }
            // prompt user for interaction
            _this.navigateWindow(urlNavigate, popUpWindow);
        }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
            if (popUpWindow) {
                popUpWindow.close();
            }
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account, give that account the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            //if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && Utils_1.Utils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (Utils_1.Utils.isSSOParam(request) || account) {
                serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            }
            //if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !Utils_1.Utils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = Utils_1.Utils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest = _this.populateQueryParams(account, null, serverAuthenticationRequest, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims && !request.forceRefresh) {
                try {
                    cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
                }
                catch (e) {
                    authErr = e;
                }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
                _this.logger.info("Token is already in cache for scope:" + scope);
                resolve(cacheResultResponse);
                return null;
            }
            else if (authErr) {
                _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                reject(authErr);
                return null;
            }
            // else proceed with login
            else {
                var logMessage = void 0;
                if (userContainedClaims) {
                    logMessage = "Skipped cache lookup since claims were given.";
                }
                else if (request.forceRefresh) {
                    logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                }
                else {
                    logMessage = "Token is not in cache for scope:" + scope;
                }
                _this.logger.verbose(logMessage);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    // refresh attempt with iframe
                    // Already renewing for this scope, callback when we get the token.
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            // App uses idToken to send to api endpoints
                            // Default scope is tracked as clientId to store this token
                            _this.logger.verbose("renewing idToken");
                            _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                        else {
                            // renew access token
                            _this.logger.verbose("renewing accesstoken");
                            _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                    }
                }).catch(function (err) {
                    _this.logger.warning("could not resolve endpoints");
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                    return null;
                });
            }
        });
    };
    //#endregion
    //#region Popup Window Creation
    /**
     * @hidden
     *
     * Used to send the user to the redirect_uri after authentication is complete. The user's bearer token is attached to the URI fragment as an id_token/access_token field.
     * This function also closes the popup window after redirection.
     *
     * @param urlNavigate
     * @param title
     * @param interval
     * @param instance
     * @param resolve
     * @param reject
     * @ignore
     */
    UserAgentApplication.prototype.openWindow = function (urlNavigate, title, interval, instance, resolve, reject) {
        var _this = this;
        // Generate a popup window
        var popupWindow;
        try {
            popupWindow = this.openPopup(urlNavigate, title, Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
        }
        catch (e) {
            instance.loginInProgress = false;
            instance.acquireTokenInProgress = false;
            this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            if (reject) {
                reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
            }
            return null;
        }
        // Push popup window handle onto stack for tracking
        window.openedWindows.push(popupWindow);
        var pollTimer = window.setInterval(function () {
            // If popup closed or login in progress, cancel login
            if (popupWindow && popupWindow.closed && (instance.loginInProgress || instance.acquireTokenInProgress)) {
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                }
                window.clearInterval(pollTimer);
                if (_this.config.framework.isAngular) {
                    _this.broadcast("msal:popUpClosed", ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.code + Constants_1.Constants.resourceDelimiter + ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.desc);
                    return;
                }
                instance.loginInProgress = false;
                instance.acquireTokenInProgress = false;
            }
            try {
                var popUpWindowLocation = popupWindow.location;
                // If the popup hash changes, close the popup window
                if (popUpWindowLocation.href.indexOf(_this.getRedirectUri()) !== -1) {
                    window.clearInterval(pollTimer);
                    instance.loginInProgress = false;
                    instance.acquireTokenInProgress = false;
                    _this.logger.info("Closing popup window");
                    // TODO: Check how this can be extracted for any framework specific code?
                    if (_this.config.framework.isAngular) {
                        _this.broadcast("msal:popUpHashChanged", popUpWindowLocation.hash);
                        for (var i = 0; i < window.openedWindows.length; i++) {
                            window.openedWindows[i].close();
                        }
                    }
                }
            }
            catch (e) {
                // Cross Domain url check error.
                // Will be thrown until AAD redirects the user back to the app"s root page with the token.
                // No need to log or throw this error as it will create unnecessary traffic.
            }
        }, interval);
        return popupWindow;
    };
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.loginInProgress = false;
            this.acquireTokenInProgress = false;
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
        }
    };
    //#endregion
    //#region Iframe Management
    /**
     * @hidden
     * Returns whether current window is in ifram for token renewal
     * @ignore
     */
    UserAgentApplication.prototype.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Returns whether parent window exists and has msal
     */
    UserAgentApplication.prototype.parentIsMsal = function () {
        return window.parent !== window && window.parent.msal;
    };
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        var _this = this;
        //set iframe session to pending
        var expectedState = window.activeRenewals[scope];
        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
        this.loadFrame(urlNavigate, frameName);
        setTimeout(function () {
            if (_this.cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                // fail the iframe session if it"s in pending state
                _this.logger.verbose("Loading frame has timed out after: " + (_this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                // Error after timeout
                if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                    window.callbackMappedToRenewStates[expectedState](null, ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                }
                _this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
            }
        }, this.config.system.loadFrameTimeout);
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    UserAgentApplication.prototype.loadFrame = function (urlNavigate, frameName) {
        var _this = this;
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        this.logger.info("LoadFrame: " + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = _this.addHiddenIFrame(frameCheck);
            if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                frameHandle.src = urlNavigate;
                _this.logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
            }
        }, this.config.system.navigateFrameWait);
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    UserAgentApplication.prototype.addHiddenIFrame = function (iframeId) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        this.logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    //#endregion
    //#region General Helpers
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    UserAgentApplication.prototype.addHintParameters = function (accountObj, qParams, serverReqParams) {
        var account = accountObj || this.getAccount();
        // This is a final check for all queryParams added so far; preference order: sid > login_hint
        // sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && serverReqParams.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !Utils_1.Utils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
                qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !Utils_1.Utils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            this.logger.infoPii(logMessage);
            navigateWindow.location.replace(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[scope] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server esponse in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] =
                function (response, error) {
                    // reset active renewals
                    window.activeRenewals[scope] = null;
                    // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                    for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (error) {
                                window.promiseMappedToRenewStates[expectedState][i].reject(error);
                            }
                            else if (response) {
                                window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                            }
                            else {
                                throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                            }
                        }
                        catch (e) {
                            _this.logger.warning(e);
                        }
                    }
                    // reset
                    window.promiseMappedToRenewStates[expectedState] = null;
                    window.callbackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    //#endregion
    //#region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        var _this = this;
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
                ? authority.EndSessionEndpoint + "?" + logout
                : _this.authority + "oauth2/v2.0/logout?" + logout;
            _this.navigateWindow(urlNavigate);
        });
    };
    /**
     * @hidden
     * Clear all access tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        this.cacheStorage.clearCookie();
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    //#endregion
    //#region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        return this.urlContainsHash(hash);
    };
    UserAgentApplication.prototype.urlContainsHash = function (urlString) {
        var parameters = this.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
        this.logger.info("Processing the callback from redirect response");
        // get the state info from the hash
        if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        // remove hash from the cache
        this.cacheStorage.removeItem(Constants_1.Constants.urlHash);
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearCookie();
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("acquiring token interactive in progress");
                    }
                    response.tokenType = Constants_1.Constants.accessToken;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    response.tokenType = Constants_1.Constants.idToken;
                }
                if (!parentCallback) {
                    this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, authErr, AuthResponse_1.buildResponseStateOnly(accountState));
                return;
            }
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        // retrieve the hash
        if (hash == null) {
            hash = window.location.hash;
        }
        var self = null;
        var isPopup = false;
        var isWindowOpenerMsal = false;
        // Check if the current window opened the iFrame/popup
        try {
            isWindowOpenerMsal = window.opener && window.opener.msal && window.opener.msal !== window.msal;
        }
        catch (err) {
            // err = SecurityError: Blocked a frame with origin "[url]" from accessing a cross-origin frame.
            isWindowOpenerMsal = false;
        }
        // Set the self to the window that created the popup/iframe
        if (isWindowOpenerMsal) {
            self = window.opener.msal;
            isPopup = true;
        }
        else if (window.parent && window.parent.msal) {
            self = window.parent.msal;
        }
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = self.getResponseState(hash);
        var tokenResponseCallback = null;
        self.logger.info("Returned from redirect url");
        // If parent window is the msal instance which opened the current window (iframe)
        if (this.parentIsMsal()) {
            tokenResponseCallback = window.parent.callbackMappedToRenewStates[stateInfo.state];
        }
        // Current window is window opener (popup)
        else if (isWindowOpenerMsal) {
            tokenResponseCallback = window.opener.callbackMappedToRenewStates[stateInfo.state];
        }
        // Redirect cases
        else {
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (self.config.auth.navigateToLoginRequestUrl) {
                self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                if (window.parent === window && !isPopup) {
                    window.location.href = self.cacheStorage.getItem(Constants_1.Constants.loginRequest, self.inCookie);
                }
                return;
            }
            else {
                window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
                // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
                self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                return;
            }
        }
        self.processCallBack(hash, stateInfo, tokenResponseCallback);
        // If current window is opener, close all windows
        if (isWindowOpenerMsal) {
            for (var i = 0; i < window.opener.openedWindows.length; i++) {
                window.opener.openedWindows[i].close();
            }
        }
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @param hash
     */
    UserAgentApplication.prototype.deserializeHash = function (urlFragment) {
        var hash = Utils_1.Utils.getHashFromUrl(urlFragment);
        return Utils_1.Utils.deserialize(hash);
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        var parameters = this.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
        }
        if (parameters.hasOwnProperty("state")) {
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters.state,
                stateMatch: false
            };
        }
        else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
        }
        // async calls can fire iframe and login request at the same time if developer does not use the API as expected
        // incoming callback needs to be looked up to find the request type
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.inCookie)) { //acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    stateResponse.stateMatch = true;
                    break;
                }
            }
        }
        return stateResponse;
    };
    //#endregion
    //#region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        var accessTokenCacheItem = null;
        var scopes = serverAuthenticationRequest.scopes;
        // filter by clientId and account
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        // No match found after initial filtering
        if (tokenCacheItems.length === 0) {
            return null;
        }
        var filteredItems = [];
        // if no authority passed
        if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (Utils_1.Utils.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
            // if no match found, check if there was a single authority used
            else {
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
                }
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
        }
        // if an authority is passed in the API
        else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (Utils_1.Utils.containsScope(cachedScopes, scopes) && Utils_1.Utils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            // no match
            if (filteredItems.length === 0) {
                return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                // if more than cached token is found
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > Utils_1.Utils.now() + offset)) {
                var idTokenObj = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                    }
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.Constants.idToken : Constants_1.Constants.accessToken,
                    idToken: idTokenObj,
                    idTokenClaims: idTokenObj.claims,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState,
                };
                Utils_1.Utils.setResponseIdToken(response, idTokenObj);
                return response;
            }
            else {
                this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @hidden
     * Used to get a unique list of authoritues from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!Utils_1.Utils.isEmpty(adalIdToken)) {
            return Utils_1.Utils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameHandle = this.addHiddenIFrame("msalRenewFrame" + scope);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(serverAuthenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalRenewFrame" + scope, scope);
    };
    /**
     * @hidden
     * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameHandle = this.addHiddenIFrame("msalIdTokenFrame");
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(serverAuthenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalIdTokenFrame", this.clientId);
    };
    /**
     * @hidden
     *
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        var expiration;
        // if the response contains "scope"
        if (parameters.hasOwnProperty("scope")) {
            // read the scopes
            scope = parameters["scope"];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (Utils_1.Utils.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = Utils_1.Utils.parseExpiresIn(parameters[Constants_1.Constants.expiresIn]);
            expiration = Utils_1.Utils.now() + expiresIn;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.accessToken], idTokenObj.rawIdToken, expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.accessToken];
            accessTokenResponse.scopes = consentedScopes;
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            expiration = Number(idTokenObj.expiration);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.idToken], parameters[Constants_1.Constants.idToken], expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.idToken];
        }
        if (expiration) {
            accessTokenResponse.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter");
        }
        return accessTokenResponse;
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
        this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
        };
        var error;
        var hashParams = this.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.Constants.errorDescription) || hashParams.hasOwnProperty(Constants_1.Constants.error)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.Constants.error] + "; Error description:" + hashParams[Constants_1.Constants.errorDescription]);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, hashParams[Constants_1.Constants.error]);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, hashParams[Constants_1.Constants.errorDescription]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.loginInProgress = false;
                this.cacheStorage.setItem(Constants_1.Constants.loginError, hashParams[Constants_1.Constants.errorDescription] + ":" + hashParams[Constants_1.Constants.error]);
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                this.acquireTokenInProgress = false;
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !Utils_1.Utils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var _a = Constants_1.Constants.error, hashErr = hashParams[_a], _b = Constants_1.Constants.errorDescription, hashErrDesc = hashParams[_b];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
        }
        // If the server returns "Success"
        else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.Constants.sessionState)) {
                    this.cacheStorage.setItem(Constants_1.Constants.msalSessionState, hashParams[Constants_1.Constants.sessionState]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this.logger.info("Fragment has access token");
                    this.acquireTokenInProgress = false;
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                        response.idToken = idTokenObj;
                        response.idTokenClaims = idTokenObj.claims;
                    }
                    else {
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.Constants.idTokenKey));
                        response = Utils_1.Utils.setResponseIdToken(response, idTokenObj);
                    }
                    // retrieve the authority from cache and replace with tenantID
                    var authorityKey_1 = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                    var authority = this.cacheStorage.getItem(authorityKey_1, this.inCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceTenantPath(authority, response.tenantId);
                    }
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                        throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !Utils_1.Utils.isEmpty(response.account.homeAccountIdentifier)) {
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = Storage_1.Storage.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!Utils_1.Utils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Utils_1.Utils.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!Utils_1.Utils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this.logger.info("Fragment has id token");
                    // login no longer in progress
                    this.loginInProgress = false;
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                    response = Utils_1.Utils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                    var authority = this.cacheStorage.getItem(authorityKey, this.inCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceTenantPath(authority, idTokenObj.tenantId);
                    }
                    this.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (idTokenObj && idTokenObj.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (idTokenObj.nonce !== this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie), idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.Constants.idTokenKey, hashParams[Constants_1.Constants.idToken]);
                            this.cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
            }
        }
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + stateInfo.state, Constants_1.Constants.tokenRenewStatusCompleted);
        this.cacheStorage.removeAcquireTokenEntries(stateInfo.state);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearCookie();
        }
        if (error) {
            throw error;
        }
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /* tslint:enable:no-string-literal */
    //#endregion
    //#region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!Utils_1.Utils.isEmpty(rawIdToken) && !Utils_1.Utils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    //#endregion
    //#region Scopes (Extract to Scopes.ts)
    // Note: "this" dependency in this section is minimal.
    // If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes, scopesRequired) {
        if (!scopes) {
            if (scopesRequired) {
                throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
        }
        // Check that clientId is passed as single scope
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString());
            }
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    UserAgentApplication.prototype.appendScopes = function (request) {
        var scopes;
        if (request && request.scopes) {
            if (request.extraScopesToConsent) {
                scopes = request.scopes.concat(request.extraScopesToConsent);
            }
            else {
                scopes = request.scopes;
            }
        }
        return scopes;
    };
    //#endregion
    //#region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), state);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        // default resource will be clientid if nothing specified
        // App will use idtoken for calls to itself
        // check if it's staring from http or https, needs to match with app host
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            // in angular level, the url for $http interceptor call could be relative url,
            // if it's relative call, we'll treat it as app backend call.
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this.loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.loginInProgress = loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.acquireTokenInProgress = acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.config.system.logger;
    };
    //#endregion
    //#region Getters and Setters
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @returns {string} redirect URL
     *
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    //#endregion
    //#region String Util (Should be extracted to Utils.ts)
    /**
     * @hidden
     * @ignore
     *
     * extract URI from the host
     *
     * @param {string} URI
     * @returns {string} host from the URI
     */
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     * @param silentCall
     *
     * @returns {string} token type: id_token or access_token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        // if account is passed and matches the account object/or set to getAccount() from cache
        // if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Utils_1.Utils.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Utils_1.Utils.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, Utils_1.Utils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
        // Cache account and authority
        if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            this.cacheStorage.setItem(Constants_1.Constants.stateLogin, serverAuthenticationRequest.state, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        //return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!Utils_1.Utils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @hidden
     * @ignore
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     * @param extraQueryParameters
     * @hidden
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
        };
        return tokenRequest;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    UserAgentApplication.prototype.populateQueryParams = function (account, request, serverAuthenticationRequest, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.validatePromptParameter(request.prompt);
                serverAuthenticationRequest.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                AuthenticationParameters_1.validateClaimsRequest(request);
                serverAuthenticationRequest.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (Utils_1.Utils.isSSOParam(request)) {
                queryParameters = Utils_1.Utils.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = Utils_1.Utils.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        // adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
        this.logger.verbose("Calling addHint parameters");
        queryParameters = this.addHintParameters(account, queryParameters, serverAuthenticationRequest);
        // sanity check for developer passed extraQueryParameters
        var eQParams;
        if (request) {
            eQParams = this.sanitizeEQParams(request);
        }
        // Populate the extraQueryParameters to be sent to the server
        serverAuthenticationRequest.queryParameters = Utils_1.Utils.generateQueryParametersString(queryParameters);
        serverAuthenticationRequest.extraQueryParameters = Utils_1.Utils.generateQueryParametersString(eQParams);
        return serverAuthenticationRequest;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    UserAgentApplication.prototype.validatePromptParameter = function (prompt) {
        if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * @hidden
     * @ignore
  
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    UserAgentApplication.prototype.sanitizeEQParams = function (request) {
        var _this = this;
        var eQParams = request.extraQueryParameters;
        if (!eQParams) {
            return null;
        }
        if (request.claimsRequest) {
            this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                _this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    //#endregion
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return null;
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
        }
        // if valid then construct
        var telemetryPlatform = {
            sdk: "msal.js",
            sdkVersion: Utils_1.Utils.getLibraryVersion(),
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter);
    };
    tslib_1.__decorate([
        resolveTokenOnlyIfOutOfIframe
    ], UserAgentApplication.prototype, "acquireTokenSilent", null);
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!Utils_1.Utils.isEmpty(uid) && !Utils_1.Utils.isEmpty(utid)) {
            homeAccountIdentifier = Utils_1.Utils.base64Encode(uid) + "." + Utils_1.Utils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Authority_1 = __webpack_require__(6);
var XHRClient_1 = __webpack_require__(14);
var Constants_1 = __webpack_require__(2);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        var host = this.CanonicalAuthorityUrlComponents.HostNameAndPort;
        if (this.IsInTrustedHostList(host)) {
            return resultPromise;
        }
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
            .then(function (response) {
            return response.tenant_discovery_endpoint;
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return Constants_1.AADTrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /*async: */ true);
            if (enableCaching) {
                // TODO: (shivb) ensure that this can be cached
                // xhr.setRequestHeader("Cache-Control", "Public");
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AadAuthority_1 = __webpack_require__(13);
var Authority_1 = __webpack_require__(6);
var ClientConfigurationError_1 = __webpack_require__(3);
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = Utils_1.Utils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        if (this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
            return resultPromise;
        }
        return new Promise(function (resolve, reject) {
            return reject(ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation);
        });
    };
    B2cAuthority.B2C_PREFIX = "tfp";
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(3);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    var claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var ServerError_1 = __webpack_require__(10);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof (crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
    (typeof (msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
    module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
    };
}
else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    module.exports = function mathRNG() {
        for (var i = 0, r; i < 16; i++) {
            if ((i & 0x03) === 0)
                r = Math.random() * 0x100000000;
            rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
        return rnds;
    };
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
}
function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex;
    // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    return ([bth[buf[i++]], bth[buf[i++]],
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]], '-',
        bth[buf[i++]], bth[buf[i++]],
        bth[buf[i++]], bth[buf[i++]],
        bth[buf[i++]], bth[buf[i++]]]).join('');
}
module.exports = bytesToUuid;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var B2cAuthority_1 = __webpack_require__(15);
var Constants_1 = __webpack_require__(2);
var TelemetryConstants_1 = __webpack_require__(7);
var Utils_1 = __webpack_require__(0);
exports.scrubTenantFromUri = function (uri) {
    var url = Utils_1.Utils.GetUrlComponents(uri);
    // validate trusted host
    if (!Constants_1.AADTrustedHostList[url.HostNameAndPort.toLocaleLowerCase()]) {
        // Should this return null or what was passed?
        return null;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === B2cAuthority_1.B2cAuthority.B2C_PREFIX ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    // TODO sha256 this
    // Current test runner is being funny with node libs that are webpacked anyway
    // need a different solution
    return Utils_1.Utils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(11);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(9);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(9);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(12);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(2);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(6);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(11);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(8);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(16);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(18);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(5);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(4);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(10);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(3);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(17);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = Utils_1.Utils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = Utils_1.Utils.base64Encode(uid) + "." + Utils_1.Utils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        this.scopes = scope;
        this.nonce = Utils_1.Utils.createNewGuid();
        this.state = state && !Utils_1.Utils.isEmpty(state) ? Utils_1.Utils.createNewGuid() + "|" + state : Utils_1.Utils.createNewGuid();
        // TODO: Change this to user passed vs generated with the new PR
        this.correlationId = Utils_1.Utils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Utils_1.Utils.getLibraryVersion();
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    ServerRequestParameters.prototype.createNavigateUrl = function (scopes) {
        var str = this.createNavigationUrlString(scopes);
        var authEndpoint = this.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    ServerRequestParameters.prototype.createNavigationUrlString = function (scopes) {
        if (!scopes) {
            scopes = [this.clientId];
        }
        if (scopes.indexOf(this.clientId) === -1) {
            scopes.push(this.clientId);
        }
        var str = [];
        str.push("response_type=" + this.responseType);
        this.translateclientIdUsedInScope(scopes);
        str.push("scope=" + encodeURIComponent(this.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(this.clientId));
        str.push("redirect_uri=" + encodeURIComponent(this.redirectUri));
        str.push("state=" + encodeURIComponent(this.state));
        str.push("nonce=" + encodeURIComponent(this.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + this.xClientSku);
        str.push("x-client-Ver=" + this.xClientVer);
        if (this.promptValue) {
            str.push("prompt=" + encodeURIComponent(this.promptValue));
        }
        if (this.claimsValue) {
            str.push("claims=" + encodeURIComponent(this.claimsValue));
        }
        if (this.queryParameters) {
            str.push(this.queryParameters);
        }
        if (this.extraQueryParameters) {
            str.push(this.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(this.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    ServerRequestParameters.prototype.translateclientIdUsedInScope = function (scopes) {
        var clientIdIndex = scopes.indexOf(this.clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ServerRequestParameters.prototype.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(4);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || Utils_1.Utils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = Utils_1.Utils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(4);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (Utils_1.Utils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = Utils_1.Utils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            // TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
            // Need to add better error handling here to account for being unable to decode jwts.
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(30);
var Constants_2 = __webpack_require__(2);
var ClientConfigurationError_1 = __webpack_require__(3);
/**
 * @hidden
 */
var Storage = /** @class */ (function () {
    function Storage(cacheLocation) {
        if (Storage.instance) {
            return Storage.instance;
        }
        this.cacheLocation = cacheLocation;
        this.localStorageSupported = typeof window[this.cacheLocation] !== "undefined" && window[this.cacheLocation] != null;
        this.sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        Storage.instance = this;
        if (!this.localStorageSupported && !this.sessionStorageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoStorageSupportedError();
        }
        return Storage.instance;
    }
    // add value to storage
    Storage.prototype.setItem = function (key, value, enableCookieStorage) {
        if (window[this.cacheLocation]) {
            window[this.cacheLocation].setItem(key, value);
        }
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    // get one item by key from storage
    Storage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].getItem(key);
        }
        return null;
    };
    // remove value from storage
    Storage.prototype.removeItem = function (key) {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    Storage.prototype.clear = function () {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].clear();
        }
    };
    Storage.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        var results = [];
        var accessTokenCacheItem;
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.match(clientId) && key.match(homeAccountIdentifier)) {
                        var value = this.getItem(key);
                        if (value) {
                            accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                            results.push(accessTokenCacheItem);
                        }
                    }
                }
            }
        }
        return results;
    };
    Storage.prototype.removeAcquireTokenEntries = function (state) {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if ((key.indexOf(Constants_2.CacheKeys.AUTHORITY) !== -1 || key.indexOf(Constants_2.CacheKeys.ACQUIRE_TOKEN_ACCOUNT) !== 1) && (!state || key.indexOf(state) !== -1)) {
                        var splitKey = key.split(Constants_1.Constants.resourceDelimiter);
                        var state_1 = void 0;
                        if (splitKey.length > 1) {
                            state_1 = splitKey[1];
                        }
                        if (state_1 && !this.tokenRenewalInProgress(state_1)) {
                            this.removeItem(key);
                            this.removeItem(Constants_1.Constants.renewStatus + state_1);
                            this.removeItem(Constants_1.Constants.stateLogin);
                            this.removeItem(Constants_1.Constants.stateAcquireToken);
                            this.setItemCookie(key, "", -1);
                        }
                    }
                }
            }
        }
        this.clearCookie();
    };
    Storage.prototype.tokenRenewalInProgress = function (stateValue) {
        var storage = window[this.cacheLocation];
        var renewStatus = storage[Constants_1.Constants.renewStatus + stateValue];
        return !(!renewStatus || renewStatus !== Constants_1.Constants.tokenRenewStatusInProgress);
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
            this.removeAcquireTokenEntries();
        }
    };
    Storage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    Storage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    Storage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    Storage.prototype.clearCookie = function () {
        this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
        this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
        this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
        this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    Storage.generateAcquireTokenAccountKey = function (accountId, state) {
        return Constants_2.CacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter +
            ("" + accountId) + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    Storage.generateAuthorityKey = function (state) {
        return Constants_2.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var Utils_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(13);
var B2cAuthority_1 = __webpack_require__(15);
var Authority_1 = __webpack_require__(6);
var ClientConfigurationError_1 = __webpack_require__(3);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
    * Parse the url and determine the type of authority
    */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = Utils_1.Utils.CanonicalizeUri(authorityUrl);
        var components = Utils_1.Utils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            case "adfs":
                return Authority_1.AuthorityType.Adfs;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
    * Create an authority object of the correct type based on the url
    * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
    */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (Utils_1.Utils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DefaultEvent_1 = __webpack_require__(33);
// for use in cache events
var MSAL_CACHE_EVENT_VALUE_PREFIX = "msal.token";
var MSAL_CACHE_EVENT_NAME = "msal.cache_event";
var createEventKey = function (event) { return (event.telemetryCorrelationId + "-" + event.eventId + "-" + event.eventName); };
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        //Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = config.platform;
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        // TODO, when i get to wiring this through, think about what it means if
        // a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
        // optional?
        this.telemetryEmitter = telemetryEmitter;
    }
    TelemetryManager.prototype.startEvent = function (event) {
        if (!this.telemetryEmitter) {
            return;
        }
        var eventKey = createEventKey(event);
        this.inProgressEvents[eventKey] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        var eventKey = createEventKey(event);
        if (!this.telemetryEmitter || !this.inProgressEvents[eventKey]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
        delete this.inProgressEvents[eventKey];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        // TODO, name cache event different?
        // if type is cache event, change name
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return memo.concat([event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports.default = TelemetryManager;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var TelemetryConstants_1 = __webpack_require__(7);
var TelemetryEvent_1 = __webpack_require__(34);
var TelemetryUtils_1 = __webpack_require__(21);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        /// Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports.default = DefaultEvent;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var uuid_1 = __webpack_require__(35);
var TelemetryConstants_1 = __webpack_require__(7);
var TelemetryConstants_2 = __webpack_require__(7);
var TelemetryUtils_1 = __webpack_require__(21);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId) {
        var _a;
        this.startTimestamp = Date.now();
        this.eventId = uuid_1.v4();
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.START_TIME_KEY)] = this.startTimestamp,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)];
        },
        enumerable: true,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign({}, this.event, { eventId: this.eventId });
    };
    return TelemetryEvent;
}());
exports.default = TelemetryEvent;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(36);
var v4 = __webpack_require__(37);
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(19);
var bytesToUuid = __webpack_require__(20);
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq;
// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;
// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = rng();
        if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
            ];
        }
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
    }
    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    }
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    }
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;
    // `clock_seq_low`
    b[i++] = clockseq & 0xff;
    // `node`
    for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
    }
    return buf ? buf : bytesToUuid(b);
}
module.exports = v1;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(19);
var bytesToUuid = __webpack_require__(20);
function v4(options, buf, offset) {
    var i = buf && offset || 0;
    if (typeof (options) == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
    }
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
            buf[i + ii] = rnds[ii];
        }
    }
    return buf || bytesToUuid(rnds);
}
module.exports = v4;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9zcmMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9BdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5Q29uc3RhbnRzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL1NlcnZlckVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvVXNlckFnZW50QXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2NvdW50LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWFkQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvWEhSQ2xpZW50LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQjJjQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0F1dGhSZXNwb25zZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuS2V5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5WYWx1ZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ2xpZW50SW5mby50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0lkVG9rZW4udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TdG9yYWdlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5DYWNoZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRob3JpdHlGYWN0b3J5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvRGVmYXVsdEV2ZW50LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeUV2ZW50LnRzIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdXVpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9Nc2FsLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3lCQUFFO3dCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFD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RyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztJQUNsRixTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4SCxTQUFTLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQVZELDRDQVVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1SSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkosQ0FBQztBQUpELDRDQUlDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhO1FBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pOLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEssU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxD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QUFNO0lBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO0lBRTNCLElBQUksT0FBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUMvQixHQUFHLEdBQUcsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsRCxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFFeEIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUVwRCxnRUFBZ0U7SUFDaEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRWxDLG9DQUFvQztJQUNwQyxJQUFJLEdBQUcsRUFBRTtRQUNQLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDOUIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7S0FDRjtJQUVELE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoibXNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTXNhbFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNc2FsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuL0lVcmlcIjtcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcclxuaW1wb3J0IHtDb25zdGFudHMsIFNTT1R5cGVzLCBQcm9tcHRTdGF0ZX0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi9BdXRoUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgTGlicmFyeSB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgLy8jcmVnaW9uIEdlbmVyYWwgVXRpbFxyXG5cclxuICAvKipcclxuICAgKiBVdGlscyBmdW5jdGlvbiB0byBjb21wYXJlIHR3byBBY2NvdW50IG9iamVjdHMgLSB1c2VkIHRvIGNoZWNrIGlmIHRoZSBzYW1lIHVzZXIgYWNjb3VudCBpcyBsb2dnZWQgaW5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhMTogQWNjb3VudCBvYmplY3RcclxuICAgKiBAcGFyYW0gYTI6IEFjY291bnQgb2JqZWN0XHJcbiAgICovXHJcbiAgc3RhdGljIGNvbXBhcmVBY2NvdW50cyhhMTogQWNjb3VudCwgYTI6IEFjY291bnQpOiBib29sZWFuIHtcclxuICAgaWYgKCFhMSB8fCAhYTIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBhMi5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcclxuICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gYTIuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlY2ltYWwgdG8gSGV4XHJcbiAgICpcclxuICAgKiBAcGFyYW0gbnVtXHJcbiAgICovXHJcbiAgc3RhdGljIGRlY2ltYWxUb0hleChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICB2YXIgaGV4OiBzdHJpbmcgPSBudW0udG9TdHJpbmcoMTYpO1xyXG4gICAgd2hpbGUgKGhleC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIGhleCA9IFwiMFwiICsgaGV4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1TQUwgSlMgTGlicmFyeSBWZXJzaW9uXHJcbiAgICovXHJcbiAgc3RhdGljIGdldExpYnJhcnlWZXJzaW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gTGlicmFyeS52ZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyByYW5kb20gR1VJRCAtIHVzZWQgdG8gcG9wdWxhdGUgc3RhdGU/XHJcbiAgICogQHJldHVybnMgc3RyaW5nIChHVUlEKVxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVOZXdHdWlkKCk6IHN0cmluZyB7XHJcbiAgICAvLyBSRkM0MTIyOiBUaGUgdmVyc2lvbiA0IFVVSUQgaXMgbWVhbnQgZm9yIGdlbmVyYXRpbmcgVVVJRHMgZnJvbSB0cnVseS1yYW5kb20gb3JcclxuICAgIC8vIHBzZXVkby1yYW5kb20gbnVtYmVycy5cclxuICAgIC8vIFRoZSBhbGdvcml0aG0gaXMgYXMgZm9sbG93czpcclxuICAgIC8vICAgICBTZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKGJpdHMgNiBhbmQgNykgb2YgdGhlXHJcbiAgICAvLyAgICAgICAgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCB0byB6ZXJvIGFuZCBvbmUsIHJlc3BlY3RpdmVseS5cclxuICAgIC8vICAgICBTZXQgdGhlIGZvdXIgbW9zdCBzaWduaWZpY2FudCBiaXRzIChiaXRzIDEyIHRocm91Z2ggMTUpIG9mIHRoZVxyXG4gICAgLy8gICAgICAgIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQgdG8gdGhlIDQtYml0IHZlcnNpb24gbnVtYmVyIGZyb21cclxuICAgIC8vICAgICAgICBTZWN0aW9uIDQuMS4zLiBWZXJzaW9uNFxyXG4gICAgLy8gICAgIFNldCBhbGwgdGhlIG90aGVyIGJpdHMgdG8gcmFuZG9tbHkgKG9yIHBzZXVkby1yYW5kb21seSkgY2hvc2VuXHJcbiAgICAvLyAgICAgdmFsdWVzLlxyXG4gICAgLy8gVVVJRCAgICAgICAgICAgICAgICAgICA9IHRpbWUtbG93IFwiLVwiIHRpbWUtbWlkIFwiLVwidGltZS1oaWdoLWFuZC12ZXJzaW9uIFwiLVwiY2xvY2stc2VxLXJlc2VydmVkIGFuZCBsb3coMmhleE9jdGV0KVwiLVwiIG5vZGVcclxuICAgIC8vIHRpbWUtbG93ICAgICAgICAgICAgICAgPSA0aGV4T2N0ZXRcclxuICAgIC8vIHRpbWUtbWlkICAgICAgICAgICAgICAgPSAyaGV4T2N0ZXRcclxuICAgIC8vIHRpbWUtaGlnaC1hbmQtdmVyc2lvbiAgPSAyaGV4T2N0ZXRcclxuICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgPSBoZXhPY3RldDpcclxuICAgIC8vIGNsb2NrLXNlcS1sb3cgICAgICAgICAgPSBoZXhPY3RldFxyXG4gICAgLy8gbm9kZSAgICAgICAgICAgICAgICAgICA9IDZoZXhPY3RldFxyXG4gICAgLy8gRm9ybWF0OiB4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcclxuICAgIC8vIHkgY291bGQgYmUgMTAwMCwgMTAwMSwgMTAxMCwgMTAxMSBzaW5jZSBtb3N0IHNpZ25pZmljYW50IHR3byBiaXRzIG5lZWRzIHRvIGJlIDEwXHJcbiAgICAvLyB5IHZhbHVlcyBhcmUgOCwgOSwgQSwgQlxyXG5cclxuICAgIGNvbnN0IGNyeXB0b09iajogQ3J5cHRvID0gd2luZG93LmNyeXB0bzsgLy8gZm9yIElFIDExXHJcbiAgICBpZiAoY3J5cHRvT2JqICYmIGNyeXB0b09iai5nZXRSYW5kb21WYWx1ZXMpIHtcclxuICAgICAgY29uc3QgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xyXG4gICAgICBjcnlwdG9PYmouZ2V0UmFuZG9tVmFsdWVzKGJ1ZmZlcik7XHJcblxyXG4gICAgICAvL2J1ZmZlcls2XSBhbmQgYnVmZmVyWzddIHJlcHJlc2VudHMgdGhlIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQuIFdlIHdpbGwgc2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoNCB0aHJvdWdoIDcpIG9mIGJ1ZmZlcls2XSB0byByZXByZXNlbnQgZGVjaW1hbCBudW1iZXIgNCAoVVVJRCB2ZXJzaW9uIG51bWJlcikuXHJcbiAgICAgIGJ1ZmZlcls2XSB8PSAweDQwOyAvL2J1ZmZlcls2XSB8IDAxMDAwMDAwIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAxLlxyXG4gICAgICBidWZmZXJbNl0gJj0gMHg0ZjsgLy9idWZmZXJbNl0gJiAwMTAwMTExMSB3aWxsIHNldCB0aGUgNCwgNSwgYW5kIDcgYml0IHRvIDAgc3VjaCB0aGF0IGJpdHMgNC03ID09IDAxMDAgPSBcIjRcIi5cclxuXHJcbiAgICAgIC8vYnVmZmVyWzhdIHJlcHJlc2VudHMgdGhlIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgZmllbGQuIFdlIHdpbGwgc2V0IHRoZSB0d28gbW9zdCBzaWduaWZpY2FudCBiaXRzICg2IGFuZCA3KSBvZiB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCB0byB6ZXJvIGFuZCBvbmUsIHJlc3BlY3RpdmVseS5cclxuICAgICAgYnVmZmVyWzhdIHw9IDB4ODA7IC8vYnVmZmVyWzhdIHwgMTAwMDAwMDAgd2lsbCBzZXQgdGhlIDcgYml0IHRvIDEuXHJcbiAgICAgIGJ1ZmZlcls4XSAmPSAweGJmOyAvL2J1ZmZlcls4XSAmIDEwMTExMTExIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAwLlxyXG5cclxuICAgICAgcmV0dXJuIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxXSlcclxuICAgICAgICArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMl0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclszXSlcclxuICAgICAgICArIFwiLVwiICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls0XSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzVdKVxyXG4gICAgICAgICsgXCItXCIgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzZdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbN10pXHJcbiAgICAgICAgKyBcIi1cIiArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbOF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls5XSlcclxuICAgICAgICArIFwiLVwiICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMV0pXHJcbiAgICAgICAgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEyXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEzXSlcclxuICAgICAgICArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTRdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTVdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBndWlkSG9sZGVyOiBzdHJpbmcgPSBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiO1xyXG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xyXG4gICAgICBsZXQgcjogbnVtYmVyID0gMDtcclxuICAgICAgbGV0IGd1aWRSZXNwb25zZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDM2OyBpKyspIHtcclxuICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSAhPT0gXCItXCIgJiYgZ3VpZEhvbGRlcltpXSAhPT0gXCI0XCIpIHtcclxuICAgICAgICAgIC8vIGVhY2ggeCBhbmQgeSBuZWVkcyB0byBiZSByYW5kb21cclxuICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpICAqIDE2IHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieFwiKSB7XHJcbiAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gaGV4W3JdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ5XCIpIHtcclxuICAgICAgICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgZmlyc3QgaGV4IGlzIGZpbHRlcmVkIGFuZCByZW1haW5pbmcgaGV4IHZhbHVlcyBhcmUgcmFuZG9tXHJcbiAgICAgICAgICByICY9IDB4MzsgLy8gYml0IGFuZCB3aXRoIDAwMTEgdG8gc2V0IHBvcyAyIHRvIHplcm8gPzA/P1xyXG4gICAgICAgICAgciB8PSAweDg7IC8vIHNldCBwb3MgMyB0byAxIGFzIDE/Pz9cclxuICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBndWlkSG9sZGVyW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZ3VpZFJlc3BvbnNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBUaW1lXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGltZSBpbiBzZWNvbmRzIGZvciBleHBpcmF0aW9uIGJhc2VkIG9uIHN0cmluZyB2YWx1ZSBwYXNzZWQgaW4uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXhwaXJlc0luXHJcbiAgICovXHJcbiAgc3RhdGljIHBhcnNlRXhwaXJlc0luKGV4cGlyZXNJbjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIC8vIGlmIEFBRCBkaWQgbm90IHNlbmQgXCJleHBpcmVzX2luXCIgcHJvcGVydHksIHVzZSBkZWZhdWx0IGV4cGlyYXRpb24gb2YgMzU5OSBzZWNvbmRzLCBmb3Igc29tZSByZWFzb24gQUFEIHNlbmRzIDM1OTkgYXMgXCJleHBpcmVzX2luXCIgdmFsdWUgaW5zdGVhZCBvZiAzNjAwXHJcbiAgICBpZiAoIWV4cGlyZXNJbikge1xyXG4gICAgICBleHBpcmVzSW4gPSBcIjM1OTlcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUludChleHBpcmVzSW4sIDEwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybiB0aGUgY3VycmVudCB0aW1lIGluIFVuaXggdGltZS4gRGF0ZS5nZXRUaW1lKCkgcmV0dXJucyBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICovXHJcbiAgc3RhdGljIG5vdygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjApO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTdHJpbmcgT3BzXHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgc3RyaW5nIGlzIGVtcHR5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RyXHJcbiAgICovXHJcbiAgc3RhdGljIGlzRW1wdHkoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhc3RyIHx8IDAgPT09IHN0ci5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBUb2tlbiBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFRva2VuUHJvY2Vzc2luZy50cylcclxuXHJcbiAgLyoqXHJcbiAgICogZGVjb2RlIGEgSldUXHJcbiAgICpcclxuICAgKiBAcGFyYW0gand0VG9rZW5cclxuICAgKi9cclxuICBzdGF0aWMgZGVjb2RlSnd0KGp3dFRva2VuOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eShqd3RUb2tlbikpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XHJcbiAgICBjb25zdCBtYXRjaGVzID0gaWRUb2tlblBhcnRzUmVnZXguZXhlYyhqd3RUb2tlbik7XHJcbiAgICBpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPCA0KSB7XHJcbiAgICAgIC8vdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLndhcm4oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gaXMgbm90IHBhcnNlYWJsZS5cIik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JhY2tlZFRva2VuID0ge1xyXG4gICAgICBoZWFkZXI6IG1hdGNoZXNbMV0sXHJcbiAgICAgIEpXU1BheWxvYWQ6IG1hdGNoZXNbMl0sXHJcbiAgICAgIEpXU1NpZzogbWF0Y2hlc1szXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjcmFja2VkVG9rZW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeHRyYWN0IElkVG9rZW4gYnkgZGVjb2RpbmcgdGhlIFJBV0lkVG9rZW5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbmNvZGVkSWRUb2tlblxyXG4gICAqL1xyXG4gIHN0YXRpYyBleHRyYWN0SWRUb2tlbihlbmNvZGVkSWRUb2tlbjogc3RyaW5nKTogYW55IHtcclxuICAgIC8vIGlkIHRva2VuIHdpbGwgYmUgZGVjb2RlZCB0byBnZXQgdGhlIHVzZXJuYW1lXHJcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSB0aGlzLmRlY29kZUp3dChlbmNvZGVkSWRUb2tlbik7XHJcbiAgICBpZiAoIWRlY29kZWRUb2tlbikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJhc2U2NElkVG9rZW4gPSBkZWNvZGVkVG9rZW4uSldTUGF5bG9hZDtcclxuICAgICAgY29uc3QgYmFzZTY0RGVjb2RlZCA9IHRoaXMuYmFzZTY0RGVjb2RlKGJhc2U2NElkVG9rZW4pO1xyXG4gICAgICBpZiAoIWJhc2U2NERlY29kZWQpIHtcclxuICAgICAgICAvL3RoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5pbmZvKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGNvdWxkIG5vdCBiZSBiYXNlNjQgdXJsIHNhZmUgZGVjb2RlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgLy8gRUNNQSBzY3JpcHQgaGFzIEpTT04gYnVpbHQtaW4gc3VwcG9ydFxyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShiYXNlNjREZWNvZGVkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvL3RoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5lcnJvcihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgZGVjb2RlZFwiICsgZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gRW5jb2RlIGFuZCBEZWNvZGVcclxuXHJcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmcjU29sdXRpb25fNF8lRTIlODAlOTNfZXNjYXBpbmdfdGhlX3N0cmluZ19iZWZvcmVfZW5jb2RpbmdfaXRcclxuXHJcbiAgLyoqXHJcbiAgICogZW5jb2Rpbmcgc3RyaW5nIHRvIGJhc2U2NCAtIHBsYXRmb3JtIHNwZWNpZmljIGNoZWNrXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW5wdXRcclxuICAgKi9cclxuICBzdGF0aWMgYmFzZTY0RW5jb2RlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLFxyXG4gICAgICAgIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyKFwiMHhcIiArIHAxKSk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkZWNvZGluZyBiYXNlNjQgdG9rZW4gLSBwbGF0Zm9ybSBzcGVjaWZpYyBjaGVja1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGJhc2U2NElkVG9rZW5cclxuICAgKi9cclxuICBzdGF0aWMgYmFzZTY0RGVjb2RlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGlucHV0KS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24oYykge1xyXG4gICAgICAgIHJldHVybiBcIiVcIiArIChcIjAwXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICB9KS5qb2luKFwiXCIpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlc2VyaWFsaXplIGEgc3RyaW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcXVlcnlcclxuICAgKi9cclxuICBzdGF0aWMgZGVzZXJpYWxpemUocXVlcnk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBsZXQgbWF0Y2g6IEFycmF5PHN0cmluZz47IC8vIFJlZ2V4IGZvciByZXBsYWNpbmcgYWRkaXRpb24gc3ltYm9sIHdpdGggYSBzcGFjZVxyXG4gICAgY29uc3QgcGwgPSAvXFwrL2c7XHJcbiAgICBjb25zdCBzZWFyY2ggPSAvKFteJj1dKyk9KFteJl0qKS9nO1xyXG4gICAgY29uc3QgZGVjb2RlID0gKHM6IHN0cmluZykgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHMucmVwbGFjZShwbCwgXCIgXCIpKTtcclxuICAgIGNvbnN0IG9iajoge30gPSB7fTtcclxuICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xyXG4gICAgd2hpbGUgKG1hdGNoKSB7XHJcbiAgICAgIG9ialtkZWNvZGUobWF0Y2hbMV0pXSA9IGRlY29kZShtYXRjaFsyXSk7XHJcbiAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gU2NvcGVzIChleHRyYWN0IHRvIFNjb3Blcy50cylcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlcmUgYXJlIGR1cCBzY29wZXMgaW4gYSBnaXZlbiByZXF1ZXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2FjaGVkU2NvcGVzXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBpbnRlcnNlY3Rpbmcgc2NvcGVzIGlzbid0IGEgZ3JlYXQgbmFtZSBmb3IgZHVwbGljYXRlIGNoZWNrZXJcclxuICBzdGF0aWMgaXNJbnRlcnNlY3RpbmdTY29wZXMoY2FjaGVkU2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjb3Blcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjYWNoZWRTY29wZXMuaW5kZXhPZihzY29wZXNbaV0udG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGdpdmVuIHNjb3BlIGlzIHByZXNlbnQgaW4gdGhlIHJlcXVlc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjYWNoZWRTY29wZXNcclxuICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICovXHJcbiAgc3RhdGljIGNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XHJcbiAgICByZXR1cm4gc2NvcGVzLmV2ZXJ5KCh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiBjYWNoZWRTY29wZXMuaW5kZXhPZih2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdG9Mb3dlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCB0b28gZ2VuZXJpYyBuYW1lIGZvciBhIGZ1bmN0aW9uIHRoYXQgb25seSBkZWFscyB3aXRoIHNjb3Blc1xyXG4gIHN0YXRpYyBjb252ZXJ0VG9Mb3dlckNhc2Uoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gc2NvcGVzLm1hcChzY29wZSA9PiBzY29wZS50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBvbmUgZWxlbWVudCBmcm9tIGEgc2NvcGUgYXJyYXlcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKiBAcGFyYW0gc2NvcGVcclxuICAgKi9cclxuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcclxuICBzdGF0aWMgcmVtb3ZlRWxlbWVudChzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBzY29wZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzY29wZSk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFVSTCBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFVybFByb2Nlc3NpbmcudHM/KVxyXG5cclxuICBzdGF0aWMgZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIjXCIpWzBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSB1cmwgbGlrZSBodHRwczovL2E6Yi9jb21tb24vZD9lPWYjZywgYW5kIGEgdGVuYW50SWQsIHJldHVybnMgaHR0cHM6Ly9hOmIvdGVuYW50SWQvZFxyXG4gICAqIEBwYXJhbSBocmVmIFRoZSB1cmxcclxuICAgKiBAcGFyYW0gdGVuYW50SWQgVGhlIHRlbmFudCBpZCB0byByZXBsYWNlXHJcbiAgICovXHJcbiAgc3RhdGljIHJlcGxhY2VUZW5hbnRQYXRoKHVybDogc3RyaW5nLCB0ZW5hbnRJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHZhciB1cmxPYmplY3QgPSB0aGlzLkdldFVybENvbXBvbmVudHModXJsKTtcclxuICAgICAgdmFyIHBhdGhBcnJheSA9IHVybE9iamVjdC5QYXRoU2VnbWVudHM7XHJcbiAgICAgIGlmICh0ZW5hbnRJZCAmJiAocGF0aEFycmF5Lmxlbmd0aCAhPT0gMCAmJiAocGF0aEFycmF5WzBdID09PSBDb25zdGFudHMuY29tbW9uIHx8IHBhdGhBcnJheVswXSA9PT0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUykpKSB7XHJcbiAgICAgICAgcGF0aEFycmF5WzBdID0gdGVuYW50SWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3QsIHBhdGhBcnJheSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3Q6IElVcmksIHBhdGhBcnJheTogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiB0aGlzLkNhbm9uaWNhbGl6ZVVyaSh1cmxPYmplY3QuUHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxPYmplY3QuSG9zdE5hbWVBbmRQb3J0ICsgXCIvXCIgKyBwYXRoQXJyYXkuam9pbihcIi9cIikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIG91dCB0aGUgY29tcG9uZW50cyBmcm9tIGEgdXJsIHN0cmluZy5cclxuICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cclxuICAgKi9cclxuICBzdGF0aWMgR2V0VXJsQ29tcG9uZW50cyh1cmw6IHN0cmluZyk6IElVcmkge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgdGhyb3cgXCJVcmwgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9jdXJ0aXN6LzExMTM5YjJjZmNhZWY0YTI2MWUwXHJcbiAgICB2YXIgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XHJcblxyXG4gICAgdmFyIG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4KTtcclxuXHJcbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmxlbmd0aCA8IDYpIHtcclxuICAgICAgdGhyb3cgXCJWYWxpZCB1cmwgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXJsQ29tcG9uZW50cyA9IDxJVXJpPntcclxuICAgICAgUHJvdG9jb2w6IG1hdGNoWzFdLFxyXG4gICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxyXG4gICAgICBBYnNvbHV0ZVBhdGg6IG1hdGNoWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLkFic29sdXRlUGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICBwYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHMuZmlsdGVyKCh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoID4gMCk7IC8vIHJlbW92ZSBlbXB0eSBlbGVtZW50c1xyXG4gICAgdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHM7XHJcbiAgICByZXR1cm4gdXJsQ29tcG9uZW50cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgdXJsIG9yIHBhdGgsIGFwcGVuZCBhIHRyYWlsaW5nIHNsYXNoIGlmIG9uZSBkb2VzbnQgZXhpc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKi9cclxuICBzdGF0aWMgQ2Fub25pY2FsaXplVXJpKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVybCAmJiAhVXRpbHMuZW5kc1dpdGgodXJsLCBcIi9cIikpIHtcclxuICAgICAgdXJsICs9IFwiL1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSB1cmwgZW5kcyB3aXRoIHRoZSBzdWZmaXhcclxuICAgKiBSZXF1aXJlZCBiZWNhdXNlIHdlIGFyZSBjb21waWxpbmcgZm9yIGVzNSBpbnN0ZWFkIG9mIGVzNlxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKiBAcGFyYW0gc3RyXHJcbiAgICovXHJcbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIG5vdCBjbGVhciB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGRvXHJcbiAgc3RhdGljIGVuZHNXaXRoKHVybDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF1cmwgfHwgIXN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybC5pbmRleE9mKHN1ZmZpeCwgdXJsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFV0aWxzIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbG9naW5faGludCBhbmQgZG9tYWluX2hpbnQgZnJvbSB0aGUgaS9wIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIHVybFxyXG4gICAqIEBwYXJhbSBuYW1lXHJcbiAgICovXHJcbiAgc3RhdGljIHVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSh1cmwpKSB7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcXFxcJlwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgLy8gbmFtZT12YWx1ZSZcclxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIG5hbWUgKyBcIj0pW15cXCZdKyZcIik7XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XHJcbiAgICAvLyBuYW1lPXZhbHVlXHJcbiAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXStcIik7XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIFJldHVybnMgdGhlIGFuY2hvciBwYXJ0KCMpIG9mIHRoZSBVUkxcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0SGFzaEZyb21VcmwodXJsU3RyaW5nT3JGcmFnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdXJsU3RyaW5nT3JGcmFnbWVudC5pbmRleE9mKFwiI1wiKTtcclxuICAgIGNvbnN0IGluZGV4V2l0aFNsYXNoID0gdXJsU3RyaW5nT3JGcmFnbWVudC5pbmRleE9mKFwiIy9cIik7XHJcbiAgICBpZiAoaW5kZXhXaXRoU2xhc2ggPiAtMSkge1xyXG4gICAgICByZXR1cm4gdXJsU3RyaW5nT3JGcmFnbWVudC5zdWJzdHJpbmcoaW5kZXhXaXRoU2xhc2ggKyAyKTtcclxuICAgIH1cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHJldHVybiB1cmxTdHJpbmdPckZyYWdtZW50LnN1YnN0cmluZyhpbmRleCArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIFByb2Nlc3NpbmcgKEV4dHJhY3Q/KVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RzIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBmb3IgdGhlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAqIGluIGFueSBsb2dpbigpIG9yIGFjcXVpcmVUb2tlbigpIGNhbGxzXHJcbiAgICogQHBhcmFtIGlkVG9rZW5PYmplY3RcclxuICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgKiBAcGFyYW0gc2lkXHJcbiAgICogQHBhcmFtIGxvZ2luSGludFxyXG4gICAqL1xyXG4gIC8vVE9ETzogY2hlY2sgaG93IHRoaXMgYmVoYXZlcyB3aGVuIGRvbWFpbl9oaW50IG9ubHkgaXMgc2VudCBpbiBleHRyYXBhcmFtZXRlcnMgYW5kIGlkVG9rZW4gaGFzIG5vIHVwbi5cclxuICBzdGF0aWMgY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBpZFRva2VuT2JqZWN0OiBhbnkpOiBTdHJpbmdEaWN0IHtcclxuXHJcbiAgICAvLyBwcmVmZXJlbmNlIG9yZGVyOiBhY2NvdW50ID4gc2lkID4gbG9naW5faGludFxyXG4gICAgbGV0IHNzb1R5cGU7XHJcbiAgICBsZXQgc3NvRGF0YTtcclxuICAgIGxldCBzZXJ2ZXJSZXFQYXJhbTogU3RyaW5nRGljdCA9IHt9O1xyXG4gICAgLy8gaWYgYWNjb3VudCBpbmZvIGlzIHBhc3NlZCwgYWNjb3VudC5zaWQgPiBhY2NvdW50LmxvZ2luX2hpbnRcclxuICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgIGlmIChyZXF1ZXN0LmFjY291bnQpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50O1xyXG4gICAgICAgIGlmIChhY2NvdW50LnNpZCkge1xyXG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLlNJRDtcclxuICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnNpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWNjb3VudC51c2VyTmFtZSkge1xyXG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLkxPR0lOX0hJTlQ7XHJcbiAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC51c2VyTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2lkIGZyb20gcmVxdWVzdFxyXG4gICAgICBlbHNlIGlmIChyZXF1ZXN0LnNpZCkge1xyXG4gICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5TSUQ7XHJcbiAgICAgICAgc3NvRGF0YSA9IHJlcXVlc3Quc2lkO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxvZ2luSGludCBmcm9tIHJlcXVlc3RcclxuICAgICAgZWxzZSBpZiAocmVxdWVzdC5sb2dpbkhpbnQpIHtcclxuICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuTE9HSU5fSElOVDtcclxuICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5sb2dpbkhpbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFkYWxJZFRva2VuIHJldHJpZXZlZCBmcm9tIGNhY2hlXHJcbiAgICBlbHNlIGlmIChpZFRva2VuT2JqZWN0KSB7XHJcbiAgICAgIGlmIChpZFRva2VuT2JqZWN0Lmhhc093blByb3BlcnR5KENvbnN0YW50cy51cG4pKSB7XHJcbiAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLklEX1RPS0VOO1xyXG4gICAgICAgIHNzb0RhdGEgPSBpZFRva2VuT2JqZWN0LnVwbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcclxuICAgICAgICBzc29EYXRhID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoc3NvVHlwZSwgc3NvRGF0YSk7XHJcblxyXG4gICAgLy8gYWRkIHRoZSBIb21lQWNjb3VudElkZW50aWZpZXIgaW5mby8gZG9tYWluX2hpbnRcclxuICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgc2VydmVyUmVxUGFyYW0gPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5IT01FQUNDT1VOVF9JRCwgcmVxdWVzdC5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgc2VydmVyUmVxUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXJ2ZXJSZXFQYXJhbTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBBZGQgU0lEIHRvIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIHNpZFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRTU09QYXJhbWV0ZXIoc3NvVHlwZTogc3RyaW5nLCBzc29EYXRhOiBzdHJpbmcsIHNzb1BhcmFtPzogU3RyaW5nRGljdCk6IFN0cmluZ0RpY3Qge1xyXG4gICAgaWYgKCFzc29QYXJhbSkge1xyXG4gICAgICBzc29QYXJhbSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc3NvRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBzc29QYXJhbTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHNzb1R5cGUpIHtcclxuICAgICAgY2FzZSBTU09UeXBlcy5TSUQ6IHtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5TSURdID0gc3NvRGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNTT1R5cGVzLklEX1RPS0VOOiB7XHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTU09UeXBlcy5MT0dJTl9ISU5UOiB7XHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuT1JHQU5JWkFUSU9OUzoge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTU09UeXBlcy5DT05TVU1FUlM6IHtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTU09UeXBlcy5IT01FQUNDT1VOVF9JRDoge1xyXG4gICAgICAgIGxldCBob21lQWNjb3VudElkID0gc3NvRGF0YS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgY29uc3QgdWlkID0gVXRpbHMuYmFzZTY0RGVjb2RlKGhvbWVBY2NvdW50SWRbMF0pO1xyXG4gICAgICAgIGNvbnN0IHV0aWQgPSBVdGlscy5iYXNlNjREZWNvZGUoaG9tZUFjY291bnRJZFsxXSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGRvbWFpbl9yZXEgYW5kIGxvZ2luX3JlcSBhcmUgbm90IG5lZWRlZCBhY2NvcmRpbmcgdG8gZVNUUyB0ZWFtXHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHVpZDtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHV0aWQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlkID09PSBDb25zdGFudHMuY29uc3VtZXJzVXRpZCkge1xyXG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX1JFUToge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX1JFUV0gPSBzc29EYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuRE9NQUlOX1JFUToge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9SRVFdID0gc3NvRGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzc29QYXJhbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgYSBRdWVyeVBhcmFtZXRlclN0cmluZyBmcm9tIGEgS2V5LVZhbHVlIG1hcHBpbmcgb2YgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkXHJcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgc3RhdGljIGdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcGFyYW1zU3RyaW5nOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGlmIChxdWVyeVBhcmFtZXRlcnMpIHtcclxuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbWV0ZXJzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXNTdHJpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgcGFyYW1zU3RyaW5nID0gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVBhcmFtZXRlcnNba2V5XSl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwYXJhbXNTdHJpbmcgKz0gYCYke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJzW2tleV0pfWA7XHJcbiAgICAgICAgfVxyXG4gICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJhbXNTdHJpbmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIFNTTyBwYXJhbXMgc2V0IGluIHRoZSBSZXF1ZXN0XHJcbiAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgKi9cclxuICBzdGF0aWMgaXNTU09QYXJhbShyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIHtcclxuICAgICAgcmV0dXJuIHJlcXVlc3QgJiYgKHJlcXVlc3QuYWNjb3VudCB8fCByZXF1ZXN0LnNpZCB8fCByZXF1ZXN0LmxvZ2luSGludCk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFJlc3BvbnNlIEhlbHBlcnNcclxuXHJcbiAgc3RhdGljIHNldFJlc3BvbnNlSWRUb2tlbihvcmlnaW5hbFJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGlkVG9rZW5PYmo6IElkVG9rZW4pIDogQXV0aFJlc3BvbnNlIHtcclxuXHJcbiAgICBsZXQgZXhwID0gTnVtYmVyKGlkVG9rZW5PYmouZXhwaXJhdGlvbik7XHJcbiAgICBpZiAoZXhwICYmICFvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbikge1xyXG4gICAgICAgIG9yaWdpbmFsUmVzcG9uc2UuZXhwaXJlc09uID0gbmV3IERhdGUoZXhwICogMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub3JpZ2luYWxSZXNwb25zZSxcclxuICAgICAgaWRUb2tlbjogaWRUb2tlbk9iaixcclxuICAgICAgaWRUb2tlbkNsYWltczogaWRUb2tlbk9iai5jbGFpbXMsXHJcbiAgICAgIHVuaXF1ZUlkOiBpZFRva2VuT2JqLm9iamVjdElkIHx8IGlkVG9rZW5PYmouc3ViamVjdCxcclxuICAgICAgdGVuYW50SWQ6IGlkVG9rZW5PYmoudGVuYW50SWQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENhY2hlTG9jYXRpb24sIENhY2hlTG9jYXRpb25DaG9pY2VzIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZSBhcyBJbnRlcmFjdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5cclxuLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIENvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgc3RhdGljIGdldCBlcnJvckRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yX2Rlc2NyaXB0aW9uXCI7IH1cclxuICBzdGF0aWMgZ2V0IGVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBzY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzY29wZVwiOyB9XHJcbiAgc3RhdGljIGdldCBjbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudF9pbmZvXCI7IH1cclxuICBzdGF0aWMgZ2V0IGNsaWVudElkKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudElkXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBpZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImlkX3Rva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IGFkYWxJZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImFkYWwuaWR0b2tlblwiOyB9XHJcbiAgc3RhdGljIGdldCBhY2Nlc3NUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJhY2Nlc3NfdG9rZW5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgZXhwaXJlc0luKCk6IHN0cmluZyB7IHJldHVybiBcImV4cGlyZXNfaW5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgc2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcInNlc3Npb25fc3RhdGVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgY2xhaW1zKCk6IHN0cmluZyB7IHJldHVybiBcImNsYWltc1wiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgbXNhbENsaWVudEluZm8oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5jbGllbnQuaW5mb1wiOyB9XHJcbiAgc3RhdGljIGdldCBtc2FsRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5lcnJvclwiOyB9XHJcbiAgc3RhdGljIGdldCBtc2FsRXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yLmRlc2NyaXB0aW9uXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBtc2FsU2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc2Vzc2lvbi5zdGF0ZVwiOyB9XHJcbiAgc3RhdGljIGdldCB0b2tlbktleXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5rZXlzXCI7IH1cclxuICBzdGF0aWMgZ2V0IGFjY2Vzc1Rva2VuS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuYWNjZXNzLnRva2VuLmtleVwiOyB9XHJcbiAgc3RhdGljIGdldCBleHBpcmF0aW9uS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXhwaXJhdGlvbi5rZXlcIjsgfVxyXG4gIHN0YXRpYyBnZXQgc3RhdGVMb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmxvZ2luXCI7IH1cclxuICBzdGF0aWMgZ2V0IHN0YXRlQWNxdWlyZVRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUuYWNxdWlyZVRva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IHN0YXRlUmVuZXcoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5yZW5ld1wiOyB9XHJcbiAgc3RhdGljIGdldCBub25jZUlkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5ub25jZS5pZHRva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IHVzZXJOYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudXNlcm5hbWVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgaWRUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmlkdG9rZW5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgbG9naW5SZXF1ZXN0KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubG9naW4ucmVxdWVzdFwiOyB9XHJcbiAgc3RhdGljIGdldCBsb2dpbkVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubG9naW4uZXJyb3JcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcmVuZXdTdGF0dXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5yZW5ldy5zdGF0dXNcIjsgfVxyXG4gIHN0YXRpYyBnZXQgdXJsSGFzaCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVybEhhc2hcIjsgfVxyXG4gIHN0YXRpYyBnZXQgYW5ndWxhckxvZ2luUmVxdWVzdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmFuZ3VsYXIubG9naW4ucmVxdWVzdFwiOyB9XHJcbiAgc3RhdGljIGdldCBtc2FsKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWxcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IG5vX2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiTk9fQUNDT1VOVFwiOyB9XHJcbiAgc3RhdGljIGdldCBjb25zdW1lcnNVdGlkKCk6IHN0cmluZyB7IHJldHVybiBcIjkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZFwiOyB9XHJcbiAgc3RhdGljIGdldCB1cG4oKTogc3RyaW5nIHsgcmV0dXJuIFwidXBuXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9tcHRfc2VsZWN0X2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnByb21wdD1zZWxlY3RfYWNjb3VudFwiOyB9XHJcbiAgc3RhdGljIGdldCBwcm9tcHRfbm9uZSgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PW5vbmVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcHJvbXB0KCk6IHN0cmluZyB7IHJldHVybiBcInByb21wdFwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcmVzcG9uc2VfbW9kZV9mcmFnbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcmVzcG9uc2VfbW9kZT1mcmFnbWVudFwiOyB9XHJcbiAgc3RhdGljIGdldCByZXNvdXJjZURlbGltaXRlcigpOiBzdHJpbmcgeyByZXR1cm4gXCJ8XCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKCk6IHN0cmluZyB7IHJldHVybiBcIkNhbmNlbGVkXCI7IH1cclxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29tcGxldGVkXCI7IH1cclxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKCk6IHN0cmluZyB7IHJldHVybiBcIkluIFByb2dyZXNzXCI7IH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwV2lkdGg6IG51bWJlciA9IDQ4MztcclxuICBzdGF0aWMgZ2V0IHBvcFVwV2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwV2lkdGg7IH1cclxuICBzdGF0aWMgc2V0IHBvcFVwV2lkdGgod2lkdGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcG9wVXBXaWR0aCA9IHdpZHRoO1xyXG4gIH1cclxuICBwcml2YXRlIHN0YXRpYyBfcG9wVXBIZWlnaHQ6IG51bWJlciA9IDYwMDtcclxuICBzdGF0aWMgZ2V0IHBvcFVwSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wb3BVcEhlaWdodDsgfVxyXG4gIHN0YXRpYyBzZXQgcG9wVXBIZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvcFVwSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBsb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJMT0dJTlwiOyB9XHJcbiAgc3RhdGljIGdldCByZW5ld1Rva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIlJFTkVXX1RPS0VOXCI7IH1cclxuICBzdGF0aWMgZ2V0IHVua25vd24oKTogc3RyaW5nIHsgcmV0dXJuIFwiVU5LTk9XTlwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaG9tZUFjY291bnRJZGVudGlmaWVyKCk6IHN0cmluZyB7IHJldHVybiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgY29tbW9uKCk6IHN0cmluZyB7IHJldHVybiBcImNvbW1vblwiOyB9XHJcbiAgc3RhdGljIGdldCBvcGVuaWRTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJvcGVuaWRcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcHJvZmlsZVNjb3BlKCk6IHN0cmluZyB7IHJldHVybiBcInByb2ZpbGVcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGNhY2hlTG9jYXRpb25Mb2NhbCgpOiBDYWNoZUxvY2F0aW9uIHsgcmV0dXJuIENhY2hlTG9jYXRpb25DaG9pY2VzLkxvY2FsU3RvcmFnZTsgfVxyXG4gIHN0YXRpYyBnZXQgY2FjaGVMb2NhdGlvblNlc3Npb24oKTogQ2FjaGVMb2NhdGlvbiB7IHJldHVybiBDYWNoZUxvY2F0aW9uQ2hvaWNlcy5TZXNzaW9uU3RvcmFnZTsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGludGVyYWN0aW9uVHlwZVJlZGlyZWN0KCk6IEludGVyYWN0aW9uVHlwZSB7IHJldHVybiBcInJlZGlyZWN0SW50ZXJhY3Rpb25cIjsgfVxyXG4gIHN0YXRpYyBnZXQgaW50ZXJhY3Rpb25UeXBlUG9wdXAoKTogSW50ZXJhY3Rpb25UeXBlIHsgcmV0dXJuIFwicG9wdXBJbnRlcmFjdGlvblwiOyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIENhY2hlS2V5cyBmb3IgJ2F1dGhvcml0eScgYW5kICdhY2NvdW50J1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENhY2hlS2V5cyA9IHtcclxuICAgIEFVVEhPUklUWTogXCJtc2FsLmF1dGhvcml0eVwiLFxyXG4gICAgQUNRVUlSRV9UT0tFTl9BQ0NPVU5UOiBcIm1zYWwuYWNxdWlyZVRva2VuQWNjb3VudFwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUFEVHJ1c3RlZEhvc3RMaXN0ID0gIHtcclxuICBcImxvZ2luLndpbmRvd3MubmV0XCI6IFwibG9naW4ud2luZG93cy5uZXRcIixcclxuICBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIjogXCJsb2dpbi5jaGluYWNsb3VkYXBpLmNuXCIsXHJcbiAgXCJsb2dpbi5jbG91ZGdvdmFwaS51c1wiOiBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCIsXHJcbiAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiLFxyXG4gIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCIsXHJcbiAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogU1NPIFR5cGVzIC0gZ2VuZXJhdGVkIHRvIHBvcHVsYXRlIGhpbnRzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU1NPVHlwZXMgPSB7XHJcbiAgICBBQ0NPVU5UOiBcImFjY291bnRcIixcclxuICAgIFNJRDogXCJzaWRcIixcclxuICAgIExPR0lOX0hJTlQ6IFwibG9naW5faGludFwiLFxyXG4gICAgSURfVE9LRU46IFwiaWRfdG9rZW5cIixcclxuICAgIERPTUFJTl9ISU5UOiBcImRvbWFpbl9oaW50XCIsXHJcbiAgICBPUkdBTklaQVRJT05TOiBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUzogXCJjb25zdW1lcnNcIixcclxuICAgIEFDQ09VTlRfSUQ6IFwiYWNjb3VudElkZW50aWZpZXJcIixcclxuICAgIEhPTUVBQ0NPVU5UX0lEOiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiLFxyXG4gICAgTE9HSU5fUkVROiBcImxvZ2luX3JlcVwiLFxyXG4gICAgRE9NQUlOX1JFUTogXCJkb21haW5fcmVxXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmxhY2tsaXN0ZWRFUVBhcmFtcyA9IFtcclxuICBTU09UeXBlcy5TSUQsXHJcbiAgU1NPVHlwZXMuTE9HSU5fSElOVFxyXG5dO1xyXG5cclxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25UeXBlID0gXCJyZWRpcmVjdEludGVyYWN0aW9uXCIgfCBcInBvcHVwSW50ZXJhY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxyXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcclxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcclxuXHRMT0dJTjogXCJsb2dpblwiLFxyXG5cdFNFTEVDVF9BQ0NPVU5UOiBcInNlbGVjdF9hY2NvdW50XCIsXHJcblx0Q09OU0VOVDogXCJjb25zZW50XCIsXHJcblx0Tk9ORTogXCJub25lXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IExpYnJhcnkgPSB7XHJcbiAgdmVyc2lvbjogXCIxLjAuMlwiXHJcbn07XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBUZWxlbWV0cnlPcHRpb25zIH0gZnJvbSBcIi4uL0NvbmZpZ3VyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgY29uZmlndXJhdGlvbk5vdFNldDoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fY29uZmlnX3NldFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ29uZmlndXJhdGlvbiBoYXMgbm90IGJlZW4gc2V0LiBQbGVhc2UgY2FsbCB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gY29uc3RydWN0b3Igd2l0aCBhIHZhbGlkIENvbmZpZ3VyYXRpb24gb2JqZWN0LlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENhY2hlTG9jYXRpb246IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfY2FjaGVfbG9jYXRpb25cIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBsb2NhdGlvbiBwcm92aWRlZCBpcyBub3QgdmFsaWQuXCJcclxuICAgIH0sXHJcbiAgICBub1N0b3JhZ2VTdXBwb3J0ZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImJyb3dzZXJfc3RvcmFnZV9ub3Rfc3VwcG9ydGVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJsb2NhbFN0b3JhZ2UgYW5kIHNlc3Npb25TdG9yYWdlIGFyZSBub3Qgc3VwcG9ydGVkLlwiXHJcbiAgICB9LFxyXG4gICAgbm9SZWRpcmVjdENhbGxiYWNrc1NldDoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fcmVkaXJlY3RfY2FsbGJhY2tzXCIsXHJcbiAgICAgICAgZGVzYzogXCJObyByZWRpcmVjdCBjYWxsYmFja3MgaGF2ZSBiZWVuIHNldC4gUGxlYXNlIGNhbGwgc2V0UmVkaXJlY3RDYWxsYmFja3MoKSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBmdW5jdGlvbiBhcmd1bWVudHMgYmVmb3JlIGNvbnRpbnVpbmcuIFwiICtcclxuICAgICAgICAgICAgXCJNb3JlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvd2lraS9NU0FMLWJhc2ljcy5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDYWxsYmFja09iamVjdDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWxsYmFja19vYmplY3RcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBvYmplY3QgcGFzc2VkIGZvciB0aGUgY2FsbGJhY2sgd2FzIGludmFsaWQuIFwiICtcclxuICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvTVNBTC1iYXNpY3MuXCJcclxuICAgIH0sXHJcbiAgICBzY29wZXNSZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwic2NvcGVzX3JlcXVpcmVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgYXJlIHJlcXVpcmVkIHRvIG9idGFpbiBhbiBhY2Nlc3MgdG9rZW4uXCJcclxuICAgIH0sXHJcbiAgICBlbXB0eVNjb3Blczoge1xyXG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBlbXB0eSBhcnJheS5cIlxyXG4gICAgfSxcclxuICAgIG5vbkFycmF5U2NvcGVzOiB7XHJcbiAgICAgICAgY29kZTogXCJub25hcnJheV9pbnB1dF9zY29wZXNfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBjYW5ub3QgYmUgcGFzc2VkIGFzIG5vbi1hcnJheS5cIlxyXG4gICAgfSxcclxuICAgIGNsaWVudFNjb3BlOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGllbnRpZF9pbnB1dF9zY29wZXNfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNsaWVudCBJRCBjYW4gb25seSBiZSBwcm92aWRlZCBhcyBhIHNpbmdsZSBzY29wZS5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRQcm9tcHQ6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfcHJvbXB0X3ZhbHVlXCIsXHJcbiAgICAgICAgZGVzYzogXCJTdXBwb3J0ZWQgcHJvbXB0IHZhbHVlcyBhcmUgJ2xvZ2luJywgJ3NlbGVjdF9hY2NvdW50JywgJ2NvbnNlbnQnIGFuZCAnbm9uZSdcIixcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQXV0aG9yaXR5VHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9hdXRob3JpdHlfdHlwZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIGF1dGhvcml0eSBpcyBub3QgYSB2YWxpZCB0eXBlIG9mIGF1dGhvcml0eSBzdXBwb3J0ZWQgYnkgTVNBTC4gUGxlYXNlIHNlZSBoZXJlIGZvciB2YWxpZCBhdXRob3JpdGllczogPGluc2VydCBVUkwgaGVyZT4uXCJcclxuICAgIH0sXHJcbiAgICBhdXRob3JpdHlVcmlJbnNlY3VyZToge1xyXG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnNlY3VyZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiQXV0aG9yaXR5IFVSSXMgbXVzdCB1c2UgaHR0cHMuXCJcclxuICAgIH0sXHJcbiAgICBhdXRob3JpdHlVcmlJbnZhbGlkUGF0aDoge1xyXG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnZhbGlkX3BhdGhcIixcclxuICAgICAgICBkZXNjOiBcIkdpdmVuIGF1dGhvcml0eSBVUkkgaXMgaW52YWxpZC5cIlxyXG4gICAgfSxcclxuICAgIHVuc3VwcG9ydGVkQXV0aG9yaXR5VmFsaWRhdGlvbjoge1xyXG4gICAgICAgIGNvZGU6IFwidW5zdXBwb3J0ZWRfYXV0aG9yaXR5X3ZhbGlkYXRpb25cIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBhdXRob3JpdHkgdmFsaWRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIGF1dGhvcml0eSB0eXBlLlwiXHJcbiAgICB9LFxyXG4gICAgYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg6IHtcclxuICAgICAgICBjb2RlOiBcImIyY19hdXRob3JpdHlfdXJpX2ludmFsaWRfcGF0aFwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIFVSSSBmb3IgdGhlIEIyQyBhdXRob3JpdHkgaXMgaW52YWxpZC5cIlxyXG4gICAgfSxcclxuICAgIGNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsYWltc19yZXF1ZXN0X3BhcnNpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNvdWxkIG5vdCBwYXJzZSB0aGUgZ2l2ZW4gY2xhaW1zIHJlcXVlc3Qgb2JqZWN0LlwiXHJcbiAgICB9LFxyXG4gICAgZW1wdHlSZXF1ZXN0RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImVtcHR5X3JlcXVlc3RfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlJlcXVlc3Qgb2JqZWN0IGlzIHJlcXVpcmVkLlwiXHJcbiAgICB9LFxyXG4gICAgdGVsZW1ldHJ5Q29uZmlnRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInRlbGVtZXRyeV9jb25maWdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRlbGVtZXRyeSBjb25maWcgaXMgbm90IGNvbmZpZ3VyZWQgd2l0aCByZXF1aXJlZCB2YWx1ZXNcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIGNvbmZpZ3VyYXRpb24gb2YgdGhlIC5qcyBsaWJyYXJ5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIENsaWVudEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTm9TZXRDb25maWd1cmF0aW9uRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNvbmZpZ3VyYXRpb25Ob3RTZXQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmRlc2N9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWNoZUxvY2F0aW9uQ29uZmlnRXJyb3IoZ2l2ZW5DYWNoZUxvY2F0aW9uOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlTG9jYXRpb24uY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVMb2NhdGlvbi5kZXNjfSBQcm92aWRlZCB2YWx1ZTogJHtnaXZlbkNhY2hlTG9jYXRpb259LiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiAke0NvbnN0YW50cy5jYWNoZUxvY2F0aW9uTG9jYWx9LCAke0NvbnN0YW50cy5jYWNoZUxvY2F0aW9uU2Vzc2lvbn0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU5vU3RvcmFnZVN1cHBvcnRlZEVycm9yKCkgOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9TdG9yYWdlU3VwcG9ydGVkLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9TdG9yYWdlU3VwcG9ydGVkLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1JlZGlyZWN0Q2FsbGJhY2tzU2V0LmNvZGUsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoY2FsbGJhY2tPYmplY3Q6IG9iamVjdCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FsbGJhY2tPYmplY3QuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FsbGJhY2tPYmplY3QuZGVzY30gR2l2ZW4gdmFsdWUgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uOiAke2NhbGxiYWNrT2JqZWN0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihzY29wZXNWYWx1ZTogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRTY29wZS5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXNWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uuc2NvcGVzUmVxdWlyZWQuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRQcm9tcHRFcnJvcihwcm9tcHRWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmRlc2N9IEdpdmVuIHZhbHVlOiAke3Byb21wdFZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGNsYWltc1JlcXVlc3RQYXJzZUVycm9yOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuZGVzY30gR2l2ZW4gdmFsdWU6ICR7Y2xhaW1zUmVxdWVzdFBhcnNlRXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgY29uc3QgeyBjb2RlLCBkZXNjIH0gPSBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5UmVxdWVzdEVycm9yO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKGNvZGUsIGRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVUZWxlbWV0cnlDb25maWdFcnJvcihjb25maWc6IFRlbGVtZXRyeU9wdGlvbnMpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIGNvbnN0IHsgY29kZSwgZGVzYyB9ID0gQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS50ZWxlbWV0cnlDb25maWdFcnJvcjtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEtleXMgPSB7XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgYXBwbGljYXRpb25WZXJzaW9uOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICB0ZWxlbWV0cnlFbWl0dGVyOiBcImZ1bmN0aW9uXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtaXNzaW5nS2V5cyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkS2V5cylcclxuICAgICAgICAgICAgLnJlZHVjZSgoa2V5cywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnW2tleV0gPyBrZXlzIDoga2V5cy5jb25jYXQoWyBgJHtrZXl9ICgke3JlcXVpcmVkS2V5c1trZXldfSlgIF0pO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKGNvZGUsIGAke2Rlc2N9IG1pc2luZyB2YWx1ZXM6ICR7bWlzc2luZ0tleXMuam9pbihcIixcIil9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL0lkVG9rZW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgbXVsdGlwbGVNYXRjaGluZ1Rva2Vuczoge1xyXG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfbWF0Y2hpbmdfdG9rZW5zXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zIHNhdGlzZnlpbmcgdGhlIHJlcXVpcmVtZW50cy4gXCIgK1xyXG4gICAgICAgICAgICBcIkNhbGwgQWNxdWlyZVRva2VuIGFnYWluIHByb3ZpZGluZyBtb3JlIHJlcXVpcmVtZW50cyBsaWtlIGF1dGhvcml0eS5cIlxyXG4gICAgfSxcclxuICAgIG11bHRpcGxlQ2FjaGVBdXRob3JpdGllczoge1xyXG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfYXV0aG9yaXRpZXNcIixcclxuICAgICAgICBkZXNjOiBcIk11bHRpcGxlIGF1dGhvcml0aWVzIGZvdW5kIGluIHRoZSBjYWNoZS4gUGFzcyBhdXRob3JpdHkgaW4gdGhlIEFQSSBvdmVybG9hZC5cIlxyXG4gICAgfSxcclxuICAgIGVuZHBvaW50UmVzb2x1dGlvbkVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJlbmRwb2ludHNfcmVzb2x1dGlvbl9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiRXJyb3I6IGNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50cy4gUGxlYXNlIGNoZWNrIG5ldHdvcmsgYW5kIHRyeSBhZ2Fpbi5cIlxyXG4gICAgfSxcclxuICAgIHBvcFVwV2luZG93RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInBvcHVwX3dpbmRvd19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3cuIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIHVzaW5nIElFIG9yIGlmIHBvcHVwcyBhcmUgYmxvY2tlZCBpbiB0aGUgYnJvd3Nlci5cIlxyXG4gICAgfSxcclxuICAgIHRva2VuUmVuZXdhbEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ0b2tlbl9yZW5ld2FsX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUb2tlbiByZW5ld2FsIG9wZXJhdGlvbiBmYWlsZWQgZHVlIHRvIHRpbWVvdXQuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkSWRUb2tlbjoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pZF90b2tlblwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBJRCB0b2tlbiBmb3JtYXQuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkU3RhdGVFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9zdGF0ZV9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBzdGF0ZS5cIlxyXG4gICAgfSxcclxuICAgIG5vbmNlTWlzbWF0Y2hFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm9uY2VfbWlzbWF0Y2hfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIk5vbmNlIGlzIG5vdCBtYXRjaGluZywgTm9uY2UgcmVjZWl2ZWQ6IFwiXHJcbiAgICB9LFxyXG4gICAgbG9naW5Qcm9ncmVzc0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJsb2dpbl9wcm9ncmVzc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiTG9naW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxyXG4gICAgfSxcclxuICAgIGFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImFjcXVpcmV0b2tlbl9wcm9ncmVzc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiQWNxdWlyZVRva2VuX0luX1Byb2dyZXNzOiBFcnJvciBkdXJpbmcgbG9naW4gY2FsbCAtIGxvZ2luIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXCJcclxuICAgIH0sXHJcbiAgICB1c2VyQ2FuY2VsbGVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVzZXJfY2FuY2VsbGVkXCIsXHJcbiAgICAgICAgZGVzYzogXCJVc2VyIGNhbmNlbGxlZCB0aGUgZmxvdy5cIlxyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNhbGxiYWNrX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbi5cIlxyXG4gICAgfSxcclxuICAgIHVzZXJMb2dpblJlcXVpcmVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVzZXJfbG9naW5fZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWQuXCJcclxuICAgIH0sXHJcbiAgICB1c2VyRG9lc05vdEV4aXN0RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVzZXJfbm9uX2V4aXN0ZW50XCIsXHJcbiAgICAgICAgZGVzYzogXCJVc2VyIG9iamVjdCBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGNhbGwgYSBsb2dpbiBBUEkuXCJcclxuICAgIH0sXHJcbiAgICBjbGllbnRJbmZvRGVjb2RpbmdFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2xpZW50X2luZm9fZGVjb2RpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjbGllbnQgaW5mbyBjb3VsZCBub3QgYmUgcGFyc2VkL2RlY29kZWQgY29ycmVjdGx5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBjbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX25vdF9wb3B1bGF0ZWRfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBzZXJ2aWNlIGRpZCBub3QgcG9wdWxhdGUgY2xpZW50X2luZm8gaW4gdGhlIHJlc3BvbnNlLCBQbGVhc2UgdmVyaWZ5IHdpdGggdGhlIHNlcnZpY2UgdGVhbVwiXHJcbiAgICB9LFxyXG4gICAgbnVsbE9yRW1wdHlJZFRva2VuOiB7XHJcbiAgICAgICAgY29kZTogXCJudWxsX29yX2VtcHR5X2lkX3Rva2VuXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgaWRUb2tlbiBpcyBudWxsIG9yIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBpZFRva2VuTm90UGFyc2VkOiB7XHJcbiAgICAgICAgY29kZTogXCJpZF90b2tlbl9wYXJzaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJJRCB0b2tlbiBjYW5ub3QgYmUgcGFyc2VkLiBQbGVhc2UgcmV2aWV3IHN0YWNrIHRyYWNlIHRvIGRldGVybWluZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgdG9rZW5FbmNvZGluZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ0b2tlbl9lbmNvZGluZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIHRva2VuIHRvIGJlIGRlY29kZWQgaXMgbm90IGVuY29kZWQgY29ycmVjdGx5LlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZEludGVyYWN0aW9uVHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pbnRlcmFjdGlvbl90eXBlXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgaW50ZXJhY3Rpb24gdHlwZSBwYXNzZWQgdG8gdGhlIGhhbmRsZXIgd2FzIGluY29ycmVjdCBvciB1bmtub3duXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgY2xpZW50IGNvZGUgcnVubmluZyBvbiB0aGUgYnJvd3Nlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmRlc2M7XHJcbiAgICAgICAgaWYgKGVyckRldGFpbCAmJiAhVXRpbHMuaXNFbXB0eShlcnJEZXRhaWwpKSB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIERldGFpbHM6ICR7ZXJyRGV0YWlsfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuY29kZSxcclxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuZGVzY30uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU11bHRpcGxlQXV0aG9yaXRpZXNJbkNhY2hlRXJyb3Ioc2NvcGU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuY29kZSxcclxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5kZXNjfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYztcclxuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJEZXRhaWx9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZW5ld2FsRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlbmV3YWxFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZElkVG9rZW5FcnJvcihpZFRva2VuOiBJZFRva2VuKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmRlc2N9IEdpdmVuIHRva2VuOiAke2lkVG9rZW59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPOiBJcyB0aGlzIG5vdCBhIHNlY3VyaXR5IGZsYXcgdG8gc2VuZCB0aGUgdXNlciB0aGUgc3RhdGUgZXhwZWN0ZWQ/P1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKGludmFsaWRTdGF0ZTogc3RyaW5nLCBhY3R1YWxTdGF0ZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZFN0YXRlRXJyb3IuZGVzY30gJHtpbnZhbGlkU3RhdGV9LCBzdGF0ZSBleHBlY3RlZCA6ICR7YWN0dWFsU3RhdGV9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIE5vbmNlIGV4cGVjdGVkPz9cclxuICAgIHN0YXRpYyBjcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoaW52YWxpZE5vbmNlOiBzdHJpbmcsIGFjdHVhbE5vbmNlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmRlc2N9ICR7aW52YWxpZE5vbmNlfSwgbm9uY2UgZXhwZWN0ZWQgOiAke2FjdHVhbE5vbmNlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTG9naW5JblByb2dyZXNzRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVXNlckNhbmNlbGxlZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVycm9yRGVzYzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhbGxiYWNrRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWxsYmFja0Vycm9yLmRlc2N9ICR7ZXJyb3JEZXNjfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVVc2VyRG9lc05vdEV4aXN0RXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKGludmFsaWRSYXdUb2tlblN0cmluZzogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5udWxsT3JFbXB0eUlkVG9rZW4uY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5udWxsT3JFbXB0eUlkVG9rZW4uZGVzY30gUmF3IElEIFRva2VuIFZhbHVlOiAke2ludmFsaWRSYXdUb2tlblN0cmluZ31gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlblBhcnNpbmdFcnJvcihjYXVnaHRQYXJzaW5nRXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5Ob3RQYXJzZWQuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0UGFyc2luZ0Vycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVUb2tlbkVuY29kaW5nRXJyb3IoaW5jb3JyZWN0bHlFbmNvZGVkVG9rZW46IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmRlc2N9IEF0dGVtcHRlZCB0byBkZWNvZGU6ICR7aW5jb3JyZWN0bHlFbmNvZGVkVG9rZW59YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJbnRlcmFjdGlvblR5cGUuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSW50ZXJhY3Rpb25UeXBlLmRlc2MpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEVycm9yTWVzc2FnZSA9IHtcclxuICAgIHVuZXhwZWN0ZWRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidW5leHBlY3RlZF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVW5leHBlY3RlZCBlcnJvciBpbiBhdXRoZW50aWNhdGlvbi5cIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cclxuKi9cclxuZXhwb3J0IGNsYXNzIEF1dGhFcnJvciBleHRlbmRzIEVycm9yIHtcclxuXHJcbiAgICBlcnJvckNvZGU6IHN0cmluZztcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRoRXJyb3IucHJvdG90eXBlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJBdXRoRXJyb3JcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVW5leHBlY3RlZEVycm9yKGVyckRlc2M6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXV0aEVycm9yKEF1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmNvZGUsIGAke0F1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmRlc2N9OiAke2VyckRlc2N9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi9JVXJpXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlIH0gZnJvbSBcIi4vSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4vWEhSQ2xpZW50XCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGVudW0gQXV0aG9yaXR5VHlwZSB7XHJcbiAgQWFkLFxyXG4gIEFkZnMsXHJcbiAgQjJDXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXR5IHtcclxuICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCA9IHZhbGlkYXRlQXV0aG9yaXR5O1xyXG4gICAgdGhpcy5DYW5vbmljYWxBdXRob3JpdHkgPSBhdXRob3JpdHk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZUFzVXJpKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZTtcclxuXHJcbiAgcHVibGljIElzVmFsaWRhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBnZXQgVGVuYW50KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcclxuXHJcbiAgcHVibGljIGdldCBBdXRob3JpemF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuQXV0aG9yaXphdGlvbkVuZHBvaW50LnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IEVuZFNlc3Npb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5FbmRTZXNzaW9uRW5kcG9pbnQucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgU2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XHJcbiAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLklzc3Vlci5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVJlc29sdmVkKCkge1xyXG4gICAgaWYgKCF0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlKSB7XHJcbiAgICAgIHRocm93IFwiUGxlYXNlIGNhbGwgUmVzb2x2ZUVuZHBvaW50c0FzeW5jIGZpcnN0XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIFVSTCB0aGF0IGlzIHRoZSBhdXRob3JpdHkgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IENhbm9uaWNhbEF1dGhvcml0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBDYW5vbmljYWxBdXRob3JpdHkodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5ID0gVXRpbHMuQ2Fub25pY2FsaXplVXJpKHVybCk7XHJcbiAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5vbmljYWxBdXRob3JpdHk6IHN0cmluZztcclxuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM6IElVcmk7XHJcblxyXG4gIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cygpOiBJVXJpIHtcclxuICAgIGlmICghdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKSB7XHJcbiAgICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IFV0aWxzLkdldFVybENvbXBvbmVudHModGhpcy5DYW5vbmljYWxBdXRob3JpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAvLyBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1kaXNjb3ZlcnktMV8wLmh0bWwjUHJvdmlkZXJNZXRhZGF0YVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXQgRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuQ2Fub25pY2FsQXV0aG9yaXR5fXYyLjAvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb25gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBzdHJpbmcsIHZhbGlkYXRlIHRoYXQgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9kb21haW4vcGF0aFxyXG4gICAqL1xyXG4gIHByaXZhdGUgdmFsaWRhdGVBc1VyaSgpIHtcclxuICAgIGxldCBjb21wb25lbnRzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29tcG9uZW50cyA9IHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQXV0aG9yaXR5VHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbXBvbmVudHMuUHJvdG9jb2wgfHwgY29tcG9uZW50cy5Qcm90b2NvbC50b0xvd2VyQ2FzZSgpICE9PSBcImh0dHBzOlwiKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW5zZWN1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb21wb25lbnRzLlBhdGhTZWdtZW50cyB8fCBjb21wb25lbnRzLlBhdGhTZWdtZW50cy5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyB0aGUgT0lEQyBlbmRwb2ludCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2VcclxuICAgKi9cclxuICBwcml2YXRlIERpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDogc3RyaW5nKTogUHJvbWlzZTxJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcclxuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQsIFwiR0VUXCIsIC8qZW5hYmxlQ2FjaGluZzogKi8gdHJ1ZSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZT57XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmF1dGhvcml6YXRpb25fZW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgICBFbmRTZXNzaW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmVuZF9zZXNzaW9uX2VuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgSXNzdWVyOiByZXNwb25zZS5pc3N1ZXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBwcm9taXNlLlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBpbiB0aGUgY2FjaGVcclxuICAgKiBEaXNjb3ZlciBlbmRwb2ludHMgdmlhIG9wZW5pZC1jb25maWd1cmF0aW9uXHJcbiAgICogSWYgc3VjY2Vzc2Z1bCwgY2FjaGVzIHRoZSBlbmRwb2ludCBmb3IgbGF0ZXIgdXNlIGluIE9JRENcclxuICAgKi9cclxuICBwdWJsaWMgcmVzb2x2ZUVuZHBvaW50c0FzeW5jKCk6IFByb21pc2U8QXV0aG9yaXR5PiB7XHJcbiAgICBsZXQgb3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50ID0gXCJcIjtcclxuICAgIHJldHVybiB0aGlzLkdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCkudGhlbihvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSA9PiB7XHJcbiAgICAgIG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCA9IG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludFJlc3BvbnNlO1xyXG4gICAgICByZXR1cm4gdGhpcy5EaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQpO1xyXG4gICAgfSkudGhlbigodGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlID0gdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBUZW5hbnREaXNjb3ZlcnlFbmRwb2ludFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz47XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVfUFJFRklYID0gXCJtc2FsLlwiO1xyXG5leHBvcnQgY29uc3QgRVZFTlRfTkFNRV9LRVkgPSBcImV2ZW50X25hbWVcIjtcclxuZXhwb3J0IGNvbnN0IFNUQVJUX1RJTUVfS0VZID0gXCJzdGFydF90aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBFTEFQU0VEX1RJTUVfS0VZICA9IFwiZWxhcHNlZF90aW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgPSAge1xyXG4gICAgTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleTogXCJNaWNyb3NvZnQuTVNBTC5jb3JyZWxhdGlvbl9pZFwiLFxyXG4gICAgQXBpVGVsZW1JZENvbnN0U3RyS2V5OiBcIm1zYWwuYXBpX3RlbGVtX2lkXCIsXHJcbiAgICBBcGlJZENvbnN0U3RyS2V5OiBcIm1zYWwuYXBpX2lkXCIsXHJcbiAgICBCcm9rZXJBcHBDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9icm9rZXJfYXBwXCIsXHJcbiAgICBDYWNoZUV2ZW50Q291bnRDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9jYWNoZV9ldmVudF9jb3VudFwiLFxyXG4gICAgSHR0cEV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleTogXCJNaWNyb3NvZnRfTVNBTF9odHRwX2V2ZW50X2NvdW50XCIsXHJcbiAgICBJZHBDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pZHBcIixcclxuICAgIElzU2lsZW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiXCIsXHJcbiAgICBJc1N1Y2Nlc3NmdWxDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pc19zdWNjZXNzZnVsXCIsXHJcbiAgICBSZXNwb25zZVRpbWVDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9yZXNwb25zZV90aW1lXCIsXHJcbiAgICBUZW5hbnRJZENvbnN0U3RyS2V5OiBcIk1pY3Jvc29mdF9NU0FMX3RlbmFudF9pZFwiLFxyXG4gICAgVWlFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiTWljcm9zb2Z0X01TQUxfdWlfZXZlbnRfY291bnRcIlxyXG59O1xyXG5cclxuLy8gVGhpcyBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIHJlYWwgdGVuYW50IGluIHRlbGVtZXRyeSBpbmZvXHJcbmV4cG9ydCBjb25zdCBURU5BTlRfUExBQ0VIT0xERVIgPSBcIjx0ZW5hbnQ+XCI7XHJcblxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgVGVsZW1ldHJ5RW1pdHRlciB9IGZyb20gXCIuL3RlbGVtZXRyeS9UZWxlbWV0cnlUeXBlc1wiXHJcblxyXG4vKipcclxuICogQ2FjaGUgbG9jYXRpb24gb3B0aW9ucyBzdXBwb3J0ZWQgYnkgTVNBTCBhcmU6XHJcbiAqIC0gbG9jYWwgc3RvcmFnZTogTVNBTCB1c2VzIGJyb3dzZXJzIGxvY2FsIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXHJcbiAqIC0gc2Vzc2lvbiBzdG9yYWdlOiBNU0FMIHVzZXMgdGhlIGJyb3dzZXJzIHNlc3Npb24gc3RvcmFnZSB0byBzdG9yZSBpdHMgY2FjaGVcclxuICovXHJcbmV4cG9ydCBlbnVtIENhY2hlTG9jYXRpb25DaG9pY2VzIHtcclxuICBMb2NhbFN0b3JhZ2UgPSBcImxvY2FsU3RvcmFnZVwiLFxyXG4gIFNlc3Npb25TdG9yYWdlID0gXCJzZXNzaW9uU3RvcmFnZVwiXHJcbn1cclxuZXhwb3J0IHR5cGUgQ2FjaGVMb2NhdGlvbiA9IENhY2hlTG9jYXRpb25DaG9pY2VzLkxvY2FsU3RvcmFnZSB8IENhY2hlTG9jYXRpb25DaG9pY2VzLlNlc3Npb25TdG9yYWdlO1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHRzIGZvciB0aGUgQ29uZmlndXJhdGlvbiBPcHRpb25zXHJcbiAqL1xyXG5jb25zdCBGUkFNRV9USU1FT1VUID0gNjAwMDtcclxuY29uc3QgT0ZGU0VUID0gMzAwO1xyXG5jb25zdCBOQVZJR0FURV9GUkFNRV9XQUlUID0gNTAwO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSBBdXRoT3B0aW9uczogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBhdXRoIG9wdGlvbnMgaW4gdGhlIENvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAqXHJcbiAqICAtIGNsaWVudElkICAgICAgICAgICAgICAgICAgICAtIENsaWVudCBJRCBvZiB5b3VyIGFwcCByZWdpc3RlcmVkIHdpdGggb3VyIEFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwgOiBodHRwczovL3BvcnRhbC5henVyZS5jb20vI2JsYWRlL01pY3Jvc29mdF9BQURfSUFNL0FjdGl2ZURpcmVjdG9yeU1lbnVCbGFkZS9SZWdpc3RlcmVkQXBwc1ByZXZpZXcgaW4gTWljcm9zb2Z0IElkZW50aXR5IFBsYXRmb3JtXHJcbiAqICAtIGF1dGhvcml0eSAgICAgICAgICAgICAgICAgICAtIFlvdSBjYW4gY29uZmlndXJlIGEgc3BlY2lmaWMgYXV0aG9yaXR5LCBkZWZhdWx0cyB0byBcIiBcIiBvciBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxyXG4gKiAgLSB2YWxpZGF0ZUF1dGhvcml0eSAgICAgICAgICAgLSBVc2VkIHRvIHR1cm4gYXV0aG9yaXR5IHZhbGlkYXRpb24gb24vb2ZmLiBXaGVuIHNldCB0byB0cnVlIChkZWZhdWx0KSwgTVNBTCB3aWxsIGNvbXBhcmUgdGhlIGFwcGxpY2F0aW9uJ3MgYXV0aG9yaXR5IGFnYWluc3Qgd2VsbC1rbm93biBVUkxzIHRlbXBsYXRlcyByZXByZXNlbnRpbmcgd2VsbC1mb3JtZWQgYXV0aG9yaXRpZXMuIEl0IGlzIHVzZWZ1bCB3aGVuIHRoZSBhdXRob3JpdHkgaXMgb2J0YWluZWQgYXQgcnVuIHRpbWUgdG8gcHJldmVudCBNU0FMIGZyb20gZGlzcGxheWluZyBhdXRoZW50aWNhdGlvbiBwcm9tcHRzIGZyb20gbWFsaWNpb3VzIHBhZ2VzLlxyXG4gKiAgLSByZWRpcmVjdFVyaSAgICAgICAgICAgICAgICAgLSBUaGUgcmVkaXJlY3QgVVJJIG9mIHRoZSBhcHBsaWNhdGlvbiwgdGhpcyBzaG91bGQgYmUgc2FtZSBhcyB0aGUgdmFsdWUgaW4gdGhlIGFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwuRGVmYXVsdHMgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cclxuICogIC0gcG9zdExvZ291dFJlZGlyZWN0VXJpICAgICAgIC0gVXNlZCB0byByZWRpcmVjdCB0aGUgdXNlciB0byB0aGlzIGxvY2F0aW9uIGFmdGVyIGxvZ291dC4gRGVmYXVsdHMgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cclxuICogIC0gbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybCAgIC0gVXNlZCB0byB0dXJuIG9mZiBkZWZhdWx0IG5hdmlnYXRpb24gdG8gc3RhcnQgcGFnZSBhZnRlciBsb2dpbi4gRGVmYXVsdCBpcyB0cnVlLiBUaGlzIGlzIHVzZWQgb25seSBmb3IgcmVkaXJlY3QgZmxvd3MuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdXRoT3B0aW9ucyA9IHtcclxuICBjbGllbnRJZDogc3RyaW5nO1xyXG4gIGF1dGhvcml0eT86IHN0cmluZztcclxuICB2YWxpZGF0ZUF1dGhvcml0eT86IGJvb2xlYW47XHJcbiAgcmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxuICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPzogYm9vbGVhbjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhpcyB0byBjb25maWd1cmUgdGhlIGJlbG93IGNhY2hlIGNvbmZpZ3VyYXRpb24gb3B0aW9uczpcclxuICpcclxuICogLSBjYWNoZUxvY2F0aW9uICAgICAgICAgICAgLSBVc2VkIHRvIHNwZWNpZnkgdGhlIGNhY2hlTG9jYXRpb24gdXNlciB3YW50cyB0byBzZXQuIFZhbGlkIHZhbHVlcyBhcmUgXCJsb2NhbFN0b3JhZ2VcIiBhbmQgXCJzZXNzaW9uU3RvcmFnZVwiXHJcbiAqIC0gc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSAgIC0gSWYgc2V0LCBNU0FMIHN0b3JlJ3MgdGhlIGF1dGggcmVxdWVzdCBzdGF0ZSByZXF1aXJlZCBmb3IgdmFsaWRhdGlvbiBvZiB0aGUgYXV0aCBmbG93cyBpbiB0aGUgYnJvd3NlciBjb29raWVzLiBCeSBkZWZhdWx0IHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYWNoZU9wdGlvbnMgPSB7XHJcbiAgY2FjaGVMb2NhdGlvbj86IENhY2hlTG9jYXRpb247XHJcbiAgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZT86IGJvb2xlYW47XHJcbn07XHJcblxyXG4vKipcclxuICogVGVsZW1ldHJ5IENvbmZpZyBPcHRpb25zXHJcbiAqIC0gYXBwbGljYXRpb25OYW1lICAgICAgICAgICAgICAtIE5hbWUgb2YgdGhlIGNvbnN1bWluZyBhcHBzIGFwcGxpY2F0aW9uXHJcbiAqIC0gYXBwbGljYXRpb25WZXJzaW9uICAgICAgICAgICAtIFZlcmlzb24gb2YgdGhlIGNvbnN1bWluZyBhcHBsaWNhdGlvblxyXG4gKiAtIHRlbGVtZXRyeUVtaXR0ZXIgICAgICAgICAgICAgLSBGdW5jdGlvbiB3aGVyZSB0ZWxlbWV0cnkgZXZlbnRzIGFyZSBmbHVzaGVkIHRvXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUZWxlbWV0cnlPcHRpb25zID0ge1xyXG4gIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uVmVyc2lvbjogc3RyaW5nO1xyXG4gIHRlbGVtZXRyeUVtaXR0ZXI6IFRlbGVtZXRyeUVtaXR0ZXJcclxuIC8vVE9ETywgYWRkIG9ubHlBZGRGYWlsdXJlVGVsZW1ldHJ5IG9wdGlvblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIExpYnJhcnkgU3BlY2lmaWMgT3B0aW9uc1xyXG4gKlxyXG4gKiAtIGxvZ2dlciAgICAgICAgICAgICAgICAgICAgICAgLSBVc2VkIHRvIGluaXRpYWxpemUgdGhlIExvZ2dlciBvYmplY3Q7IFRPRE86IEV4cGFuZCBvbiBsb2dnZXIgZGV0YWlscyBvciBsaW5rIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGxvZ2dlclxyXG4gKiAtIGxvYWRGcmFtZVRpbWVvdXQgICAgICAgICAgICAgLSBtYXhpbXVtIHRpbWUgdGhlIGxpYnJhcnkgc2hvdWxkIHdhaXQgZm9yIGEgZnJhbWUgdG8gbG9hZFxyXG4gKiAtIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHMgICAgLSBzZXRzIHRoZSB3aW5kb3cgb2Ygb2Zmc2V0IG5lZWRlZCB0byByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyeVxyXG4gKiAtIG5hdmlnYXRlRnJhbWVXYWl0ICAgICAgICAgICAgLSBzZXRzIHRoZSB3YWl0IHRpbWUgZm9yIGhpZGRlbiBpRnJhbWUgbmF2aWdhdGlvblxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3lzdGVtT3B0aW9ucyA9IHtcclxuICBsb2dnZXI/OiBMb2dnZXI7XHJcbiAgbG9hZEZyYW1lVGltZW91dD86IG51bWJlcjtcclxuICB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzPzogbnVtYmVyO1xyXG4gIG5hdmlnYXRlRnJhbWVXYWl0PzogbnVtYmVyO1xyXG4gIHRlbGVtZXRyeT86IFRlbGVtZXRyeU9wdGlvbnNcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHAvRnJhbWV3b3JrIHNwZWNpZmljIGVudmlyb25tZW50IHN1cHBvcnRcclxuICpcclxuICogLSBpc0FuZ3VsYXIgICAgICAgICAgICAgICAgLSBmbGFnIHNldCB0byBkZXRlcm1pbmUgaWYgaXQgaXMgQW5ndWxhciBGcmFtZXdvcmsuIE1TQUwgdXNlcyB0aGlzIHRvIGJyb2FkY2FzdCB0b2tlbnMuIE1vcmUgdG8gY29tZSBoZXJlOiBkZXRhbmdsZSB0aGlzIGRlcGVuZGVuY3kgZnJvbSBjb3JlLlxyXG4gKiAtIHVucHJvdGVjdGVkUmVzb3VyY2VzICAgICAtIEFycmF5IG9mIFVSSSdzIHdoaWNoIGFyZSB1bnByb3RlY3RlZCByZXNvdXJjZXMuIE1TQUwgd2lsbCBub3QgYXR0YWNoIGEgdG9rZW4gdG8gb3V0Z29pbmcgcmVxdWVzdHMgdGhhdCBoYXZlIHRoZXNlIFVSSS4gRGVmYXVsdHMgdG8gJ251bGwnLlxyXG4gKiAtIHByb3RlY3RlZFJlc291cmNlTWFwICAgICAtIFRoaXMgaXMgbWFwcGluZyBvZiByZXNvdXJjZXMgdG8gc2NvcGVzIHVzZWQgYnkgTVNBTCBmb3IgYXV0b21hdGljYWxseSBhdHRhY2hpbmcgYWNjZXNzIHRva2VucyBpbiB3ZWIgQVBJIGNhbGxzLkEgc2luZ2xlIGFjY2VzcyB0b2tlbiBpcyBvYnRhaW5lZCBmb3IgdGhlIHJlc291cmNlLiBTbyB5b3UgY2FuIG1hcCBhIHNwZWNpZmljIHJlc291cmNlIHBhdGggYXMgZm9sbG93czoge1wiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWVcIiwgW1widXNlci5yZWFkXCJdfSwgb3IgdGhlIGFwcCBVUkwgb2YgdGhlIHJlc291cmNlIGFzOiB7XCJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vXCIsIFtcInVzZXIucmVhZFwiLCBcIm1haWwuc2VuZFwiXX0uIFRoaXMgaXMgcmVxdWlyZWQgZm9yIENPUlMgY2FsbHMuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGcmFtZXdvcmtPcHRpb25zID0ge1xyXG4gIGlzQW5ndWxhcj86IGJvb2xlYW47XHJcbiAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM/OiBBcnJheTxzdHJpbmc+O1xyXG4gIHByb3RlY3RlZFJlc291cmNlTWFwPzogTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj47XHJcbn07XHJcblxyXG4vKipcclxuICogVXNlIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBjb25maWd1cmUgTVNBTCBhbmQgaW5pdGlhbGl6ZSB0aGUgVXNlckFnZW50QXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIFRoaXMgb2JqZWN0IGFsbG93cyB5b3UgdG8gY29uZmlndXJlIGltcG9ydGFudCBlbGVtZW50cyBvZiBNU0FMIGZ1bmN0aW9uYWxpdHk6XHJcbiAqIC0gYXV0aDogdGhpcyBpcyB3aGVyZSB5b3UgY29uZmlndXJlIGF1dGggZWxlbWVudHMgbGlrZSBjbGllbnRJRCwgIGF1dGhvcml0eSB1c2VkIGZvciBhdXRoZW50aWNhdGluZyBhZ2FpbnN0IHRoZSBNaWNyb3NvZnQgSWRlbnRpdHkgUGxhdGZvcm1cclxuICogLSBjYWNoZTogdGhpcyBpcyB3aGVyZSB5b3UgY29uZmlndXJlIGNhY2hlIGxvY2F0aW9uIGFuZCB3aGV0aGVyIHRvIHN0b3JlIGNhY2hlIGluIGNvb2tpZXNcclxuICogLSBzeXN0ZW06IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIGxvZ2dlciwgZnJhbWUgdGltZW91dCBldGMuXHJcbiAqIC0gZnJhbWV3b3JrOiB0aGlzIGlzIHdoZXJlIHlvdSBjYW4gY29uZmlndXJlIHRoZSBydW5uaW5nIG1vZGUgb2YgYW5ndWxhci4gTW9yZSB0byBjb21lIGhlcmUgc29vbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgYXV0aDogQXV0aE9wdGlvbnMsXHJcbiAgY2FjaGU/OiBDYWNoZU9wdGlvbnMsXHJcbiAgc3lzdGVtPzogU3lzdGVtT3B0aW9ucyxcclxuICBmcmFtZXdvcms/OiBGcmFtZXdvcmtPcHRpb25zXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0FVVEhfT1BUSU9OUzogQXV0aE9wdGlvbnMgPSB7XHJcbiAgY2xpZW50SWQ6IFwiXCIsXHJcbiAgYXV0aG9yaXR5OiBudWxsLFxyXG4gIHZhbGlkYXRlQXV0aG9yaXR5OiB0cnVlLFxyXG4gIHJlZGlyZWN0VXJpOiAoKSA9PiBVdGlscy5nZXREZWZhdWx0UmVkaXJlY3RVcmkoKSxcclxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6ICgpID0+IFV0aWxzLmdldERlZmF1bHRSZWRpcmVjdFVyaSgpLFxyXG4gIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw6IHRydWVcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQ0FDSEVfT1BUSU9OUzogQ2FjaGVPcHRpb25zID0ge1xyXG4gIGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb25DaG9pY2VzLlNlc3Npb25TdG9yYWdlLFxyXG4gIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBTeXN0ZW1PcHRpb25zID0ge1xyXG4gIGxvZ2dlcjogbmV3IExvZ2dlcihudWxsKSxcclxuICBsb2FkRnJhbWVUaW1lb3V0OiBGUkFNRV9USU1FT1VULFxyXG4gIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IE9GRlNFVCxcclxuICBuYXZpZ2F0ZUZyYW1lV2FpdDogTkFWSUdBVEVfRlJBTUVfV0FJVFxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUzogRnJhbWV3b3JrT3B0aW9ucyA9IHtcclxuICBpc0FuZ3VsYXI6IGZhbHNlLFxyXG4gIHVucHJvdGVjdGVkUmVzb3VyY2VzOiBuZXcgQXJyYXk8c3RyaW5nPigpLFxyXG4gIHByb3RlY3RlZFJlc291cmNlTWFwOiBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1TQUwgZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgd2hlbiBub3QgZXhwbGljaXRseSBjb25maWd1cmVkIGZyb20gYXBwIGRldmVsb3BlclxyXG4gKlxyXG4gKiBAcGFyYW0gVEF1dGhPcHRpb25zXHJcbiAqIEBwYXJhbSBUQ2FjaGVPcHRpb25zXHJcbiAqIEBwYXJhbSBUU3lzdGVtT3B0aW9uc1xyXG4gKiBAcGFyYW0gVEZyYW1ld29ya09wdGlvbnNcclxuICpcclxuICogQHJldHVybnMgVENvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlndXJhdGlvbih7IGF1dGgsIGNhY2hlID0ge30sIHN5c3RlbSA9IHt9LCBmcmFtZXdvcmsgPSB7fX06IENvbmZpZ3VyYXRpb24pOiBDb25maWd1cmF0aW9uIHtcclxuICBjb25zdCBvdmVybGF5ZWRDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBhdXRoOiB7IC4uLkRFRkFVTFRfQVVUSF9PUFRJT05TLCAuLi5hdXRoIH0sXHJcbiAgICBjYWNoZTogeyAuLi5ERUZBVUxUX0NBQ0hFX09QVElPTlMsIC4uLmNhY2hlIH0sXHJcbiAgICBzeXN0ZW06IHsgLi4uREVGQVVMVF9TWVNURU1fT1BUSU9OUywgLi4uc3lzdGVtIH0sXHJcbiAgICBmcmFtZXdvcms6IHsgLi4uREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUywgLi4uZnJhbWV3b3JrIH1cclxuICB9O1xyXG4gIHJldHVybiBvdmVybGF5ZWRDb25maWc7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2dlckNhbGxiYWNrIHtcclxuICAobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gIEVycm9yLFxyXG4gIFdhcm5pbmcsXHJcbiAgSW5mbyxcclxuICBWZXJib3NlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIgey8vIFNpbmdsZXRvbiBDbGFzc1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgLy8gVE9ETzogVGhpcyBkb2VzIG5vdCBzZWVtIHRvIGJlIGEgc2luZ2xldG9uISEgQ2hhbmdlIG9yIERlbGV0ZS5cclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VyO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjb3JyZWxhdGlvbklkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGxldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkluZm87XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2s7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjayxcclxuICAgICAgb3B0aW9uczpcclxuICAgICAge1xyXG4gICAgICAgICAgY29ycmVsYXRpb25JZD86IHN0cmluZyxcclxuICAgICAgICAgIGxldmVsPzogTG9nTGV2ZWwsXHJcbiAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4sXHJcbiAgICAgIH0gPSB7fSkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgICBjb3JyZWxhdGlvbklkID0gXCJcIixcclxuICAgICAgICAgIGxldmVsID0gTG9nTGV2ZWwuSW5mbyxcclxuICAgICAgICAgIHBpaUxvZ2dpbmdFbmFibGVkID0gZmFsc2VcclxuICAgICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICB0aGlzLmxvY2FsQ2FsbGJhY2sgPSBsb2NhbENhbGxiYWNrO1xyXG4gICAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBjb3JyZWxhdGlvbklkO1xyXG4gICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XHJcbiAgICAgIHRoaXMucGlpTG9nZ2luZ0VuYWJsZWQgPSBwaWlMb2dnaW5nRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGxvZ01lc3NhZ2UobG9nTGV2ZWw6IExvZ0xldmVsLCBsb2dNZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoKGxvZ0xldmVsID4gdGhpcy5sZXZlbCkgfHwgKCF0aGlzLnBpaUxvZ2dpbmdFbmFibGVkICYmIGNvbnRhaW5zUGlpKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XHJcbiAgICBsZXQgbG9nOiBzdHJpbmc7XHJcbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkodGhpcy5jb3JyZWxhdGlvbklkKSkge1xyXG4gICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIHRoaXMuY29ycmVsYXRpb25JZCArIFwiLVwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5leGVjdXRlQ2FsbGJhY2sobG9nTGV2ZWwsIGxvZywgY29udGFpbnNQaWkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIGV4ZWN1dGVDYWxsYmFjayhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmxvY2FsQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5sb2NhbENhbGxiYWNrKGxldmVsLCBtZXNzYWdlLCBjb250YWluc1BpaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBlcnJvclBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgd2FybmluZ1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBpbmZvUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHZlcmJvc2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHZlcmJvc2VQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBpc1BpaUxvZ2dpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGlpTG9nZ2luZ0VuYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9BdXRoRXJyb3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2ZXJFcnJvck1lc3NhZ2UgPSB7XHJcbiAgICBzZXJ2ZXJVbmF2YWlsYWJsZToge1xyXG4gICAgICAgIGNvZGU6IFwic2VydmVyX3VuYXZhaWxhYmxlXCIsXHJcbiAgICAgICAgZGVzYzogXCJTZXJ2ZXIgaXMgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUuXCJcclxuICAgIH0sXHJcbiAgICB1bmtub3duU2VydmVyRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVua25vd25fc2VydmVyX2Vycm9yXCJcclxuICAgIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3Igd2l0aCB0aGUgc2VydmVyIGNvZGUsIGZvciBleGFtcGxlLCB1bmF2YWlsYWJpbGl0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJFcnJvciBleHRlbmRzIEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlNlcnZlckVycm9yXCI7XHJcblxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBTZXJ2ZXJFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVTZXJ2ZXJVbmF2YWlsYWJsZUVycm9yKCk6IFNlcnZlckVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNlcnZlckVycm9yKFNlcnZlckVycm9yTWVzc2FnZS5zZXJ2ZXJVbmF2YWlsYWJsZS5jb2RlLFxyXG4gICAgICAgICAgICBTZXJ2ZXJFcnJvck1lc3NhZ2Uuc2VydmVyVW5hdmFpbGFibGUuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVVua25vd25TZXJ2ZXJFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IFNlcnZlckVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNlcnZlckVycm9yKFNlcnZlckVycm9yTWVzc2FnZS51bmtub3duU2VydmVyRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgZXJyb3JEZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5DYWNoZUl0ZW0gfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbkNhY2hlSXRlbVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlblZhbHVlXCI7XHJcbmltcG9ydCB7IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudEluZm8gfSBmcm9tIFwiLi9DbGllbnRJbmZvXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cywgU1NPVHlwZXMsIFByb21wdFN0YXRlLCBCbGFja2xpc3RlZEVRUGFyYW1zLCBJbnRlcmFjdGlvblR5cGUgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5RmFjdG9yeSB9IGZyb20gXCIuL0F1dGhvcml0eUZhY3RvcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgYnVpbGRDb25maWd1cmF0aW9uLCBUZWxlbWV0cnlPcHRpb25zIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9BdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgQXV0aFJlc3BvbnNlLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5IH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XHJcbmltcG9ydCBUZWxlbWV0cnlNYW5hZ2VyIGZyb20gXCIuL3RlbGVtZXRyeS9UZWxlbWV0cnlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRlbGVtZXRyeVBsYXRmb3JtLCBUZWxlbWV0cnlDb25maWcgfSBmcm9tICcuL3RlbGVtZXRyeS9UZWxlbWV0cnlUeXBlcyc7XHJcbiAvLyBkZWZhdWx0IGF1dGhvcml0eVxyXG5jb25zdCBERUZBVUxUX0FVVEhPUklUWSA9IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0byBoYW5kbGUgaUZyYW1lIGdlbmVyYXRpb24sIFBvcHVwIFdpbmRvdyBjcmVhdGlvbiBhbmQgcmVkaXJlY3QgaGFuZGxpbmdcclxuICovXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIG1zYWw6IE9iamVjdDtcclxuICAgICAgICBDdXN0b21FdmVudDogQ3VzdG9tRXZlbnQ7XHJcbiAgICAgICAgRXZlbnQ6IEV2ZW50O1xyXG4gICAgICAgIGFjdGl2ZVJlbmV3YWxzOiB7fTtcclxuICAgICAgICByZW5ld1N0YXRlczogQXJyYXk8c3RyaW5nPjtcclxuICAgICAgICBjYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXMgOiB7fTtcclxuICAgICAgICBwcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlczoge307XHJcbiAgICAgICAgb3BlbmVkV2luZG93czogQXJyYXk8V2luZG93PjtcclxuICAgICAgICByZXF1ZXN0VHlwZTogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBAaWdub3JlXHJcbiAqIHJlc3BvbnNlX3R5cGUgZnJvbSBPcGVuSURDb25uZWN0XHJcbiAqIFJlZmVyZW5jZXM6IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vYXV0aC12Mi1tdWx0aXBsZS1yZXNwb25zZS10eXBlcy0xXzAuaHRtbCAmIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNC4yLjFcclxuICogU2luY2Ugd2Ugc3VwcG9ydCBvbmx5IGltcGxpY2l0IGZsb3cgaW4gdGhpcyBsaWJyYXJ5LCB3ZSByZXN0cmljdCB0aGUgcmVzcG9uc2VfdHlwZSBzdXBwb3J0IHRvIG9ubHkgJ3Rva2VuJyBhbmQgJ2lkX3Rva2VuJ1xyXG4gKlxyXG4gKi9cclxuY29uc3QgUmVzcG9uc2VUeXBlcyA9IHtcclxuICBpZF90b2tlbjogXCJpZF90b2tlblwiLFxyXG4gIHRva2VuOiBcInRva2VuXCIsXHJcbiAgaWRfdG9rZW5fdG9rZW46IFwiaWRfdG9rZW4gdG9rZW5cIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYWNoZVJlc3VsdCB7XHJcbiAgZXJyb3JEZXNjOiBzdHJpbmc7XHJcbiAgdG9rZW46IHN0cmluZztcclxuICBlcnJvcjogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBAaWdub3JlXHJcbiAqIERhdGEgdHlwZSB0byBob2xkIGluZm9ybWF0aW9uIGFib3V0IHN0YXRlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2VTdGF0ZUluZm8gPSB7XHJcbiAgc3RhdGU6IHN0cmluZztcclxuICBzdGF0ZU1hdGNoOiBib29sZWFuO1xyXG4gIHJlcXVlc3RUeXBlOiBzdHJpbmc7XHJcbn07XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhbiBhdXRoUmVzcG9uc2VDYWxsYmFjayBmdW5jdGlvbi5cclxuICoge0BsaW5rIChhdXRoUmVzcG9uc2VDYWxsYmFjazp0eXBlKX1cclxuICogQHBhcmFtIGF1dGhFcnIgZXJyb3IgY3JlYXRlZCBmb3IgZmFpbHVyZSBjYXNlc1xyXG4gKiBAcGFyYW0gcmVzcG9uc2UgcmVzcG9uc2UgY29udGFpbmluZyB0b2tlbiBzdHJpbmdzIGluIHN1Y2Nlc3MgY2FzZXMsIG9yIGp1c3Qgc3RhdGUgdmFsdWUgaW4gZXJyb3IgY2FzZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIGF1dGhSZXNwb25zZUNhbGxiYWNrID0gKGF1dGhFcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U/OiBBdXRoUmVzcG9uc2UpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhIHRva2VuUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cclxuICoge0BsaW5rICh0b2tlblJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9XHJcbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIChBdXRoUmVzcG9uc2U6dHlwZSl9XHJcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2V0IHRoZSBjYWxsIGJhY2sgb25jZSB0aGlzIEFQSSBpcyBjb21wbGV0ZWQgKGVpdGhlciBzdWNjZXNzZnVsbHkgb3Igd2l0aCBhIGZhaWx1cmUpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhIGVycm9yUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cclxuICoge0BsaW5rIChlcnJvclJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9XHJcbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIChBdXRoRXJyb3I6Y2xhc3MpfVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhY2NvdW50IHN0YXRlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSAoYXV0aEVycjogQXV0aEVycm9yLCBhY2NvdW50U3RhdGU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIEBpZ25vcmVcclxuICogQSB3cmFwcGVyIHRvIGhhbmRsZSB0aGUgdG9rZW4gcmVzcG9uc2UvZXJyb3Igd2l0aGluIHRoZSBpRnJhbWUgYWx3YXlzXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIHByb3BlcnR5S2V5XHJcbiAqIEBwYXJhbSBkZXNjcmlwdG9yXHJcbiAqL1xyXG5jb25zdCByZXNvbHZlVG9rZW5Pbmx5SWZPdXRPZklmcmFtZSA9ICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgY29uc3QgdG9rZW5BY3F1aXNpdGlvbk1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc0luSWZyYW1lKClcclxuICAgICAgICAgID8gbmV3IFByb21pc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiB0b2tlbkFjcXVpc2l0aW9uTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gIH07XHJcbiAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbn07XHJcblxyXG4vKipcclxuICogVXNlckFnZW50QXBwbGljYXRpb24gY2xhc3NcclxuICpcclxuICogT2JqZWN0IEluc3RhbmNlIHRoYXQgdGhlIGRldmVsb3BlciBjYW4gdXNlIHRvIG1ha2UgbG9naW5YWCBPUiBhY3F1aXJlVG9rZW5YWCBmdW5jdGlvbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB7XHJcblxyXG4gIC8vIGlucHV0IENvbmZpZ3VyYXRpb24gYnkgdGhlIGRldmVsb3Blci91c2VyXHJcbiAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb247XHJcblxyXG4gIC8vIGNhbGxiYWNrcyBmb3IgdG9rZW4vZXJyb3JcclxuICBwcml2YXRlIGF1dGhSZXNwb25zZUNhbGxiYWNrOiBhdXRoUmVzcG9uc2VDYWxsYmFjayA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0b2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XHJcbiAgcHJpdmF0ZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XHJcblxyXG4gIC8vIEFkZGVkIGZvciByZWFkYWJpbGl0eSBhcyB0aGVzZSBwYXJhbXMgYXJlIHZlcnkgZnJlcXVlbnRseSB1c2VkXHJcbiAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcclxuICBwcml2YXRlIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBpbkNvb2tpZTogYm9vbGVhbjtcclxuICBwcml2YXRlIHRlbGVtZXRyeU1hbmFnZXI6IFRlbGVtZXRyeU1hbmFnZXI7XHJcblxyXG4gIC8vIENhY2hlIGFuZCBBY2NvdW50IGluZm8gcmVmZXJyZWQgYWNyb3NzIHRva2VuIGdyYW50IGZsb3dcclxuICBwcm90ZWN0ZWQgY2FjaGVTdG9yYWdlOiBTdG9yYWdlO1xyXG4gIHByaXZhdGUgYWNjb3VudDogQWNjb3VudDtcclxuXHJcbiAgLy8gc3RhdGUgdmFyaWFibGVzXHJcbiAgcHJpdmF0ZSBsb2dpbkluUHJvZ3Jlc3M6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBhY3F1aXJlVG9rZW5JblByb2dyZXNzOiBib29sZWFuO1xyXG4gIHByaXZhdGUgc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2lsZW50TG9naW46IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSByZWRpcmVjdENhbGxiYWNrc1NldDogYm9vbGVhbjtcclxuXHJcbiAgLy8gQXV0aG9yaXR5IEZ1bmN0aW9uYWxpdHlcclxuICBwcm90ZWN0ZWQgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcclxuXHJcbiAgLyoqXHJcbiAgICogc2V0dGVyIGZvciB0aGUgYXV0aG9yaXR5IFVSTFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3JpdHlcclxuICAgKi9cclxuICAvLyBJZiB0aGUgZGV2ZWxvcGVyIHBhc3NlcyBhbiBhdXRob3JpdHksIGNyZWF0ZSBhbiBpbnN0YW5jZVxyXG4gIHB1YmxpYyBzZXQgYXV0aG9yaXR5KHZhbCkge1xyXG4gICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodmFsLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCB0byBtYW5hZ2UgdGhlIGF1dGhvcml0eSBVUkwuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhdXRob3JpdHlcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjdXJyZW50IGF1dGhvcml0eSBpbnN0YW5jZSBmcm9tIHRoZSBNU0FMIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7QGxpbmsgQXV0aG9yaXR5fSBhdXRob3JpdHkgaW5zdGFuY2VcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0QXV0aG9yaXR5SW5zdGFuY2UoKTogQXV0aG9yaXR5IHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiBvYmplY3RcclxuICAgKlxyXG4gICAqIEltcG9ydGFudCBhdHRyaWJ1dGVzIGluIHRoZSBDb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYXV0aCBhcmU6XHJcbiAgICogLSBjbGllbnRJRDogdGhlIGFwcGxpY2F0aW9uIElEIG9mIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICogWW91IGNhbiBvYnRhaW4gb25lIGJ5IHJlZ2lzdGVyaW5nIHlvdXIgYXBwbGljYXRpb24gd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlld1xyXG4gICAqIC0gYXV0aG9yaXR5OiB0aGUgYXV0aG9yaXR5IFVSTCBmb3IgeW91ciBhcHBsaWNhdGlvbi5cclxuICAgKlxyXG4gICAqIEluIEF6dXJlIEFELCBhdXRob3JpdHkgaXMgYSBVUkwgaW5kaWNhdGluZyB0aGUgQXp1cmUgYWN0aXZlIGRpcmVjdG9yeSB0aGF0IE1TQUwgdXNlcyB0byBvYnRhaW4gdG9rZW5zLlxyXG4gICAqIEl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS8mbHQ7RW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmUmZ3Q7LlxyXG4gICAqIElmIHlvdXIgYXBwbGljYXRpb24gc3VwcG9ydHMgQWNjb3VudHMgaW4gb25lIG9yZ2FuaXphdGlvbmFsIGRpcmVjdG9yeSwgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCB0aGUgVGVuYW50IElkIG9yIFRlbmFudCBuYW1lIChmb3IgZXhhbXBsZSwgY29udG9zby5taWNyb3NvZnQuY29tKS5cclxuICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIGFueSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggb3JnYW5pemF0aW9ucy5cclxuICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIGFueSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnkgYW5kIHBlcnNvbmFsIE1pY3Jvc29mdCBhY2NvdW50cywgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCBjb21tb24uXHJcbiAgICogVG8gcmVzdHJpY3Qgc3VwcG9ydCB0byBQZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMgb25seSwgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCBjb25zdW1lcnMuXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEluIEF6dXJlIEIyQywgYXV0aG9yaXR5IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O2luc3RhbmNlJmd0Oy90ZnAvJmx0O3RlbmFudCZndDsvJmx0O3BvbGljeU5hbWUmZ3Q7L1xyXG5cclxuICAgKiBAcGFyYW0ge0BsaW5rIChDb25maWd1cmF0aW9uOnR5cGUpfSBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgdGhlIE1TQUwgVXNlckFnZW50QXBwbGljYXRpb24gaW5zdGFuY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBDb25maWd1cmF0aW9uXHJcbiAgICB0aGlzLmNvbmZpZyA9IGJ1aWxkQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGNhbGxiYWNrIGJvb2xlYW5cclxuICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmxvZ2dlciA9IHRoaXMuY29uZmlnLnN5c3RlbS5sb2dnZXI7XHJcbiAgICB0aGlzLmNsaWVudElkID0gdGhpcy5jb25maWcuYXV0aC5jbGllbnRJZDtcclxuICAgIHRoaXMuaW5Db29raWUgPSB0aGlzLmNvbmZpZy5jYWNoZS5zdG9yZUF1dGhTdGF0ZUluQ29va2llO1xyXG5cclxuICAgIHRoaXMudGVsZW1ldHJ5TWFuYWdlciA9IHRoaXMuZ2V0VGVsZW1ldHJ5TWFuYWdlckZyb21Db25maWcodGhpcy5jb25maWcuc3lzdGVtLnRlbGVtZXRyeSwgdGhpcy5jbGllbnRJZCk7XHJcblxyXG4gICAgLy8gaWYgbm8gYXV0aG9yaXR5IGlzIHBhc3NlZCwgc2V0IHRoZSBkZWZhdWx0OiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxyXG4gICAgdGhpcy5hdXRob3JpdHkgPSB0aGlzLmNvbmZpZy5hdXRoLmF1dGhvcml0eSB8fCBERUZBVUxUX0FVVEhPUklUWTtcclxuXHJcbiAgICAvLyB0cmFjayBsb2dpbiBhbmQgYWNxdWlyZVRva2VuIGluIHByb2dyZXNzXHJcbiAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgLy8gY2FjaGUga2V5cyBtc2FsIC0gdHlwZXNjcmlwdCB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IHZhbHVlIG90aGVyIHRoYW4gXCJsb2NhbFN0b3JhZ2VcIiBvciBcInNlc3Npb25TdG9yYWdlXCIgaXMgcGFzc2VkXHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZSA9IG5ldyBTdG9yYWdlKHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FjaGVMb2NhdGlvbkNvbmZpZ0Vycm9yKHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgd2luZG93IGhhbmRsaW5nIGNvZGVcclxuICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzID0gW107XHJcbiAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHMgPSB7fTtcclxuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA9IHsgfTtcclxuICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlcyA9IHsgfTtcclxuICAgIHdpbmRvdy5tc2FsID0gdGhpcztcclxuXHJcbiAgICBjb25zdCB1cmxIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICBjb25zdCB1cmxDb250YWluc0hhc2ggPSB0aGlzLnVybENvbnRhaW5zSGFzaCh1cmxIYXNoKTtcclxuXHJcbiAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5mcmFtZXdvcmsuaXNBbmd1bGFyKSB7XHJcbiAgICAgIGlmICh1cmxDb250YWluc0hhc2gpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UodXJsSGFzaCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBSZWRpcmVjdCBDYWxsYmFja3NcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIFNldCB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIGZvciB0aGUgcmVkaXJlY3QgZmxvdyB0byBzZW5kIGJhY2sgdGhlIHN1Y2Nlc3Mgb3IgZXJyb3Igb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgKHRva2VuUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX0gc3VjY2Vzc0NhbGxiYWNrIC0gQ2FsbGJhY2sgd2hpY2ggY29udGFpbnMgdGhlIEF1dGhSZXNwb25zZSBvYmplY3QsIGNvbnRhaW5pbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICogQHBhcmFtIHtAbGluayAoZXJyb3JSZWNlaXZlZENhbGxiYWNrOnR5cGUpfSBlcnJvckNhbGxiYWNrIC0gQ2FsbGJhY2sgd2hpY2ggY29udGFpbnMgYSBBdXRoRXJyb3Igb2JqZWN0LCBjb250YWluaW5nIGVycm9yIGRhdGEgZnJvbSBlaXRoZXIgdGhlIHNlcnZlclxyXG4gICAqIG9yIHRoZSBsaWJyYXJ5LCBkZXBlbmRpbmcgb24gdGhlIG9yaWdpbiBvZiB0aGUgZXJyb3IuXHJcbiAgICovXHJcbiAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayh0b2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjaywgZXJyb3JSZWNlaXZlZENhbGxiYWNrOiBlcnJvclJlY2VpdmVkQ2FsbGJhY2spOiB2b2lkO1xyXG4gIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2soYXV0aENhbGxiYWNrOiBhdXRoUmVzcG9uc2VDYWxsYmFjayk6IHZvaWQ7XHJcbiAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayhhdXRoT3JUb2tlbkNhbGxiYWNrOiBhdXRoUmVzcG9uc2VDYWxsYmFjayB8IHRva2VuUmVjZWl2ZWRDYWxsYmFjaywgZXJyb3JSZWNlaXZlZENhbGxiYWNrPzogZXJyb3JSZWNlaXZlZENhbGxiYWNrKTogdm9pZCB7XHJcbiAgICBpZiAoIWF1dGhPclRva2VuQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoYXV0aE9yVG9rZW5DYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGNhbGxiYWNrc1xyXG4gICAgaWYgKGVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLnRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IGF1dGhPclRva2VuQ2FsbGJhY2sgYXMgdG9rZW5SZWNlaXZlZENhbGxiYWNrO1xyXG4gICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IGVycm9yUmVjZWl2ZWRDYWxsYmFjaztcclxuICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIlRoaXMgb3ZlcmxvYWQgZm9yIGNhbGxiYWNrIGlzIGRlcHJlY2F0ZWQgLSBwbGVhc2UgY2hhbmdlIHRoZSBmb3JtYXQgb2YgdGhlIGNhbGxiYWNrcyB0byBhIHNpbmdsZSBjYWxsYmFjayBhcyBzaG93bjogKGVycjogQXV0aEVycm9yLCByZXNwb25zZTogQXV0aFJlc3BvbnNlKS5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyBhdXRoUmVzcG9uc2VDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5mcmFtZXdvcmsuaXNBbmd1bGFyKSB7XHJcbiAgICAgIGNvbnN0IGNhY2hlZEhhc2ggPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuICAgICAgaWYgKGNhY2hlZEhhc2gpIHtcclxuICAgICAgICB0aGlzLnByb2Nlc3NDYWxsQmFjayhjYWNoZWRIYXNoLCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdXRoUmVzcG9uc2VIYW5kbGVyKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCByZXNwb25zZTogQXV0aFJlc3BvbnNlLCByZXNvbHZlPzogYW55KSA6IHZvaWQge1xyXG4gICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayhudWxsLCByZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEludGVyYWN0aW9uVHlwZUVycm9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIGF1dGhFcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgcmVqZWN0PzogYW55KSA6IHZvaWQge1xyXG4gICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKGF1dGhFcnIsIHJlc3BvbnNlLmFjY291bnRTdGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayhhdXRoRXJyLCByZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcclxuICAgICAgcmVqZWN0KGF1dGhFcnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcbiAgLyoqXHJcbiAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyBieSByZWRpcmVjdGluZyB0aGUgdXNlcidzIGJyb3dzZXIgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXHJcbiAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxyXG4gICAqL1xyXG4gIGxvZ2luUmVkaXJlY3QocmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxyXG4gICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCwgdHJ1ZSwgcmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2Ugd2hlbiB5b3Ugd2FudCB0byBvYnRhaW4gYW4gYWNjZXNzX3Rva2VuIGZvciB5b3VyIEFQSSBieSByZWRpcmVjdGluZyB0aGUgdXNlcidzIGJyb3dzZXIgd2luZG93IHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50LlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cclxuICAgKlxyXG4gICAqIFRvIHJlbmV3IGlkVG9rZW4sIHBsZWFzZSBwYXNzIGNsaWVudElkIGFzIHRoZSBvbmx5IHNjb3BlIGluIHRoZSBBdXRoZW50aWNhdGlvbiBQYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgYWNxdWlyZVRva2VuUmVkaXJlY3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogdm9pZCB7XHJcbiAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxyXG4gICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCwgZmFsc2UsIHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxBdXRoUmVzcG9uc2U+fSAtIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUge0BsaW5rIEF1dGhSZXNwb25zZX0gb2JqZWN0XHJcbiAgICovXHJcbiAgbG9naW5Qb3B1cChyZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXAsIHRydWUsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3NlclxyXG4gICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxyXG4gICAqXHJcbiAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxyXG4gICAqL1xyXG4gIGFjcXVpcmVUb2tlblBvcHVwKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XHJcbiAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCwgZmFsc2UsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBBY3F1aXJlIFRva2VuXHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3Mgb3Igd2hlbiB5b3Ugd2FudCB0byBvYnRhaW4gYW4gYWNjZXNzX3Rva2VuIGZvciB5b3VyIEFQSSxcclxuICAgKiBlaXRoZXIgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHdpbmRvdyB0byB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludCBvciB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXIuXHJcbiAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxyXG4gICAqXHJcbiAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcclxuICAgKi9cclxuICBwcml2YXRlIGFjcXVpcmVUb2tlbkludGVyYWN0aXZlKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbDogYm9vbGVhbiwgcmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgcmVzb2x2ZT86IGFueSwgcmVqZWN0PzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgLy8gSWYgYWxyZWFkeSBpbiBwcm9ncmVzcywgZG8gbm90IHByb2NlZWRcclxuICAgIGlmICh0aGlzLmxvZ2luSW5Qcm9ncmVzcyB8fCB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MpIHtcclxuICAgICAgY29uc3QgdGhyb3duRXJyb3IgPSB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA/IENsaWVudEF1dGhFcnJvci5jcmVhdGVMb2dpbkluUHJvZ3Jlc3NFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NFcnJvcigpO1xyXG4gICAgICBjb25zdCBzdGF0ZU9ubHlSZXNwb25zZSA9IGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkodGhpcy5nZXRBY2NvdW50U3RhdGUocmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlKSk7XHJcbiAgICAgIHRoaXMuYXV0aEVycm9ySGFuZGxlcihpbnRlcmFjdGlvblR5cGUsXHJcbiAgICAgICAgdGhyb3duRXJyb3IsXHJcbiAgICAgICAgc3RhdGVPbmx5UmVzcG9uc2UsXHJcbiAgICAgICAgcmVqZWN0KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGV4dHJhU2NvcGVzVG9Db25zZW50IGlzIHBhc3NlZCBpbiBsb2dpbkNhbGwsIGFwcGVuZCB0aGVtIHRvIHRoZSBsb2dpbiByZXF1ZXN0XHJcbiAgICBjb25zdCBzY29wZXM6IEFycmF5PHN0cmluZz4gPSBpc0xvZ2luQ2FsbCA/IHRoaXMuYXBwZW5kU2NvcGVzKHJlcXVlc3QpIDogcmVxdWVzdC5zY29wZXM7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShzY29wZXMsICFpc0xvZ2luQ2FsbCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBhY2NvdW50IG9iamVjdCBpZiBhIHNlc3Npb24gZXhpc3RzXHJcbiAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gKHJlcXVlc3QgJiYgcmVxdWVzdC5hY2NvdW50ICYmICFpc0xvZ2luQ2FsbCkgPyByZXF1ZXN0LmFjY291bnQgOiB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAvLyBJZiBubyBzZXNzaW9uIGV4aXN0cywgcHJvbXB0IHRoZSB1c2VyIHRvIGxvZ2luLlxyXG4gICAgaWYgKCFhY2NvdW50ICYmICFVdGlscy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XHJcbiAgICAgIGlmIChpc0xvZ2luQ2FsbCkge1xyXG4gICAgICAgIC8vIGV4dHJhY3QgQURBTCBpZF90b2tlbiBpZiBleGlzdHNcclxuICAgICAgICBsZXQgYWRhbElkVG9rZW4gPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xyXG5cclxuICAgICAgICAvLyBzaWxlbnQgbG9naW4gaWYgQURBTCBpZF90b2tlbiBpcyByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5IC0gU1NPXHJcbiAgICAgICAgaWYgKGFkYWxJZFRva2VuICYmICFzY29wZXMpIHtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XHJcbiAgICAgICAgICBsZXQgdG9rZW5SZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB0aGlzLmJ1aWxkSURUb2tlblJlcXVlc3QocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVbmlmaWVkIGNhY2hlIGNhbGwgaXMgc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlSGFuZGxlcihpbnRlcmFjdGlvblR5cGUsIHJlc3BvbnNlLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFM6IFwiICsgZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgLy8gcHJvY2VlZCB0byBsb2dpbiBzaW5jZSBBVFMgZmFpbGVkXHJcbiAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSGVscGVyKG51bGwsIGludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGwsIHJlcXVlc3QsIHNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBObyBBREFMIHRva2VuIGZvdW5kLCBwcm9jZWVkIHRvIGxvZ2luXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkhlbHBlcihudWxsLCBpbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsLCByZXF1ZXN0LCBzY29wZXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEFjcXVpcmVUb2tlbiBjYWxsLCBidXQgbm8gYWNjb3VudCBvciBjb250ZXh0IGdpdmVuLCBzbyB0aHJvdyBlcnJvclxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBVc2VyIHNlc3Npb24gZXhpc3RzXHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIoYWNjb3VudCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgc2NvcGVzLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gYWNxdWlyZVRva2VuXHJcbiAgICpcclxuICAgKi9cclxuICBwcml2YXRlIGFjcXVpcmVUb2tlbkhlbHBlcihhY2NvdW50OiBBY2NvdW50LCBpbnRlcmFjdGlvblR5cGU6IEludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGw6IGJvb2xlYW4sIHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHNjb3Blcz86IEFycmF5PHN0cmluZz4sIHJlc29sdmU/OiBhbnksIHJlamVjdD86IGFueSk6IHZvaWQge1xyXG4gICAgLy8gVHJhY2sgdGhlIGFjcXVpcmVUb2tlbiBwcm9ncmVzc1xyXG4gICAgaWYgKGlzTG9naW5DYWxsKSB7XHJcbiAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2NvcGUgPSBzY29wZXMgPyBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKSA6IHRoaXMuY2xpZW50SWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycztcclxuICAgIGNvbnN0IGFjcXVpcmVUb2tlbkF1dGhvcml0eSA9ICghaXNMb2dpbkNhbGwgJiYgcmVxdWVzdCAmJiByZXF1ZXN0LmF1dGhvcml0eSkgPyBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSA6IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XHJcblxyXG4gICAgbGV0IHBvcFVwV2luZG93OiBXaW5kb3c7XHJcbiAgICBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcclxuICAgICAgLy8gR2VuZXJhdGUgYSBwb3B1cCB3aW5kb3dcclxuICAgICAgcG9wVXBXaW5kb3cgPSB0aGlzLm9wZW5XaW5kb3coXCJhYm91dDpibGFua1wiLCBcIl9ibGFua1wiLCAxLCB0aGlzLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICBpZiAoIXBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgLy8gV2UgcGFzcyByZWplY3QgaW4gb3BlbldpbmRvdywgd2UgcmVqZWN0IHRoZXJlIGR1cmluZyBhbiBlcnJvclxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKCgpID0+IHtcclxuICAgICAgLy8gT24gRnVsZmlsbG1lbnRcclxuICAgICAgY29uc3QgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSBpc0xvZ2luQ2FsbCA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCBzY29wZXMsIGZhbHNlKTtcclxuICAgICAgbGV0IGxvZ2luU3RhcnRQYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgICBpZiAoaXNMb2dpbkNhbGwpIHtcclxuICAgICAgICAvLyBpZiB0aGUgdXNlciBzZXRzIHRoZSBsb2dpbiBzdGFydCBwYWdlIC0gYW5ndWxhciBvbmx5Pz9cclxuICAgICAgICBsb2dpblN0YXJ0UGFnZSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFuZ3VsYXJMb2dpblJlcXVlc3QpO1xyXG4gICAgICAgIGlmICghbG9naW5TdGFydFBhZ2UgfHwgbG9naW5TdGFydFBhZ2UgPT09IFwiXCIpIHtcclxuICAgICAgICAgIGxvZ2luU3RhcnRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmFuZ3VsYXJMb2dpblJlcXVlc3QsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eSxcclxuICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgIHNjb3BlcyxcclxuICAgICAgICByZXNwb25zZVR5cGUsXHJcbiAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxyXG4gICAgICAgIHJlcXVlc3QgJiYgcmVxdWVzdC5zdGF0ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVDYWNoZUVudHJpZXMoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50LCBsb2dpblN0YXJ0UGFnZSk7XHJcblxyXG4gICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG5cclxuICAgICAgLy8gQ29uc3RydWN0IHVybCB0byBuYXZpZ2F0ZSB0b1xyXG4gICAgICBsZXQgdXJsTmF2aWdhdGUgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSArIENvbnN0YW50cy5yZXNwb25zZV9tb2RlX2ZyYWdtZW50O1xyXG5cclxuICAgICAgLy8gc2V0IHN0YXRlIGluIGNhY2hlXHJcbiAgICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xyXG4gICAgICAgIGlmICghaXNMb2dpbkNhbGwpIHtcclxuICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gaXNMb2dpbkNhbGwgPyBDb25zdGFudHMubG9naW4gOiBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgY2FsbGJhY2sgdG8gY2FwdHVyZSByZXN1bHRzIGZyb20gc2VydmVyXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwcm9tcHQgdXNlciBmb3IgaW50ZXJhY3Rpb25cclxuICAgICAgdGhpcy5uYXZpZ2F0ZVdpbmRvdyh1cmxOYXZpZ2F0ZSwgcG9wVXBXaW5kb3cpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xyXG4gICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKSwgYnVpbGRSZXNwb25zZVN0YXRlT25seShyZXF1ZXN0LnN0YXRlKSwgcmVqZWN0KTtcclxuICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBvYnRhaW4gYSB0b2tlbiBiZWZvcmUgZXZlcnkgY2FsbCB0byB0aGUgQVBJIC8gcmVzb3VyY2UgcHJvdmlkZXJcclxuICAgKlxyXG4gICAqIE1TQUwgcmV0dXJuJ3MgYSBjYWNoZWQgdG9rZW4gd2hlbiBhdmFpbGFibGVcclxuICAgKiBPciBpdCBzZW5kJ3MgYSByZXF1ZXN0IHRvIHRoZSBTVFMgdG8gb2J0YWluIGEgbmV3IHRva2VuIHVzaW5nIGEgaGlkZGVuIGlmcmFtZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxyXG4gICAqXHJcbiAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxyXG4gICAqXHJcbiAgICovXHJcbiAgQHJlc29sdmVUb2tlbk9ubHlJZk91dE9mSWZyYW1lXHJcbiAgYWNxdWlyZVRva2VuU2lsZW50KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XHJcbiAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcclxuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUocmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgICAgY29uc3Qgc2NvcGUgPSByZXF1ZXN0LnNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYWNjb3VudCwgZ2l2ZSB0aGF0IGFjY291bnQgdGhlIHByaW9yaXR5XHJcbiAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSByZXF1ZXN0LmFjY291bnQgfHwgdGhpcy5nZXRBY2NvdW50KCk7XHJcblxyXG4gICAgICAvLyBleHRyYWN0IGlmIHRoZXJlIGlzIGFuIGFkYWxJZFRva2VuIHN0YXNoZWQgaW4gdGhlIGNhY2hlXHJcbiAgICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xyXG5cclxuICAgICAgLy9pZiB0aGVyZSBpcyBubyBhY2NvdW50IGxvZ2dlZCBpbiBhbmQgbm8gbG9naW5faGludC9zaWQgaXMgcGFzc2VkIGluIHRoZSByZXF1ZXN0XHJcbiAgICAgIGlmICghYWNjb3VudCAmJiAhKHJlcXVlc3Quc2lkICB8fCByZXF1ZXN0LmxvZ2luSGludCkgJiYgVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikgKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgcmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcclxuICAgICAgICBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSxcclxuICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgIHJlcXVlc3Quc2NvcGVzLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgICAgcmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgIGlmIChVdGlscy5pc1NTT1BhcmFtKHJlcXVlc3QpIHx8IGFjY291bnQpIHtcclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuICAgICAgfVxyXG4gICAgICAvL2lmIHVzZXIgZGlkbid0IHBhc3MgbG9naW5faGludC9zaWQgYW5kIGFkYWwncyBpZHRva2VuIGlzIHByZXNlbnQsIGV4dHJhY3QgdGhlIGxvZ2luX2hpbnQgZnJvbSB0aGUgYWRhbElkVG9rZW5cclxuICAgICAgZWxzZSBpZiAoIWFjY291bnQgJiYgIVV0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pKSB7XHJcbiAgICAgICAgLy8gaWYgYWRhbElkVG9rZW4gZXhpc3RzLCBleHRyYWN0IHRoZSBTU08gaW5mbyBmcm9tIHRoZSBzYW1lXHJcbiAgICAgICAgY29uc3QgYWRhbElkVG9rZW5PYmplY3QgPSBVdGlscy5leHRyYWN0SWRUb2tlbihhZGFsSWRUb2tlbik7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkFEQUwncyBpZFRva2VuIGV4aXN0cy4gRXh0cmFjdGluZyBsb2dpbiBpbmZvcm1hdGlvbiBmcm9tIEFEQUwncyBpZFRva2VuIFwiKTtcclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgbnVsbCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhZGFsSWRUb2tlbk9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlckNvbnRhaW5lZENsYWltcyA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdCB8fCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY2xhaW1zVmFsdWU7XHJcblxyXG4gICAgICBsZXQgYXV0aEVycjogQXV0aEVycm9yO1xyXG4gICAgICBsZXQgY2FjaGVSZXN1bHRSZXNwb25zZTtcclxuXHJcbiAgICAgIGlmICghdXNlckNvbnRhaW5lZENsYWltcyAmJiAhcmVxdWVzdC5mb3JjZVJlZnJlc2gpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2FjaGVSZXN1bHRSZXNwb25zZSA9IHRoaXMuZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBhdXRoRXJyID0gZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlc29sdmUvcmVqZWN0IGJhc2VkIG9uIGNhY2hlUmVzdWx0XHJcbiAgICAgIGlmIChjYWNoZVJlc3VsdFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRva2VuIGlzIGFscmVhZHkgaW4gY2FjaGUgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xyXG4gICAgICAgIHJlc29sdmUoY2FjaGVSZXN1bHRSZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoYXV0aEVycikge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoYXV0aEVyci5lcnJvckNvZGUgKyBcIjpcIiArIGF1dGhFcnIuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICByZWplY3QoYXV0aEVycik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZWxzZSBwcm9jZWVkIHdpdGggbG9naW5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGxvZ01lc3NhZ2U7XHJcbiAgICAgICAgaWYgKHVzZXJDb250YWluZWRDbGFpbXMpIHtcclxuICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIGNsYWltcyB3ZXJlIGdpdmVuLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5mb3JjZVJlZnJlc2gpIHtcclxuICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIHJlcXVlc3QuZm9yY2VSZWZyZXNoIG9wdGlvbiB3YXMgc2V0IHRvIHRydWVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbG9nTWVzc2FnZSA9IFwiVG9rZW4gaXMgbm90IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGxvZ01lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvLyBDYWNoZSByZXN1bHQgY2FuIHJldHVybiBudWxsIGlmIGNhY2hlIGlzIGVtcHR5LiBJbiB0aGF0IGNhc2UsIHNldCBhdXRob3JpdHkgdG8gZGVmYXVsdCB2YWx1ZSBpZiBubyBhdXRob3JpdHkgaXMgcGFzc2VkIHRvIHRoZSBhcGkuXHJcbiAgICAgICAgaWYgKCFzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gcmVxdWVzdC5hdXRob3JpdHkgPyBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSA6IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNhY2hlIG1pc3NcclxuICAgICAgICByZXR1cm4gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlLnJlc29sdmVFbmRwb2ludHNBc3luYygpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgLy8gcmVmcmVzaCBhdHRlbXB0IHdpdGggaWZyYW1lXHJcbiAgICAgICAgICAvLyBBbHJlYWR5IHJlbmV3aW5nIGZvciB0aGlzIHNjb3BlLCBjYWxsYmFjayB3aGVuIHdlIGdldCB0aGUgdG9rZW4uXHJcbiAgICAgICAgICBpZiAod2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgdG9rZW4gZm9yIHNjb3BlOiBcIiArIHNjb3BlICsgXCIgaXMgaW4gcHJvZ3Jlc3MuIFJlZ2lzdGVyaW5nIGNhbGxiYWNrXCIpO1xyXG4gICAgICAgICAgICAvLyBBY3RpdmUgcmVuZXdhbHMgY29udGFpbnMgdGhlIHN0YXRlIGZvciBlYWNoIHJlbmV3YWwuXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zY29wZXMgJiYgcmVxdWVzdC5zY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xICYmIHJlcXVlc3Quc2NvcGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIC8vIEFwcCB1c2VzIGlkVG9rZW4gdG8gc2VuZCB0byBhcGkgZW5kcG9pbnRzXHJcbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCBzY29wZSBpcyB0cmFja2VkIGFzIGNsaWVudElkIHRvIHN0b3JlIHRoaXMgdG9rZW5cclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgaWRUb2tlblwiKTtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmV3SWRUb2tlbihyZXF1ZXN0LnNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0LCBhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHJlbmV3IGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBhY2Nlc3N0b2tlblwiKTtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmV3VG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XHJcbiAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZygpKSk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFBvcHVwIFdpbmRvdyBDcmVhdGlvblxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBVc2VkIHRvIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlZGlyZWN0X3VyaSBhZnRlciBhdXRoZW50aWNhdGlvbiBpcyBjb21wbGV0ZS4gVGhlIHVzZXIncyBiZWFyZXIgdG9rZW4gaXMgYXR0YWNoZWQgdG8gdGhlIFVSSSBmcmFnbWVudCBhcyBhbiBpZF90b2tlbi9hY2Nlc3NfdG9rZW4gZmllbGQuXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhbHNvIGNsb3NlcyB0aGUgcG9wdXAgd2luZG93IGFmdGVyIHJlZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybE5hdmlnYXRlXHJcbiAgICogQHBhcmFtIHRpdGxlXHJcbiAgICogQHBhcmFtIGludGVydmFsXHJcbiAgICogQHBhcmFtIGluc3RhbmNlXHJcbiAgICogQHBhcmFtIHJlc29sdmVcclxuICAgKiBAcGFyYW0gcmVqZWN0XHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3BlbldpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyLCBpbnN0YW5jZTogdGhpcywgcmVzb2x2ZT86IEZ1bmN0aW9uLCByZWplY3Q/OiBGdW5jdGlvbik6IFdpbmRvdyB7XHJcbiAgICAvLyBHZW5lcmF0ZSBhIHBvcHVwIHdpbmRvd1xyXG4gICAgdmFyIHBvcHVwV2luZG93OiBXaW5kb3c7XHJcbiAgICB0cnkge1xyXG4gICAgICBwb3B1cFdpbmRvdyA9IHRoaXMub3BlblBvcHVwKHVybE5hdmlnYXRlLCB0aXRsZSwgQ29uc3RhbnRzLnBvcFVwV2lkdGgsIENvbnN0YW50cy5wb3BVcEhlaWdodCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xyXG4gICAgICBpZiAocmVqZWN0KSB7XHJcbiAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1c2ggcG9wdXAgd2luZG93IGhhbmRsZSBvbnRvIHN0YWNrIGZvciB0cmFja2luZ1xyXG4gICAgd2luZG93Lm9wZW5lZFdpbmRvd3MucHVzaChwb3B1cFdpbmRvdyk7XHJcblxyXG4gICAgY29uc3QgcG9sbFRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgcG9wdXAgY2xvc2VkIG9yIGxvZ2luIGluIHByb2dyZXNzLCBjYW5jZWwgbG9naW5cclxuICAgICAgaWYgKHBvcHVwV2luZG93ICYmIHBvcHVwV2luZG93LmNsb3NlZCAmJiAoaW5zdGFuY2UubG9naW5JblByb2dyZXNzIHx8IGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MpKSB7XHJcbiAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwQ2xvc2VkXCIsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcG9wVXBXaW5kb3dMb2NhdGlvbiA9IHBvcHVwV2luZG93LmxvY2F0aW9uO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzaCBjaGFuZ2VzLCBjbG9zZSB0aGUgcG9wdXAgd2luZG93XHJcbiAgICAgICAgaWYgKHBvcFVwV2luZG93TG9jYXRpb24uaHJlZi5pbmRleE9mKHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgICAgaW5zdGFuY2UubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ2xvc2luZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgICAvLyBUT0RPOiBDaGVjayBob3cgdGhpcyBjYW4gYmUgZXh0cmFjdGVkIGZvciBhbnkgZnJhbWV3b3JrIHNwZWNpZmljIGNvZGU/XHJcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0KFwibXNhbDpwb3BVcEhhc2hDaGFuZ2VkXCIsIHBvcFVwV2luZG93TG9jYXRpb24uaGFzaCk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVkV2luZG93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBDcm9zcyBEb21haW4gdXJsIGNoZWNrIGVycm9yLlxyXG4gICAgICAgIC8vIFdpbGwgYmUgdGhyb3duIHVudGlsIEFBRCByZWRpcmVjdHMgdGhlIHVzZXIgYmFjayB0byB0aGUgYXBwXCJzIHJvb3QgcGFnZSB3aXRoIHRoZSB0b2tlbi5cclxuICAgICAgICAvLyBObyBuZWVkIHRvIGxvZyBvciB0aHJvdyB0aGlzIGVycm9yIGFzIGl0IHdpbGwgY3JlYXRlIHVubmVjZXNzYXJ5IHRyYWZmaWMuXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbnRlcnZhbCk7XHJcblxyXG4gICAgcmV0dXJuIHBvcHVwV2luZG93O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogQ29uZmlndXJlcyBwb3B1cCB3aW5kb3cgZm9yIGxvZ2luLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybE5hdmlnYXRlXHJcbiAgICogQHBhcmFtIHRpdGxlXHJcbiAgICogQHBhcmFtIHBvcFVwV2lkdGhcclxuICAgKiBAcGFyYW0gcG9wVXBIZWlnaHRcclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3BlblBvcHVwKHVybE5hdmlnYXRlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHBvcFVwV2lkdGg6IG51bWJlciwgcG9wVXBIZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIGFkZGluZyB3aW5MZWZ0IGFuZCB3aW5Ub3AgdG8gYWNjb3VudCBmb3IgZHVhbCBtb25pdG9yXHJcbiAgICAgICAqIHVzaW5nIHNjcmVlbkxlZnQgYW5kIHNjcmVlblRvcCBmb3IgSUU4IGFuZCBlYXJsaWVyXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCB3aW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW5YO1xyXG4gICAgICBjb25zdCB3aW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xyXG4gICAgICAvKipcclxuICAgICAgICogd2luZG93LmlubmVyV2lkdGggZGlzcGxheXMgYnJvd3NlciB3aW5kb3dcInMgaGVpZ2h0IGFuZCB3aWR0aCBleGNsdWRpbmcgdG9vbGJhcnNcclxuICAgICAgICogdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIGZvciBJRTggYW5kIGVhcmxpZXJcclxuICAgICAgICovXHJcbiAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHBvcFVwV2lkdGggLyAyKSkgKyB3aW5MZWZ0O1xyXG4gICAgICBjb25zdCB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcFVwSGVpZ2h0IC8gMikpICsgd2luVG9wO1xyXG5cclxuICAgICAgLy8gb3BlbiB0aGUgd2luZG93XHJcbiAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4odXJsTmF2aWdhdGUsIHRpdGxlLCBcIndpZHRoPVwiICsgcG9wVXBXaWR0aCArIFwiLCBoZWlnaHQ9XCIgKyBwb3BVcEhlaWdodCArIFwiLCB0b3A9XCIgKyB0b3AgKyBcIiwgbGVmdD1cIiArIGxlZnQpO1xyXG4gICAgICBpZiAoIXBvcHVwV2luZG93KSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9wdXBXaW5kb3cuZm9jdXMpIHtcclxuICAgICAgICBwb3B1cFdpbmRvdy5mb2N1cygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcG9wdXBXaW5kb3c7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiZXJyb3Igb3BlbmluZyBwb3B1cCBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBJZnJhbWUgTWFuYWdlbWVudFxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIGN1cnJlbnQgd2luZG93IGlzIGluIGlmcmFtIGZvciB0b2tlbiByZW5ld2FsXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0luSWZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFJldHVybnMgd2hldGhlciBwYXJlbnQgd2luZG93IGV4aXN0cyBhbmQgaGFzIG1zYWxcclxuICAgKi9cclxuICBwcml2YXRlIHBhcmVudElzTXNhbCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5tc2FsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIENhbGxpbmcgX2xvYWRGcmFtZSBidXQgd2l0aCBhIHRpbWVvdXQgdG8gc2lnbmFsIGZhaWx1cmUgaW4gbG9hZGZyYW1lU3RhdHVzLiBDYWxsYmFja3MgYXJlIGxlZnQuXHJcbiAgICogcmVnaXN0ZXJlZCB3aGVuIG5ldHdvcmsgZXJyb3JzIG9jY3VyIGFuZCBzdWJzZXF1ZW50IHRva2VuIHJlcXVlc3RzIGZvciBzYW1lIHJlc291cmNlIGFyZSByZWdpc3RlcmVkIHRvIHRoZSBwZW5kaW5nIHJlcXVlc3QuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vc2V0IGlmcmFtZSBzZXNzaW9uIHRvIHBlbmRpbmdcclxuICAgIGNvbnN0IGV4cGVjdGVkU3RhdGUgPSB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdO1xyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlNldCBsb2FkaW5nIHN0YXRlIHRvIHBlbmRpbmcgZm9yOiBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKTtcclxuICAgIHRoaXMubG9hZEZyYW1lKHVybE5hdmlnYXRlLCBmcmFtZU5hbWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUpID09PSBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpIHtcclxuICAgICAgICAvLyBmYWlsIHRoZSBpZnJhbWUgc2Vzc2lvbiBpZiBpdFwicyBpbiBwZW5kaW5nIHN0YXRlXHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkxvYWRpbmcgZnJhbWUgaGFzIHRpbWVkIG91dCBhZnRlcjogXCIgKyAodGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQgLyAxMDAwKSArIFwiIHNlY29uZHMgZm9yIHNjb3BlIFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgICAgIC8vIEVycm9yIGFmdGVyIHRpbWVvdXRcclxuICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKG51bGwsIENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUsIENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIExvYWRzIGlmcmFtZSB3aXRoIGF1dGhvcml6YXRpb24gZW5kcG9pbnQgVVJMXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZEZyYW1lKHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyBUaGlzIHRyaWNrIG92ZXJjb21lcyBpZnJhbWUgbmF2aWdhdGlvbiBpbiBJRVxyXG4gICAgLy8gSUUgZG9lcyBub3QgbG9hZCB0aGUgcGFnZSBjb25zaXN0ZW50bHkgaW4gaWZyYW1lXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiTG9hZEZyYW1lOiBcIiArIGZyYW1lTmFtZSk7XHJcbiAgICBjb25zdCBmcmFtZUNoZWNrID0gZnJhbWVOYW1lO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lQ2hlY2spO1xyXG4gICAgICBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XHJcbiAgICAgICAgZnJhbWVIYW5kbGUuc3JjID0gdXJsTmF2aWdhdGU7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIkZyYW1lIE5hbWUgOiBcIiArIGZyYW1lTmFtZSArIFwiIE5hdmlnYXRlZCB0bzogXCIgKyB1cmxOYXZpZ2F0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aGlzLmNvbmZpZy5zeXN0ZW0ubmF2aWdhdGVGcmFtZVdhaXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEFkZHMgdGhlIGhpZGRlbiBpZnJhbWUgZm9yIHNpbGVudCB0b2tlbiByZW5ld2FsLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEhpZGRlbklGcmFtZShpZnJhbWVJZDogc3RyaW5nKTogSFRNTElGcmFtZUVsZW1lbnQge1xyXG4gICAgaWYgKHR5cGVvZiBpZnJhbWVJZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQWRkIG1zYWwgZnJhbWUgdG8gZG9jdW1lbnQ6XCIgKyBpZnJhbWVJZCk7XHJcbiAgICBsZXQgYWRhbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSWQpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xyXG4gICAgaWYgKCFhZGFsRnJhbWUpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJiZcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcclxuICAgICAgICAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNS4wXCIpID09PSAtMSkpIHtcclxuICAgICAgICBjb25zdCBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XHJcbiAgICAgICAgaWZyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgaWZyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICAgIGFkYWxGcmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoaWZyKSBhcyBIVE1MSUZyYW1lRWxlbWVudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aWZyYW1lIG5hbWU9J1wiICsgaWZyYW1lSWQgKyBcIicgaWQ9J1wiICsgaWZyYW1lSWQgKyBcIicgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+PC9pZnJhbWU+XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2luZG93LmZyYW1lcyAmJiB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXSkge1xyXG4gICAgICAgIGFkYWxGcmFtZSA9IHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkYWxGcmFtZTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gR2VuZXJhbCBIZWxwZXJzXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIEFkZHMgbG9naW5faGludCB0byBhdXRob3JpemF0aW9uIFVSTCB3aGljaCBpcyB1c2VkIHRvIHByZS1maWxsIHRoZSB1c2VybmFtZSBmaWVsZCBvZiBzaWduIGluIHBhZ2UgZm9yIHRoZSB1c2VyIGlmIGtub3duIGFoZWFkIG9mIHRpbWVcclxuICAgKiBkb21haW5faGludCBjYW4gYmUgb25lIG9mIHVzZXJzL29yZ2FuaXphdGlvbnMgd2hpY2ggd2hlbiBhZGRlZCBza2lwcyB0aGUgZW1haWwgYmFzZWQgZGlzY292ZXJ5IHByb2Nlc3Mgb2YgdGhlIHVzZXJcclxuICAgKiBkb21haW5fcmVxIHV0aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgY2xpZW50SW5mb1xyXG4gICAqIGxvZ2luX3JlcSB1aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiBjbGllbnRJbmZvXHJcbiAgICogQWxzbyBkb2VzIGEgc2FuaXR5IGNoZWNrIGZvciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBwYXNzZWQgYnkgdGhlIHVzZXIgdG8gZW5zdXJlIG5vIHJlcGVhdCBxdWVyeVBhcmFtZXRlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgQWNjb3VudH0gYWNjb3VudCAtIEFjY291bnQgZm9yIHdoaWNoIHRoZSB0b2tlbiBpcyByZXF1ZXN0ZWRcclxuICAgKiBAcGFyYW0gcXVlcnlwYXJhbXNcclxuICAgKiBAcGFyYW0ge0BsaW5rIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzfVxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEhpbnRQYXJhbWV0ZXJzKGFjY291bnRPYmo6IEFjY291bnQsIHFQYXJhbXM6IFN0cmluZ0RpY3QsIHNlcnZlclJlcVBhcmFtczogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiBTdHJpbmdEaWN0IHtcclxuXHJcbiAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gYWNjb3VudE9iaiB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgZmluYWwgY2hlY2sgZm9yIGFsbCBxdWVyeVBhcmFtcyBhZGRlZCBzbyBmYXI7IHByZWZlcmVuY2Ugb3JkZXI6IHNpZCA+IGxvZ2luX2hpbnRcclxuICAgIC8vIHNpZCBjYW5ub3QgYmUgcGFzc2VkIGFsb25nIHdpdGggbG9naW5faGludCBvciBkb21haW5faGludCwgaGVuY2Ugd2UgY2hlY2sgYm90aCBhcmUgbm90IHBvcHVsYXRlZCB5ZXQgaW4gcXVlcnlQYXJhbWV0ZXJzXHJcbiAgICBpZiAoYWNjb3VudCAmJiAhcVBhcmFtc1tTU09UeXBlcy5TSURdKSB7XHJcbiAgICAgIC8vIHNpZCAtIHBvcHVsYXRlIG9ubHkgaWYgbG9naW5faGludCBpcyBub3QgYWxyZWFkeSBwb3B1bGF0ZWQgYW5kIHRoZSBhY2NvdW50IGhhcyBzaWRcclxuICAgICAgY29uc3QgcG9wdWxhdGVTSUQgPSAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAmJiBhY2NvdW50LnNpZCAmJiBzZXJ2ZXJSZXFQYXJhbXMucHJvbXB0VmFsdWUgPT09IFByb21wdFN0YXRlLk5PTkU7XHJcbiAgICAgIGlmIChwb3B1bGF0ZVNJRCkge1xyXG4gICAgICAgICAgcVBhcmFtcyA9IFV0aWxzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5TSUQsIGFjY291bnQuc2lkLCBxUGFyYW1zKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBsb2dpbl9oaW50IC0gYWNjb3VudC51c2VyTmFtZVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBwb3B1bGF0ZUxvZ2luSGludCA9ICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX0hJTlRdICYmIGFjY291bnQudXNlck5hbWUgJiYgIVV0aWxzLmlzRW1wdHkoYWNjb3VudC51c2VyTmFtZSk7XHJcbiAgICAgICAgaWYgKHBvcHVsYXRlTG9naW5IaW50KSB7XHJcbiAgICAgICAgICBxUGFyYW1zID0gVXRpbHMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkxPR0lOX0hJTlQsIGFjY291bnQudXNlck5hbWUsIHFQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcG9wdWxhdGVSZXFQYXJhbXMgPSAhcVBhcmFtc1tTU09UeXBlcy5ET01BSU5fUkVRXSAmJiAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9SRVFdO1xyXG4gICAgICBpZiAocG9wdWxhdGVSZXFQYXJhbXMpIHtcclxuICAgICAgICBxUGFyYW1zID0gVXRpbHMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgcVBhcmFtcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcVBhcmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIHJlZGlyZWN0IHRoZSBicm93c2VyIHRvIHRoZSBTVFMgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxOYXZpZ2F0ZSAtIFVSTCBvZiB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxyXG4gICAqL1xyXG4gIHByaXZhdGUgbmF2aWdhdGVXaW5kb3codXJsTmF2aWdhdGU6IHN0cmluZywgcG9wdXBXaW5kb3c/OiBXaW5kb3cpIHtcclxuICAgIC8vIE5hdmlnYXRlIGlmIHZhbGlkIFVSTFxyXG4gICAgaWYgKHVybE5hdmlnYXRlICYmICFVdGlscy5pc0VtcHR5KHVybE5hdmlnYXRlKSkge1xyXG4gICAgICBsZXQgbmF2aWdhdGVXaW5kb3c6IFdpbmRvdyA9IHBvcHVwV2luZG93ID8gcG9wdXBXaW5kb3cgOiB3aW5kb3c7XHJcbiAgICAgIGxldCBsb2dNZXNzYWdlOiBzdHJpbmcgPSBwb3B1cFdpbmRvdyA/IFwiTmF2aWdhdGVkIFBvcHVwIHdpbmRvdyB0bzpcIiArIHVybE5hdmlnYXRlIDogXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlO1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKGxvZ01lc3NhZ2UpO1xyXG4gICAgICBuYXZpZ2F0ZVdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybE5hdmlnYXRlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiTmF2aWdhdGUgdXJsIGlzIGVtcHR5XCIpO1xyXG4gICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiTmF2aWdhdGUgdXJsIGlzIGVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFVzZWQgdG8gYWRkIHRoZSBkZXZlbG9wZXIgcmVxdWVzdGVkIGNhbGxiYWNrIHRvIHRoZSBhcnJheSBvZiBjYWxsYmFja3MgZm9yIHRoZSBzcGVjaWZpZWQgc2NvcGVzLiBUaGUgdXBkYXRlZCBhcnJheSBpcyBzdG9yZWQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZWN0ZWRTdGF0ZSAtIFVuaXF1ZSBzdGF0ZSBpZGVudGlmaWVyIChndWlkKS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgLSBUaGUgcmVzb2x2ZSBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IC0gVGhlIHJlamVjdCBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFjayhleHBlY3RlZFN0YXRlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAvLyB0cmFjayBhY3RpdmUgcmVuZXdhbHNcclxuICAgIHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0gPSBleHBlY3RlZFN0YXRlO1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgY2FsbGJhY2tzIG1hcHBlZCBhcnJheVxyXG4gICAgaWYgKCF3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcclxuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBbXTtcclxuICAgIH1cclxuICAgIC8vIGluZGV4aW5nIG9uIHRoZSBjdXJyZW50IHN0YXRlLCBwdXNoIHRoZSBjYWxsYmFjayBwYXJhbXMgdG8gY2FsbGJhY2tzIG1hcHBlZFxyXG4gICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdLnB1c2goeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9KTtcclxuXHJcbiAgICAvLyBTdG9yZSB0aGUgc2VydmVyIGVzcG9uc2UgaW4gdGhlIGN1cnJlbnQgd2luZG93Pz9cclxuICAgIGlmICghd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xyXG4gICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID1cclxuICAgICAgKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHtcclxuICAgICAgICAvLyByZXNldCBhY3RpdmUgcmVuZXdhbHNcclxuICAgICAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gZm9yIGFsbCBwcm9taXNlTWFwcGVkdG9SZW5ld1N0YXRlcyBmb3IgYSBnaXZlbiAnc3RhdGUnIC0gY2FsbCB0aGUgcmVqZWN0L3Jlc29sdmUgd2l0aCBlcnJvci90b2tlbiByZXNwZWN0aXZlbHlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV1baV0ucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJFcnJvciBhbmQgcmVzcG9uc2UgYXJlIGJvdGggbnVsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXRcclxuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xyXG4gICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBMb2dvdXRcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRvIGxvZyBvdXQgdGhlIGN1cnJlbnQgdXNlciwgYW5kIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkuXHJcbiAgICogRGVmYXVsdCBiZWhhdmlvdXIgaXMgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cclxuICAgKi9cclxuICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcclxuICAgIHRoaXMuYWNjb3VudCA9IG51bGw7XHJcbiAgICBsZXQgbG9nb3V0ID0gXCJcIjtcclxuICAgIGlmICh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKSB7XHJcbiAgICAgIGxvZ291dCA9IFwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0UG9zdExvZ291dFJlZGlyZWN0VXJpKCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKGF1dGhvcml0eSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBhdXRob3JpdHkuRW5kU2Vzc2lvbkVuZHBvaW50XHJcbiAgICAgICAgICAgID8gYCR7YXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludH0/JHtsb2dvdXR9YFxyXG4gICAgICAgICAgICA6IGAke3RoaXMuYXV0aG9yaXR5fW9hdXRoMi92Mi4wL2xvZ291dD8ke2xvZ291dH1gO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVXaW5kb3codXJsTmF2aWdhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQ2xlYXIgYWxsIGFjY2VzcyB0b2tlbnMgaW4gdGhlIGNhY2hlLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY2xlYXJDYWNoZSgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5JdGVtc1tpXS5rZXkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0Q2FjaGVJdGVtcygpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBDbGVhciBhIGdpdmVuIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBjYWNoZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlblxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjbGVhckNhY2hlRm9yU2NvcGUoYWNjZXNzVG9rZW46IHN0cmluZykge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gYWNjZXNzVG9rZW5JdGVtc1tpXTtcclxuICAgICAgICBpZiAodG9rZW4udmFsdWUuYWNjZXNzVG9rZW4gPT09IGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkodG9rZW4ua2V5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBSZXNwb25zZVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIENoZWNrcyBpZiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJbiBjYXNlIG9mIHJlZGlyZWN0LCB0aGUgdXJsIGZyYWdtZW50IGhhcyBlaXRoZXIgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvci5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAtIEhhc2ggcGFzc2VkIGZyb20gcmVkaXJlY3QgcGFnZS5cclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSB0cnVlIGlmIHJlc3BvbnNlIGNvbnRhaW5zIGlkX3Rva2VuLCBhY2Nlc3NfdG9rZW4gb3IgZXJyb3IsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBpc0NhbGxiYWNrKGhhc2g6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ2FsbGJhY2sgd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHVybENvbnRhaW5zSGFzaCBpbiBNU0FMLmpzIHYyLjAuXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMudXJsQ29udGFpbnNIYXNoKGhhc2gpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cmxDb250YWluc0hhc2godXJsU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0aGlzLmRlc2VyaWFsaXplSGFzaCh1cmxTdHJpbmcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHxcclxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpIHx8XHJcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSB8fFxyXG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIGNhbGwgdGhlIGNvbnN0cnVjdG9yIGNhbGxiYWNrIHdpdGggdGhlIHRva2VuL2Vycm9yXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvY2Vzc0NhbGxCYWNrKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbywgcGFyZW50Q2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIlByb2Nlc3NpbmcgdGhlIGNhbGxiYWNrIGZyb20gcmVkaXJlY3QgcmVzcG9uc2VcIik7XHJcbiAgICAvLyBnZXQgdGhlIHN0YXRlIGluZm8gZnJvbSB0aGUgaGFzaFxyXG4gICAgaWYgKCFzdGF0ZUluZm8pIHtcclxuICAgICAgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGhhc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZTtcclxuICAgIGxldCBhdXRoRXJyIDogQXV0aEVycm9yO1xyXG4gICAgLy8gU2F2ZSB0aGUgdG9rZW4gaW5mbyBmcm9tIHRoZSBoYXNoXHJcbiAgICB0cnkge1xyXG4gICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZVRva2VuRnJvbUhhc2goaGFzaCwgc3RhdGVJbmZvKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhdXRoRXJyID0gZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBoYXNoIGZyb20gdGhlIGNhY2hlXHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBDbGVhciB0aGUgY29va2llIGluIHRoZSBoYXNoXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XHJcbiAgICAgIGNvbnN0IGFjY291bnRTdGF0ZTogc3RyaW5nID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB8fCByZXNwb25zZS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiV2luZG93IGlzIGluIGlmcmFtZSwgYWNxdWlyaW5nIHRva2VuIHNpbGVudGx5XCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcImFjcXVpcmluZyB0b2tlbiBpbnRlcmFjdGl2ZSBpbiBwcm9ncmVzc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5hY2Nlc3NUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcclxuICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5pZFRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhcmVudENhbGxiYWNrKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuYXV0aEVycm9ySGFuZGxlcihDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIGF1dGhFcnIsIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkoYWNjb3VudFN0YXRlKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJlbnRDYWxsYmFjayhyZXNwb25zZSwgYXV0aEVycik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbjogXCIgKyBlcnIpO1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRXJyb3JJbkNhbGxiYWNrRnVuY3Rpb24oZXJyLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIHRoZSBTVFMuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yIGluZm9ybWF0aW9uIGFuZCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUuIEl0IHRoZW5cclxuICAgKiBjYWxscyB0aGUgcmVnaXN0ZXJlZCBjYWxsYmFja3MgaW4gY2FzZSBvZiByZWRpcmVjdCBvciByZXNvbHZlcyB0aGUgcHJvbWlzZXMgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoaGFzaDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyByZXRyaWV2ZSB0aGUgaGFzaFxyXG4gICAgaWYgKGhhc2ggPT0gbnVsbCkge1xyXG4gICAgICBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlbGYgPSBudWxsO1xyXG4gICAgbGV0IGlzUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxldCBpc1dpbmRvd09wZW5lck1zYWwgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCB3aW5kb3cgb3BlbmVkIHRoZSBpRnJhbWUvcG9wdXBcclxuICAgIHRyeSB7XHJcbiAgICAgIGlzV2luZG93T3BlbmVyTXNhbCA9IHdpbmRvdy5vcGVuZXIgJiYgd2luZG93Lm9wZW5lci5tc2FsICYmIHdpbmRvdy5vcGVuZXIubXNhbCAhPT0gd2luZG93Lm1zYWw7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gZXJyID0gU2VjdXJpdHlFcnJvcjogQmxvY2tlZCBhIGZyYW1lIHdpdGggb3JpZ2luIFwiW3VybF1cIiBmcm9tIGFjY2Vzc2luZyBhIGNyb3NzLW9yaWdpbiBmcmFtZS5cclxuICAgICAgaXNXaW5kb3dPcGVuZXJNc2FsID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzZWxmIHRvIHRoZSB3aW5kb3cgdGhhdCBjcmVhdGVkIHRoZSBwb3B1cC9pZnJhbWVcclxuICAgIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgc2VsZiA9IHdpbmRvdy5vcGVuZXIubXNhbDtcclxuICAgICAgaXNQb3B1cCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYXJlbnQgJiYgd2luZG93LnBhcmVudC5tc2FsKSB7XHJcbiAgICAgIHNlbGYgPSB3aW5kb3cucGFyZW50Lm1zYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyksIGJ5IHVzaW5nIHNlbGYsIHdpbmRvdy5wYXJlbnQgYmVjb21lcyBlcXVhbCB0byB3aW5kb3cgaW4gZ2V0UmVzcG9uc2VTdGF0ZSBtZXRob2Qgc3BlY2lmaWNhbGx5XHJcbiAgICBjb25zdCBzdGF0ZUluZm8gPSBzZWxmLmdldFJlc3BvbnNlU3RhdGUoaGFzaCk7XHJcblxyXG4gICAgbGV0IHRva2VuUmVzcG9uc2VDYWxsYmFjazogKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHZvaWQgPSBudWxsO1xyXG5cclxuICAgIHNlbGYubG9nZ2VyLmluZm8oXCJSZXR1cm5lZCBmcm9tIHJlZGlyZWN0IHVybFwiKTtcclxuICAgIC8vIElmIHBhcmVudCB3aW5kb3cgaXMgdGhlIG1zYWwgaW5zdGFuY2Ugd2hpY2ggb3BlbmVkIHRoZSBjdXJyZW50IHdpbmRvdyAoaWZyYW1lKVxyXG4gICAgaWYgKHRoaXMucGFyZW50SXNNc2FsKCkpIHtcclxuICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cucGFyZW50LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgLy8gQ3VycmVudCB3aW5kb3cgaXMgd2luZG93IG9wZW5lciAocG9wdXApXHJcbiAgICBlbHNlIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cub3BlbmVyLmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgLy8gUmVkaXJlY3QgY2FzZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAvLyBpZiBzZXQgdG8gbmF2aWdhdGUgdG8gbG9naW5SZXF1ZXN0IHBhZ2UgcG9zdCBsb2dpblxyXG4gICAgICBpZiAoc2VsZi5jb25maWcuYXV0aC5uYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsKSB7XHJcbiAgICAgICAgc2VsZi5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgaGFzaCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgPT09IHdpbmRvdyAmJiAhaXNQb3B1cCkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZWxmLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHNlbGYuaW5Db29raWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICAgIC8vIFdlIHJlYWNoZWQgdGhpcyBwb2ludCB0b28gZWFybHkgLSBjYWNoZSBoYXNoLCByZXR1cm4gYW5kIHByb2Nlc3MgaW4gaGFuZGxlUmVkaXJlY3RDYWxsYmFja3NcclxuICAgICAgICBzZWxmLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy51cmxIYXNoLCBoYXNoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnByb2Nlc3NDYWxsQmFjayhoYXNoLCBzdGF0ZUluZm8sIHRva2VuUmVzcG9uc2VDYWxsYmFjayk7XHJcblxyXG4gICAgLy8gSWYgY3VycmVudCB3aW5kb3cgaXMgb3BlbmVyLCBjbG9zZSBhbGwgd2luZG93c1xyXG4gICAgaWYgKGlzV2luZG93T3BlbmVyTXNhbCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5vcGVuZXIub3BlbmVkV2luZG93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuZXIub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogUmV0dXJucyBkZXNlcmlhbGl6ZWQgcG9ydGlvbiBvZiBVUkwgaGFzaFxyXG4gICAqIEBwYXJhbSBoYXNoXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkZXNlcmlhbGl6ZUhhc2godXJsRnJhZ21lbnQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaGFzaCA9IFV0aWxzLmdldEhhc2hGcm9tVXJsKHVybEZyYWdtZW50KTtcclxuICAgIHJldHVybiBVdGlscy5kZXNlcmlhbGl6ZShoYXNoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBDcmVhdGVzIGEgc3RhdGVJbmZvIG9iamVjdCBmcm9tIHRoZSBVUkwgZnJhZ21lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggIC0gIEhhc2ggcGFzc2VkIGZyb20gcmVkaXJlY3QgcGFnZVxyXG4gICAqIEByZXR1cm5zIHtUb2tlblJlc3BvbnNlfSBhbiBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSByZWRpcmVjdCByZXNwb25zZSBmcm9tIEFBRCBjb21wcmlzaW5nIG9mIHRoZSBrZXlzIC0gcGFyYW1ldGVycywgcmVxdWVzdFR5cGUsIHN0YXRlTWF0Y2gsIHN0YXRlUmVzcG9uc2UgYW5kIHZhbGlkLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2VTdGF0ZShoYXNoOiBzdHJpbmcpOiBSZXNwb25zZVN0YXRlSW5mbyB7XHJcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gdGhpcy5kZXNlcmlhbGl6ZUhhc2goaGFzaCk7XHJcbiAgICBsZXQgc3RhdGVSZXNwb25zZTogUmVzcG9uc2VTdGF0ZUluZm87XHJcbiAgICBpZiAoIXBhcmFtZXRlcnMpIHtcclxuICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkhhc2ggd2FzIG5vdCBwYXJzZWQgY29ycmVjdGx5LlwiKTtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFwic3RhdGVcIikpIHtcclxuICAgICAgc3RhdGVSZXNwb25zZSA9IHtcclxuICAgICAgICByZXF1ZXN0VHlwZTogQ29uc3RhbnRzLnVua25vd24sXHJcbiAgICAgICAgc3RhdGU6IHBhcmFtZXRlcnMuc3RhdGUsXHJcbiAgICAgICAgc3RhdGVNYXRjaDogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIGRvZXMgbm90IGNvbnRhaW4gc3RhdGUuXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gYXN5bmMgY2FsbHMgY2FuIGZpcmUgaWZyYW1lIGFuZCBsb2dpbiByZXF1ZXN0IGF0IHRoZSBzYW1lIHRpbWUgaWYgZGV2ZWxvcGVyIGRvZXMgbm90IHVzZSB0aGUgQVBJIGFzIGV4cGVjdGVkXHJcbiAgICAvLyBpbmNvbWluZyBjYWxsYmFjayBuZWVkcyB0byBiZSBsb29rZWQgdXAgdG8gZmluZCB0aGUgcmVxdWVzdCB0eXBlXHJcblxyXG4gICAgLy8gbG9naW5SZWRpcmVjdFxyXG4gICAgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuaW5Db29raWUpIHx8IHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSkgeyAvLyBsb2dpblJlZGlyZWN0XHJcbiAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XHJcbiAgICAgIHN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgLy8gYWNxdWlyZVRva2VuUmVkaXJlY3RcclxuICAgIGVsc2UgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCB0aGlzLmluQ29va2llKSkgeyAvL2FjcXVpcmVUb2tlblJlZGlyZWN0XHJcbiAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0ZXJuYWwgYXBpIHJlcXVlc3RzIG1heSBoYXZlIG1hbnkgcmVuZXd0b2tlbiByZXF1ZXN0cyBmb3IgZGlmZmVyZW50IHJlc291cmNlXHJcbiAgICBpZiAoIXN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCkge1xyXG4gICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gd2luZG93LnJlcXVlc3RUeXBlO1xyXG4gICAgICBjb25zdCBzdGF0ZXNJblBhcmVudENvbnRleHQgPSB3aW5kb3cucmVuZXdTdGF0ZXM7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzSW5QYXJlbnRDb250ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlc0luUGFyZW50Q29udGV4dFtpXSA9PT0gc3RhdGVSZXNwb25zZS5zdGF0ZSkge1xyXG4gICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBUb2tlbiBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFRva2VuUHJvY2Vzc2luZy50cylcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFVzZWQgdG8gZ2V0IHRva2VuIGZvciB0aGUgc3BlY2lmaWVkIHNldCBvZiBzY29wZXMgZnJvbSB0aGUgY2FjaGVcclxuICAgKiBAcGFyYW0ge0BsaW5rIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzfSAtIFJlcXVlc3Qgc2VudCB0byB0aGUgU1RTIHRvIG9idGFpbiBhbiBpZF90b2tlbi9hY2Nlc3NfdG9rZW5cclxuICAgKiBAcGFyYW0ge0FjY291bnR9IGFjY291bnQgLSBBY2NvdW50IGZvciB3aGljaCB0aGUgc2NvcGVzIHdlcmUgcmVxdWVzdGVkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLCBhY2NvdW50OiBBY2NvdW50KTogQXV0aFJlc3BvbnNlIHtcclxuICAgIGxldCBhY2Nlc3NUb2tlbkNhY2hlSXRlbTogQWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBudWxsO1xyXG4gICAgY29uc3Qgc2NvcGVzID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnNjb3BlcztcclxuXHJcbiAgICAvLyBmaWx0ZXIgYnkgY2xpZW50SWQgYW5kIGFjY291bnRcclxuICAgIGNvbnN0IHRva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2Vucyh0aGlzLmNsaWVudElkLCBhY2NvdW50ID8gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIgOiBudWxsKTtcclxuXHJcbiAgICAvLyBObyBtYXRjaCBmb3VuZCBhZnRlciBpbml0aWFsIGZpbHRlcmluZ1xyXG4gICAgaWYgKHRva2VuQ2FjaGVJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtczogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+ID0gW107XHJcblxyXG4gICAgLy8gaWYgbm8gYXV0aG9yaXR5IHBhc3NlZFxyXG4gICAgaWYgKCFzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XHJcbiAgICAgIC8vIGZpbHRlciBieSBzY29wZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcclxuICAgICAgICBjb25zdCBjYWNoZWRTY29wZXMgPSBjYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYgKFV0aWxzLmNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzLCBzY29wZXMpKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIG9ubHkgb25lIGNhY2hlZCB0b2tlbiBmb3VuZFxyXG4gICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBtb3JlIHRoYW4gb25lIGNhY2hlZCB0b2tlbiBpcyBmb3VuZFxyXG4gICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgbm8gbWF0Y2ggZm91bmQsIGNoZWNrIGlmIHRoZXJlIHdhcyBhIHNpbmdsZSBhdXRob3JpdHkgdXNlZFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBhdXRob3JpdHlMaXN0ID0gdGhpcy5nZXRVbmlxdWVBdXRob3JpdHkodG9rZW5DYWNoZUl0ZW1zLCBcImF1dGhvcml0eVwiKTtcclxuICAgICAgICBpZiAoYXV0aG9yaXR5TGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eUxpc3RbMF0sIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBpZiBhbiBhdXRob3JpdHkgaXMgcGFzc2VkIGluIHRoZSBBUElcclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBmaWx0ZXIgYnkgYXV0aG9yaXR5IGFuZCBzY29wZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcclxuICAgICAgICBjb25zdCBjYWNoZWRTY29wZXMgPSBjYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYgKFV0aWxzLmNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzLCBzY29wZXMpICYmIFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShjYWNoZUl0ZW0ua2V5LmF1dGhvcml0eSkgPT09IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpIHtcclxuICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChjYWNoZUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBubyBtYXRjaFxyXG4gICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWRUb2tlbiBGb3VuZFxyXG4gICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBpZiBtb3JlIHRoYW4gY2FjaGVkIHRva2VuIGlzIGZvdW5kXHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtICE9IG51bGwpIHtcclxuICAgICAgbGV0IGV4cGlyZWQgPSBOdW1iZXIoYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuZXhwaXJlc0luKTtcclxuICAgICAgLy8gSWYgZXhwaXJhdGlvbiBpcyB3aXRoaW4gb2Zmc2V0LCBpdCB3aWxsIGZvcmNlIHJlbmV3XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29uZmlnLnN5c3RlbS50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzIHx8IDMwMDtcclxuICAgICAgaWYgKGV4cGlyZWQgJiYgKGV4cGlyZWQgPiBVdGlscy5ub3coKSArIG9mZnNldCkpIHtcclxuICAgICAgICBsZXQgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4pO1xyXG4gICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgYWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJBY2NvdW50IHNob3VsZCBub3QgYmUgbnVsbCBoZXJlLlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYVN0YXRlID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICB1bmlxdWVJZDogXCJcIixcclxuICAgICAgICAgIHRlbmFudElkOiBcIlwiLFxyXG4gICAgICAgICAgdG9rZW5UeXBlOiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuaWRUb2tlbiA9PT0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuYWNjZXNzVG9rZW4pID8gQ29uc3RhbnRzLmlkVG9rZW4gOiBDb25zdGFudHMuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICBpZFRva2VuOiBpZFRva2VuT2JqLFxyXG4gICAgICAgICAgaWRUb2tlbkNsYWltczogaWRUb2tlbk9iai5jbGFpbXMsXHJcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICBzY29wZXM6IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpLFxyXG4gICAgICAgICAgZXhwaXJlc09uOiBuZXcgRGF0ZShleHBpcmVkICogMTAwMCksXHJcbiAgICAgICAgICBhY2NvdW50OiBhY2NvdW50LFxyXG4gICAgICAgICAgYWNjb3VudFN0YXRlOiBhU3RhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIGlkVG9rZW5PYmopO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkSXRlbXNbMF0ua2V5KSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFVzZWQgdG8gZ2V0IGEgdW5pcXVlIGxpc3Qgb2YgYXV0aG9yaXR1ZXMgZnJvbSB0aGUgY2FjaGVcclxuICAgKiBAcGFyYW0ge0FycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPn0gIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyAtIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyBzYXZlZCBpbiB0aGUgY2FjaGVcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRVbmlxdWVBdXRob3JpdHkoYWNjZXNzVG9rZW5DYWNoZUl0ZW1zOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4sIHByb3BlcnR5OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IGF1dGhvcml0eUxpc3Q6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGNvbnN0IGZsYWdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQua2V5Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiAoZmxhZ3MuaW5kZXhPZihlbGVtZW50LmtleVtwcm9wZXJ0eV0pID09PSAtMSkpIHtcclxuICAgICAgICBmbGFncy5wdXNoKGVsZW1lbnQua2V5W3Byb3BlcnR5XSk7XHJcbiAgICAgICAgYXV0aG9yaXR5TGlzdC5wdXNoKGVsZW1lbnQua2V5W3Byb3BlcnR5XSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGF1dGhvcml0eUxpc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQ2hlY2sgaWYgQURBTCBpZF90b2tlbiBleGlzdHMgYW5kIHJldHVybiBpZiBleGlzdHMuXHJcbiAgICpcclxuICAgKi9cclxuICBwcml2YXRlIGV4dHJhY3RBREFMSWRUb2tlbigpOiBhbnkge1xyXG4gICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XHJcbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmV4dHJhY3RJZFRva2VuKGFkYWxJZFRva2VuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEFjcXVpcmVzIGFjY2VzcyB0b2tlbiB1c2luZyBhIGhpZGRlbiBpZnJhbWUuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVuZXdUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhY2NvdW50OiBBY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogdm9pZCB7XHJcbiAgICBjb25zdCBzY29wZSA9IHNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3VG9rZW4gaXMgY2FsbGVkIGZvciBzY29wZTpcIiArIHNjb3BlKTtcclxuICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5hZGRIaWRkZW5JRnJhbWUoXCJtc2FsUmVuZXdGcmFtZVwiICsgc2NvcGUpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgdG9rZW4gRXhwZWN0ZWQgc3RhdGU6IFwiICsgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuXHJcbiAgICAvLyBCdWlsZCB1cmxOYXZpZ2F0ZSB3aXRoIFwicHJvbXB0PW5vbmVcIiBhbmQgbmF2aWdhdGUgdG8gVVJMIGluIGhpZGRlbiBpRnJhbWVcclxuICAgIGxldCB1cmxOYXZpZ2F0ZSA9IFV0aWxzLnVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jcmVhdGVOYXZpZ2F0ZVVybChzY29wZXMpLCBDb25zdGFudHMucHJvbXB0KSArIENvbnN0YW50cy5wcm9tcHRfbm9uZTtcclxuXHJcbiAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcclxuICAgIGZyYW1lSGFuZGxlLnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcclxuICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIFwibXNhbFJlbmV3RnJhbWVcIiArIHNjb3BlLCBzY29wZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogUmVuZXdzIGlkdG9rZW4gZm9yIGFwcFwicyBvd24gYmFja2VuZCB3aGVuIGNsaWVudElkIGlzIHBhc3NlZCBhcyBhIHNpbmdsZSBzY29wZSBpbiB0aGUgc2NvcGVzIGFycmF5LlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIHJlbmV3SWRUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhY2NvdW50OiBBY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInJlbmV3aWRUb2tlbiBpcyBjYWxsZWRcIik7XHJcbiAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKFwibXNhbElkVG9rZW5GcmFtZVwiKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG5cclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyBJZHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXJsTmF2aWdhdGUgd2l0aCBcInByb21wdD1ub25lXCIgYW5kIG5hdmlnYXRlIHRvIFVSTCBpbiBoaWRkZW4gaUZyYW1lXHJcbiAgICBsZXQgdXJsTmF2aWdhdGUgPSBVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XHJcblxyXG4gICAgaWYgKHRoaXMuc2lsZW50TG9naW4pIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XHJcbiAgICAgICAgdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5vdGU6IHNjb3BlIGhlcmUgaXMgY2xpZW50SWRcclxuICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuY2xpZW50SWQsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XHJcbiAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XHJcbiAgICB0aGlzLmxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlLCBcIm1zYWxJZFRva2VuRnJhbWVcIiwgdGhpcy5jbGllbnRJZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBBQUQuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yLCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUgYW5kIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSBhdXRob3JpdHkgcmVjZWl2ZWQgaW4gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFELlxyXG4gICAqIEBwYXJhbSB7VG9rZW5SZXNwb25zZX0gcmVxdWVzdEluZm8gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cclxuICAgKiBAcGFyYW0ge0FjY291bnR9IGFjY291bnQgYWNjb3VudCBvYmplY3QgZm9yIHdoaWNoIHNjb3BlcyBhcmUgY29uc2VudGVkIGZvci4gVGhlIGRlZmF1bHQgYWNjb3VudCBpcyB0aGUgbG9nZ2VkIGluIGFjY291bnQuXHJcbiAgICogQHBhcmFtIHtDbGllbnRJbmZvfSBjbGllbnRJbmZvIGNsaWVudEluZm8gcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgcmVzcG9uc2UgY29tcHJpc2luZyBvZiBmaWVsZHMgdWlkIGFuZCB1dGlkLlxyXG4gICAqIEBwYXJhbSB7SWRUb2tlbn0gaWRUb2tlbiBpZFRva2VuIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsICovXHJcbiAgcHJpdmF0ZSBzYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgYXV0aG9yaXR5OiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgY2xpZW50SW5mbzogc3RyaW5nLCBpZFRva2VuT2JqOiBJZFRva2VuKTogQXV0aFJlc3BvbnNlIHtcclxuICAgIGxldCBzY29wZTogc3RyaW5nO1xyXG4gICAgbGV0IGFjY2Vzc1Rva2VuUmVzcG9uc2UgPSB7IC4uLnJlc3BvbnNlIH07XHJcbiAgICBjb25zdCBjbGllbnRPYmo6IENsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKTtcclxuICAgIGxldCBleHBpcmF0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgLy8gaWYgdGhlIHJlc3BvbnNlIGNvbnRhaW5zIFwic2NvcGVcIlxyXG4gICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzY29wZVwiKSkge1xyXG4gICAgICAvLyByZWFkIHRoZSBzY29wZXNcclxuICAgICAgc2NvcGUgPSBwYXJhbWV0ZXJzW1wic2NvcGVcIl07XHJcbiAgICAgIGNvbnN0IGNvbnNlbnRlZFNjb3BlcyA9IHNjb3BlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgIC8vIHJldHJpZXZlIGFsbCBhY2Nlc3MgdG9rZW5zIGZyb20gdGhlIGNhY2hlLCByZW1vdmUgdGhlIGR1cCBzY29yZXNcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGF1dGhvcml0eSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcclxuICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgaWYgKFV0aWxzLmlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlcywgY29uc2VudGVkU2NvcGVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2VuZXJhdGUgYW5kIGNhY2hlIGFjY2Vzc1Rva2VuS2V5IGFuZCBhY2Nlc3NUb2tlblZhbHVlXHJcbiAgICAgIGNvbnN0IGV4cGlyZXNJbiA9IFV0aWxzLnBhcnNlRXhwaXJlc0luKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmV4cGlyZXNJbl0pO1xyXG4gICAgICBleHBpcmF0aW9uID0gVXRpbHMubm93KCkgKyBleHBpcmVzSW47XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuS2V5ID0gbmV3IEFjY2Vzc1Rva2VuS2V5KGF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGUsIGNsaWVudE9iai51aWQsIGNsaWVudE9iai51dGlkKTtcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmFjY2Vzc1Rva2VuXSwgaWRUb2tlbk9iai5yYXdJZFRva2VuLCBleHBpcmF0aW9uLnRvU3RyaW5nKCksIGNsaWVudEluZm8pO1xyXG5cclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcclxuXHJcbiAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuYWNjZXNzVG9rZW4gID0gcGFyYW1ldGVyc1tDb25zdGFudHMuYWNjZXNzVG9rZW5dO1xyXG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IGNvbnNlbnRlZFNjb3BlcztcclxuICAgIH1cclxuICAgIC8vIGlmIHRoZSByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIFwic2NvcGVcIiAtIHNjb3BlIGlzIHVzdWFsbHkgY2xpZW50X2lkIGFuZCB0aGUgdG9rZW4gd2lsbCBiZSBpZF90b2tlblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNjb3BlID0gdGhpcy5jbGllbnRJZDtcclxuXHJcbiAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XHJcbiAgICAgIGV4cGlyYXRpb24gPSBOdW1iZXIoaWRUb2tlbk9iai5leHBpcmF0aW9uKTtcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dLCBwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSwgZXhwaXJhdGlvbi50b1N0cmluZygpLCBjbGllbnRJbmZvKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcclxuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBbc2NvcGVdO1xyXG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuID0gcGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4cGlyYXRpb24pIHtcclxuICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmV4cGlyZXNPbiA9IG5ldyBEYXRlKGV4cGlyYXRpb24gKiAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJDb3VsZCBub3QgcGFyc2UgZXhwaXJlc0luIHBhcmFtZXRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWNjZXNzVG9rZW5SZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBTYXZlcyB0b2tlbiBvciBlcnJvciByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQUQgaW4gdGhlIGNhY2hlLiBJbiBjYXNlIG9mIGlkX3Rva2VuLCBpdCBhbHNvIGNyZWF0ZXMgdGhlIGFjY291bnQgb2JqZWN0LlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2F2ZVRva2VuRnJvbUhhc2goaGFzaDogc3RyaW5nLCBzdGF0ZUluZm86IFJlc3BvbnNlU3RhdGVJbmZvKTogQXV0aFJlc3BvbnNlIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTdGF0ZSBzdGF0dXM6XCIgKyBzdGF0ZUluZm8uc3RhdGVNYXRjaCArIFwiOyBSZXF1ZXN0IHR5cGU6XCIgKyBzdGF0ZUluZm8ucmVxdWVzdFR5cGUpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBcIlwiKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICAgIHVuaXF1ZUlkOiBcIlwiLFxyXG4gICAgICB0ZW5hbnRJZDogXCJcIixcclxuICAgICAgdG9rZW5UeXBlOiBcIlwiLFxyXG4gICAgICBpZFRva2VuOiBudWxsLFxyXG4gICAgICBpZFRva2VuQ2xhaW1zOiBudWxsLFxyXG4gICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgICAgc2NvcGVzOiBbXSxcclxuICAgICAgZXhwaXJlc09uOiBudWxsLFxyXG4gICAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgICBhY2NvdW50U3RhdGU6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBlcnJvcjogQXV0aEVycm9yO1xyXG4gICAgY29uc3QgaGFzaFBhcmFtcyA9IHRoaXMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xyXG4gICAgbGV0IGF1dGhvcml0eUtleTogc3RyaW5nID0gXCJcIjtcclxuICAgIGxldCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgbGV0IGlkVG9rZW5PYmo6IElkVG9rZW4gPSBudWxsO1xyXG5cclxuICAgIC8vIElmIHNlcnZlciByZXR1cm5zIGFuIGVycm9yXHJcbiAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHwgaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJFcnJvciA6XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0gKyBcIjsgRXJyb3IgZGVzY3JpcHRpb246XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dKTtcclxuXHJcbiAgICAgIC8vIGxvZ2luXHJcbiAgICAgIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xyXG4gICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0gKyBcIjpcIiArIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XHJcbiAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhY3F1aXJlVG9rZW5cclxuICAgICAgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pIHtcclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSB0aGlzLmdldEFjY291bnQoKTtcclxuICAgICAgICBsZXQgYWNjb3VudElkO1xyXG5cclxuICAgICAgICBpZiAoYWNjb3VudCAmJiAhVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBbQ29uc3RhbnRzLmVycm9yXTogaGFzaEVycixcclxuICAgICAgICBbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dOiBoYXNoRXJyRGVzY1xyXG4gICAgICB9ID0gaGFzaFBhcmFtcztcclxuICAgICAgaWYgKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IuaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3IoaGFzaEVycikgfHxcclxuICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGhhc2hFcnJEZXNjKSkge1xyXG4gICAgICAgIGVycm9yID0gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3IgPSBuZXcgU2VydmVyRXJyb3IoaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBcIlN1Y2Nlc3NcIlxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIFZlcmlmeSB0aGUgc3RhdGUgZnJvbSByZWRpcmVjdCBhbmQgcmVjb3JkIHRva2VucyB0byBzdG9yYWdlIGlmIGV4aXN0c1xyXG4gICAgICBpZiAoc3RhdGVJbmZvLnN0YXRlTWF0Y2gpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgaXMgcmlnaHRcIik7XHJcbiAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLnNlc3Npb25TdGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbFNlc3Npb25TdGF0ZSwgaGFzaFBhcmFtc1tDb25zdGFudHMuc2Vzc2lvblN0YXRlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3BvbnNlLmFjY291bnRTdGF0ZSA9IHRoaXMuZ2V0QWNjb3VudFN0YXRlKHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgIGxldCBjbGllbnRJbmZvOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGFjY2Vzc190b2tlblxyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5hY2Nlc3NUb2tlbikpIHtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgYWNjZXNzIHRva2VuXCIpO1xyXG4gICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgLy8gcmV0cmlldmUgdGhlIGlkX3Rva2VuIGZyb20gcmVzcG9uc2UgaWYgcHJlc2VudFxyXG4gICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmlkVG9rZW4gPSBpZFRva2VuT2JqO1xyXG4gICAgICAgICAgICByZXNwb25zZS5pZFRva2VuQ2xhaW1zID0gaWRUb2tlbk9iai5jbGFpbXM7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZFRva2VuT2JqID0gbmV3IElkVG9rZW4odGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSkpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IFV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gcmV0cmlldmUgdGhlIGF1dGhvcml0eSBmcm9tIGNhY2hlIGFuZCByZXBsYWNlIHdpdGggdGVuYW50SURcclxuICAgICAgICAgIGNvbnN0IGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgIGxldCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHkoYXV0aG9yaXR5KSkge1xyXG4gICAgICAgICAgICBhdXRob3JpdHkgPSBVdGlscy5yZXBsYWNlVGVuYW50UGF0aChhdXRob3JpdHksIHJlc3BvbnNlLnRlbmFudElkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyByZXRyaWV2ZSBjbGllbnRfaW5mbyAtIGlmIGl0IGlzIG5vdCBmb3VuZCwgZ2VuZXJhdGUgdGhlIHVpZCBhbmQgdXRpZCBmcm9tIGlkVG9rZW5cclxuICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5jbGllbnRJbmZvKSkge1xyXG4gICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tDb25zdGFudHMuY2xpZW50SW5mb107XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQ2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNwb25zZS5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcclxuXHJcbiAgICAgICAgICBsZXQgYWNjb3VudEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgIVV0aWxzLmlzRW1wdHkocmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGFjY291bnRLZXkgPSByZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhY2NvdW50S2V5ID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRLZXksIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KENvbnN0YW50cy5ub19hY2NvdW50LCBzdGF0ZUluZm8uc3RhdGUpO1xyXG5cclxuICAgICAgICAgIGxldCBjYWNoZWRBY2NvdW50OiBzdHJpbmcgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXkpO1xyXG4gICAgICAgICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnQ6IEFjY291bnQ7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgd2l0aCB0aGUgYWNjb3VudCBpbiB0aGUgQ2FjaGVcclxuICAgICAgICAgIGlmICghVXRpbHMuaXNFbXB0eShjYWNoZWRBY2NvdW50KSkge1xyXG4gICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50ID0gSlNPTi5wYXJzZShjYWNoZWRBY2NvdW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgYWNxdWlyZVRva2VuQWNjb3VudCAmJiBVdGlscy5jb21wYXJlQWNjb3VudHMocmVzcG9uc2UuYWNjb3VudCwgYWNxdWlyZVRva2VuQWNjb3VudCkpIHtcclxuICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJUaGUgdXNlciBvYmplY3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhY3F1aXJlVG9rZW4gcmVxdWVzdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgXCJUaGUgYWNjb3VudCBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSByZXNwb25zZSBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICghVXRpbHMuaXNFbXB0eSh0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXlfbm9hY2NvdW50KSkpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvLCBpZFRva2VuT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgaWRfdG9rZW5cclxuICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbikpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkZyYWdtZW50IGhhcyBpZCB0b2tlblwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvZ2luIG5vIGxvbmdlciBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBpZFRva2VuXHJcbiAgICAgICAgICAgIGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSk7XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZSA9IFV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5jbGllbnRJbmZvKSkge1xyXG4gICAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGxldCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXRpbHMuaXNFbXB0eShhdXRob3JpdHkpKSB7XHJcbiAgICAgICAgICAgICAgYXV0aG9yaXR5ID0gVXRpbHMucmVwbGFjZVRlbmFudFBhdGgoYXV0aG9yaXR5LCBpZFRva2VuT2JqLnRlbmFudElkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZFRva2VuT2JqICYmIGlkVG9rZW5PYmoubm9uY2UpIHtcclxuICAgICAgICAgICAgICAvLyBjaGVjayBub25jZSBpbnRlZ3JpdHkgaWYgaWRUb2tlbiBoYXMgbm9uY2UgLSB0aHJvdyBhbiBlcnJvciBpZiBub3QgbWF0Y2hlZFxyXG4gICAgICAgICAgICAgIGlmIChpZFRva2VuT2JqLm5vbmNlICE9PSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgXCJOb25jZSBNaXNtYXRjaC4gRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgTm9uY2U6IFwiICsgaWRUb2tlbk9iai5ub25jZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIk5vbmNlIE1pc21hdGNoLkV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIGlkVG9rZW5PYmoubm9uY2UpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSksIGlkVG9rZW5PYmoubm9uY2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB0b2tlblxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSwgaGFzaFBhcmFtc1tDb25zdGFudHMuaWRUb2tlbl0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbENsaWVudEluZm8sIGNsaWVudEluZm8pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgaWRUb2tlbiBhcyBhY2Nlc3MgdG9rZW4gZm9yIGFwcCBpdHNlbGZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcbiAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJJbnZhbGlkIGlkX3Rva2VuIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgZXJyb3IuZXJyb3JDb2RlKTtcclxuICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgZXJyb3IuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBTdGF0ZSBtaXNtYXRjaCAtIHVuZXhwZWN0ZWQvaW52YWxpZCBzdGF0ZVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBhdXRob3JpdHlLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcbiAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiU3RhdGUgTWlzbWF0Y2guRXhwZWN0ZWQgU3RhdGU6IFwiICsgZXhwZWN0ZWRTdGF0ZSArIFwiLFwiICsgXCJBY3R1YWwgU3RhdGU6IFwiICsgc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkU3RhdGVFcnJvcihzdGF0ZUluZm8uc3RhdGUsIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgZXJyb3IuZXJyb3JDb2RlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgZXJyb3IuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGVJbmZvLnN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0NvbXBsZXRlZCk7XHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIGlmIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw9ZmFsc2VcclxuICAgIGlmICh0aGlzLmluQ29va2llKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW1Db29raWUoYXV0aG9yaXR5S2V5LCBcIlwiLCAtMSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJSZXNwb25zZSBpcyBudWxsXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gQWNjb3VudFxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgaW4gYWNjb3VudFxyXG4gICAqICh0aGUgYWNjb3VudCBvYmplY3QgaXMgY3JlYXRlZCBhdCB0aGUgdGltZSBvZiBzdWNjZXNzZnVsIGxvZ2luKVxyXG4gICAqIG9yIG51bGwgd2hlbiBubyBzdGF0ZSBpcyBmb3VuZFxyXG4gICAqIEByZXR1cm5zIHtAbGluayBBY2NvdW50fSAtIHRoZSBhY2NvdW50IG9iamVjdCBzdG9yZWQgaW4gTVNBTFxyXG4gICAqL1xyXG4gIGdldEFjY291bnQoKTogQWNjb3VudCB7XHJcbiAgICAvLyBpZiBhIHNlc3Npb24gYWxyZWFkeSBleGlzdHMsIGdldCB0aGUgYWNjb3VudCBmcm9tIHRoZSBzZXNzaW9uXHJcbiAgICBpZiAodGhpcy5hY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnJhbWUgaXMgdXNlZCB0byBnZXQgaWRUb2tlbiBhbmQgcG9wdWxhdGUgdGhlIGFjY291bnQgZm9yIHRoZSBnaXZlbiBzZXNzaW9uXHJcbiAgICBjb25zdCByYXdJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSk7XHJcbiAgICBjb25zdCByYXdDbGllbnRJbmZvID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubXNhbENsaWVudEluZm8pO1xyXG5cclxuICAgIGlmICghVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSAmJiAhVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xyXG4gICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4ocmF3SWRUb2tlbik7XHJcbiAgICAgIGNvbnN0IGNsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhyYXdDbGllbnRJbmZvKTtcclxuICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW4sIGNsaWVudEluZm8pO1xyXG4gICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xyXG4gICAgfVxyXG4gICAgLy8gaWYgbG9naW4gbm90IHlldCBkb25lLCByZXR1cm4gbnVsbFxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBFeHRyYWN0cyBzdGF0ZSB2YWx1ZSBmcm9tIHRoZSBhY2NvdW50U3RhdGUgc2VudCB3aXRoIHRoZSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0LlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHNjb3BlLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBnZXRBY2NvdW50U3RhdGUgKHN0YXRlOiBzdHJpbmcpIHtcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XHJcbiAgICAgIGlmIChzcGxpdEluZGV4ID4gLTEgJiYgc3BsaXRJbmRleCArIDEgPCBzdGF0ZS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGUuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRvIGdldCBhIGxpc3Qgb2YgdW5pcXVlIGFjY291bnRzIGluIE1TQUwgY2FjaGUgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtAbGluayBBcnJheTxBY2NvdW50Pn0gQWNjb3VudCAtIGFsbCB1bmlxdWUgYWNjb3VudHMgaW4gTVNBTCBjYWNoZS5cclxuICAgKi9cclxuICBnZXRBbGxBY2NvdW50cygpOiBBcnJheTxBY2NvdW50PiB7XHJcbiAgICBjb25zdCBhY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGlkVG9rZW4gPSBuZXcgSWRUb2tlbihhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV0udmFsdWUuaWRUb2tlbik7XHJcbiAgICAgIGNvbnN0IGNsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV0udmFsdWUuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcclxuICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuLCBjbGllbnRJbmZvKTtcclxuICAgICAgYWNjb3VudHMucHVzaChhY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRVbmlxdWVBY2NvdW50cyhhY2NvdW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBVc2VkIHRvIGZpbHRlciBhY2NvdW50cyBiYXNlZCBvbiBob21lQWNjb3VudElkZW50aWZpZXJcclxuICAgKiBAcGFyYW0ge0FycmF5PEFjY291bnQ+fSAgQWNjb3VudHMgLSBhY2NvdW50cyBzYXZlZCBpbiB0aGUgY2FjaGVcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRVbmlxdWVBY2NvdW50cyhhY2NvdW50czogQXJyYXk8QWNjb3VudD4pOiBBcnJheTxBY2NvdW50PiB7XHJcbiAgICBpZiAoIWFjY291bnRzIHx8IGFjY291bnRzLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgIHJldHVybiBhY2NvdW50cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgY29uc3QgdW5pcXVlQWNjb3VudHM6IEFycmF5PEFjY291bnQ+ID0gW107XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWNjb3VudHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgIGlmIChhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyICYmIGZsYWdzLmluZGV4T2YoYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllcikgPT09IC0xKSB7XHJcbiAgICAgICAgZmxhZ3MucHVzaChhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyKTtcclxuICAgICAgICB1bmlxdWVBY2NvdW50cy5wdXNoKGFjY291bnRzW2luZGV4XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5pcXVlQWNjb3VudHM7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFNjb3BlcyAoRXh0cmFjdCB0byBTY29wZXMudHMpXHJcblxyXG4gIC8vIE5vdGU6IFwidGhpc1wiIGRlcGVuZGVuY3kgaW4gdGhpcyBzZWN0aW9uIGlzIG1pbmltYWwuXHJcbiAgLy8gSWYgcENhY2hlU3RvcmFnZSBpcyBzZXBhcmF0ZWQgZnJvbSB0aGUgY2xhc3Mgb2JqZWN0LCBvciBwYXNzZWQgYXMgYSBmbiBwYXJhbSwgc2NvcGVzVXRpbHMudHMgY2FuIGJlIGNyZWF0ZWRcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogVXNlZCB0byB2YWxpZGF0ZSB0aGUgc2NvcGVzIGlucHV0IHBhcmFtZXRlciByZXF1ZXN0ZWQgIGJ5IHRoZSBkZXZlbG9wZXIuXHJcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2NvcGVzUmVxdWlyZWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2NvcGVzIGFycmF5IGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlSW5wdXRTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3Blc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXNjb3Blcykge1xyXG4gICAgICBpZiAoc2NvcGVzUmVxdWlyZWQpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoYXQgc2NvcGVzIGlzIGFuIGFycmF5IG9iamVjdCAoYWxzbyB0aHJvd3MgZXJyb3IgaWYgc2NvcGVzID09IG51bGwpXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NvcGVzKSkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihzY29wZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoYXQgc2NvcGVzIGlzIG5vdCBhbiBlbXB0eSBhcnJheVxyXG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoYXQgY2xpZW50SWQgaXMgcGFzc2VkIGFzIHNpbmdsZSBzY29wZVxyXG4gICAgaWYgKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpIHtcclxuICAgICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUNsaWVudElkU2luZ2xlU2NvcGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIEV4dHJhY3RzIHNjb3BlIHZhbHVlIGZyb20gdGhlIHN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRTY29wZUZyb21TdGF0ZShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XHJcbiAgICAgIGlmIChzcGxpdEluZGV4ID4gLTEgJiYgc3BsaXRJbmRleCArIDEgPCBzdGF0ZS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGUuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogQXBwZW5kcyBleHRyYVNjb3Blc1RvQ29uc2VudCBpZiBwYXNzZWRcclxuICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cclxuICAgKi9cclxuICBwcml2YXRlIGFwcGVuZFNjb3BlcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBBcnJheTxzdHJpbmc+IHtcclxuXHJcbiAgICBsZXQgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3Quc2NvcGVzKSB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QuZXh0cmFTY29wZXNUb0NvbnNlbnQpIHtcclxuICAgICAgICAgICAgc2NvcGVzID0gWy4uLnJlcXVlc3Quc2NvcGVzLCAuLi5yZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgc2NvcGVzID0gcmVxdWVzdC5zY29wZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzY29wZXM7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEFuZ3VsYXJcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogQnJvYWRjYXN0IG1lc3NhZ2VzIC0gVXNlZCBvbmx5IGZvciBBbmd1bGFyPyAgKlxyXG4gICAqIEBwYXJhbSBldmVudE5hbWVcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYnJvYWRjYXN0KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsOiBkYXRhIH0pO1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgY2FjaGVkIHRva2VuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICogQHBhcmFtIHtAbGluayBBY2NvdW50fSBhY2NvdW50XHJcbiAgICogQHBhcmFtIHN0YXRlXHJcbiAgICogQHJldHVybiB7QGxpbmsgQXV0aFJlc3BvbnNlfSBBdXRoUmVzcG9uc2VcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0Q2FjaGVkVG9rZW5JbnRlcm5hbChzY29wZXMgOiBBcnJheTxzdHJpbmc+ICwgYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZyk6IEF1dGhSZXNwb25zZSB7XHJcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc2Vzc2lvbidzIGFjY291bnQgb2JqZWN0XHJcbiAgICBjb25zdCBhY2NvdW50T2JqZWN0OiBBY2NvdW50ID0gYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuICAgIGlmICghYWNjb3VudE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnN0cnVjdCBBdXRoZW50aWNhdGlvblJlcXVlc3QgYmFzZWQgb24gcmVzcG9uc2UgdHlwZVxyXG4gICAgY29uc3QgbmV3QXV0aG9yaXR5ID0gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA/IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgOiBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHRoaXMuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3QsIHNjb3BlcywgdHJ1ZSk7XHJcbiAgICBjb25zdCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXHJcbiAgICAgIG5ld0F1dGhvcml0eSxcclxuICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgc2NvcGVzLFxyXG4gICAgICByZXNwb25zZVR5cGUsXHJcbiAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgc3RhdGVcclxuICAgICk7XHJcblxyXG4gICAgLy8gZ2V0IGNhY2hlZCB0b2tlblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIEdldCBzY29wZXMgZm9yIHRoZSBFbmRwb2ludCAtIFVzZWQgaW4gQW5ndWxhciB0byB0cmFjayBwcm90ZWN0ZWQgYW5kIHVucHJvdGVjdGVkIHJlc291cmNlcyB3aXRob3V0IGludGVyYWN0aW9uIGZyb20gdGhlIGRldmVsb3BlciBhcHBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbmRwb2ludFxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRTY29wZXNGb3JFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKSA6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgLy8gaWYgdXNlciBzcGVjaWZpZWQgbGlzdCBvZiB1bnByb3RlY3RlZFJlc291cmNlcywgbm8gbmVlZCB0byBzZW5kIHRva2VuIHRvIHRoZXNlIGVuZHBvaW50cywgcmV0dXJuIG51bGwuXHJcbiAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZW5kcG9pbnQuaW5kZXhPZih0aGlzLmNvbmZpZy5mcmFtZXdvcmsudW5wcm90ZWN0ZWRSZXNvdXJjZXNbaV0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb2Nlc3MgYWxsIHByb3RlY3RlZCByZXNvdXJjZXMgYW5kIHNlbmQgdGhlIG1hdGNoZWQgb25lXHJcbiAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLnNpemUgPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIEFycmF5LmZyb20odGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmtleXMoKSkpIHtcclxuICAgICAgICAgICAgLy8gY29uZmlnRW5kcG9pbnQgaXMgbGlrZSAvYXBpL1RvZG8gcmVxdWVzdGVkIGVuZHBvaW50IGNhbiBiZSAvYXBpL1RvZG8vMVxyXG4gICAgICAgICAgICBpZiAoZW5kcG9pbnQuaW5kZXhPZihrZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5mcmFtZXdvcmsucHJvdGVjdGVkUmVzb3VyY2VNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVmYXVsdCByZXNvdXJjZSB3aWxsIGJlIGNsaWVudGlkIGlmIG5vdGhpbmcgc3BlY2lmaWVkXHJcbiAgICAvLyBBcHAgd2lsbCB1c2UgaWR0b2tlbiBmb3IgY2FsbHMgdG8gaXRzZWxmXHJcbiAgICAvLyBjaGVjayBpZiBpdCdzIHN0YXJpbmcgZnJvbSBodHRwIG9yIGh0dHBzLCBuZWVkcyB0byBtYXRjaCB3aXRoIGFwcCBob3N0XHJcbiAgICBpZiAoZW5kcG9pbnQuaW5kZXhPZihcImh0dHA6Ly9cIikgPiAtMSB8fCBlbmRwb2ludC5pbmRleE9mKFwiaHR0cHM6Ly9cIikgPiAtMSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldEhvc3RGcm9tVXJpKGVuZHBvaW50KSA9PT0gdGhpcy5nZXRIb3N0RnJvbVVyaSh0aGlzLmdldFJlZGlyZWN0VXJpKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLmNsaWVudElkKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgLy8gaW4gYW5ndWxhciBsZXZlbCwgdGhlIHVybCBmb3IgJGh0dHAgaW50ZXJjZXB0b3IgY2FsbCBjb3VsZCBiZSByZWxhdGl2ZSB1cmwsXHJcbiAgICAvLyBpZiBpdCdzIHJlbGF0aXZlIGNhbGwsIHdlJ2xsIHRyZWF0IGl0IGFzIGFwcCBiYWNrZW5kIGNhbGwuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuY2xpZW50SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIG5vdCB0aGUgYXBwJ3Mgb3duIGJhY2tlbmQgb3Igbm90IGEgZG9tYWluIGxpc3RlZCBpbiB0aGUgZW5kcG9pbnRzIHN0cnVjdHVyZVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gYm9vbGVhbiBmbGFnIHRvIGRldmVsb3BlciB0byBoZWxwIGluZm9ybSBpZiBsb2dpbiBpcyBpbiBwcm9ncmVzc1xyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIGdldExvZ2luSW5Qcm9ncmVzcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gpO1xyXG4gICAgaWYgKHBlbmRpbmdDYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubG9naW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBsb2dpbkluUHJvZ3Jlc3NcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2V0bG9naW5JblByb2dyZXNzKGxvZ2luSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gbG9naW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIHJldHVybnMgdGhlIHN0YXR1cyBvZiBhY3F1aXJlVG9rZW5JblByb2dyZXNzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2V0QWNxdWlyZVRva2VuSW5Qcm9ncmVzcyhhY3F1aXJlVG9rZW5JblByb2dyZXNzIDogYm9vbGVhbikge1xyXG4gICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBhY3F1aXJlVG9rZW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIHJldHVybnMgdGhlIGxvZ2dlciBoYW5kbGVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0TG9nZ2VyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gR2V0dGVycyBhbmQgU2V0dGVyc1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIFVzZSB0byBnZXQgdGhlIHJlZGlyZWN0IHVyaSBjb25maWd1cmVkIGluIE1TQUwgb3IgbnVsbC5cclxuICAgKiBFdmFsdWF0ZXMgcmVkaXJlY3RVcmkgaWYgaXRzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBzaW1wbHkgcmV0dXJucyBpdHMgdmFsdWUuXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gcmVkaXJlY3QgVVJMXHJcbiAgICpcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnJlZGlyZWN0VXJpKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaSBjb25maWd1cmVkIGluIE1TQUwgb3IgbnVsbC5cclxuICAgKiBFdmFsdWF0ZXMgcG9zdExvZ291dHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gcG9zdCBsb2dvdXQgcmVkaXJlY3QgVVJMXHJcbiAgICovXHJcbiAgcHVibGljIGdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucG9zdExvZ291dFJlZGlyZWN0VXJpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRvIGdldCB0aGUgY3VycmVudCB7QGxpbmsgQ29uZmlndXJhdGlvbn0gb2JqZWN0IGluIE1TQUxcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtAbGluayBDb25maWd1cmF0aW9ufVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDdXJyZW50Q29uZmlndXJhdGlvbigpOiBDb25maWd1cmF0aW9uIHtcclxuICAgIGlmICghdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFN0cmluZyBVdGlsIChTaG91bGQgYmUgZXh0cmFjdGVkIHRvIFV0aWxzLnRzKVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqXHJcbiAgICogZXh0cmFjdCBVUkkgZnJvbSB0aGUgaG9zdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFVSSVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGhvc3QgZnJvbSB0aGUgVVJJXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRIb3N0RnJvbVVyaSh1cmk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyByZW1vdmUgaHR0cDovLyBvciBodHRwczovLyBmcm9tIHVyaVxyXG4gICAgbGV0IGV4dHJhY3RlZFVyaSA9IFN0cmluZyh1cmkpLnJlcGxhY2UoL14oaHR0cHM/OilcXC9cXC8vLCBcIlwiKTtcclxuICAgIGV4dHJhY3RlZFVyaSA9IGV4dHJhY3RlZFVyaS5zcGxpdChcIi9cIilbMF07XHJcbiAgICByZXR1cm4gZXh0cmFjdGVkVXJpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIFV0aWxzIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgQXV0aGVudGljYXRpb25cclxuICAgKiBAcGFyYW0ge0BsaW5rIGFjY291bnR9IGFjY291bnQgb2JqZWN0XHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqIEBwYXJhbSBzaWxlbnRDYWxsXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0b2tlbiB0eXBlOiBpZF90b2tlbiBvciBhY2Nlc3NfdG9rZW5cclxuICAgKlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3Q6IEFjY291bnQsIHNjb3Blczogc3RyaW5nW10sIHNpbGVudENhbGw6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG5cclxuICAgIC8vIGlmIGFjY291bnQgaXMgcGFzc2VkIGFuZCBtYXRjaGVzIHRoZSBhY2NvdW50IG9iamVjdC9vciBzZXQgdG8gZ2V0QWNjb3VudCgpIGZyb20gY2FjaGVcclxuICAgIC8vIGlmIGNsaWVudC1pZCBpcyBwYXNzZWQgYXMgc2NvcGUsIGdldCBpZF90b2tlbiBlbHNlIHRva2VuL2lkX3Rva2VuX3Rva2VuIChpbiBjYXNlIG5vIHNlc3Npb24gZXhpc3RzKVxyXG4gICAgbGV0IHRva2VuVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIGFjcXVpcmVUb2tlblNpbGVudFxyXG4gICAgaWYgKHNpbGVudENhbGwpIHtcclxuICAgICAgaWYgKFV0aWxzLmNvbXBhcmVBY2NvdW50cyhhY2NvdW50T2JqZWN0LCB0aGlzLmdldEFjY291bnQoKSkpIHtcclxuICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jb25maWcuYXV0aC5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0b2tlblR5cGUgID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlblR5cGU7XHJcbiAgICB9XHJcbiAgICAvLyBhbGwgb3RoZXIgY2FzZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIVV0aWxzLmNvbXBhcmVBY2NvdW50cyhhY2NvdW50T2JqZWN0LCB0aGlzLmdldEFjY291bnQoKSkpIHtcclxuICAgICAgICB0b2tlblR5cGUgPSBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRva2VuVHlwZSA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLnRva2VuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW5UeXBlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBTZXRzIHRoZSBjYWNoZWtleXMgZm9yIGFuZCBzdG9yZXMgdGhlIGFjY291bnQgaW5mb3JtYXRpb24gaW4gY2FjaGVcclxuICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHNldEFjY291bnRDYWNoZShhY2NvdW50OiBBY2NvdW50LCBzdGF0ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgLy8gQ2FjaGUgYWNxdWlyZVRva2VuQWNjb3VudEtleVxyXG4gICAgbGV0IGFjY291bnRJZCA9IGFjY291bnQgPyB0aGlzLmdldEFjY291bnRJZChhY2NvdW50KSA6IENvbnN0YW50cy5ub19hY2NvdW50O1xyXG5cclxuICAgIGNvbnN0IGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIFNldHMgdGhlIGNhY2hlS2V5IGZvciBhbmQgc3RvcmVzIHRoZSBhdXRob3JpdHkgaW5mb3JtYXRpb24gaW4gY2FjaGVcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0QXV0aG9yaXR5Q2FjaGUoc3RhdGU6IHN0cmluZywgYXV0aG9yaXR5OiBzdHJpbmcpIHtcclxuICAgIC8vIENhY2hlIGF1dGhvcml0eUtleVxyXG4gICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZSk7XHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGF1dGhvcml0eUtleSwgVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eSksIHRoaXMuaW5Db29raWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBhY2NvdW50LCBhdXRob3JpdHksIGFuZCBub25jZSBpbiBjYWNoZVxyXG4gICAqIEBwYXJhbSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3RcclxuICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVDYWNoZUVudHJpZXMoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycywgYWNjb3VudDogQWNjb3VudCwgbG9naW5TdGFydFBhZ2U/OiBhbnkpIHtcclxuICAgIC8vIENhY2hlIGFjY291bnQgYW5kIGF1dGhvcml0eVxyXG4gICAgaWYgKGxvZ2luU3RhcnRQYWdlKSB7XHJcbiAgICAgIC8vIENhY2hlIHRoZSBzdGF0ZSwgbm9uY2UsIGFuZCBsb2dpbiByZXF1ZXN0IGRhdGFcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBsb2dpblN0YXJ0UGFnZSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiXCIpO1xyXG5cclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgXCJcIik7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0QWNjb3VudENhY2hlKGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBDYWNoZSBhdXRob3JpdHlLZXlcclxuICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAvLyBDYWNoZSBub25jZVxyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBsb2dnZWQgaW4gYWNjb3VudFxyXG4gICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIGdldEFjY291bnRJZChhY2NvdW50OiBBY2NvdW50KTogYW55IHtcclxuICAgIC8vcmV0dXJuIGAke2FjY291bnQuYWNjb3VudElkZW50aWZpZXJ9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke2FjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyfWA7XHJcbiAgICBsZXQgYWNjb3VudElkOiBzdHJpbmc7XHJcbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgIGFjY291bnRJZCA9IGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjb3VudElkID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY291bnRJZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBDb25zdHJ1Y3QgJ3Rva2VuUmVxdWVzdCcgZnJvbSB0aGUgYXZhaWxhYmxlIGRhdGEgaW4gYWRhbElkVG9rZW5cclxuICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBidWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XHJcblxyXG4gICAgbGV0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xyXG4gICAgICBzY29wZXM6IFt0aGlzLmNsaWVudElkXSxcclxuICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcclxuICAgICAgYWNjb3VudDogdGhpcy5nZXRBY2NvdW50KCksXHJcbiAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0b2tlblJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqXHJcbiAgICogVXRpbGl0eSB0byBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgYW5kIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIFNlcnZlclJlcXVlc3RQYXJhbWVyZXJzXHJcbiAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQ6IEFjY291bnQsIHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycywgYWRhbElkVG9rZW5PYmplY3Q/OiBhbnkpOiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyB7XHJcblxyXG4gICAgbGV0IHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCA9IHt9O1xyXG5cclxuICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgIC8vIGFkZCB0aGUgcHJvbXB0IHBhcmFtZXRlciB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcclxuICAgICAgaWYgKHJlcXVlc3QucHJvbXB0KSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZVByb21wdFBhcmFtZXRlcihyZXF1ZXN0LnByb21wdCk7XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnByb21wdFZhbHVlID0gcmVxdWVzdC5wcm9tcHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCBjbGFpbXMgY2hhbGxlbmdlIHRvIHNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIGlmIHBhc3NlZFxyXG4gICAgICBpZiAocmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XHJcbiAgICAgICAgdmFsaWRhdGVDbGFpbXNSZXF1ZXN0KHJlcXVlc3QpO1xyXG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jbGFpbXNWYWx1ZSA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwcm92aWRlcyBvbmUgb2YgdGhlc2UsIGdpdmUgcHJlZmVyZW5jZSB0byBkZXZlbG9wZXIgY2hvaWNlXHJcbiAgICAgIGlmIChVdGlscy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gVXRpbHMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIocmVxdWVzdCwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWRhbElkVG9rZW5PYmplY3QpIHtcclxuICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gVXRpbHMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIobnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZHMgc2lkL2xvZ2luX2hpbnQgaWYgbm90IHBvcHVsYXRlZDsgcG9wdWxhdGVzIGRvbWFpbl9yZXEsIGxvZ2luX3JlcSBhbmQgZG9tYWluX2hpbnRcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJDYWxsaW5nIGFkZEhpbnQgcGFyYW1ldGVyc1wiKTtcclxuICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudCwgcXVlcnlQYXJhbWV0ZXJzLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG5cclxuICAgIC8vIHNhbml0eSBjaGVjayBmb3IgZGV2ZWxvcGVyIHBhc3NlZCBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAgbGV0IGVRUGFyYW1zOiBTdHJpbmdEaWN0O1xyXG4gICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgZVFQYXJhbXMgPSB0aGlzLnNhbml0aXplRVFQYXJhbXMocmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9wdWxhdGUgdGhlIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxyXG4gICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnF1ZXJ5UGFyYW1ldGVycyA9IFV0aWxzLmdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVycyk7XHJcbiAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhlUVBhcmFtcyk7XHJcblxyXG4gICAgcmV0dXJuIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBVdGlsaXR5IHRvIHRlc3QgaWYgdmFsaWQgcHJvbXB0IHZhbHVlIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxyXG4gICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVByb21wdFBhcmFtZXRlciAocHJvbXB0OiBzdHJpbmcpIHtcclxuICAgIGlmICghKFtQcm9tcHRTdGF0ZS5MT0dJTiwgUHJvbXB0U3RhdGUuU0VMRUNUX0FDQ09VTlQsIFByb21wdFN0YXRlLkNPTlNFTlQsIFByb21wdFN0YXRlLk5PTkVdLmluZGV4T2YocHJvbXB0KSA+PSAwKSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcblxyXG4gICAqIFJlbW92ZXMgdW5uZWNlc3Nhcnkgb3IgZHVwbGljYXRlIHF1ZXJ5IHBhcmFtZXRlcnMgZnJvbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykgOiBTdHJpbmdEaWN0IHtcclxuICAgIGxldCBlUVBhcmFtcyA6IFN0cmluZ0RpY3QgPSByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xyXG4gICAgaWYgKCFlUVBhcmFtcykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcclxuICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIlJlbW92ZWQgZHVwbGljYXRlIGNsYWltcyBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzLiBQbGVhc2UgdXNlIGVpdGhlciB0aGUgY2xhaW1zUmVxdWVzdCBmaWVsZCBPUiBwYXNzIGFzIGV4dHJhUXVlcnlQYXJhbWV0ZXIgLSBub3QgYm90aC5cIik7XHJcbiAgICAgIGRlbGV0ZSBlUVBhcmFtc1tDb25zdGFudHMuY2xhaW1zXTtcclxuICAgIH1cclxuICAgIEJsYWNrbGlzdGVkRVFQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgIGlmIChlUVBhcmFtc1twYXJhbV0pIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiUmVtb3ZlZCBkdXBsaWNhdGUgXCIgKyBwYXJhbSArIFwiIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnMuIFBsZWFzZSB1c2UgdGhlIFwiICsgcGFyYW0gKyBcIiBmaWVsZCBpbiByZXF1ZXN0IG9iamVjdC5cIik7XHJcbiAgICAgICAgZGVsZXRlIGVRUGFyYW1zW3BhcmFtXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZVFQYXJhbXM7XHJcbiAgfVxyXG4gLy8jZW5kcmVnaW9uXHJcblxyXG4gIHByaXZhdGUgZ2V0VGVsZW1ldHJ5TWFuYWdlckZyb21Db25maWcoY29uZmlnOiBUZWxlbWV0cnlPcHRpb25zLCBjbGllbnRJZDogc3RyaW5nKTogVGVsZW1ldHJ5TWFuYWdlciB7XHJcbiAgICBpZiAoIWNvbmZpZykgeyAvLyBpZiB1bnNldFxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgLy8gaWYgc2V0IHRoZW4gdmFsaWRhdGVcclxuICAgIGNvbnN0IHsgYXBwbGljYXRpb25OYW1lLCBhcHBsaWNhdGlvblZlcnNpb24sIHRlbGVtZXRyeUVtaXR0ZXIgfSA9IGNvbmZpZztcclxuICAgIGlmICghYXBwbGljYXRpb25OYW1lIHx8ICFhcHBsaWNhdGlvblZlcnNpb24gfHwgISB0ZWxlbWV0cnlFbWl0dGVyKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVUZWxlbWV0cnlDb25maWdFcnJvcihjb25maWcpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgdmFsaWQgdGhlbiBjb25zdHJ1Y3RcclxuICAgIGNvbnN0IHRlbGVtZXRyeVBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybSA9IHtcclxuICAgICAgc2RrOiBcIm1zYWwuanNcIiwgLy8gVE9ETyBuZWVkIHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhpcyBmb3IgYW5ndWxhciwgcmVhY3QsIGV0Y1xyXG4gICAgICBzZGtWZXJzaW9uOiBVdGlscy5nZXRMaWJyYXJ5VmVyc2lvbigpLFxyXG4gICAgICBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgIGFwcGxpY2F0aW9uVmVyc2lvblxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRlbGVtZXRyeU1hbmFnZXJDb25maWc6IFRlbGVtZXRyeUNvbmZpZyA9IHtcclxuICAgICAgcGxhdGZvcm06IHRlbGVtZXRyeVBsYXRmb3JtLFxyXG4gICAgICBjbGllbnRJZDogY2xpZW50SWRcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IFRlbGVtZXRyeU1hbmFnZXIodGVsZW1ldHJ5TWFuYWdlckNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBhY2NvdW50SWRlbnRpZmllciAgICAgICBjb21iaW5hdGlvbiBvZiBpZFRva2VuLnVpZCBhbmQgaWRUb2tlbi51dGlkXHJcbiAqIGhvbWVBY2NvdW50SWRlbnRpZmllciAgIGNvbWJpbmF0aW9uIG9mIGNsaWVudEluZm8udWlkIGFuZCBjbGllbnRJbmZvLnV0aWRcclxuICogdXNlck5hbWUgICAgICAgICAgICAgICAgaWRUb2tlbi5wcmVmZXJyZWRfdXNlcm5hbWVcclxuICogbmFtZSAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5uYW1lXHJcbiAqIGlkVG9rZW4gICAgICAgICAgICAgICAgIGlkVG9rZW5cclxuICogc2lkICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5zaWQgLSBzZXNzaW9uIGlkZW50aWZpZXJcclxuICogZW52aXJvbm1lbnQgICAgICAgICAgICAgaWR0b2tlbi5pc3N1ZXIgKHRoZSBhdXRob3JpdHkgdGhhdCBpc3N1ZXMgdGhlIHRva2VuKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY291bnQge1xyXG5cclxuICAgIGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyB3aWxsIGJlIGRlcHJlY2F0ZWQgc29vblxyXG4gICAgaWRUb2tlbjogU3RyaW5nRGljdDtcclxuICAgIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3Q7XHJcbiAgICBzaWQ6IHN0cmluZztcclxuICAgIGVudmlyb25tZW50OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIEFjY291bnQgT2JqZWN0XHJcbiAgICAgKiBAcHJhcmFtIGFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgKiBAcGFyYW0gdXNlck5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIHNpZFxyXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3QsIHNpZDogc3RyaW5nLCAgZW52aXJvbm1lbnQ6IHN0cmluZykge1xyXG4gICAgICB0aGlzLmFjY291bnRJZGVudGlmaWVyID0gYWNjb3VudElkZW50aWZpZXI7XHJcbiAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIC8vIHdpbGwgYmUgZGVwcmVjYXRlZCBzb29uXHJcbiAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW5DbGFpbXM7XHJcbiAgICAgIHRoaXMuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW5DbGFpbXM7XHJcbiAgICAgIHRoaXMuc2lkID0gc2lkO1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIGNsaWVudEluZm9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnQoaWRUb2tlbjogSWRUb2tlbiwgY2xpZW50SW5mbzogQ2xpZW50SW5mbyk6IEFjY291bnQge1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYWNjb3VudElkZW50aWZpZXJcclxuICAgICAgICBjb25zdCBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nID0gaWRUb2tlbi5vYmplY3RJZCB8fCAgaWRUb2tlbi5zdWJqZWN0O1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgICAgY29uc3QgdWlkOiBzdHJpbmcgPSBjbGllbnRJbmZvID8gY2xpZW50SW5mby51aWQgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHV0aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnV0aWQgOiBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc0VtcHR5KHVpZCkgJiYgIVV0aWxzLmlzRW1wdHkodXRpZCkpIHtcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZGVudGlmaWVyID0gVXRpbHMuYmFzZTY0RW5jb2RlKHVpZCkgKyBcIi5cIiArIFV0aWxzLmJhc2U2NEVuY29kZSh1dGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBY2NvdW50KGFjY291bnRJZGVudGlmaWVyLCBob21lQWNjb3VudElkZW50aWZpZXIsIGlkVG9rZW4ucHJlZmVycmVkTmFtZSwgaWRUb2tlbi5uYW1lLCBpZFRva2VuLmNsYWltcywgaWRUb2tlbi5zaWQsIGlkVG9rZW4uaXNzdWVyKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IFhockNsaWVudCB9IGZyb20gXCIuL1hIUkNsaWVudFwiO1xyXG5pbXBvcnQgeyBBQURUcnVzdGVkSG9zdExpc3QgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWFkQXV0aG9yaXR5IGV4dGVuZHMgQXV0aG9yaXR5IHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50OiBzdHJpbmcgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb24vZGlzY292ZXJ5L2luc3RhbmNlXCI7XHJcblxyXG4gIHByaXZhdGUgZ2V0IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGAke0FhZEF1dGhvcml0eS5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50fT9hcGktdmVyc2lvbj0xLjAmYXV0aG9yaXphdGlvbl9lbmRwb2ludD0ke3RoaXMuQ2Fub25pY2FsQXV0aG9yaXR5fW9hdXRoMi92Mi4wL2F1dGhvcml6ZWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcclxuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFhZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBPSURDIGVuZHBvaW50XHJcbiAgICogT25seSByZXNwb25kcyB3aXRoIHRoZSBlbmRwb2ludFxyXG4gICAqL1xyXG4gIHB1YmxpYyBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICBjb25zdCByZXN1bHRQcm9taXNlOiBQcm9taXNlPHN0cmluZz4gPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+XHJcbiAgICAgIHJlc29sdmUodGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhvc3Q6IHN0cmluZyA9IHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQ7XHJcbiAgICBpZiAodGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3QpKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGllbnQ6IFhockNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcclxuXHJcbiAgICByZXR1cm4gY2xpZW50LnNlbmRSZXF1ZXN0QXN5bmModGhpcy5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50VXJsLCBcIkdFVFwiLCB0cnVlKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGVuYW50X2Rpc2NvdmVyeV9lbmRwb2ludDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBob3N0IGlzIGluIGEgbGlzdCBvZiB0cnVzdGVkIGhvc3RzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFRoZSBob3N0IHRvIGxvb2sgdXBcclxuICAgKi9cclxuICBwdWJsaWMgSXNJblRydXN0ZWRIb3N0TGlzdChob3N0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBQURUcnVzdGVkSG9zdExpc3RbaG9zdC50b0xvd2VyQ2FzZSgpXTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBYSFIgY2xpZW50IGZvciBKU09OIGVuZHBvaW50c1xyXG4gKiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9hc3luYy1wcm9taXNlXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBYaHJDbGllbnQge1xyXG4gIHB1YmxpYyBzZW5kUmVxdWVzdEFzeW5jKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZW5hYmxlQ2FjaGluZz86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCAvKmFzeW5jOiAqLyB0cnVlKTtcclxuICAgICAgaWYgKGVuYWJsZUNhY2hpbmcpIHtcclxuICAgICAgICAvLyBUT0RPOiAoc2hpdmIpIGVuc3VyZSB0aGF0IHRoaXMgY2FuIGJlIGNhY2hlZFxyXG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcIlB1YmxpY1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgeGhyLm9ubG9hZCA9IChldikgPT4ge1xyXG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB2YXIganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShqc29uUmVzcG9uc2UpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgeGhyLm9uZXJyb3IgPSAoZXYpID0+IHtcclxuICAgICAgICByZWplY3QoeGhyLnN0YXR1cyk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBcIm5vdCBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvcihyZXNwb25zZVRleHQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICB2YXIganNvblJlc3BvbnNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xyXG4gICAgICBpZiAoanNvblJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICByZXR1cm4ganNvblJlc3BvbnNlLmVycm9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgcmVzcG9uc2VUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZVRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBYWRBdXRob3JpdHkgfSBmcm9tIFwiLi9BYWRBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCMmNBdXRob3JpdHkgZXh0ZW5kcyBBYWRBdXRob3JpdHkge1xyXG4gIHB1YmxpYyBzdGF0aWMgQjJDX1BSRUZJWDogU3RyaW5nID0gXCJ0ZnBcIjtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKGF1dGhvcml0eSk7XHJcblxyXG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHM7XHJcbiAgICBpZiAocGF0aFNlZ21lbnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYGh0dHBzOi8vJHt1cmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoU2VnbWVudHNbMF19LyR7cGF0aFNlZ21lbnRzWzFdfS8ke3BhdGhTZWdtZW50c1syXX0vYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcclxuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XHJcbiAgICovXHJcbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgICByZXNvbHZlKHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCkpO1xyXG5cclxuICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QodGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydCkpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgcmVqZWN0KENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcclxuICovXHJcbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHtcclxuICAgIHNjb3Blcz86IEFycmF5PHN0cmluZz47XHJcbiAgICBleHRyYVNjb3Blc1RvQ29uc2VudD86IEFycmF5PHN0cmluZz47XHJcbiAgICBwcm9tcHQ/OiBzdHJpbmc7XHJcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycz86IFN0cmluZ0RpY3Q7XHJcbiAgICBjbGFpbXNSZXF1ZXN0Pzogc3RyaW5nO1xyXG4gICAgYXV0aG9yaXR5Pzogc3RyaW5nO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nO1xyXG4gICAgYWNjb3VudD86IEFjY291bnQ7XHJcbiAgICBzaWQ/OiBzdHJpbmc7XHJcbiAgICBsb2dpbkhpbnQ/OiBzdHJpbmc7XHJcbiAgICBmb3JjZVJlZnJlc2g/OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIHtcclxuICAgIGlmICghcmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGNsYWltcztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2xhaW1zID0gSlNPTi5wYXJzZShyZXF1ZXN0LmNsYWltc1JlcXVlc3QpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IE1vcmUgdmFsaWRhdGlvbiB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHNlcnZlciB0ZWFtIHRlbGxzIHVzIGhvdyB0aGV5IGhhdmUgYWN0dWFsbHkgaW1wbGVtZW50ZWQgY2xhaW1zXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vU2VydmVyRXJyb3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZSA9IHtcclxuICAgIGludGVyYWN0aW9uUmVxdWlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImludGVyYWN0aW9uX3JlcXVpcmVkXCJcclxuICAgIH0sXHJcbiAgICBjb25zZW50UmVxdWlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImNvbnNlbnRfcmVxdWlyZWRcIlxyXG4gICAgfSxcclxuICAgIGxvZ2luUmVxdWlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImxvZ2luX3JlcXVpcmVkXCJcclxuICAgIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlIHVzZXIgaXMgcmVxdWlyZWQgdG8gcGVyZm9ybSBhbiBpbnRlcmFjdGl2ZSB0b2tlbiByZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3IoZXJyb3JTdHJpbmc6IHN0cmluZykgOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBpbnRlcmFjdGlvblJlcXVpcmVkQ29kZXMgPSBbXHJcbiAgICAgICAgICAgIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmludGVyYWN0aW9uUmVxdWlyZWQuY29kZSxcclxuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuY29uc2VudFJlcXVpcmVkLmNvZGUsXHJcbiAgICAgICAgICAgIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUmVxdWlyZWQuY29kZVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvclN0cmluZyAmJiBpbnRlcmFjdGlvblJlcXVpcmVkQ29kZXMuaW5kZXhPZihlcnJvclN0cmluZykgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTG9naW5SZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5sb2dpblJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuaW50ZXJhY3Rpb25SZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDb25zZW50UmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuY29uc2VudFJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcclxuXHJcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5leHBvcnQgdHlwZSBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICB1bmlxdWVJZDogc3RyaW5nO1xyXG4gICAgdGVuYW50SWQ6IHN0cmluZztcclxuICAgIHRva2VuVHlwZTogc3RyaW5nO1xyXG4gICAgaWRUb2tlbjogSWRUb2tlbjtcclxuICAgIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3Q7XHJcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgZXhwaXJlc09uOiBEYXRlO1xyXG4gICAgYWNjb3VudDogQWNjb3VudDtcclxuICAgIGFjY291bnRTdGF0ZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkoc3RhdGU6IHN0cmluZykgOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1bmlxdWVJZDogXCJcIixcclxuICAgICAgICB0ZW5hbnRJZDogXCJcIixcclxuICAgICAgICB0b2tlblR5cGU6IFwiXCIsXHJcbiAgICAgICAgaWRUb2tlbjogbnVsbCxcclxuICAgICAgICBpZFRva2VuQ2xhaW1zOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBcIlwiLFxyXG4gICAgICAgIHNjb3BlczogbnVsbCxcclxuICAgICAgICBleHBpcmVzT246IG51bGwsXHJcbiAgICAgICAgYWNjb3VudDogbnVsbCxcclxuICAgICAgICBhY2NvdW50U3RhdGU6IHN0YXRlXHJcbiAgICB9O1xyXG59XHJcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiaW1wb3J0IHsgQjJjQXV0aG9yaXR5IH0gZnJvbSBcIi4uL0IyY0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBQURUcnVzdGVkSG9zdExpc3QgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFRFTkFOVF9QTEFDRUhPTERFUiwgRVZFTlRfTkFNRV9QUkVGSVggfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzY3J1YlRlbmFudEZyb21VcmkgPSAodXJpOiBzdHJpbmcpOiBTdHJpbmcgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVybCA9IFV0aWxzLkdldFVybENvbXBvbmVudHModXJpKTtcclxuXHJcbiAgICAvLyB2YWxpZGF0ZSB0cnVzdGVkIGhvc3RcclxuICAgIGlmICghQUFEVHJ1c3RlZEhvc3RMaXN0W3VybC5Ib3N0TmFtZUFuZFBvcnQudG9Mb2NhbGVMb3dlckNhc2UoKV0pIHtcclxuICAgICAgICAvLyBTaG91bGQgdGhpcyByZXR1cm4gbnVsbCBvciB3aGF0IHdhcyBwYXNzZWQ/XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aFBhcmFtcyA9IHVybC5QYXRoU2VnbWVudHM7XHJcblxyXG4gICAgaWYgKHBhdGhQYXJhbXMgJiYgcGF0aFBhcmFtcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgIGNvbnN0IHRlbmFudFBvc2l0aW9uID0gcGF0aFBhcmFtc1sxXSA9PT0gIEIyY0F1dGhvcml0eS5CMkNfUFJFRklYID8gMiA6IDE7XHJcbiAgICAgICAgaWYgKHRlbmFudFBvc2l0aW9uIDwgcGF0aFBhcmFtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcGF0aFBhcmFtc1t0ZW5hbnRQb3NpdGlvbl0gPSBURU5BTlRfUExBQ0VIT0xERVI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAgYCR7dXJsLlByb3RvY29sfS8vJHt1cmwuSG9zdE5hbWVBbmRQb3J0fS8ke3BhdGhQYXJhbXMuam9pbihcIi9cIil9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNoUGVyc29uYWxJZGVudGlmaWVyID0gKHZhbHVlVG9IYXNoOiBzdHJpbmcpID0+IHtcclxuICAgIC8vIFRPRE8gc2hhMjU2IHRoaXNcclxuICAgIC8vIEN1cnJlbnQgdGVzdCBydW5uZXIgaXMgYmVpbmcgZnVubnkgd2l0aCBub2RlIGxpYnMgdGhhdCBhcmUgd2VicGFja2VkIGFueXdheVxyXG4gICAgLy8gbmVlZCBhIGRpZmZlcmVudCBzb2x1dGlvblxyXG4gICAgcmV0dXJuIFV0aWxzLmJhc2U2NEVuY29kZSh2YWx1ZVRvSGFzaCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGVuZEV2ZW50TmFtZVByZWZpeCA9IChzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtFVkVOVF9OQU1FX1BSRUZJWH0ke3N1ZmZpeCB8fCBcIlwifWA7XHJcbiIsImV4cG9ydCB7IFVzZXJBZ2VudEFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcclxuZXhwb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmV4cG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmV4cG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmV4cG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5leHBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuZXhwb3J0IHsgQ2FjaGVSZXN1bHQgfSBmcm9tIFwiLi9Vc2VyQWdlbnRBcHBsaWNhdGlvblwiO1xyXG5leHBvcnQgeyBDYWNoZUxvY2F0aW9uLCBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xyXG5leHBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcclxuZXhwb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XHJcblxyXG4vLyBFcnJvcnNcclxuZXhwb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XHJcbmV4cG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5leHBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XHJcbmV4cG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5leHBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbktleSB7XHJcblxyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgc2NvcGVzOiBzdHJpbmc7XHJcbiAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5hdXRob3JpdHkgPSBVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5KTtcclxuICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xyXG4gICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBVdGlscy5iYXNlNjRFbmNvZGUodWlkKSArIFwiLlwiICsgVXRpbHMuYmFzZTY0RW5jb2RlKHV0aWQpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlblZhbHVlIHtcclxuXHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBpZFRva2VuOiBzdHJpbmc7XHJcbiAgZXhwaXJlc0luOiBzdHJpbmc7XHJcbiAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkVG9rZW46IHN0cmluZywgZXhwaXJlc0luOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuO1xyXG4gICAgdGhpcy5leHBpcmVzSW4gPSBleHBpcmVzSW47XHJcbiAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IGhvbWVBY2NvdW50SWRlbnRpZmllcjtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogTm9uY2U6IE9JREMgTm9uY2UgZGVmaW5pdGlvbjogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjSURUb2tlblxyXG4gKiBTdGF0ZTogT0F1dGggU3BlYzogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi0xMC4xMlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMge1xyXG5cclxuICBhdXRob3JpdHlJbnN0YW5jZTogQXV0aG9yaXR5O1xyXG4gIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICBub25jZTogc3RyaW5nO1xyXG4gIHN0YXRlOiBzdHJpbmc7XHJcblxyXG4gIC8vIHRlbGVtZXRyeSBpbmZvcm1hdGlvblxyXG4gIHhDbGllbnRWZXI6IHN0cmluZztcclxuICB4Q2xpZW50U2t1OiBzdHJpbmc7XHJcbiAgY29ycmVsYXRpb25JZDogc3RyaW5nO1xyXG5cclxuICByZXNwb25zZVR5cGU6IHN0cmluZztcclxuICByZWRpcmVjdFVyaTogc3RyaW5nO1xyXG5cclxuICBwcm9tcHRWYWx1ZTogc3RyaW5nO1xyXG4gIGNsYWltc1ZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIHF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xyXG4gIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXR5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA/IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5IDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAqIEBwYXJhbSBzY29wZVxyXG4gICAqIEBwYXJhbSByZXNwb25zZVR5cGVcclxuICAgKiBAcGFyYW0gcmVkaXJlY3RVcmlcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciAoYXV0aG9yaXR5OiBBdXRob3JpdHksIGNsaWVudElkOiBzdHJpbmcsIHNjb3BlOiBBcnJheTxzdHJpbmc+LCByZXNwb25zZVR5cGU6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc3RhdGU6IHN0cmluZyApIHtcclxuICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPSBhdXRob3JpdHk7XHJcbiAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICB0aGlzLnNjb3BlcyA9IHNjb3BlO1xyXG5cclxuICAgIHRoaXMubm9uY2UgPSBVdGlscy5jcmVhdGVOZXdHdWlkKCk7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgJiYgIVV0aWxzLmlzRW1wdHkoc3RhdGUpID8gIFV0aWxzLmNyZWF0ZU5ld0d1aWQoKSArIFwifFwiICsgc3RhdGUgICA6IFV0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcclxuXHJcbiAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byB1c2VyIHBhc3NlZCB2cyBnZW5lcmF0ZWQgd2l0aCB0aGUgbmV3IFBSXHJcbiAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBVdGlscy5jcmVhdGVOZXdHdWlkKCk7XHJcblxyXG4gICAgLy8gdGVsZW1ldHJ5IGluZm9ybWF0aW9uXHJcbiAgICB0aGlzLnhDbGllbnRTa3UgPSBcIk1TQUwuSlNcIjtcclxuICAgIHRoaXMueENsaWVudFZlciA9IFV0aWxzLmdldExpYnJhcnlWZXJzaW9uKCk7XHJcblxyXG4gICAgdGhpcy5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XHJcbiAgICB0aGlzLnJlZGlyZWN0VXJpID0gcmVkaXJlY3RVcmk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZW5lcmF0ZXMgdGhlIFVSTCB3aXRoIFF1ZXJ5U3RyaW5nIFBhcmFtZXRlcnNcclxuICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICovXHJcbiAgY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHN0ciA9IHRoaXMuY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzY29wZXMpO1xyXG4gICAgbGV0IGF1dGhFbmRwb2ludDogc3RyaW5nID0gdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5BdXRob3JpemF0aW9uRW5kcG9pbnQ7XHJcbiAgICAvLyBpZiB0aGUgZW5kcG9pbnQgYWxyZWFkeSBoYXMgcXVlcnlwYXJhbXMsIGxldHMgYWRkIHRvIGl0LCBvdGhlcndpc2UgYWRkIHRoZSBmaXJzdCBvbmVcclxuICAgIGlmIChhdXRoRW5kcG9pbnQuaW5kZXhPZihcIj9cIikgPCAwKSB7XHJcbiAgICAgIGF1dGhFbmRwb2ludCArPSBcIj9cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF1dGhFbmRwb2ludCArPSBcIiZcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXF1ZXN0VXJsOiBzdHJpbmcgPSBgJHthdXRoRW5kcG9pbnR9JHtzdHIuam9pbihcIiZcIil9YDtcclxuICAgIHJldHVybiByZXF1ZXN0VXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgdGhlIGFycmF5IG9mIGFsbCBRdWVyeVN0cmluZ1BhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcclxuICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICovXHJcbiAgY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzY29wZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGlmICghc2NvcGVzKSB7XHJcbiAgICAgIHNjb3BlcyA9IFt0aGlzLmNsaWVudElkXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPT09IC0xKSB7XHJcbiAgICAgIHNjb3Blcy5wdXNoKHRoaXMuY2xpZW50SWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RyOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBzdHIucHVzaChcInJlc3BvbnNlX3R5cGU9XCIgKyB0aGlzLnJlc3BvbnNlVHlwZSk7XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVjbGllbnRJZFVzZWRJblNjb3BlKHNjb3Blcyk7XHJcbiAgICBzdHIucHVzaChcInNjb3BlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucGFyc2VTY29wZShzY29wZXMpKSk7XHJcbiAgICBzdHIucHVzaChcImNsaWVudF9pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNsaWVudElkKSk7XHJcbiAgICBzdHIucHVzaChcInJlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnJlZGlyZWN0VXJpKSk7XHJcblxyXG4gICAgc3RyLnB1c2goXCJzdGF0ZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnN0YXRlKSk7XHJcbiAgICBzdHIucHVzaChcIm5vbmNlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMubm9uY2UpKTtcclxuXHJcbiAgICBzdHIucHVzaChcImNsaWVudF9pbmZvPTFcIik7XHJcbiAgICBzdHIucHVzaChgeC1jbGllbnQtU0tVPSR7dGhpcy54Q2xpZW50U2t1fWApO1xyXG4gICAgc3RyLnB1c2goYHgtY2xpZW50LVZlcj0ke3RoaXMueENsaWVudFZlcn1gKTtcclxuICAgIGlmICh0aGlzLnByb21wdFZhbHVlKSB7XHJcbiAgICAgIHN0ci5wdXNoKFwicHJvbXB0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucHJvbXB0VmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jbGFpbXNWYWx1ZSkge1xyXG4gICAgICBzdHIucHVzaChcImNsYWltcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNsYWltc1ZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucXVlcnlQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHN0ci5wdXNoKHRoaXMucXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5leHRyYVF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICBzdHIucHVzaCh0aGlzLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHIucHVzaChcImNsaWVudC1yZXF1ZXN0LWlkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY29ycmVsYXRpb25JZCkpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFwcGVuZCB0aGUgcmVxdWlyZWQgc2NvcGVzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtYmFzaWMtMV8wLmh0bWwjU2NvcGVzXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIHRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGllbnRJZEluZGV4OiBudW1iZXIgPSBzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKTtcclxuICAgIGlmIChjbGllbnRJZEluZGV4ID49IDApIHtcclxuICAgICAgc2NvcGVzLnNwbGljZShjbGllbnRJZEluZGV4LCAxKTtcclxuICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKFwib3BlbmlkXCIpID09PSAtMSkge1xyXG4gICAgICAgIHNjb3Blcy5wdXNoKFwib3BlbmlkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcInByb2ZpbGVcIikgPT09IC0xKSB7XHJcbiAgICAgICAgc2NvcGVzLnB1c2goXCJwcm9maWxlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZSB0aGUgc2NvcGVzIGludG8gYSBmb3JtYXR0ZWQgc2NvcGVMaXN0XHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIHBhcnNlU2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcclxuICAgIGxldCBzY29wZUxpc3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAoc2NvcGVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHNjb3Blcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHNjb3BlTGlzdCArPSAoaSAhPT0gc2NvcGVzLmxlbmd0aCAtIDEpID8gc2NvcGVzW2ldICsgXCIgXCIgOiBzY29wZXNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2NvcGVMaXN0O1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xpZW50SW5mbyB7XHJcblxyXG4gIHByaXZhdGUgX3VpZDogc3RyaW5nO1xyXG4gIGdldCB1aWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl91aWQgPyB0aGlzLl91aWQgOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgc2V0IHVpZCh1aWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdWlkID0gdWlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXRpZDogc3RyaW5nO1xyXG4gIGdldCB1dGlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXRpZCA/IHRoaXMuX3V0aWQgOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgc2V0IHV0aWQodXRpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91dGlkID0gdXRpZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJhd0NsaWVudEluZm86IHN0cmluZykge1xyXG4gICAgaWYgKCFyYXdDbGllbnRJbmZvIHx8IFV0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcclxuICAgICAgdGhpcy51aWQgPSBcIlwiO1xyXG4gICAgICB0aGlzLnV0aWQgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVjb2RlZENsaWVudEluZm86IHN0cmluZyA9IFV0aWxzLmJhc2U2NERlY29kZShyYXdDbGllbnRJbmZvKTtcclxuICAgICAgY29uc3QgY2xpZW50SW5mbzogQ2xpZW50SW5mbyA9IDxDbGllbnRJbmZvPkpTT04ucGFyc2UoZGVjb2RlZENsaWVudEluZm8pO1xyXG4gICAgICBpZiAoY2xpZW50SW5mbykge1xyXG4gICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidWlkXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLnVpZCA9IGNsaWVudEluZm8udWlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsaWVudEluZm8uaGFzT3duUHJvcGVydHkoXCJ1dGlkXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLnV0aWQgPSBjbGllbnRJbmZvLnV0aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWRUb2tlbiB7XHJcblxyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG9iamVjdElkOiBzdHJpbmc7XHJcbiAgc3ViamVjdDogc3RyaW5nO1xyXG4gIHRlbmFudElkOiBzdHJpbmc7XHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG4gIHByZWZlcnJlZE5hbWU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaG9tZU9iamVjdElkOiBzdHJpbmc7XHJcbiAgbm9uY2U6IHN0cmluZztcclxuICBleHBpcmF0aW9uOiBzdHJpbmc7XHJcbiAgcmF3SWRUb2tlbjogc3RyaW5nO1xyXG4gIGNsYWltczogU3RyaW5nRGljdDtcclxuICBzaWQ6IHN0cmluZztcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG4gIGNvbnN0cnVjdG9yKHJhd0lkVG9rZW46IHN0cmluZykge1xyXG4gICAgaWYgKFV0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKHJhd0lkVG9rZW4pO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5yYXdJZFRva2VuID0gcmF3SWRUb2tlbjtcclxuICAgICAgdGhpcy5jbGFpbXMgPSBVdGlscy5leHRyYWN0SWRUb2tlbihyYXdJZFRva2VuKTtcclxuICAgICAgaWYgKHRoaXMuY2xhaW1zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiaXNzXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLmlzc3VlciA9IHRoaXMuY2xhaW1zW1wiaXNzXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwib2lkXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0SWQgPSB0aGlzLmNsYWltc1tcIm9pZFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInN1YlwiKSkge1xyXG4gICAgICAgICAgdGhpcy5zdWJqZWN0ID0gdGhpcy5jbGFpbXNbXCJzdWJcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJ0aWRcIikpIHtcclxuICAgICAgICAgIHRoaXMudGVuYW50SWQgPSB0aGlzLmNsYWltc1tcInRpZFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInZlclwiKSkge1xyXG4gICAgICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5jbGFpbXNbXCJ2ZXJcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJwcmVmZXJyZWRfdXNlcm5hbWVcIikpIHtcclxuICAgICAgICAgIHRoaXMucHJlZmVycmVkTmFtZSA9IHRoaXMuY2xhaW1zW1wicHJlZmVycmVkX3VzZXJuYW1lXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwibmFtZVwiKSkge1xyXG4gICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jbGFpbXNbXCJuYW1lXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwibm9uY2VcIikpIHtcclxuICAgICAgICAgIHRoaXMubm9uY2UgPSB0aGlzLmNsYWltc1tcIm5vbmNlXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiZXhwXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGlyYXRpb24gPSB0aGlzLmNsYWltc1tcImV4cFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImhvbWVfb2lkXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZU9iamVjdElkID0gdGhpcy5jbGFpbXNbXCJob21lX29pZFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInNpZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZCA9IHRoaXMuY2xhaW1zW1wic2lkXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIFRPRE86IFRoaXMgZXJyb3IgaGVyZSB3b24ndCByZWFsbHkgZXZlcnkgYmUgdGhyb3duLCBzaW5jZSBleHRyYWN0SWRUb2tlbigpIHJldHVybnMgbnVsbCBpZiB0aGUgZGVjb2RlSnd0KCkgZmFpbHMuXHJcbiAgICAgIC8vIE5lZWQgdG8gYWRkIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlIHRvIGFjY291bnQgZm9yIGJlaW5nIHVuYWJsZSB0byBkZWNvZGUgand0cy5cclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcclxuaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgQ2FjaGVLZXlzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHsvLyBTaW5nbGV0b25cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFN0b3JhZ2U7XHJcbiAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZVN1cHBvcnRlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb24pIHtcclxuICAgIGlmIChTdG9yYWdlLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybiBTdG9yYWdlLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FjaGVMb2NhdGlvbiA9IGNhY2hlTG9jYXRpb247XHJcbiAgICB0aGlzLmxvY2FsU3RvcmFnZVN1cHBvcnRlZCA9IHR5cGVvZiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPSBudWxsO1xyXG4gICAgdGhpcy5zZXNzaW9uU3RvcmFnZVN1cHBvcnRlZCA9IHR5cGVvZiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93W2NhY2hlTG9jYXRpb25dICE9IG51bGw7XHJcbiAgICBTdG9yYWdlLmluc3RhbmNlID0gdGhpcztcclxuICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgJiYgIXRoaXMuc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZU5vU3RvcmFnZVN1cHBvcnRlZEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICAgIC8vIGFkZCB2YWx1ZSB0byBzdG9yYWdlXHJcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBlbmFibGVDb29raWVTdG9yYWdlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBzdG9yYWdlXHJcbiAgICBnZXRJdGVtKGtleTogc3RyaW5nLCBlbmFibGVDb29raWVTdG9yYWdlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UgJiYgdGhpcy5nZXRJdGVtQ29va2llKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlIHZhbHVlIGZyb20gc3RvcmFnZVxyXG4gICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0ucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGVhciBzdG9yYWdlIChyZW1vdmUgYWxsIGl0ZW1zIGZyb20gaXQpXHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEFjY2Vzc1Rva2VucyhjbGllbnRJZDogc3RyaW5nLCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZyk6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0czogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+ID0gW107XHJcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbTtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5tYXRjaChjbGllbnRJZCkgJiYga2V5Lm1hdGNoKGhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG5ldyBBY2Nlc3NUb2tlbkNhY2hlSXRlbShKU09OLnBhcnNlKGtleSksIEpTT04ucGFyc2UodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChhY2Nlc3NUb2tlbkNhY2hlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFjcXVpcmVUb2tlbkVudHJpZXMoc3RhdGU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChrZXkuaW5kZXhPZihDYWNoZUtleXMuQVVUSE9SSVRZKSAhPT0gLTEgfHwga2V5LmluZGV4T2YoQ2FjaGVLZXlzLkFDUVVJUkVfVE9LRU5fQUNDT1VOVCkgIT09IDEpICYmICghc3RhdGUgfHwga2V5LmluZGV4T2Yoc3RhdGUpICE9PSAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRLZXkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzcGxpdEtleVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgJiYgIXRoaXMudG9rZW5SZW5ld2FsSW5Qcm9ncmVzcyhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShDb25zdGFudHMuc3RhdGVMb2dpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIFwiXCIsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGVhckNvb2tpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9rZW5SZW5ld2FsSW5Qcm9ncmVzcyhzdGF0ZVZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XHJcbiAgICAgICAgY29uc3QgcmVuZXdTdGF0dXMgPSBzdG9yYWdlW0NvbnN0YW50cy5yZW5ld1N0YXR1cyArIHN0YXRlVmFsdWVdO1xyXG4gICAgICAgIHJldHVybiAhKCFyZW5ld1N0YXR1cyB8fCByZW5ld1N0YXR1cyAhPT0gQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldENhY2hlSXRlbXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihDb25zdGFudHMubXNhbCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjcXVpcmVUb2tlbkVudHJpZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nLCBjVmFsdWU6IHN0cmluZywgZXhwaXJlcz86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBjb29raWVTdHIgPSBjTmFtZSArIFwiPVwiICsgY1ZhbHVlICsgXCI7XCI7XHJcbiAgICAgICAgaWYgKGV4cGlyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJlVGltZSA9IHRoaXMuZ2V0Q29va2llRXhwaXJhdGlvblRpbWUoZXhwaXJlcyk7XHJcbiAgICAgICAgICAgIGNvb2tpZVN0ciArPSBcImV4cGlyZXM9XCIgKyBleHBpcmVUaW1lICsgXCI7XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gY05hbWUgKyBcIj1cIjtcclxuICAgICAgICBjb25zdCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29va2llRXhwaXJhdGlvblRpbWUoY29va2llTGlmZURheXM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGV4cHIgPSBuZXcgRGF0ZSh0b2RheS5nZXRUaW1lKCkgKyBjb29raWVMaWZlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBleHByLnRvVVRDU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDb29raWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIFwiXCIsIC0xKTtcclxuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLnN0YXRlTG9naW4sIFwiXCIsIC0xKTtcclxuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLmxvZ2luUmVxdWVzdCwgXCJcIiwgLTEpO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIFwiXCIsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhY3F1aXJlVG9rZW5BY2NvdW50S2V5IHRvIGNhY2hlIGFjY291bnQgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQ6IGFueSwgc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BQ1FVSVJFX1RPS0VOX0FDQ09VTlQgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgK1xyXG4gICAgICAgICAgICBgJHthY2NvdW50SWR9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciAgKyBgJHtzdGF0ZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGF1dGhvcml0eUtleSB0byBjYWNoZSBhdXRob3JpdHlcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BVVRIT1JJVFkgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBgJHtzdGF0ZX1gO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlblZhbHVlXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIHtcclxuXHJcbiAga2V5OiBBY2Nlc3NUb2tlbktleTtcclxuICB2YWx1ZTogQWNjZXNzVG9rZW5WYWx1ZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5OiBBY2Nlc3NUb2tlbktleSwgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWUpIHtcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuL0IyY0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eUZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAqIFBhcnNlIHRoZSB1cmwgYW5kIGRldGVybWluZSB0aGUgdHlwZSBvZiBhdXRob3JpdHlcclxuICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBEZXRlY3RBdXRob3JpdHlGcm9tVXJsKGF1dGhvcml0eVVybDogc3RyaW5nKTogQXV0aG9yaXR5VHlwZSB7XHJcbiAgICAgICAgYXV0aG9yaXR5VXJsID0gVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eVVybCk7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5VXJsKTtcclxuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSBjb21wb25lbnRzLlBhdGhTZWdtZW50cztcclxuICAgICAgICBzd2l0Y2ggKHBhdGhTZWdtZW50c1swXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidGZwXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5CMkM7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGZzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BZGZzO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlIGFuIGF1dGhvcml0eSBvYmplY3Qgb2YgdGhlIGNvcnJlY3QgdHlwZSBiYXNlZCBvbiB0aGUgdXJsXHJcbiAgICAqIFBlcmZvcm1zIGJhc2ljIGF1dGhvcml0eSB2YWxpZGF0aW9uIC0gY2hlY2tzIHRvIHNlZSBpZiB0aGUgYXV0aG9yaXR5IGlzIG9mIGEgdmFsaWQgdHlwZSAoZWcgYWFkLCBiMmMpXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVJbnN0YW5jZShhdXRob3JpdHlVcmw6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pOiBBdXRob3JpdHkge1xyXG4gICAgICAgIGlmIChVdGlscy5pc0VtcHR5KGF1dGhvcml0eVVybCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBBdXRob3JpdHlGYWN0b3J5LkRldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsKTtcclxuICAgICAgICAvLyBEZXBlbmRpbmcgb24gYWJvdmUgZGV0ZWN0aW9uLCBjcmVhdGUgdGhlIHJpZ2h0IHR5cGUuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5CMkM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEIyY0F1dGhvcml0eShhdXRob3JpdHlVcmwsIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkFhZDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQWFkQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgdmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQXV0aG9yaXR5VHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBUZWxlbWV0cnlFdmVudCBmcm9tIFwiLi9UZWxlbWV0cnlFdmVudFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29tcGxldGVkRXZlbnRzLFxyXG4gICAgRXZlbnRDb3VudCxcclxuICAgIEV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWQsXHJcbiAgICBJblByb2dyZXNzRXZlbnRzLFxyXG4gICAgVGVsZW1ldHJ5Q29uZmlnLFxyXG4gICAgVGVsZW1ldHJ5UGxhdGZvcm0sXHJcbiAgICBUZWxlbWV0cnlFbWl0dGVyXHJcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5VHlwZXNcIjtcclxuaW1wb3J0IERlZmF1bHRFdmVudCBmcm9tIFwiLi9EZWZhdWx0RXZlbnRcIjtcclxuXHJcbi8vIGZvciB1c2UgaW4gY2FjaGUgZXZlbnRzXHJcbmNvbnN0IE1TQUxfQ0FDSEVfRVZFTlRfVkFMVUVfUFJFRklYID0gXCJtc2FsLnRva2VuXCI7XHJcbmNvbnN0IE1TQUxfQ0FDSEVfRVZFTlRfTkFNRSA9IFwibXNhbC5jYWNoZV9ldmVudFwiO1xyXG5cclxuY29uc3QgY3JlYXRlRXZlbnRLZXkgPSAoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KTogc3RyaW5nID0+IChcclxuICAgIGAke2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWR9LSR7ZXZlbnQuZXZlbnRJZH0tJHtldmVudC5ldmVudE5hbWV9YFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5TWFuYWdlciB7XHJcblxyXG4gICAgLy8gY29ycmVsYXRpb24gSWQgdG8gbGlzdCBvZiBldmVudHNcclxuICAgIHByaXZhdGUgY29tcGxldGVkRXZlbnRzOiBDb21wbGV0ZWRFdmVudHMgPSB7fTtcclxuICAgIC8vIGV2ZW50IGtleSB0byBldmVudFxyXG4gICAgcHJpdmF0ZSBpblByb2dyZXNzRXZlbnRzOiBJblByb2dyZXNzRXZlbnRzID0ge307XHJcbiAgICAvLyBjb3JyZWxhdGlvbiBpZCB0byBtYXAgb2YgZXZlbnRuYW1lIHRvIGNvdW50XHJcbiAgICBwcml2YXRlIGV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWQ6IEV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWQgPSB7fTtcclxuXHJcbiAgICAvL0ltcGxlbWVudCBhZnRlciBBUEkgRVZFTlRcclxuICAgIHByaXZhdGUgb25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRlbGVtZXRyeVBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFRlbGVtZXRyeUNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlcikge1xyXG4gICAgICAgIC8vIFRPRE8gVEhST1cgaWYgYmFkIG9wdGlvbnNcclxuICAgICAgICB0aGlzLnRlbGVtZXRyeVBsYXRmb3JtID0gY29uZmlnLnBsYXRmb3JtO1xyXG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjb25maWcuY2xpZW50SWQ7XHJcbiAgICAgICAgdGhpcy5vbmx5U2VuZEZhaWx1cmVUZWxlbWV0cnkgPSBjb25maWcub25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5O1xyXG4gICAgICAgIC8vIFRPRE8sIHdoZW4gaSBnZXQgdG8gd2lyaW5nIHRoaXMgdGhyb3VnaCwgdGhpbmsgYWJvdXQgd2hhdCBpdCBtZWFucyBpZlxyXG4gICAgICAgIC8vIGEgZGV2ZWxvcGVyIGRvZXMgbm90IGltcGxlbWVudCB0ZWxlbSBhdCBhbGwsIHdlIHN0aWxsIGluc3RydW1lbnQsIGJ1dCB0ZWxlbWV0cnlFbWl0dGVyIGNhbiBiZVxyXG4gICAgICAgIC8vIG9wdGlvbmFsP1xyXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlciA9IHRlbGVtZXRyeUVtaXR0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRFdmVudChldmVudDogVGVsZW1ldHJ5RXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGVsZW1ldHJ5RW1pdHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gY3JlYXRlRXZlbnRLZXkoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV0gPSBldmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRXZlbnQoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBjcmVhdGVFdmVudEtleShldmVudCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIgfHwgIXRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRFdmVudENvdW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkRXZlbnRzID0gdGhpcy5jb21wbGV0ZWRFdmVudHNbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF07XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkRXZlbnRzW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdID0gWy4uLihjb21wbGV0ZWRFdmVudHMgfHwgW10pLCBldmVudF07XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldO1xyXG4gICAgfVxyXG5cclxuICAgIGZsdXNoKGNvcnJlbGF0aW9uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IHVuZmluaXNoZWQgZXZlbnRzIHNob3VsZCB0aGlzIHN0aWxsIHJldHVybiB0aGVtP1xyXG4gICAgICAgIGlmICghdGhpcy50ZWxlbWV0cnlFbWl0dGVyIHx8ICF0aGlzLmNvbXBsZXRlZEV2ZW50c1tjb3JyZWxhdGlvbklkXSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcnBoYW5lZEV2ZW50cyA9IHRoaXMuZ2V0T3JwaGFuZWRFdmVudHMoY29ycmVsYXRpb25JZCk7XHJcbiAgICAgICAgb3JwaGFuZWRFdmVudHMuZm9yRWFjaChldmVudCA9PiB0aGlzLmluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQpKTtcclxuICAgICAgICBjb25zdCBldmVudHNUb0ZsdXNoOiBBcnJheTxUZWxlbWV0cnlFdmVudD4gPSBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdLFxyXG4gICAgICAgICAgICAuLi5vcnBoYW5lZEV2ZW50c1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbXBsZXRlZEV2ZW50c1tjb3JyZWxhdGlvbklkXTtcclxuICAgICAgICBjb25zdCBldmVudENvdW50c1RvRmx1c2g6IEV2ZW50Q291bnQgPSB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbY29ycmVsYXRpb25JZF07XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbY29ycmVsYXRpb25JZF07XHJcbiAgICAgICAgLy8gVE9ETyBhZGQgZnVuY2l0b25hbGl0eSBmb3Igb25seUZsdXNoRmFpbHVyZXMgYWZ0ZXIgaW1wbGVtZW50aW5nIGFwaSBldmVudD8gPz9cclxuXHJcbiAgICAgICAgaWYgKCFldmVudHNUb0ZsdXNoIHx8ICFldmVudHNUb0ZsdXNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZWZhdWx0RXZlbnQ6IERlZmF1bHRFdmVudCA9IG5ldyBEZWZhdWx0RXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMudGVsZW1ldHJ5UGxhdGZvcm0sXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQsXHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGV2ZW50Q291bnRzVG9GbHVzaFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50c1dpdGhEZWZhdWx0RXZlbnQgPSBbIC4uLmV2ZW50c1RvRmx1c2gsIGRlZmF1bHRFdmVudCBdO1xyXG5cclxuICAgICAgICB0aGlzLnRlbGVtZXRyeUVtaXR0ZXIoZXZlbnRzV2l0aERlZmF1bHRFdmVudC5tYXAoZSA9PiBlLmdldCgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRFdmVudENvdW50KGV2ZW50OiBUZWxlbWV0cnlFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFRPRE8sIG5hbWUgY2FjaGUgZXZlbnQgZGlmZmVyZW50P1xyXG4gICAgICAgIC8vIGlmIHR5cGUgaXMgY2FjaGUgZXZlbnQsIGNoYW5nZSBuYW1lXHJcbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnQuZXZlbnROYW1lO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50Q291bnQgPSB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF07XHJcbiAgICAgICAgaWYgKCFldmVudENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXSA9IHtcclxuICAgICAgICAgICAgICAgIFtldmVudE5hbWVdOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXZlbnRDb3VudFtldmVudE5hbWVdID0gZXZlbnRDb3VudFtldmVudE5hbWVdID8gZXZlbnRDb3VudFtldmVudE5hbWVdICsgMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3JwaGFuZWRFdmVudHMoY29ycmVsYXRpb25JZDogc3RyaW5nKTogQXJyYXk8VGVsZW1ldHJ5RXZlbnQ+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pblByb2dyZXNzRXZlbnRzKVxyXG4gICAgICAgICAgICAucmVkdWNlKChtZW1vLCBldmVudEtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50S2V5LmluZGV4T2YoY29ycmVsYXRpb25JZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ubWVtbywgZXZlbnRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbW87XHJcbiAgICAgICAgICAgIH0sIFtdKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFVkVOVF9OQU1FX1BSRUZJWCwgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcclxuaW1wb3J0IFRlbGVtZXRyeUV2ZW50IGZyb20gXCIuL1RlbGVtZXRyeUV2ZW50XCI7XHJcbmltcG9ydCB7IEV2ZW50Q291bnQsIFRlbGVtZXRyeVBsYXRmb3JtIH0gZnJvbSBcIi4vVGVsZW1ldHJ5VHlwZXNcIjtcclxuaW1wb3J0IHsgcHJlcGVuZEV2ZW50TmFtZVByZWZpeCB9IGZyb20gXCIuL1RlbGVtZXRyeVV0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0RXZlbnQgZXh0ZW5kcyBUZWxlbWV0cnlFdmVudCB7XHJcbiAgICAvLyBUT0RPIFBsYXRmb3JtIFR5cGVcclxuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybSwgY29ycmVsYXRpb25JZDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBldmVudENvdW50OiBFdmVudENvdW50KSB7XHJcbiAgICAgICAgc3VwZXIocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImRlZmF1bHRfZXZlbnRcIiksIGNvcnJlbGF0aW9uSWQpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImNsaWVudF9pZFwiKV0gPSBjbGllbnRJZDtcclxuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJzZGtfcGxhZm9ybVwiKV0gPSBwbGF0Zm9ybS5zZGs7XHJcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwic2RrX3ZlcnNpb25cIildID0gcGxhdGZvcm0uc2RrVmVyc2lvbjtcclxuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJhcHBsaWNhdGlvbl9uYW1lXCIpXSA9IHBsYXRmb3JtLmFwcGxpY2F0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJhcHBsaWNhdGlvbl92ZXJzaW9uXCIpXSA9IHBsYXRmb3JtLmFwcGxpY2F0aW9uVmVyc2lvbjtcclxuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLlVpRXZlbnRDb3VudFRlbGVtZXRyeUJhdGNoS2V5fWBdID0gdGhpcy5nZXRFdmVudENvdW50KHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJ1aV9ldmVudFwiKSwgZXZlbnRDb3VudCk7XHJcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5IdHRwRXZlbnRDb3VudFRlbGVtZXRyeUJhdGNoS2V5fWBdID0gdGhpcy5nZXRFdmVudENvdW50KHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJodHRwX2V2ZW50XCIpLCBldmVudENvdW50KTtcclxuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkNhY2hlRXZlbnRDb3VudENvbnN0U3RyS2V5fWBdID0gdGhpcy5nZXRFdmVudENvdW50KHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJjYWNoZV9ldmVudFwiKSwgZXZlbnRDb3VudCk7XHJcbiAgICAgICAgLy8vIERldmljZSBpZD9cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEV2ZW50Q291bnQoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50Q291bnQ6IEV2ZW50Q291bnQpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICghZXZlbnRDb3VudFtldmVudE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXZlbnRDb3VudFtldmVudE5hbWVdO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEVWRU5UX05BTUVfS0VZLFxyXG4gICAgU1RBUlRfVElNRV9LRVksXHJcbiAgICBFTEFQU0VEX1RJTUVfS0VZXHJcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHByZXBlbmRFdmVudE5hbWVQcmVmaXggfSBmcm9tIFwiLi9UZWxlbWV0cnlVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5RXZlbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhcnRUaW1lc3RhbXA6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBldmVudDogYW55OyAvLyBUT0RPIFRZUEUgVEhJU1xyXG4gICAgcHVibGljIGV2ZW50SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudE5hbWU6IHN0cmluZywgY29ycmVsYXRpb25JZDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRJZCA9IHV1aWQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0ge1xyXG4gICAgICAgICAgICBbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldOiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFNUQVJUX1RJTUVfS0VZKV06IHRoaXMuc3RhcnRUaW1lc3RhbXAsXHJcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVMQVBTRURfVElNRV9LRVkpXTogLTEsXHJcbiAgICAgICAgICAgIFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5Nc2FsQ29ycmVsYXRpb25JZENvbnN0U3RyS2V5fWBdOiBjb3JyZWxhdGlvbklkXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEVsYXBzZWRUaW1lKHRpbWU6IE51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFTEFQU0VEX1RJTUVfS0VZKV0gPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldCBkdXJhdGlvbiBvZiBldmVudFxyXG4gICAgICAgIHRoaXMuc2V0RWxhcHNlZFRpbWUoK0RhdGUubm93KCkgLSArdGhpcy5zdGFydFRpbWVzdGFtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0ZWxlbWV0cnlDb3JyZWxhdGlvbklkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRlbGVtZXRyeUNvcnJlbGF0aW9uSWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZXZlbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50LFxyXG4gICAgICAgICAgICBldmVudElkOiB0aGlzLmV2ZW50SWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsInZhciB2MSA9IHJlcXVpcmUoJy4vdjEnKTtcbnZhciB2NCA9IHJlcXVpcmUoJy4vdjQnKTtcblxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==