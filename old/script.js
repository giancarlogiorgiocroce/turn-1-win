magicBtn = document.getElementById('magic');
deck = document.getElementById('deck');
hand = document.getElementById('hand');
setsCt = document.querySelector('.sets-ct');

magicBtn.addEventListener("click", function(){
  deck.value = 99;
  hand.value = 7;

  setsOverlay = document.querySelector('.sets-ct .overlay');
  setsOverlay.style.display = "none";

  /*rawsOverlay = document.querySelectorAll('.row .overlay');
  rawsOverlay.forEach(element => {
    element.style.display = "none";
  });*/

  addRow(setsCt);

})


function addRow(ct){
  let row = document.createElement('div');
  row.classList.add('row');
  row.classList.add('set');

  for (let index = 0; index < hand.value; index++) {
    let input = document.createElement("input");
    input.type = "text";
    input.value = "";
    row.appendChild(input);
  }

  ct.appendChild(row)
}
