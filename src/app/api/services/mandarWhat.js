export const enviar = (numero, nombre,mensaje) => {
    setTimeout(() => {
         window.open(
        `https://wa.me/549${numero}?text=Hola,%20te%20confirmo%20asistencia%20al%20evento%20%0A*`,
        `_blank`
      );
    }, 200);
  }