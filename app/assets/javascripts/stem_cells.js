$(function() {
  $.getJSON('/stem_cells/data', function(json) {
    stem_cells_data = json;
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
        stem_cells_data.stems.mesenchynal.forEach( function(mesenchynal){
            text += `<a>${mesenchynal.differenciation}</a>`;
        })
        break;
    case 3:
        stem_cells_data.stems.hepatic.forEach( function(hepatic){
            text += `<a>${hepatic.differenciation}</a>`;
        })
        break;
    case 4:
        stem_cells_data.stems.pancreatic.forEach( function(pancreatic){
            text += `<a>${pancreatic.differenciation}</a>`;
        })
        break;
  }
  result.innerHTML = text;
}
