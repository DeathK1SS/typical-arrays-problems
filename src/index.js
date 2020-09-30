exports.min = function min (array) {
	if(!array || array.length === 0) {
		return 0;
	}	
	
	return Math.min(...array);
}

exports.max = function max (array) {
  if(!array || array.length === 0) {
		return 0;
  }	
	
	return Math.max(...array);
}

exports.avg = function avg (array) {
  if(!array || array.length === 0) {
		return 0;
  }
	
  let total = 0;
  for (let i = 0; i < array.length; i++) {	  
	  total += array[i];	  
  }
  return total / array.length;
}