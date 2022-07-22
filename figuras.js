//cuadrado
function perimetroCuadrado(lado)
    {
        return "El perimetro es " + lado * 4 + "cm";
    }
function areaCuadrado(lado)
    {
        return  "El area es " + lado*lado + "cm^2"
    } 

//Triangulo
function perimetroTriangulo(base, lado1, lado2)
    {
        return base + lado1 + lado2;
    }
function areaTriangulo(altura, base)
    {
        return (altura* base)/2;
    }

//circulo
const pi= Math.PI;
function circunferencia(rad)
    {
        return pi*rad*2;
    } 
function areaCirculo(rad)
    {
        return pi * rad * rad;
    }  

// Funciones para trabajar con HTML

//Cuadrado

function calcularPerimetroCuadrado() 
    {
        const input = document.getElementById("InputCuadrado")
        const value = input.value;
        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }

function calcularAreaCuadrado()
    {
        const input = document.getElementById("InputCuadrado")
        const value = input.value;
        const area = areaCuadrado(value);
        alert(area);
    }

//Triangulo

function calcularPerimetroTriangulo() 
    {
        const inputbase = document.getElementById("InputBaseTriangulo");
        const base = parseInt(inputbase.value);

        const inputlado1 = document.getElementById("InputLado1Triangulo");
        const lado1 = parseInt(inputlado1.value);

        const inputlado2 = document.getElementById("InputLado2Triangulo");
        const lado2 =  parseInt(inputlado2.value);

        const perimetro = perimetroTriangulo(base, lado1, lado2);
        alert(perimetro);
    }

function calcularAreaTriangulo()
    {
        const inputbase = document.getElementById("InputBaseTriangulo");
        const base = parseInt(inputbase.value);

        const inputAltura = document.getElementById("InputAlturaTriangulo");
        const altura =  parseInt(inputAltura.value);

        const area = areaTriangulo(altura, base);
        alert(area);
    }

//Circulo

function calcularPerimetroCirculo() 
    {
        const input = document.getElementById("InputCirculo")
        const value = input.value;
        const perimetro = circunferencia(value);
        alert(perimetro);
    }

function calcularAreaCirculo()
    {
        const input = document.getElementById("InputCirculo")
        const value = input.value;
        const area = areaCirculo(value);
        alert(area);
    }

    //TrianguloIsocels


function calcularPerimetroIso() 
{
    const inputLado3 = document.getElementById("InputLado3");
    const lado3 = parseInt(inputLado3.value);

    const inputlado1 = document.getElementById("InputLado1");
    const lado1 = parseInt(inputlado1.value);

    const inputlado2 = document.getElementById("InputLado2");
    const lado2 =  parseInt(inputlado2.value);

    if (lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado2 != lado3 || lado2 == lado3 && lado2 != lado1 ) {
        const perimetro = perimetroTriangulo(lado3, lado1, lado2);
        alert(perimetro); 
    }
    else{
        alert("No es un Triangulo Isoceles")
    }
}

function calcularAreaIso()
{
    const inputLado3 = document.getElementById("InputLado3");
    const lado3 = parseInt(inputLado3.value);

    const inputlado1 = document.getElementById("InputLado1");
    const lado1 = parseInt(inputlado1.value);

    const inputlado2 = document.getElementById("InputLado2");
    const lado2 =  parseInt(inputlado2.value);

    if (lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado2 != lado3 || lado2 == lado3 && lado2 != lado1 ) 
    {
        if (lado1 == lado2){
            base=lado3;
            h = lado1;
        }
        else if (lado1 == lado3){
            base=lado2;
            h = lado1;
        }        
        else if (lado3 == lado2){
            base=lado1;
            h = lado2;
        }
        const altura= Math.sqrt((h*h)-(base*base/4));

        const area = areaTriangulo(altura, base);
        console.log(altura);
        alert(area); 
    }
    else{
        alert("No es un Triangulo Isoceles")
    }
}