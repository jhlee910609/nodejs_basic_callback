// 입력된 파라미터의 1을 더해서 리턴한다. 
exports.next = function(param){
    return 'next result : ' + (param + 1);
};

exports.prev = function(param){
     console.log( "prev result : " + (param - 1) )
};

exports.print = function(param, callback){
    var result = "[ RESULT : " + param + " ]";
    callback(result);
};