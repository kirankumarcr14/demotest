//anonymous function
var odd=function(a){
    var res="";
    for(i=0;i<a.length;i++)
    {
        if(a[i]%2!=0)
        {
            res+=a[i]+" ";
        }
    }
    
    return res;
}
console.log(odd([1,2,3,4,5,6,7,8,9]));
//IIFE 


