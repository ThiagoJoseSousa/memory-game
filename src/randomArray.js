
function reSortArray(array){
    //forgot that the API returns an array on data.data, thought It returned an object
//let arr= Object.keys(obj).map(function (key) {return obj[key];}); // obj.keys make an array with the keys and map goes through each key returning a value 


//fisher yates algorithm
let j,x, i;
for (i=array.length-1;0<i;i--){
j=Math.floor(Math.random()*(i+1)) //j random integer
x=array[i]
//exchange a[j] and a[i]
array[i]=array[j]
array[j]=x
}
return array
}
export default reSortArray;
