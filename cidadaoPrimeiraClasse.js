// criar uma função literal
function fun1(){

}

// armazenar uma função em uma variável
const fun2 = function (){

}

// armazenar uma função em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](6,5))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){return "Opa"}
console.log(obj.falar())

// passar função como parâmetro para outra função
function run(fun){
    fun()
}
run(function(){console.log("Executando...")})

// uma função pode retornar/conter uma outra função
function soma (a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
// posso armazanar a primeira função dentro de uma variavel
const primeiraFuncao = soma(2, 3)
primeiraFuncao(4)