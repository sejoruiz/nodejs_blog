 var current=0;
exports.count = function(req,res,route.index){
	current++;
}
exports.getCount = function(){
	return current;
}