var myfunc = function(num){
  var blood = document.getElementById("result");
  switch (num) {
    case 1:
      blood.innerHTML = '<a>T細胞</a>';
      break;
    case 2:
      blood.innerHTML = '<a>脂肪細胞</a>';
      break;
    case 3:
      blood.innerHTML = '<a>肝細胞</a>';
      break;
    case 4:
      blood.innerHTML = '<a>膵ベータ細胞</a>';
      break;
  }
}
