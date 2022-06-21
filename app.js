//selectors
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

//eventlisteners
buttons.addEventListener('click', (e)=>{
  if(e.target.classList.contains('add')) {
    count.innerHTML++;
    setColour();
  }
  if (e.target.classList.contains('substract')) {
    count.innerHTML--;
    setColour();
  }
  if (e.target.classList.contains('reset')) {
    count.innerHTML=0;
    setColour();
  }
  
})
//function
function setColour(){
  if (count.innerHTML>0) {
    count.style.color='green';
  }
  else if(count.innerHTML<0){
    count.style.color='orangered'
  }
  else{count.style.color='white'};
}

