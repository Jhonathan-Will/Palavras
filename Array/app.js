let res = document.getElementById("resultado");
let array = [];
let arrayvo =[];
let arrayco = [];

let numero ={
    par : 0,
    impar: 0,
};


function enviar(){
     let palavra = document.getElementById("word").value;

     
     for(let i=0; i < palavra.length; i++){
        array.push(palavra.charAt(i));
        arrayvo.push(palavra.charAt(i));
        arrayco.push(palavra.charAt(i));

        if("/[-_#$%@!&*()'º;,]/".includes(palavra.charAt(i))){
            res.innerHTML =`<h2> A palavra digitada é invalida </h2>`;
            res.innerHTML +=`<h2> Porfavor evite caracters especiais </h2>`;

            zerar();

            return;
         }
         else{
        if ("aeiouAEIOUáÁãÃõÕúÚ".includes(palavra.charAt(i))) {
            numero.par += 1;
            arrayvo.splice(i, 1, "@");
        }
        else{
            numero.impar += 1;
            arrayco.splice(i, 1, "#");
        }
     }
    }
     escrever(palavra, array, arrayvo, arrayco, numero);

   zerar();
}

function escrever(palavra, array, arrayvo, arrayco, numero){
    res.innerHTML = `<h2>Palavra digitada : ${palavra}</h2>`;
    res.innerHTML += `<h2>palavra separada : ${array.join("-")}</h2>`;
    res.innerHTML +=`<h2> total de caracteres : ${palavra.length}</h2>`
    res.innerHTML += `<h2>n° de consoantes : ${numero.impar}</h2>`;
    res.innerHTML += `<h2>n° de vogais: ${numero.par}</h2>`;
    res.innerHTML += `<h2>substituindo as vogais: ${arrayvo.join("")}</h2>`;
    res.innerHTML += `<h2>substituindo as consoantes: ${arrayco.join("")}</h2>`;

}

function zerar(){
    palavra =" ";
    array = [];
    arrayvo =[];
    arrayco = [];
    numero ={
        par : 0,
        impar: 0,
    };
}