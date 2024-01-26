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
      diaD = "Fev";
      break;
    case 2:
      diaD = "Mar";
      break;
    case 3:
      diaD = "Abr";
      break;
    case 4:
      diaD = "Mai";
      break;
    case 5:
      diaD = "Jun";
      break;
    case 6:
      diaD = "Jul";
      break;
    case 7:
      diaD = "Ago";
      break;
    case 8:
      diaD = "Set";
      break;
    case 9:
      diaD = "Out";
      break;
    case 10:
      diaD = "Nov";
      break;
    case 1:
      diaD = "Dez";
      break;
  }

  

  currentDate.innerHTML = `${Hora}:${Min} - ${diaD}, ${dia} de ${mesAtual} de ${Ano}`;
}

// Chama a função para formatar a data e hora quando a página for carregada
window.onload = function () {
  formataData();
  // Define um intervalo para atualizar a hora a cada segundo
  setInterval(formataData, 1000);
};
