function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a, b) => a - b);
	console.log(arr);
	let totalCost=0;
	while(arr.length>1){
	    const first=arr.shift();
	    const second=arr.shift();
	    
	    const cost=first+second;
	    
	    totalCost+=cost;
	    arr.push(cost);
	    arr.sort((a, b) => a - b);
	    //console.log(arr);
	}
	return totalCost;
  
}

module.exports=mincost;
