function mincost(arr)
{ 
//write your code here
// return the min cost
	let sortedArr=arr.sort();
	let minsum=0;
	for(let i=0;i<sortedArr.length;i++){
		let sum=0;
		for(let j=0;j<=i;j++){
			sum+=sortedArr[j];
		}
		minisum+=sum;
	}
	return minsum;
  
}

module.exports=mincost;
