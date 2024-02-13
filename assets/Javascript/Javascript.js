const piedra = 0
const papel = 1
const tijera = 2

const empate = 0
const win = 1
const fail = 2

var ganadas = 0
var perdidas = 0
var empatadas = 0
var resultadoFinal = ""

const btnPiedra = document.getElementById("piedra")
const btnPapel = document.getElementById("papel")
const btnTijera = document.getElementById("tijera")

  
  btnPiedra.addEventListener("click", () => {
    jugar(piedra)
  })
  
  btnPapel.addEventListener("click", () => {
    jugar(papel)
  })
  
  btnTijera.addEventListener("click", () => {
    jugar(tijera)
  })

  function calcResultado(cpuOption, opcionDeUsuario){
    if (opcionDeUsuario === cpuOption)
    {
      empatadas++
      return empate
    }
    else if (opcionDeUsuario === piedra)
    {
      if (cpuOption === papel)
      {
        perdidas++
        return fail

      }
      if (cpuOption === tijera){
        ganadas++
        return win
      }
    }
    else if (opcionDeUsuario === papel)
    {
      if (cpuOption === tijera)
      {
        perdidas++
        return fail
      }
      if (cpuOption === piedra)
      {
        ganadas++
        return win
      }
    }
  
    else if (opcionDeUsuario === tijera)
    {
      if (cpuOption === piedra)
      {
        perdidas++
        return fail
      }
      if (cpuOption === papel)
      {
        ganadas++
        return win
      }
    }
  }


function jugar(opcionDeUsuario){
  const cpuOption = Math.floor(Math.random()*3)
  const result = calcResultado(cpuOption, opcionDeUsuario)


  switch(result){
    case empate: alert(`Piedra = 0 \n papel = 1\n tijera = 2\nla maquina ha elegido: ${cpuOption}, ¡HAS EMPATADO!\n han empatado! ${empatadas}, has ganado ${ganadas}! y has perdido ${perdidas}!`)
      break;
    case win: alert(`Piedra = 0 \n papel = 1\n tijera = 2\nla maquina ha elegido: ${cpuOption},¡HAS GANADO! \n has ganado ${ganadas}! y has perdido ${perdidas}! y han empatado! ${empatadas},`)
      break;
    case fail: alert(`Piedra = 0 \n papel = 1\n tijera = 2\nla maquina ha elegido: ${cpuOption},¡HAS PERDIDO! \n has perdido ${perdidas}!, han empatado! ${empatadas}, has ganado ${ganadas}!`)
      break;
  }
}