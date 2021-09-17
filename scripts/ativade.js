function mediaAritmetica(){
  let nota1 = parseFloat(document.getElementById('Q1Nota1').value);
  let nota2 = parseFloat(document.getElementById('Q1Nota2').value);
  let nota3 = parseFloat(document.getElementById('Q1Nota3').value);
  
  if(isNaN(nota1) ||isNaN(nota2) || isNaN(nota3))
    document.getElementById('resultadoMediaAritmetica').innerHTML = "Preencha números válidos!";
  else if(nota1 === "" || nota2 === "" || nota3 === "")
    document.getElementById('resultadoMediaAritmetica').innerHTML = "Preencha todos os campos!";
  else {
    let media = (nota1 + nota2 + nota3) / 3;
 
    if(media <= 6)
      document.getElementById('resultadoMediaAritmetica').innerHTML = "A nota final ficou: " + media + ". Aluno reprovado!";
    else
      document.getElementById('resultadoMediaAritmetica').innerHTML = "A nota final ficou: " + media + ". Aluno Aprovado!";
  }
}

function categoriaNadador(){
  let idade = parseInt(document.getElementById('Q2Idade').value);
  
  if(isNaN(idade))
    document.getElementById('resultadoIdadeNadador').innerHTML = "Informe uma idade válida!";
  else if(idade === "")
    document.getElementById('resultadoIdadeNadador').innerHTML = "Preencha o campo de Idade!";
  else {
    if(idade < 5)
      document.getElementById('resultadoIdadeNadador').innerHTML = "Idade deve ser 5 anos ou mais!";
    else if(idade >= 5 && idade <= 7)
      document.getElementById('resultadoIdadeNadador').innerHTML = "Categoria infantil.";
    else if(idade >= 8 && idade <= 13)
      document.getElementById('resultadoIdadeNadador').innerHTML = "Categoria juvenil.";
    else if(idade >= 14 && idade <= 17)
      document.getElementById('resultadoIdadeNadador').innerHTML = "Categoria adolescente.";
    else if(idade >= 18)
      document.getElementById('resultadoIdadeNadador').innerHTML = "Categoria adulta.";
  }
}

function tabuada(){
  let tabuada = '';

  for(let i = 0; i <= 10; i++){
    tabuada += "7 x "+ i +" = " + 7 * i + "<br />";
    document.getElementById('resultadoTabuada').innerHTML = tabuada;
  }
}

function vencedoresNatacao(){
  let tempo1 = parseFloat(document.getElementById('Q4Tempo1').value);
  let tempo2 = parseFloat(document.getElementById('Q4Tempo2').value);
  let tempo3 = parseFloat(document.getElementById('Q4Tempo3').value);
  
  if(isNaN(tempo1) ||isNaN(tempo2) || isNaN(tempo3))
    document.getElementById('resultadoVencedores').innerHTML = "Preencha números válidos!";
  else if(tempo1 === "" || tempo2 === "" || tempo3 === "")
    document.getElementById('resultadoVencedores').innerHTML = "Preencha todos os campos!";
  else {
    var tempo = [tempo1, tempo2, tempo3];
    tempo.sort();
    document.getElementById('resultadoVencedores').innerHTML += "Primeiro lugar: " + tempo[0];
    document.getElementById('resultadoVencedores').innerHTML += " Segundo lugar: " + tempo[1];
    document.getElementById('resultadoVencedores').innerHTML += " Terceiro lugar: " + tempo[2];
  }
}

function metrosQuadrados(){
  let altura = parseFloat(document.getElementById('Q5Altura').value);
  let largura = parseFloat(document.getElementById('Q5Largura').value);
  
  if(isNaN(altura) ||isNaN(largura))
    document.getElementById('resultadoJanela').innerHTML = "Preencha números válidos!";
  else if(altura === "" || largura === "")
    document.getElementById('resultadoJanela').innerHTML = "Preencha todos os campos!";
  else {
    document.getElementById('resultadoJanela').innerHTML = "Tamanho = " + altura * largura;
  }
}

