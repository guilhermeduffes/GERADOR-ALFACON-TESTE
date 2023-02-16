function salvarImagem() {
    // seleciono a div que vo salva como png
    var element = document.getElementById('filhoDown');
    element.parentNode.style.display = "block";


    html2canvas(element).then(function (canvas) {
        var link = document.createElement('a');
        link.download = 'image.png';
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
    
    element.parentNode.style.display = "none";

};

window.onload = function() {
    var inputValue = localStorage.getItem('inputValue');
    document.querySelectorAll('.nome2')[0].innerHTML = inputValue.toUpperCase();
    document.querySelectorAll('.nome2')[1].innerHTML = inputValue.toUpperCase();
    var genero = localStorage.getItem('genero');
    document.querySelector('.genero').textContent = "E VOU SER " + genero
};