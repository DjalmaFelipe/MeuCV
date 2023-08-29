let conteudo_1 = document.getElementById('conteudo-1');
let conteudo_2 = document.getElementById('conteudo-2');
let conteudo_3 = document.getElementById('conteudo-3');

function alterarVisibilidade(on, off1, off2){
    on.style.display = "block";
    off1.style.display = "none";
    off2.style.display = "none";
}

function alterarVisibilidadeResumo(on, off1, off2){
    on.style.display = "flex";
    off1.style.display = "none";
    off2.style.display = "none";
}

document.getElementById('opcao-1').addEventListener("mouseover", function (){
    alterarVisibilidadeResumo(conteudo_1, conteudo_2, conteudo_3);
});

document.getElementById('opcao-2').addEventListener("mouseover", function (){
    alterarVisibilidade(conteudo_2, conteudo_1, conteudo_3);
});

document.getElementById('opcao-3').addEventListener("mouseover", function (){
    alterarVisibilidade(conteudo_3, conteudo_2, conteudo_1);
});