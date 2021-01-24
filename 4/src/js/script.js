function printTriangle(length){
  let line = "";
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      line += "*";

    }
    line += "\n";
  }
  return line;
}
console.log(printTriangle(5));