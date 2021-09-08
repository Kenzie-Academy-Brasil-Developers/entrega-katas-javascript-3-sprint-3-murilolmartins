const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(x) {
    let resultado = document.createElement("p");
    let numeros = x.toString()
    resultado.innerText= "Resultado " + numeros;
    let pagina = document.querySelector("body");
    pagina.appendChild(resultado);
    return numeros

}

function kata1() {
    // implemente o código do kata 1 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 1:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 1; i <= 25; i++) {
            lista.push(i)
        }
    
        const resultado = showResults(lista);
        return resultado;
}

function kata2() {
    // implemente o código do kata 2 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 2:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 25; i > 0; i--) { 
            lista.push(i);
    }
    const resultado = showResults(lista);
    return resultado;
}

function kata3() {
    // implemente o código do kata 3 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 3:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 1; i <= 25; i++) {
            lista.push(i*-1)
        
    }
    const resultado = showResults(lista);
    return resultado;
}

function kata4() {
    // implemente o código do kata 4 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 4:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 25; i > 0; i--) { 
            lista.push(i*-1);
    }
    const resultado = showResults(lista);
    return resultado;
}

function kata5() {
    // implemente o código do kata 5 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 5:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 25; i > -26; i--) { 
            if(i % 2 !== 0) {
                lista.push(i);
        }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata6() {
    // implemente o código do kata 6 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 6:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 1; i < 100; i++) { 
            if(i % 3 === 0) {
                lista.push(i);
        }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata7() {
    // implemente o código do kata 7 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 7:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 1; i < 100; i++) { 
            if(i % 7 === 0) {
                lista.push(i);
        }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata8() {
    // implemente o código do kata 8 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 8:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 100; i > 0; i--) { 
            if(i % 3 === 0) {
                lista.push(i);
            }
            else if (i % 7 === 0){
                lista.push(i)
            }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata9() {
    // implemente o código do kata 9 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 9:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 1; i < 100; i++) { 
            if(i % 5 === 0 && i % 2 !== 0) {
                lista.push(i);
        }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata10() {
    // implemente o código do kata 10 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 10:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    const resultado = showResults(sampleArray);
    return resultado;
}

function kata11() {
    // implemente o código do kata 11 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 11:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 0; i < sampleArray.length; i++) { 
            if(sampleArray[i] % 2 === 0) {
                lista.push(sampleArray[i]);
        }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata12() {
    // implemente o código do kata 12 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 12:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 0; i < sampleArray.length; i++) { 
            if(sampleArray[i] % 2 !== 0) {
                lista.push(sampleArray[i]);
        }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata13() {
    // implemente o código do kata 13 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 13:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 0; i < sampleArray.length; i++) { 
            if(sampleArray[i] % 8 === 0) {
                lista.push(sampleArray[i]);
        }
    } 
    const resultado = showResults(lista);
    return resultado;
}

function kata14() {
    // implemente o código do kata 14 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 14:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let lista = []
    for (let i = 0; i < sampleArray.length; i++) { 
            lista.push(sampleArray[i]**2);
        }
    
        const resultado = showResults(lista);
        return resultado;
}

function kata15() {
    // implemente o código do kata 15 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 15:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let soma = 0
        for (let i = 0; i <= 20; i++) {
            soma += i;
        }
        const resultado = showResults(soma);
        return resultado;
}

function kata16() {
    // implemente o código do kata 16 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 16:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let soma = 0
        for (let i = 0; i < sampleArray.length; i++) {
            soma += sampleArray[i];
        }
        const resultado = showResults(soma);
        return resultado;
}

function kata17() {
    // implemente o código do kata 17 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 17:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let elemento = sampleArray[0]
        for (let i = 1; i < sampleArray.length; i++) {
            if (sampleArray[i] < elemento) {
                elemento = sampleArray[i]
            }
        }
        const resultado = showResults(elemento);
        return resultado;
}

function kata18() {
    // implemente o código do kata 18 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas 18:"
    let principal = document.querySelector("body")
    principal.appendChild(kata);
    let elemento = sampleArray[0]
        for (let i = 1; i < sampleArray.length; i++) {
            if (sampleArray[i] > elemento) {
                elemento = sampleArray[i]
            }
        }
        const resultado = showResults(elemento);
        return resultado;
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas Bonus 1:"
    let principal = document.querySelector("body");
    principal.appendChild(kata);
    for (let i = 0; i < 20; i++) {
        let retangulo = document.createElement("div");
        principal.appendChild(retangulo);
        retangulo.style.height = "20px";
        retangulo.style.width = "100px";
        retangulo.style.backgroundColor = "gray";
        retangulo.style.border = "1px solid black"
        retangulo.style.marginBottom = "5px"
    }
    
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas Bonus 2:"
    let principal = document.querySelector("body");
    principal.appendChild(kata);
    for (let i = 1; i <= 20; i++) {
        let incremento = i*5 + 100;
        incremento.toString();
        incremento += "px"
        let retangulo = document.createElement("div");
        principal.appendChild(retangulo);
        retangulo.style.height = "20px";
        retangulo.style.width = incremento;
        retangulo.style.backgroundColor = "gray";
        retangulo.style.border = "1px solid black"
        retangulo.style.marginBottom = "5px"
    }
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas Bonus 3:"
    let principal = document.querySelector("body");
    principal.appendChild(kata);
    for (let i = 0; i < sampleArray.length; i++) {
        let largura = sampleArray[i];
        largura.toString();
        largura += "px"
        let retangulo = document.createElement("div");
        principal.appendChild(retangulo);
        retangulo.style.height = "20px";
        retangulo.style.width = largura;
        retangulo.style.backgroundColor = "gray";
        retangulo.style.border = "1px solid black"
        retangulo.style.marginBottom = "5px"
    
    }
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas Bonus 4:"
    let principal = document.querySelector("body");
    principal.appendChild(kata);
    for (let i = 0; i < sampleArray.length; i++) {
        let largura = sampleArray[i];
        largura.toString();
        largura += "px"
        let retangulo = document.createElement("div");
        principal.appendChild(retangulo);
        retangulo.style.height = "20px";
        retangulo.style.width = largura;
        retangulo.style.backgroundColor = "gray";
        retangulo.style.border = "1px solid black"
        retangulo.style.marginBottom = "5px"
            if(i % 2 === 0) {
                retangulo.style.backgroundColor = "red"
            }
    }
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    let kata = document.createElement("p");
    kata.innerText = "Katas Bonus 5:"
    let principal = document.querySelector("body");
    principal.appendChild(kata);
    for (let i = 0; i < sampleArray.length; i++) {
            let largura = sampleArray[i];
            largura.toString();
            largura += "px"
            let retangulo = document.createElement("div");
            principal.appendChild(retangulo);
            retangulo.style.height = "20px";
            retangulo.style.width = largura;
            retangulo.style.backgroundColor = "gray";
            retangulo.style.border = "1px solid black"
            retangulo.style.marginBottom = "5px"
                if(sampleArray[i] % 2 === 0) {
                    retangulo.style.backgroundColor = "red"
            }
    }
}
kata1()
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()
kata8()
kata9()
kata10()
kata11()
kata12()
kata13()
kata14()
kata15()
kata16()
kata17()
kata18()
kataBonus1()
kataBonus2()
kataBonus3()
kataBonus4()
kataBonus5()