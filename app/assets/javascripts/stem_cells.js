$(function() {
  $.getJSON('/stem_cells/data', function(json) {
    stem_cells_data = json;
  })
})

const show_diff_cells = function(num){
  let result = document.getElementById("result");
  let text = ``;
  switch (num) {
    case `blood`:
        stem_cells_data.stems.blood.forEach( function(blood){
            text += `<a class="diff-cell">${blood.differenciation}</a>`;
        })
        break;
    case `mesenchynal`:
        stem_cells_data.stems.mesenchynal.forEach( function(mesenchynal){
            text += `<a class="diff-cell">${mesenchynal.differenciation}</a>`;
        })
        break;
    case `hepatic`:
        stem_cells_data.stems.hepatic.forEach( function(hepatic){
            text += `<a class="diff-cell">${hepatic.differenciation}</a>`;
        })
        break;
    case `pancreatic`:
        stem_cells_data.stems.pancreatic.forEach( function(pancreatic){
            text += `<a class="diff-cell">${pancreatic.differenciation}</a>`;
        })
        break;
  }
  result.innerHTML = text;
}
