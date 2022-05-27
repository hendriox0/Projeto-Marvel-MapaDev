//uma linha de comentario

/* varias linhas de codigo

Oque tem que fazer meu java script:
1 - Quando passar o mouse em cima do personagem temos que:

- colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele. 

- retirar classe selecionado do personagem selecionado.

    objetivo 2- quando passar o mouse em cima do personagem, trocar a imagem eo nome do persagem grande.

    -alterar a imagem do jogar 1.
    - alterar nome do jogador 1.

    */
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem)=>{
    personagem.addEventListener('mouseenter', ()=>{

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return alert("Jogador já selecionado!!");


        const personagemSelecionado=document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')



        

        const imagemJogador1 = document.getElementById('personagem-jogador-1');

        imagemJogador1.src=`../src/img/${idSelecionado}.png`;
        
        const nomeJogador1=document.getElementById('nome-jogador-1');
        nomeJogador1.innerText = idSelecionado;
    })
})




/*const homemDeFerro = document.getElementById("homen-de-ferro");
homemDeFerro.addEventListener('mouseenter', () => {
   homemDeFerro.classList.add('selecionado');
})*/



