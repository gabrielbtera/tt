var teste = document.getElementById('calculoDaArmlong');
var checar = document.getElementById('ArmLong');
var v = document.getEle
var telaFlechaI = document.getElementById('calculoDaFlechaImediata');
var checkFlechaI = document.getElementById('arrowIme');

var condicionalMomCalc = document.getElementById('condmomentocalc');
var divMomCalc = document.getElementById('momentoDeCalcInput');

var condicionalMomAtuante = document.getElementById('condmomentoatuan');
var divMomAtua = document.getElementById('momAtuante');

var divMArcacao = document.getElementsByClassName("alinamentoInputs");

function limparChecksNavBar(indice){
    const listaTlea = [teste, telaFlechaI];
    const listaCheck = [checar, checkFlechaI]


    for(let i =0; i<listaTlea.length; i++){
        listaTlea[i].style.display = 'none'
        divMArcacao[i].style.backgroundColor = "#0055b8"
        if (i!= indice){
            listaCheck[i].checked = false
        }
    }
    

}

function mostrarCampo (check, tela, indice){
    

    if(check.checked){
        limparChecksNavBar(indice)
        tela.style.display = 'flex';
        divMArcacao[indice].style.backgroundColor = "#004594"

    }else {
        tela.style.display = "none";
        check.checked = false
        divMArcacao[indice].style.backgroundColor = "#0055b8"
    }
}


function mostrarValor() {
    
    if (checar.checked){
        teste.style.display = "flex"
        
        divMArcacao.style.backgroundColor = "#004594"
        
        
    }else {
        teste.style.display = "none"
        divMArcacao.style.backgroundColor = "#0055B8"
    }
}

function mostrarMomentoCalculoeAtuante(condicional1,caixa1, condicional2, caixa2){
    /* 
        Função mostra inputs de moment atuante ou calculo
        da função armadura longitudinal.
    */
    if(condicional1.checked){
        caixa1.style.display = "flex";
        condicional2.checked =false;
        caixa2.style.display = "none";
    }else {
        caixa1.style.display = "none";
    }
}

function mostrarMomentoAtuante(){
    
    if(condicionalMomAtuante.checked){
        divMomAtua.style.display = "flex"
        condicionalMomCalc.checked = false
        divMomCalc.style.display = "none"
    }else {
        divMomAtua.style.display = "none"
    }
}

var btn = document.getElementById('calculaDimen');
function main(){
    checar.onclick = function (){
        mostrarCampo(checar, teste, 0);

    }
    
    condicionalMomCalc.onclick = function (){
        mostrarMomentoCalculoeAtuante(condicionalMomCalc,
             divMomCalc, 
             condicionalMomAtuante,
             divMomAtua)
    }

    condicionalMomAtuante.onclick = function (){
        mostrarMomentoCalculoeAtuante(
            condicionalMomAtuante,
            divMomAtua, 
            condicionalMomCalc,
            divMomCalc)
    }
    checkFlechaI.onclick = function (){
        mostrarCampo(checkFlechaI, telaFlechaI, 1);
    }
}
main()

var botao = document.getElementById("btnArmLong")
var valor = document.getElementById("alturaViga")
var valores = document.getElementsByName("entradasArmLong")

botao.onclick = function (){
    let flaga = false
    for(let i = 0; i <valores.length ; i++){
        
        if(valores[i].value ==="" || isNaN(parseFloat(valores[i].value))){
            valores[i].style.backgroundColor = "#ffdddd"
            flaga = true
            
        }else {
            valores[i].style.backgroundColor = "#ecf5ff"
        }
    }
    (flaga ? alert("preencha os campos marcado de forma correta") : null)
    
}

var flechaImediataValor = document.getElementById('flechaImediataValor');
