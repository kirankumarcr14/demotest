var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  for (i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log(obj.flags);
  }
  console.log(data.length);
};
