document.querySelector("button").onclick = function () {
  console.log(document.querySelector("#x1"))
}
 var p = document.querySelector("#x1").value;
 console.log(p);
 var n = document.querySelector("#x2").value;
 console.log(n);

 var r = document.querySelector("#x3").value;
 console.log(r);

 p = Number(p);
 n = Number(n);
 r = Number(r);
 console.log(typeof p);
