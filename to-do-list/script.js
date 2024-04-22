let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

// let tarefas = [];

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; // JSON.parse é para, e || [] é para caso não haja nada no localStorage

function renderTarefas() {
  listElement.innerHTML = '';

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  })

}

renderTarefas(); // para renderizar toda vez que for acessar a página! Se tiver o local storage aparecerá uma lista

function adicionarTarefas() {
  if(inputElement.value === '') {
    alert("Digite alguma tarefa");
    return false
  } else {
    let novaTarefa = inputElement.value;

    tarefas.push(novaTarefa);
    inputElement.value = '';
    renderTarefas();
    salvarDados();
  }
}

buttonElement.onclick = adicionarTarefas;


function deletarTarefa(posicao) {
  // alert("POSIÇÃO DO ITEM " + posicao)
  tarefas.splice(posicao, 1);
  renderTarefas();
  salvarDados();
}

/* Função para salvar no localStorage*/

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}