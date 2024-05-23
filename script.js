//var type boolean true | false
var isEnable = false;
var test = "Kaynan"
console.log(isEnable)
console.log(test)

//array - index
var names = ["Kaynan", "Kevin", "Julia"];
console.log(names)
console.log(names[1])
console.log(names.length)

// IF - condicional
function testName(name) {
    if(name.length > 10) {
        return "Nome Grande"
    } else {
        return "Nome pequeno"
    }
}
function isEqual(name){
    if(name === "Kaynan"){
        return "Esse nome é Kaynan"
    } else if (name === "Kevin"){
        return "Esse nome é Kevin"
    } else {
        return "Nao é nenhum desses nomes"
     }
    }

console.log(testName("Kaynan Oliveira"))
console.log(isEqual("Julia"))