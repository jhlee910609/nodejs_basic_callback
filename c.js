// fs module = 파일을 읽고 쓰기 위한 모듈
var fs = require('fs');
// readFileSync = 특별한 이유가 없으면 사용하지 않는다. 
exports.readText = function(fileName, callback){
    fs.readFile(fileName, 'utf-8', function(err, data){
    // '%s' formatter 기본적으로 제공
    callback(data);
    });
}

// 비동기로 파일 쓰기
var content = "비가 오니 \n너무 싫다....!!";
exports.writeText = function(fileName, data, callback){
    fs.writeFile('write.txt', content, 'utf-8', function(err){
        if(err){
            callback(err);
        } else {
            callback();
        }
    });
}

// main에서 작성한 callback 함수에서 처리하게끔 코드를 짠다. 
cFile.writeText("파일명", "파일내용", function(){
    if(error){
        // error 처리
    } else {
        // 완료처리 
    }
});





