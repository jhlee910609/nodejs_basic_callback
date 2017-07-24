var bFile = require('./b.js');
var cFile = require('./c.js');
var value = 15;
console.log(bFile.next(value));
bFile.prev(value);
bFile.print("today", function(param){
    console.log(param);
});

cFile.readText('write.txt', function(param){
    console.log("==== [ content ] ==== \n" + param + "\n======================");
}); // 비동기 함수를 호출할 때는 결과처리 코드가 호출 측에 있어야 한다. 

function next(param) {
    return 'result : ' + (param + 1);
};
