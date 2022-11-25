function mandaZap(elemento) {
    let msg = elemento.firstElementChild.innerText;
    let numero = prompt("Qual é o número?");
    let zaplink = `https://wa.me/+55${numero}?text=${msg}`;
    window.open(zaplink);
}