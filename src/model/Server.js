/**
 * ngDesk_Operations
 * ngDesk_Operations
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NgDeskOperations) {
      root.NgDeskOperations = {};
    }
    root.NgDeskOperations.Server = factory(root.NgDeskOperations.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Server model module.
   * @module model/Server
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Server</code>.
   * @alias module:model/Server
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Server</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Server} obj Optional instance to populate.
   * @return {module:model/Server} The populated <code>Server</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ServerId')) {
        obj['ServerId'] = ApiClient.convertToType(data['ServerId'], 'Number');
      }
      if (data.hasOwnProperty('DisplayServerName')) {
        obj['DisplayServerName'] = ApiClient.convertToType(data['DisplayServerName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} ServerId
   */
  exports.prototype['ServerId'] = undefined;
  /**
   * @member {String} DisplayServerName
   */
  exports.prototype['DisplayServerName'] = undefined;



  return exports;
}));


