$(function() {
  $.getJSON('/stem_cells/data', function(json) {
    stem_cells_data = json;
    console.log(stem_cells_data);
  })
})

var myfunc = function(num){
  var blood = document.getElementById("result");
  var text = ``;
  switch (num) {
    case 1:
      stem_cells_data.stems.blood.forEach( function(blood){
        text += `<a>${blood.differenciation}</a>`;
      })
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
  blood.innerHTML = text;
}
