// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeLine(col) {
  let tr = "<tr>";
  let td = "<td></td>"
  for (let i = 1; i<=col; i++) {
    tr = tr + td;
  }
  tr = tr + "</tr>"
  return tr


}

function changeColor() {
  let color = $("#colorPicker").val();
  $(this).css("background-color", color)

}


function makeGrid() {

  $("#pixelCanvas").empty();

  let rows = $("#inputHeight").val();
  let cols = $("#inputWeight").val();
  let line =  makeLine(cols);
  for(let i=1; i<=rows; i++){
    $("#pixelCanvas"). append(line);
  }
  $("#pixelCanvas").on("click", "tr td", changeColor);
}

$("#button").on("click", makeGrid);
