
var like = document.getElementsByClassName('like')[0];
var font = document.getElementsByClassName('font')[0];
var button = document.getElementsByClassName('button')[0];
var close = document.getElementById('close');


/* informa a função do botão que leva ao topo. */
like.addEventListener('mouseenter', function(){

  let enter = false;

  if(enter == false){
    font.classList.add('show');
    enter = true;
  }

  setTimeout(() => {
    
    if(enter == true){
      font.classList.remove('show');
    }
  }, 700);

});

/* mostra o botão para levar ao topo. */
window.addEventListener('scroll', function(){

  if(window.scrollY >= 400){
    like.style.display = 'block';
  }else{
    like.style.display = 'none';

  }
});

/* button: abre o caixa de informação dos locais de entrega. */
button.addEventListener('click', function(){

  let deliver = document.getElementsByClassName('deliveries')[0];
  deliver.style.display = 'block';
});

/* close: fecha a caixa de informações sobre os locais de entrega. */
close.addEventListener('click', function(){

  let deliver = document.getElementsByClassName('deliveries')[0];
  deliver.style.display = 'none';
})

/* scrollReveal: mostrar o elementos quando der scroll na página*/

let scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

/* elementos exibidos conforme o scroll desce com um intervalo 100ms. */
scrollReveal.reveal(`.container #one, .container #two, .container #tree, .container #four, .container #five,.container #drinks`, {interval: 100});