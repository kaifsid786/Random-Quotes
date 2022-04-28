// selecting the value
const box = document.querySelector('.box') ;
const btn = document.querySelector('.btn');
// Button CLick--
document.getElementById("btn").addEventListener('click',show);


function show(){
    fetch("http://api.quotable.io/random")
      .then( res => res.json())
     .then( data => {
      box.innerHTML =`"${data.content}"`;
});
}
