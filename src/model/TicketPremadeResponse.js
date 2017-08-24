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
    root.NgDeskOperations.TicketPremadeResponse = factory(root.NgDeskOperations.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TicketPremadeResponse model module.
   * @module model/TicketPremadeResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>TicketPremadeResponse</code>.
   * @alias module:model/TicketPremadeResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TicketPremadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TicketPremadeResponse} obj Optional instance to populate.
   * @return {module:model/TicketPremadeResponse} The populated <code>TicketPremadeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TICKET_PREMADE_RESPONSE_ID')) {
        obj['TICKET_PREMADE_RESPONSE_ID'] = ApiClient.convertToType(data['TICKET_PREMADE_RESPONSE_ID'], 'Number');
      }
      if (data.hasOwnProperty('BODY')) {
        obj['BODY'] = ApiClient.convertToType(data['BODY'], 'String');
      }
      if (data.hasOwnProperty('TITLE')) {
        obj['TITLE'] = ApiClient.convertToType(data['TITLE'], 'String');
      }
      if (data.hasOwnProperty('COMPANY_ID')) {
        obj['COMPANY_ID'] = ApiClient.convertToType(data['COMPANY_ID'], 'Number');
      }
      if (data.hasOwnProperty('USER_ID')) {
        obj['USER_ID'] = ApiClient.convertToType(data['USER_ID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} TICKET_PREMADE_RESPONSE_ID
   */
  exports.prototype['TICKET_PREMADE_RESPONSE_ID'] = undefined;
  /**
   * @member {String} BODY
   */
  exports.prototype['BODY'] = undefined;
  /**
   * @member {String} TITLE
   */
  exports.prototype['TITLE'] = undefined;
  /**
   * @member {Number} COMPANY_ID
   */
  exports.prototype['COMPANY_ID'] = undefined;
  /**
   * @member {Number} USER_ID
   */
  exports.prototype['USER_ID'] = undefined;



  return exports;
}));


