
const elemento_botao = document.querySelector('button');
const elemento_entrada = document.querySelector('input');
const elemento_lista = document.querySelector('ul');

elemento_botao.addEventListener('click', () => {
   const valor = elemento_entrada.value
   const elemento_itemlista = document.createElement('li')
   elemento_itemlista.textContent = valor
   elemento_lista.appendChild(elemento_itemlista)
   elemento_entrada.value = ''
})



