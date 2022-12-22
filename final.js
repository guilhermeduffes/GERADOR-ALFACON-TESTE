function salvarImagem() {
    // seleciono a div que vo salva como png
    var element = document.getElementById('filho1Back');

    html2canvas(element).then(function (canvas) {
        var link = document.createElement('a');
        link.download = 'image.png';
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
};

window.onload = function() {
    var inputValue = localStorage.getItem('inputValue');
    document.querySelector('#nome2').innerHTML = inputValue;
    var genero = localStorage.getItem('genero');
    document.querySelector('#genero').textContent = "E VOU SER " + genero
};