function calcularPrestacao(){
  let valor = parseFloat(document.getElementById('Q6Prestacao').value);
  let dias = parseInt(document.getElementById('Q6Atraso').value);
  
  if(isNaN(valor) ||isNaN(dias))
    document.getElementById('resultadoPrestacao').innerHTML = "Preencha números válidos!";
  else if(valor === "" || dias === "")
    document.getElementById('resultadoPrestacao').innerHTML = "Preencha todos os campos!";
  else {
    let resultado = valor + ((dias * 2) / 2);
    document.getElementById('valorPrestacao').innerHTML = "Valor prestação = " + valor;
    document.getElementById('jurosPrestacao').innerHTML = "Juros= " + dias;
    document.getElementById('resultadoPrestacao').innerHTML = "Total a pagar = " + resultado;
  }
}

function numeroInteiro(){
  let numero = parseInt(document.getElementById('Q7Numero').value);
    
  if(isNaN(numero))
    document.getElementById('resultadoNumeroInteiro').innerHTML = "Preencha números válidos!";
  else if(numero === "")
    document.getElementById('resultadoNumeroInteiro').innerHTML = "Preencha todos os campos!";
  else {
    
    if(numero === 0)
      document.getElementById('resultadoNumeroInteiro').innerHTML = "Número é neutro";
    else if(numero > 0)
      document.getElementById('resultadoNumeroInteiro').innerHTML = "Número é positivo";
    else if(numero < 0)
      document.getElementById('resultadoNumeroInteiro').innerHTML = "Número é negativo";
    else
      document.getElementById('resultadoNumeroInteiro').innerHTML = "Que número é esse?";
    
  }
}

function calcularMenor(){
  let valor1 = parseInt(document.getElementById('Q8Numero1').value);
  let valor2 = parseInt(document.getElementById('Q8Numero2').value);
  
  if(isNaN(valor1) ||isNaN(valor2))
    document.getElementById('resultadoNumeroMenor').innerHTML = "Preencha números válidos!";
  else if(valor1 === "" || valor2 === "")
    document.getElementById('resultadoNumeroMenor').innerHTML = "Preencha todos os campos!";
  else {
    if(valor1 < valor2)
      document.getElementById('resultadoNumeroMenor').innerHTML = "Valor 1 é  menor = " + valor1;
    else
      document.getElementById('resultadoNumeroMenor').innerHTML = "Valor 2 é  menor = " + valor2;
  }
}

function calcularSomas(){
  let valor1 = parseInt(document.getElementById('Q9Numero1').value);
  let valor2 = parseInt(document.getElementById('Q9Numero2').value);
  let valor3 = parseInt(document.getElementById('Q9Numero3').value);
  let valor4 = parseInt(document.getElementById('Q9Numero4').value);
  
  if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
    document.getElementById('resultadoNumeroCalculoMenor').innerHTML = "Preencha números válidos!";
  else if(valor1 === "" || valor2 === "" || valor3 === "" || valor4 === "")
    document.getElementById('resultadoNumeroCalculoMenor').innerHTML = "Preencha todos os campos!";
  else {
    if((valor1 + valor2) > (valor3 + valor4))
      document.getElementById('resultadoNumeroCalculoMenor').innerHTML = "A soma dos dois primeiros é maior.";
    else
      document.getElementById('resultadoNumeroCalculoMenor').innerHTML = "A soma dos dois últimos é maior.";
  }
}

function calcularDiasIdade(){
  let dia = parseInt(document.getElementById('Q10Dia').value);
  let mes = parseInt(document.getElementById('Q10Mes').value);
  let ano = parseInt(document.getElementById('Q10Ano').value);
    
  if(isNaN(dia) || isNaN(mes) || isNaN(ano))
    document.getElementById('resultadoDiasIdade').innerHTML = "Preencha números válidos!";
  else if(dia === "" || mes === "" || ano === "")
    document.getElementById('resultadoDiasIdade').innerHTML = "Preencha todos os campos!";
  else {
    document.getElementById('resultadoDiasIdade').innerHTML = "Dias: " + (dia + (mes * 30) + (ano * 365));
  }
}

function mostrarImages(){
  let imagens = [];
  for(i = 1; i <= 10; i++){
    imagens = new Image(300, 300);
    imagens.src = './images/tecnologia/'+i+'.jpg';
    imagens.style = 'margin: 2px';
    document.getElementById('imagesRow').appendChild(imagens);
  }
}