var t = window.prompt("Enter test cases = ");
t=parseInt(t);
for (let i=0; i<t; i++){
  var l=window.prompt("Enter l = ");
  var r=window.prompt("Enter r = ");
  l=parseInt(l);
  r=parseInt(r);
  if(l==r) {
    if(l%2==0)
      console.log("Even");
    else
      console.log("Odd");
  } else {
    var res=l ^ (l+1);
    for(let j=l+2;j<=r;j++){
      res = res ^ j;
    } 
    console.log(res%2 == 0 ? "Even" : "Odd");
  }
}