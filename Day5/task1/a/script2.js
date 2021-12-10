(function(b){
    var value="";
    for(i=0;i<b.length;i++)
    {
        if(b[i]%2!=0)
        {
            value+=b[i]+ "  "
        }
    }
    console.log(value);
})
([1,2,3,4,5,6,7,8,91,10]);