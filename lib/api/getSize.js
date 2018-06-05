'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=

function(path,cb){
(0,_smb2Forge.request)('open',{path:path},this,function(err,file){
if(err){
if(err.code==='STATUS_OBJECT_NAME_NOT_FOUND'){
err.code='ENOENT';
}
cb(err);
}else{
var fileLength=0;
for(var i=0;i<file.EndofFile.length;i++){
fileLength+=file.EndofFile[i]*Math.pow(2,i*8);
}
cb(null,fileLength);
}
});
};var _smb2Forge=require('../tools/smb2-forge');
//# sourceMappingURL=getSize.js.map