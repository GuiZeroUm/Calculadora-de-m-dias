const form = document.querySelector ('#form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />'

let linhas = '';

form.addEventListener ('submit', function (e) {
    e.preventDefault();

    const inputNomeAtividade = document.querySelector ('#nome-atividade');
    const inputNotaAtividade = document.querySelector ('#nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}`;
    linha += `<td>${inputNotaAtividade.value}`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''

    // alert (`atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
});