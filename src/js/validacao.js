const buttonEnviar = document.querySelector(".buttonEnviar");
const inputForm = document.querySelectorAll(".formCampo, .textarea");
const label = document.querySelectorAll(".labelVerificacao")

buttonEnviar.addEventListener('click', function(e){
  e.preventDefault();

  mudarCor();
})

function mudarCor(){
  for(let i = 0; i < inputForm.length; i++){

    if(inputForm[i].value !== ''){
      inputForm[i].classList.remove('bordaVermelha')
      label[i].classList.remove('opacidade')

      inputForm[i].classList.add('bordaVerde')
    }else{
      inputForm[i].classList.remove('bordaVerde')
      inputForm[i].classList.add('bordaVermelha')

      label[i].classList.add('opacidade' ,'ativar-Obrigatorio')
    }
  };
}



