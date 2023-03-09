/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.1
// source: chat.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ChatServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ChatServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.User,
 *   !proto.JoinResponse>}
 */
const methodDescriptor_ChatService_Join = new grpc.web.MethodDescriptor(
  '/ChatService/Join',
  grpc.web.MethodType.UNARY,
  proto.User,
  proto.JoinResponse,
  /**
   * @param {!proto.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.JoinResponse.deserializeBinary
);


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.JoinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.JoinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.join =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ChatService/Join',
      request,
      metadata || {},
      methodDescriptor_ChatService_Join,
      callback);
};


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.JoinResponse>}
 *     Promise that resolves to the response
 */
proto.ChatServicePromiseClient.prototype.join =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ChatService/Join',
      request,
      metadata || {},
      methodDescriptor_ChatService_Join);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ChatMessage,
 *   !proto.Empty>}
 */
const methodDescriptor_ChatService_SendMsg = new grpc.web.MethodDescriptor(
  '/ChatService/SendMsg',
  grpc.web.MethodType.UNARY,
  proto.ChatMessage,
  proto.Empty,
  /**
   * @param {!proto.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ChatService/SendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_SendMsg,
      callback);
};


/**
 * @param {!proto.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.ChatServicePromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ChatService/SendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_SendMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.ChatMessage>}
 */
const methodDescriptor_ChatService_ReceiveMsg = new grpc.web.MethodDescriptor(
  '/ChatService/ReceiveMsg',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Empty,
  proto.ChatMessage,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.receiveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ChatService/ReceiveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_ReceiveMsg);
};


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.ChatServicePromiseClient.prototype.receiveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ChatService/ReceiveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_ReceiveMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.UserList>}
 */
const methodDescriptor_ChatService_GetAllUsers = new grpc.web.MethodDescriptor(
  '/ChatService/GetAllUsers',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.UserList,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserList.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ChatServiceClient.prototype.getAllUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ChatService/GetAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_GetAllUsers,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserList>}
 *     Promise that resolves to the response
 */
proto.ChatServicePromiseClient.prototype.getAllUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ChatService/GetAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_GetAllUsers);
};


module.exports = proto;
