// Function Scope - var
if (true) {
  var x = "var !";
  console.log("XBlock: ", x);
}
console.log("X : ", x);
//Block Scope - let, const
if (true) {
  let y = "let !";
  console.log("YBlock : ", y);
}

function fun() {
  if (true) {
    var varFunc = "var Func !";
    console.log("VarFunction : ", varFunc);
  }
}

fun();
//console.log("Function : ", xFunc); -> Function scope이므로 사용하면 오류남
