var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0){
 var chute = parseInt(prompt("Digite um número de 0 a 10"))
  
 if(numeroSecreto == chute){
   alert("Parabéns! Você ganhou o jogo. O número secreto era " + numeroSecreto)
   break
 } else if (numeroSecreto > chute){
   alert("O número secreto é maior.")
   tentativas = tentativas - 1
 } else if (numeroSecreto < chute){
   alert("O número secreto é menor.")
   tentativas = tentativas - 1
 }
} if (tentativas == 0){
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto) 
}