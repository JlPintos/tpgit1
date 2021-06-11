function loguin() {
    let nombreUss = prompt('Ingrese su nombre');
    let edadUss = prompt('Ingrese su edad');
    
    if (edadUss >= 18) {
        alert('Señor/a ' + nombreUss + ' al ser usted mayor de edad puede ingresar');
        alert('Ya que usted es mayor ahora vamos ver cual de los usuarios es el mayor de edad')
        comparar();
    } else {
        alert('Señor/a' + nombreUss + ' usted es menor de edad y no tiene permiso para ingresar');
    }
}

loguin();

function comparar() {

    let nombres = [];
    let edades = [];

    let index = 0;
    let mayorEdad = 0;
    
    for (let i = 0; i < 3; i++) {
        nombres[i] = prompt('Ingrese el nombre del usuario a comparar');
        edades[i] = Number(prompt('Ingrese la edad del usuario a comparar'));

        if (edades[i] > mayorEdad) {
            index = i;
            mayorEdad = edades[i];
        }
    }

    /* console.log(nombres);
    console.log(edades);
    
    console.log(index, mayorEdad); */


    alert('El usuario ' + nombres[index] + ' es el de mayor edad y tiene ' + mayorEdad + ' años')

}



















