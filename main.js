const form = document.getElementById('form-agenda');
const nomes = [];
const ddds = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputDddContato = document.getElementById('ddd-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numeros.includes(inputNumeroContato.value)){
        alert(`O número ${inputNumeroContato.value} já foi adicionado`);
    } else {
        nomes.push(inputNomeContato.value);
        ddds.push(inputDddContato.value);
        numeros.push(inputNumeroContato);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputDddContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputDddContato.value = '';
    inputNumeroContato.value = '';
}

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }