function factorial() {
    var num = prompt("Nhập vào 1 số bất kì để tính ra giai thừa của số đó");
    var factorialResult = 1;
    for (var i = 1; i <= num; i++) {
      factorialResult *= i;
    }
    document.getElementById("result-2").innerHTML = factorialResult;
  }

  const H = 5;
for(let i = 1; i <= H; i++){
    for(var k = H; k > i;k--){
        document.write("&nbsp;&nbsp;");
    }
    for(let j = 1;j <= i * 2 - 1; j++){
        if(i == 1 || i == H || j == 1 || j == i * 2 - 1){
          document.write("*");
        }else{
          document.write("&nbsp;&nbsp;");
        }
        
    }
    document.writeln("<br />");
}



 