// Função para adicionar um zero à esquerda se o valor for menor que 10
function zeroAEsquerda(valor) {
  return valor < 10 ? `0${valor}` : valor;
}


// Função para formatar a data e hora e exibir na página
function formataData() {
  const currentDate = document.getElementById("currentDate");
  const tempo = new Date();


  const dia = zeroAEsquerda(tempo.getDate());
  const Ano = zeroAEsquerda(tempo.getFullYear());
  const Hora = zeroAEsquerda(tempo.getHours());
  const Min = zeroAEsquerda(tempo.getMinutes());



  //ESTRUTRA CONDICIONAL PARA PEGAR O DIA DA SEMANA EM NUMERO E CONVERTER PARA O DIA EM TEXTO
  const diaSemana = tempo.getDay();
  let diaD;

  switch (diaSemana) {
    case 0:
      diaD = "Dom";
      break;
    case 1:
      diaD = "Seg";
      break;
    case 2:
      diaD = "Ter";
      break;
    case 3:
      diaD = "Qua";
      break;
    case 4:
      diaD = "Qui";
      break;
    case 5:
      diaD = "Sex";
      break;
    case 6:
      diaD = "Sab";
      break;
  }


  //ESTRUTURA CONDICIONAL PARA PEGAR O MÊS EM NUMERO E CONVERTER PARA O MÊS EM TEXTO
  const Mes = tempo.getMonth();
  let mesAtual;

  switch (Mes) {
    case 0:
      mesAtual = "Jan";
      break;
    case 1:
      mesAtual = "Fev";
      break;
    case 2:
      mesAtual = "Março";
      break;
    case 3:
      mesAtual = "Abr";
      break;
    case 4:
      mesAtual = "Mai";
      break;
    case 5:
      mesAtual = "Jun";
      break;
    case 6:
      mesAtual = "Jul";
      break;
    case 7:
      mesAtual = "Ago";
      break;
    case 8:
      mesAtual = "Set";
      break;
    case 9:
      mesAtual = "Out";
      break;
    case 10:
      mesAtual = "Nov";
      break;
    case 11:
      mesAtual = "Dez";
      break;
  }

  

}

// Chama a função para formatar a data e hora quando a página for carregada
window.onload = function () {
  formataData();
  // Define um intervalo para atualizar a hora a cada segundo
  setInterval(formataData, 1000);
};
