'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _promise=require('babel-runtime/core-js/promise');var _promise2=_interopRequireDefault(_promise);var _asyncToGenerator2=require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get3=require('babel-runtime/helpers/get');var _get4=_interopRequireDefault(_get3);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _regenerator=require('babel-runtime/regenerator');var _regenerator2=_interopRequireDefault(_regenerator);exports.default=

























































































function(path,options,cb){var _this3=this;
if(typeof options==='function'){
cb=options;
options={};
}

var createDisposition=void 0;
var flags=options&&options.flags;

if(flags==='r'){
createDisposition=_constants.FILE_OPEN;
}else if(flags==='r+'){
createDisposition=_constants.FILE_OPEN_IF;
}else if(flags==='w'||flags==='w+'){
createDisposition=_constants.FILE_OVERWRITE_IF;
}else if(flags==='wx'||flags==='w+x'){
createDisposition=_constants.FILE_CREATE;
}

(0,_smb2Forge.request)('create',{path:path,createDisposition:createDisposition},this,function(err,file){
if(err){
cb(err);
}else{
cb(null,new SmbWritableStream(_this3,file,options));
}
});
};var _bigint=require('../tools/bigint');var _bigint2=_interopRequireDefault(_bigint);var _bluebird=require('bluebird');var _bluebird2=_interopRequireDefault(_bluebird);var _smb2Forge=require('../tools/smb2-forge');var _stream=require('stream');var _constants=require('../structures/constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=_regenerator2.default.mark(fibonacci);var requestAsync=_bluebird2.default.promisify(_smb2Forge.request);var maxPacketSize=new _bigint2.default(8,0x00010000-0x71);function fibonacci(){var a,b,c;return _regenerator2.default.wrap(function fibonacci$(_context){while(1){switch(_context.prev=_context.next){case 0:a=1;b=2;case 2:c=a;a=b;b=c+a;_context.next=7;return c;case 7:_context.next=2;break;case 9:case'end':return _context.stop();}}},_marked,this);}var SmbWritableStream=function(_Writable){(0,_inherits3.default)(SmbWritableStream,_Writable);function SmbWritableStream(connection,file){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};(0,_classCallCheck3.default)(this,SmbWritableStream);var _this=(0,_possibleConstructorReturn3.default)(this,(SmbWritableStream.__proto__||(0,_getPrototypeOf2.default)(SmbWritableStream)).call(this,options));var _options$encoding=options.encoding,encoding=_options$encoding===undefined?'utf8':_options$encoding,_options$start=options.start,start=_options$start===undefined?0:_options$start;_this.connection=connection;_this.encoding=encoding;_this.file=file;_this.offset=new _bigint2.default(8,start);return _this;}(0,_createClass3.default)(SmbWritableStream,[{key:'_write',value:function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(chunk,encoding,next){var _this2=this;var _loop;return _regenerator2.default.wrap(function _callee$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:encoding=this.encoding||encoding;chunk=Buffer.isBuffer(chunk)?chunk:new Buffer(chunk,encoding);_loop=_regenerator2.default.mark(function _loop(){var packetSize,packet,offset,retryInterval,pending;return _regenerator2.default.wrap(function _loop$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:packetSize=Math.min(maxPacketSize.toNumber(),chunk.length);packet=chunk.slice(0,packetSize);chunk=chunk.slice(packetSize);offset=new _bigint2.default(_this2.offset);_this2.offset=_this2.offset.add(packetSize);retryInterval=fibonacci();pending=true;case 7:if(!pending){_context2.next=24;break;}_context2.prev=8;_context2.next=11;return requestAsync('write',{FileId:_this2.file.FileId,Offset:offset.toBuffer(),Buffer:packet},_this2.connection);case 11:pending=false;_context2.next=22;break;case 14:_context2.prev=14;_context2.t0=_context2['catch'](8);if(!(_context2.t0.code==='STATUS_PENDING')){_context2.next=21;break;}_context2.next=19;return new _promise2.default(function(resolve,reject){setTimeout(resolve,retryInterval.next().value);});case 19:_context2.next=22;break;case 21:throw _context2.t0;case 22:_context2.next=7;break;case 24:case'end':return _context2.stop();}}},_loop,_this2,[[8,14]]);});case 3:if(!(chunk.length>0)){_context3.next=7;break;}return _context3.delegateYield(_loop(),'t0',5);case 5:_context3.next=3;break;case 7:next();case 8:case'end':return _context3.stop();}}},_callee,this);}));function _write(_x2,_x3,_x4){return _ref.apply(this,arguments);}return _write;}()},{key:'end',value:function(){var _ref2=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(){var _get2,_len,args,_key,_args4=arguments;return _regenerator2.default.wrap(function _callee2$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;for(_len=_args4.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=_args4[_key];}(_get2=(0,_get4.default)(SmbWritableStream.prototype.__proto__||(0,_getPrototypeOf2.default)(SmbWritableStream.prototype),'end',this)).call.apply(_get2,[this].concat(args));case 3:_context4.prev=3;_context4.next=6;return requestAsync('close',this.file,this.connection);case 6:return _context4.finish(3);case 7:case'end':return _context4.stop();}}},_callee2,this,[[0,,3,7]]);}));function end(){return _ref2.apply(this,arguments);}return end;}()}]);return SmbWritableStream;}(_stream.Writable);
//# sourceMappingURL=createWriteStream.js.map