document.addEventListener("DOMContentLoaded", function() {
    // Função para mostrar uma mensagem de confirmação ao enviar o formulário
    function msg() {
        alert("Formulário enviado com sucesso!");
    }

    // Adiciona evento de clique ao botão de vídeo
    const videoButton = document.getElementById('videoButton');
    const video = document.getElementById('video');

    videoButton.addEventListener('click', function() {
        if (video.style.display === 'none') {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });

    // Adiciona a função msg ao evento de submit do formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário para testar
        msg();
    });
});
