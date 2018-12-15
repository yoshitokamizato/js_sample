$(function() {
  $.getJSON('/stem_cells/data', function(json) {
    stem_cells_data = json;
    console.log(stem_cells_data);
  })
})

var myfunc = function(num){
  var result = document.getElementById("result");
  var text = ``;
  switch (num) {
    case 1:
        stem_cells_data.stems.blood.forEach( function(blood){
            text += `<a>${blood.differenciation}</a>`;
        })
        break;
    case 2:
        stem_cells_data.stems.mesenchynal.forEach( function(blood){
            text += `<a>${blood.differenciation}</a>`;
        })
        break;
    case 3:
        text += '<a>肝細胞</a>';
        break;
    case 4:
        text += '<a>膵ベータ細胞</a>';
        break;
  }
  result.innerHTML = text;
}
