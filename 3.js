var t = window.prompt();
t=parseInt(t);
var l=[];
for (let i=0; i<t; i++){
  var s=window.prompt("Enter string = ");
  l.push(s);
}
l.sort();
for (let i=0; i<t; i++){
  console.log(l[i]);
}