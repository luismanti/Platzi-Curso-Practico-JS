function calcularPromedio (lista){
    // let sumaLista = 0;
    // for (i = 0; i < lista.length; i++) {
    //     sumaLista =  sumaLista + lista[i];    
    // }

    //Otra Forma de hacer un FOR
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    )
    const promedio = sumaLista / lista.length;
    return promedio;
}

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

function calcularModa(lista){
    lista.sort((a, b) => a - b);
    let i=0;
    val=[];
    
    while (i<lista.length) {
        let contador = 1;
        while (lista[i] === lista[i+1]) {
            contador++;
            i++;
        }
        i++;
        val.push([lista[i-1],contador]);
    }

    moda=[];
    a=0;
    for (let i = 0; i < val.length; i++)
     {
        if (val[a][1] == val[i][1]) { 
            a=i;           
            moda.push(val[a]);
            console.log("igual");
        }        
        else if (val[a][1] > val[i][1]) {
            console.log("mayor");
        } 
        else {
            a=i;
            moda=[val[a]];
            console.log("menor");
        }      
    }   
return moda
}




