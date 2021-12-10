var kiran = [{
    "name": "kiran",
    "date": "06/may/1994",
    "gender": "Male",
    "Phone": "+91 78923 58431 / +91 92068 87577",
    "Email": "kirankumarcr14@gmail.com ",
    "outlook ": "kirankumarg7100@outlook.com"
            },
{
    "Location": 
    {
    "Address": "#284 , 9th Main road ,3rd stage,1st Block ,West of chord Road",
    "Area" : "Manjunathnagar",
    "PostalCode": "560010",
    "Sity": "Bangalore",
    "State": "Karnataka",
    "Country": "India"
     },
    
}];

// for loop 
for(i=0; i<kiran.length;i++)
{
    var object=kiran[i];
    console.log(object.name);
    console.log(object.date);
    console.log(object.gender);
    console.log(object.Phone);
    console.log(object.Email);
    console.log(object.outlook);


}
// for in

for (var key in kiran) {
    if (kiran.hasOwnProperty(key)) {
        console.log(kiran[key].date);
    }
}

// for of
let text = "";
for (let x of kiran[key].phone) {
 text += x; 
}




console.log(kiran);

