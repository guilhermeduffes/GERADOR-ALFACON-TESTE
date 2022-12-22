document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.querySelector("#nome").value;

    if (nome == "" || nome.length < 3) {
        alert("O campo 'Nome' é obrigatório e deve conter mais de 2 letras!");
        return;
    }

    var checkboxes = document.querySelectorAll('input[type="radio"]');
    var algumCheckboxSelecionado = false;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            algumCheckboxSelecionado = true;
        }
    });
    if (!algumCheckboxSelecionado) {
        alert("Você deve selecionar pelo menos uma opção de 'Sexo'!");
        return;
    }

    document.querySelector("form").submit();
});

var radios = document.querySelectorAll('input[type=radio]');

radios.forEach(function(radio){
    radio.addEventListener('change', function(){
        if(this.checked){
            localStorage.setItem('genero', this.value);
        }
    });
});

// document.querySelector('#SexoF').addEventListener('change', function(){
//     if(this.checked){
//         localStorage.setItem('genero', this.value);
//     }
// });

// document.querySelector('#SexoM').addEventListener('change', function(){
//     if(this.checked){
//         localStorage.setItem('genero', this.value);
//     }
// });

document.querySelector('button').addEventListener('click', function(event) {
    var inputValue = document.querySelector('#nome').value;
    localStorage.setItem('inputValue', inputValue);
    var inputSexo = document.querySelector('#SexoM').checked;
    localStorage.setItem('inputSexo', inputSexo);
  });

// coisa nova usando cookie, então, comentemos!
// pegando o valor do input do usuario
// var inputValue = document.getElementById('nome').value;
// armazenando o valor que o usuario digitou num cookie pra usar em OUTRA página
// Cookies.set('inputValue', inputValue);
//armazenado! agora partiremos pro outro arquivo > 