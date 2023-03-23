let arr=[]
function deleteElement(array,elements){
 for(i=0;i<array.length;i++){
    if (array[i]!=elements){
        arr.push(array[i])
    }
 }
 console.log(arr);
}
deleteElement([1,2,3,4,5,6,3,7,3],3);




