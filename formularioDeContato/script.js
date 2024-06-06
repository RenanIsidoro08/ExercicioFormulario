document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".container");
    const button = form.querySelector("button");

    button.addEventListener("click", (event) => {
        event.preventDefault(); 

     
        alert("Seu Formulário foi enviado");

     
        form.reset();
    });
});