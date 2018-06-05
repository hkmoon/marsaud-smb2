'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=require('babel-runtime/regenerator');var _regenerator2=_interopRequireDefault(_regenerator);var _asyncToGenerator2=require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);exports.default=




































































function(path,options,cb){var _this2=this;
if(typeof options==='function'){
cb=options;
options={};
}
(0,_smb2Forge.request)('open',{path:path},this,function(err,file){
if(err){
if(err.code==='STATUS_OBJECT_NAME_NOT_FOUND'){
err.code='ENOENT';
}
cb(err);
}else{
cb(null,new SmbReadableStream(_this2,file,options));
}
});
};var _bigint=require('../tools/bigint');var _bigint2=_interopRequireDefault(_bigint);var _bluebird=require('bluebird');var _bluebird2=_interopRequireDefault(_bluebird);var _stream=require('stream');var _smb2Forge=require('../tools/smb2-forge');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var requestAsync=_bluebird2.default.promisify(_smb2Forge.request);var maxPacketSize=0x00010000;var SmbReadableStream=function(_Readable){(0,_inherits3.default)(SmbReadableStream,_Readable);function SmbReadableStream(connection,file){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};(0,_classCallCheck3.default)(this,SmbReadableStream);var _this=(0,_possibleConstructorReturn3.default)(this,(SmbReadableStream.__proto__||(0,_getPrototypeOf2.default)(SmbReadableStream)).call(this,options));var _options$start=options.start,start=_options$start===undefined?0:_options$start,end=options.end,encoding=options.encoding;_this.connection=connection;_this.encoding=encoding;_this.file=file;_this.offset=new _bigint2.default(8,start);var fileLength=0;for(var i=0;i<file.EndofFile.length;i++){fileLength+=file.EndofFile[i]*Math.pow(2,i*8);}_this.fileLength=fileLength;_this.wait=false;if(end>=0&&end<fileLength){_this.fileLength=end+1;}return _this;}(0,_createClass3.default)(SmbReadableStream,[{key:'_read',value:function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(size){var rest,packetSize,offset,content;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!this.offset.lt(this.fileLength)){_context.next=17;break;}if(!this.wait){_context.next=3;break;}return _context.abrupt('return');case 3:rest=this.offset.sub(this.fileLength).neg();packetSize=Math.min(maxPacketSize,rest.toNumber());offset=new _bigint2.default(this.offset);this.wait=true;_context.next=9;return requestAsync('read',{FileId:this.file.FileId,Length:packetSize,Offset:offset.toBuffer()},this.connection);case 9:content=_context.sent;this.wait=false;if(this.encoding){content=content.toString(this.encoding);}this.offset=this.offset.add(packetSize);if(this.push(content)){_context.next=15;break;}return _context.abrupt('return');case 15:_context.next=0;break;case 17:if(!this.offset.ge(this.fileLength)){_context.next=21;break;}this.push(null);_context.next=21;return requestAsync('close',this.file,this.connection);case 21:case'end':return _context.stop();}}},_callee,this);}));function _read(_x2){return _ref.apply(this,arguments);}return _read;}()}]);return SmbReadableStream;}(_stream.Readable);
//# sourceMappingURL=createReadStream.js.map