// function multiplicar (num1, num2, num3){
//     console.log(num1 * num2 * num3);
// }
// function dividir(num1, num2, num3){
//     console.log(num1 / num2 / num3);
// }
// function somar(num1, num2, num3){
//     console.log(num1 + num2 + num3);
// }
// function subtrair(num1, num2, num3){
//     console.log(num1 - num2 - num3);
// }
// function somarSubtrair(num1, num2, num3){
//     console.log(num1 + num2 - num3);
// }

// multiplicar(2, 5, 12)
// dividir(200, 2, 5)
// subtrair(400, 234 ,54)
// somar(78, 242, 464)
// somarSubtrair(534,320, 712)

let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");
let botao = document.querySelector("button");

let listaOb = [
    {nome: "vanessa", senha:"2468"},
    {nome: "sophiamelo123", senha:1642141},
    {nome: "migueljesus@gmail", senha:18171},
    {nome: "laviniaaraujo98", senha:1672152},
    {nome: "luizmiguel5241", senha:123456},
]


function validarLogin(){
 for(let lista in listaOb){
     console.log(listaOb[lista].nome)
    if(inputEmail.value === listaOb[lista].nome || inputSenha.value == listaOb[lista].senha){
        resposta.innerHTML = "Login Aprovado";
    }
    else{
        resposta.innerHTML = "Login Inválido";
    }
  }
}

botao.onclick = validarLogin;