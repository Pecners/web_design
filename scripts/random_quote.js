d3.csv("../data/quotes.csv", function(data) {
  console.log(data.length)

  const num = Math.floor(Math.random() * (data.length - 1));
  document.getElementById("quote").innerHTML = data[num].Quote;
  document.querySelector("li.attribution").innerHTML = data[num]["Author/Speaker"] + ", " + "<em>" + data[num].Source + "</em>";

});
