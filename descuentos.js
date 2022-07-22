function calcularDescuento ()
    {
        const precio = document.getElementById ("inputPrecioOriginal")
        const originalPrice = parseFloat(precio.value);  

        const descuento = document.getElementById("inputDescuento")
        const disccount =  parseFloat(descuento.value);
        
        const finalPrice = calcularPrecioConDescuento(originalPrice,disccount);

        const priceShow = document.getElementById("priceShow");
        priceShow.innerText="Tu precio final, con el descuento, es  igual a " + finalPrice;
    }
    
function calcularPrecioConDescuento (precioOriginal, descuento)
    {
        const porcentajePrecioConDescuento = 100- descuento;
        const precioDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
        return precioDescuento;
    }

