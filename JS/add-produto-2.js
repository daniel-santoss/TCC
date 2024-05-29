const adicionarBtn = document.querySelector('.adicionar');
const subtrairBtn = document.querySelector('.subtrair');
const qtd = document.querySelector('.qtd');
let valorAtual = parseInt(qtd.textContent);

adicionarBtn.addEventListener('click', () => {
    valorAtual++;
    qtd.textContent = valorAtual;
});

subtrairBtn.addEventListener('click', () => {
    if(valorAtual >0 ) {
        valorAtual--;
    qtd.textContent = valorAtual;
}
});