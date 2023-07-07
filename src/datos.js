export const obtenerStad = async () => {

    let info = [];
    //hacemos la peticion http
    await fetch('http://localhost:9000/personas')
    .then(response => response.json())
    .then(data => {
      info = data;
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
    });
     const estadistica = {
        mujeres:info[0].mujeres,
        hombres:info[0].hombres,
        total:info[0].total
     }

   
    return estadistica;
  };