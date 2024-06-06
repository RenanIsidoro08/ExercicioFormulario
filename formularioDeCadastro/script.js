document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".container");
    const button = form.querySelector("button");
    const senha = document.getElementById("SenhaId");
    const confiSenha = document.getElementById("ConfiSenhaID");

    function validaPassword() {
        if (senha.value !== confiSenha.value) {
            alert("As senhas não correspondem. Por favor, tente novamente.");
            return false;
        } else {
            return true;
        }
    }

    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (validaPassword()) {
            alert("Seu Formulário foi enviado");
            form.reset();
        }
    });
});