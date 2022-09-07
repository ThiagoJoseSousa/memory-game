
function reSortArray(obj){
let arr= Object.keys(obj).map(function (key) {return obj[key];}); // obj.keys make an array with the keys and map goes through each key returning a value 

//fisher yates algorithm
let j,x, i;
for (i=arr.length-1;0<i;i--){
j=Math.floor(Math.random()*(i+1)) //j random integer
x=arr[i]
//exchange a[j] and a[i]
arr[i]=arr[j]
arr[j]=x
}
return arr
}
export default reSortArray;
