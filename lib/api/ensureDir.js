'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=require('babel-runtime/regenerator');var _regenerator2=_interopRequireDefault(_regenerator);var _asyncToGenerator2=require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);var _smb2Forge=require('../tools/smb2-forge');
var _bluebird=require('bluebird');var _bluebird2=_interopRequireDefault(_bluebird);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var requestAsync=_bluebird2.default.promisify(_smb2Forge.request);

var ensureOneDir=function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path,connection){var fileOrDir;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return(

requestAsync('open',{path:path},connection));case 3:fileOrDir=_context.sent;if(!(
fileOrDir.FileAttributes.readIntBE(0,1)===0x00000010)){_context.next=9;break;}_context.next=7;return(
requestAsync('close',fileOrDir,connection));case 7:_context.next=10;break;case 9:throw(

new Error(path+' exists but is not a directory'));case 10:_context.next=27;break;case 12:_context.prev=12;_context.t0=_context['catch'](0);if(!(


_context.t0.code==='STATUS_OBJECT_NAME_NOT_FOUND')){_context.next=26;break;}_context.prev=15;_context.next=18;return(

requestAsync('create_folder',{path:path},connection));case 18:_context.next=24;break;case 20:_context.prev=20;_context.t1=_context['catch'](15);if(!(

_context.t1.code!=='STATUS_OBJECT_NAME_COLLISION')){_context.next=24;break;}throw _context.t1;case 24:_context.next=27;break;case 26:throw _context.t0;case 27:case'end':return _context.stop();}}},_callee,this,[[0,12],[15,20]]);}));return function ensureOneDir(_x,_x2){return _ref.apply(this,arguments);};}();exports.default=function(){var _ref2=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(









function _callee2(path,cb){var structure,base,basePath;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:
structure=path.split('\\');
base=[];_context2.prev=2;case 3:if(!

structure.length){_context2.next=12;break;}
base.push(structure.shift());
basePath=base.join('\\');if(
basePath.length){_context2.next=8;break;}return _context2.abrupt('continue',3);case 8:_context2.next=10;return(


ensureOneDir(basePath,this));case 10:_context2.next=3;break;case 12:

cb(null);_context2.next=18;break;case 15:_context2.prev=15;_context2.t0=_context2['catch'](2);

cb(_context2.t0);case 18:case'end':return _context2.stop();}}},_callee2,this,[[2,15]]);}));return function(_x3,_x4){return _ref2.apply(this,arguments);};}();
//# sourceMappingURL=ensureDir.js.map