//Helpers
function calcularPromedio (lista){
    //Otra Forma de hacer un FOR
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    )
    const promedio = sumaLista / lista.length;
    return promedio;
    // En forma de For
    // let sumaLista = 0;
    // for (i = 0; i < lista.length; i++) {
    //     sumaLista =  sumaLista + lista[i];    
    // }
}

//Calculadora de Medianas
function calcularMediana (lista){
    lista.sort((a, b) => a - b);
    position = Math.floor(lista.length/2)

    if (lista.length%2==0)
    {
        mediana = calcularPromedio([lista[position],lista[position-1]])
    }
    else
    {
        mediana = lista[position]
    }
    return mediana;
}

//Mediana General
const salariosCol = colombia.map(
    function(persona){
        return persona.salary
    }
);
const salariosColSorted = salariosCol.sort((a, b) => a - b);
const medianaGenCol =calcularMediana(salariosColSorted);

//Mediana Top 10
porcentajeDeseado=10;
valorSpliceStart=(100-porcentajeDeseado)/100
const spliceStart = salariosColSorted.length*valorSpliceStart;
const spliceCount = salariosColSorted.length-spliceStart; 
const salariosTop10Col=salariosColSorted.splice(spliceStart,spliceCount)
const medianaTop10Col =calcularMediana(salariosTop10Col);

console.log({
    medianaGenCol,
    medianaTop10Col
});
