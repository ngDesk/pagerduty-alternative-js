# NgDeskOperations.DefaultApi

All URIs are relative to *https://localhost/api/v2/operations*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePremadeResponse**](DefaultApi.md#deletePremadeResponse) | **DELETE** /tickets/premade_responses/{ticket_premade_response_id} | 
[**deleteTicketReminder**](DefaultApi.md#deleteTicketReminder) | **DELETE** /tickets/{ticket_id}/reminders/{ticket_reminder_id} | 
[**deleteTicketTag**](DefaultApi.md#deleteTicketTag) | **DELETE** /tickets/{ticket_id}/tags/{tag_id} | 
[**getPremadeResponse**](DefaultApi.md#getPremadeResponse) | **GET** /tickets/premade_responses/{ticket_premade_response_id} | 
[**getPremadeResponses**](DefaultApi.md#getPremadeResponses) | **GET** /tickets/premade_responses | 
[**getTicket**](DefaultApi.md#getTicket) | **GET** /tickets/{ticket_id} | 
[**getTicketReminder**](DefaultApi.md#getTicketReminder) | **GET** /tickets/{ticket_id}/reminders/{ticket_reminder_id} | 
[**getTicketReminders**](DefaultApi.md#getTicketReminders) | **GET** /tickets/{ticket_id}/reminders | 
[**getTicketTags**](DefaultApi.md#getTicketTags) | **GET** /tickets/{ticket_id}/tags | 
[**getTickets**](DefaultApi.md#getTickets) | **GET** /tickets | 
[**postTicketMessages**](DefaultApi.md#postTicketMessages) | **POST** /ticket_messages | 
[**postTicketReminders**](DefaultApi.md#postTicketReminders) | **POST** /tickets/{ticket_id}/reminders | 
[**postTickets**](DefaultApi.md#postTickets) | **POST** /tickets | 
[**putPremadeResponses**](DefaultApi.md#putPremadeResponses) | **PUT** /tickets/premade_responses | 
[**putTicketMessages**](DefaultApi.md#putTicketMessages) | **PUT** /ticket_messages | 
[**putTicketReminders**](DefaultApi.md#putTicketReminders) | **PUT** /tickets/{ticket_id}/reminders | 
[**putTicketReview**](DefaultApi.md#putTicketReview) | **PUT** /ticket_review | 
[**putTicketTags**](DefaultApi.md#putTicketTags) | **PUT** /tickets/{ticket_id}/tags | 
[**putTickets**](DefaultApi.md#putTickets) | **PUT** /tickets | 


<a name="deletePremadeResponse"></a>
# **deletePremadeResponse**
> TicketPremadeResponse deletePremadeResponse(ticketPremadeResponseId, authenticationToken)



Remove from ticket_premade_response_id

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketPremadeResponseId = 56; // Number | 

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePremadeResponse(ticketPremadeResponseId, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketPremadeResponseId** | **Number**|  | 
 **authenticationToken** | **String**|  | 

### Return type

[**TicketPremadeResponse**](TicketPremadeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTicketReminder"></a>
# **deleteTicketReminder**
> deleteTicketReminder(ticketId, ticketReminderId, authenticationToken)



Remove from ticket_reminder_id

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var ticketReminderId = "ticketReminderId_example"; // String | 

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTicketReminder(ticketId, ticketReminderId, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **ticketReminderId** | **String**|  | 
 **authenticationToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTicketTag"></a>
# **deleteTicketTag**
> deleteTicketTag(ticketId, tagId, authenticationToken)



Remove from tag_id

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var tagId = "tagId_example"; // String | 

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTicketTag(ticketId, tagId, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **tagId** | **String**|  | 
 **authenticationToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPremadeResponse"></a>
# **getPremadeResponse**
> TicketPremadeResponse getPremadeResponse(ticketPremadeResponseId, authenticationToken)



Retrieve ticket_premade_response_id

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketPremadeResponseId = "ticketPremadeResponseId_example"; // String | 

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPremadeResponse(ticketPremadeResponseId, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketPremadeResponseId** | **String**|  | 
 **authenticationToken** | **String**|  | 

### Return type

[**TicketPremadeResponse**](TicketPremadeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPremadeResponses"></a>
# **getPremadeResponses**
> TicketPremadeResponse getPremadeResponses(authenticationToken, opts)



Retrieve premade_responses

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var authenticationToken = 3.4; // Number | User authentication uuid

var opts = { 
  'draw': 56, // Number | Number of times table has been reloaded
  'category': "category_example", // String | Filter by category
  'sortBy': "sortBy_example", // String | Column name to order table by
  'start': 56, // Number | Start query value
  'sortByOrder': "sortByOrder_example", // String | Sort by ascending or descending
  'q': "q_example", // String | 
  'length': 56, // Number | Number of rows query
  'statuses': "statuses_example", // String | Filter by statuses
  'fields': 56 // Number | Column headers in order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPremadeResponses(authenticationToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationToken** | **Number**| User authentication uuid | 
 **draw** | **Number**| Number of times table has been reloaded | [optional] 
 **category** | **String**| Filter by category | [optional] 
 **sortBy** | **String**| Column name to order table by | [optional] 
 **start** | **Number**| Start query value | [optional] 
 **sortByOrder** | **String**| Sort by ascending or descending | [optional] 
 **q** | **String**|  | [optional] 
 **length** | **Number**| Number of rows query | [optional] 
 **statuses** | **String**| Filter by statuses | [optional] 
 **fields** | **Number**| Column headers in order | [optional] 

### Return type

[**TicketPremadeResponse**](TicketPremadeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTicket"></a>
# **getTicket**
> Ticket getTicket(ticketId, authenticationToken, opts)



Retrieve ticket_id

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var authenticationToken = "authenticationToken_example"; // String | 

var opts = { 
  'category': "category_example", // String | 
  'statuses': "statuses_example", // String | 
  'orderedColumn': "orderedColumn_example", // String | 
  'orderedBy': "orderedBy_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTicket(ticketId, authenticationToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **authenticationToken** | **String**|  | 
 **category** | **String**|  | [optional] 
 **statuses** | **String**|  | [optional] 
 **orderedColumn** | **String**|  | [optional] 
 **orderedBy** | **String**|  | [optional] 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTicketReminder"></a>
# **getTicketReminder**
> Ticket getTicketReminder(ticketId, ticketReminderId, authenticationToken)



Retrieve ticket_reminder_id

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var ticketReminderId = "ticketReminderId_example"; // String | 

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTicketReminder(ticketId, ticketReminderId, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **ticketReminderId** | **String**|  | 
 **authenticationToken** | **String**|  | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTicketReminders"></a>
# **getTicketReminders**
> Ticket getTicketReminders(ticketId, authenticationToken)



Retrieve reminders

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTicketReminders(ticketId, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **authenticationToken** | **String**|  | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTicketTags"></a>
# **getTicketTags**
> Ticket getTicketTags(ticketId, authenticationToken, opts)



Retrieve tags

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var authenticationToken = "authenticationToken_example"; // String | 

var opts = { 
  'start': 56, // Number | Start query value
  'length': 56, // Number | Number of rows query
  'draw': 56, // Number | Number of times table has been reloaded
  'q': "q_example", // String | Values provided in q are tokenized and search on columns: TICKET_ID,SUBJECT,REQUESTOR_UERNAME, REQUESTOR_EMAIL, TICKET_MESSAGES
  'sortBy': "sortBy_example", // String | Column name to order table by
  'sortByOrder': "sortByOrder_example", // String | Sort by ascending or descending
  'fields': "fields_example", // String | Column headers in order
  'tagId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTicketTags(ticketId, authenticationToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **authenticationToken** | **String**|  | 
 **start** | **Number**| Start query value | [optional] 
 **length** | **Number**| Number of rows query | [optional] 
 **draw** | **Number**| Number of times table has been reloaded | [optional] 
 **q** | **String**| Values provided in q are tokenized and search on columns: TICKET_ID,SUBJECT,REQUESTOR_UERNAME, REQUESTOR_EMAIL, TICKET_MESSAGES | [optional] 
 **sortBy** | **String**| Column name to order table by | [optional] 
 **sortByOrder** | **String**| Sort by ascending or descending | [optional] 
 **fields** | **String**| Column headers in order | [optional] 
 **tagId** | **Number**|  | [optional] 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTickets"></a>
# **getTickets**
> [Ticket] getTickets(authenticationToken, opts)



Retrieve tickets

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var authenticationToken = 3.4; // Number | User athentication uuid

var opts = { 
  'start': 56, // Number | Start query value
  'length': 56, // Number | Number of rows query
  'draw': 56, // Number | Number of times table has been reloaded
  'q': "q_example", // String | Values provided in q are tokenized and search on columns: TICKET_ID,SUBJECT,REQUESTOR_UERNAME, REQUESTOR_EMAIL, TICKET_MESSAGES
  'sortBy': "sortBy_example", // String | Column name to order table by
  'sortByOrder': "sortByOrder_example", // String | Sort by ascending or descending
  'fields': "fields_example", // String | Column headers in order
  'statuses': "statuses_example", // String | Filter by statuses
  'category': "category_example", // String | Filter by category
  'accountId': "accountId_example", // String | 
  'tagId': 56, // Number | 
  'userId': "userId_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTickets(authenticationToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationToken** | **Number**| User athentication uuid | 
 **start** | **Number**| Start query value | [optional] 
 **length** | **Number**| Number of rows query | [optional] 
 **draw** | **Number**| Number of times table has been reloaded | [optional] 
 **q** | **String**| Values provided in q are tokenized and search on columns: TICKET_ID,SUBJECT,REQUESTOR_UERNAME, REQUESTOR_EMAIL, TICKET_MESSAGES | [optional] 
 **sortBy** | **String**| Column name to order table by | [optional] 
 **sortByOrder** | **String**| Sort by ascending or descending | [optional] 
 **fields** | **String**| Column headers in order | [optional] 
 **statuses** | **String**| Filter by statuses | [optional] 
 **category** | **String**| Filter by category | [optional] 
 **accountId** | **String**|  | [optional] 
 **tagId** | **Number**|  | [optional] 
 **userId** | **String**|  | [optional] 

### Return type

[**[Ticket]**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postTicketMessages"></a>
# **postTicketMessages**
> TicketMessage postTicketMessages(body, authenticationToken)



Insert a ticket_messages

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = [new NgDeskOperations.TicketMessage()]; // [TicketMessage] | The request body for the operation

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTicketMessages(body, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[TicketMessage]**](TicketMessage.md)| The request body for the operation | 
 **authenticationToken** | **String**|  | 

### Return type

[**TicketMessage**](TicketMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTicketReminders"></a>
# **postTicketReminders**
> postTicketReminders(ticketId, body, authenticationToken)



Insert a reminders

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var body = new NgDeskOperations.Ticket(); // Ticket | The request body for the operation

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postTicketReminders(ticketId, body, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **body** | [**Ticket**](Ticket.md)| The request body for the operation | 
 **authenticationToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTickets"></a>
# **postTickets**
> Ticket postTickets(body, opts)



Insert a tickets

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = [new NgDeskOperations.TicketMessage()]; // [TicketMessage] | The request body for the operation

var opts = { 
  'authenticationToken': 3.4 // Number | User athentication uuid
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTickets(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[TicketMessage]**](TicketMessage.md)| The request body for the operation | 
 **authenticationToken** | **Number**| User athentication uuid | [optional] 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPremadeResponses"></a>
# **putPremadeResponses**
> TicketPremadeResponse putPremadeResponses(body, authenticationToken)



Update premade_responses

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = new NgDeskOperations.TicketPremadeResponse(); // TicketPremadeResponse | The request body for the operation

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putPremadeResponses(body, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TicketPremadeResponse**](TicketPremadeResponse.md)| The request body for the operation | 
 **authenticationToken** | **String**|  | 

### Return type

[**TicketPremadeResponse**](TicketPremadeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTicketMessages"></a>
# **putTicketMessages**
> TicketMessage putTicketMessages(body, authenticationToken)



Update ticket_messages

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = new NgDeskOperations.TicketMessage(); // TicketMessage | The request body for the operation

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putTicketMessages(body, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TicketMessage**](TicketMessage.md)| The request body for the operation | 
 **authenticationToken** | **String**|  | 

### Return type

[**TicketMessage**](TicketMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTicketReminders"></a>
# **putTicketReminders**
> putTicketReminders(ticketId, body, authenticationToken)



Update reminders

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var body = new NgDeskOperations.Ticket(); // Ticket | The request body for the operation

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putTicketReminders(ticketId, body, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **body** | [**Ticket**](Ticket.md)| The request body for the operation | 
 **authenticationToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTicketReview"></a>
# **putTicketReview**
> putTicketReview(body, ticketUuid, rating)



Update ticket_review

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = new NgDeskOperations.Ticket(); // Ticket | The request body for the operation

var ticketUuid = "ticketUuid_example"; // String | 

var rating = "rating_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putTicketReview(body, ticketUuid, rating, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Ticket**](Ticket.md)| The request body for the operation | 
 **ticketUuid** | **String**|  | 
 **rating** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTicketTags"></a>
# **putTicketTags**
> putTicketTags(ticketId, body, authenticationToken)



Update tags

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var body = new NgDeskOperations.Ticket(); // Ticket | The request body for the operation

var authenticationToken = "authenticationToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putTicketTags(ticketId, body, authenticationToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **body** | [**Ticket**](Ticket.md)| The request body for the operation | 
 **authenticationToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTickets"></a>
# **putTickets**
> [Ticket] putTickets(body, opts)



Update tickets

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = [new NgDeskOperations.Ticket()]; // [Ticket] | The request body for the operation

var opts = { 
  'authenticationToken': true // Boolean | User athentication uuid
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putTickets(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Ticket]**](Ticket.md)| The request body for the operation | 
 **authenticationToken** | **Boolean**| User athentication uuid | [optional] 

### Return type

[**[Ticket]**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

