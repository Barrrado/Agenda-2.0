let linhasTabela = []; // Armazena os dados das linhas da tabela

function adicionarLinha(){
    const nome = document.getElementById("nome").value;
    const tel = document.getElementById("idade").value;
    if (nome && tel) {
    if (linhasTabela.some(item => item.nome === nome)) {
        alert("Vc ja Cadastrou esse Contato!!");
        return;
      }
        const table = document.getElementById("myTable");
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = nome;
        cell2.innerHTML = tel;
        cell3.innerHTML = `<button id="bto-editar" onclick="editarLinha(this)"></button>`;

        linhasTabela.push({ nome, tel }); // Armazena os dados da nova linha
        nome1.push(nome.value);

        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";

        //Mostra o botão salvar
        document.getElementById("saveButton").style.display = "block";
    } 
    else {
        alert("Favor Preencher os campos!!")
    }
    }
    

function editarLinha(button) {
  const row = button.parentNode.parentNode;
  const nomeCell = row.cells[0];
  const idadeCell = row.cells[1];

  const nomeInput = document.createElement('input');
  nomeInput.type = 'text';
  nomeInput.value = nomeCell.textContent;

  const idadeInput = document.createElement('input');
  idadeInput.type = 'tel';
  idadeInput.value = idadeCell.textContent;
  idadeInput.pattern='[0-9]{2} [0-9]{4}-[0-9]{4}'

  nomeCell.innerHTML = '';
  nomeCell.appendChild(nomeInput);
  idadeCell.innerHTML = '';
  idadeCell.appendChild(idadeInput);


  button.parentNode.innerHTML = `<button id="bto-salvar" onclick="salvarEdicao(this)"></button>`;

}


function salvarEdicao(button){
  const row = button.parentNode.parentNode;
  const nomeInput = row.cells[0].firstChild;
  const idadeInput = row.cells[1].firstChild;

  row.cells[0].innerHTML = nomeInput.value;
  row.cells[1].innerHTML = idadeInput.value;

  row.cells[2].innerHTML = `<button id="bto-editar"  onclick="editarLinha(this)"></button>`;
  
  //Atualiza a lista linhasTabela com a edição
  const index = row.rowIndex - 1;
  linhasTabela[index] = { nome: nomeInput.value, tel: idadeInput.value};
}

function salvarAlteracoes() {
  const savedDataList = document.getElementById("savedDataList");
  savedDataList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
  linhasTabela.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome: ${item.nome} ------  Telefone: ${item.tel}`;
    savedDataList.appendChild(listItem);
    document.getElementById("savedDataList").style.display="Block";
  });
}