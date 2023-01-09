function init() {
  Tabletop.init(
	  {
		  key: "https://docs.google.com/spreadsheets/d/1Zm89-OlunMpeOoMLjmbANzT2NJVojafUjbcXT99nZiw/edit?usp=sharing/pubhtml",
		  simpleSheet: true
	  }
  ).then(function(data, tabletop) {
	  console.log(data);
	  for(var i in data) {
		  d = data[i];
		  let row = document.createElement("TR");
		  for (var j in d) {
			  if (j == "date") continue;
			  let td = document.createElement("TD");
			  td.innerHTML = d[j];
			  row.appendChild(td);
		  }
		  let t = document.getElementById(d["date"]);
		  t.appendChild(row);
	  }
  })
}
window.addEventListener("DOMContentLoaded", init)


