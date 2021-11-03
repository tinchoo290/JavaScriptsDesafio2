const usuario= prompt("Ingrese su Usuario");
const pass= parseInt (prompt("Ingrese su Contraseña"));
const camada= parseInt (prompt ("Ingrese su Nro. de Camada"));

const usuarioReg = "tincho";
const usuarioReg2 = "pedrito"; 
const contraReg = 1234;
const contraReg2 = 5678;
const camadaReg = 1;
const camadaReg2 = 2;

if ((usuario == usuarioReg && pass == contraReg && camada ==  camadaReg) || (usuario == usuarioReg2 && pass == contraReg2 && camada ==  camadaReg2)){
    console.log(`Bienvenido ${usuario}`);
    alert(`Bienvenido ${usuario}`);
    confirm(`¿Desea contunuar?`);

    const valorA = prompt ("Ingrese nota 1er parcial ");
    const valorB = prompt ("Ingrese nota 2do parcial ");
    const valorC = prompt ("Ingrese nota 3er parcial ");
    const suma = parseFloat(valorA) + parseFloat(valorB) + parseFloat(valorC);
    const promedio = suma / 3

    if (parseFloat (promedio) >=7){
        console.log(`APROBADO`)
        alert(`¡MUY BIEN! ESTAS APROBADO con ${promedio}`)
    }
    else if (parseFloat (promedio)>=4){
        console.log(`FINAL`)
        alert(`LÁSTIMA, NO ALCANZÓ VAS FINAL con ${promedio}`)
    }
    else{
        console.log(`RECURSAR`)
        alert (`ASÍ NO FUNCIONA, TENÉS QUE RECURSAR LA MATERIA con ${promedio}`)
    }
}
else {
    console.log("Usuario o contraseña incorrecto")
    alert("Usuario o contraseña incorrecto")
}