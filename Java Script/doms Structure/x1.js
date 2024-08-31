//console.log("file loaded");
//Dom Event handling via javascript
document.querySelector("button").onclick = function () {
  // console.log("Function call");
  //console.log(document.querySelector("#x1"))
  var p = document.querySelector("#x1").value;
    console.log(p);
    var n = document.querySelector("#x2").value;
    console.log(n);

    var r = document.querySelector("#x3").value
    console.log(r)

    
    p = Number(p)
    n = Number(n)
    r=Number(r)
    console.log(typeof p);
    
    n = n * 12;
     r = r / 12 / 100;
    var emi = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    console.log(emi);
    document.querySelector("#p1").innerHTML = Math.round(emi);
    document.querySelector("#p2").innerHTML = p;
    document.querySelector("#p3").innerHTML = Math.round(emi * n);
    document.querySelector("#p4").innerHTML = Math.round((emi * n) - p);

};
//function with name namedfunction
//function without name anynomus function or unnamed function
