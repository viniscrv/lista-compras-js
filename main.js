let form = document.querySelector("form");
let input = document.querySelector("#input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let item = input.value;
    if (item !== "") {
      alterarLista(item);
      input.value = ""; /* limpar input após submit */
    }
});

function alterarLista(item) {
    let lista = document.querySelector("#lista");
    let novoItem = document.createElement("li");
    let excluir = document.createElement("i");
    novoItem.innerHTML += item;
    excluir.classList.add("fa-solid", "fa-trash");
    novoItem.appendChild(excluir);
    lista.appendChild(novoItem);
    excluir.addEventListener("click", () => novoItem.remove());

    let listaItens = document.querySelectorAll('li');
    let btnLimparTudo = document.querySelector('.container__limpar');

    btnLimparTudo.addEventListener('click', () => {
      for (let i = 0; i <= listaItens.length-1; i++){
        listaItens[i].remove();
      }
    })
}

function removerExemplo() {
    let itemExemplo = document.querySelector("#itemExemplo");
    itemExemplo.remove();
}
let lixoExemplo = document.querySelector(".lixoExemplo");
lixoExemplo.addEventListener('click', removerExemplo);
