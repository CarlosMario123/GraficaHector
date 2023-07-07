import { useState,useEffect } from 'react';
import { obtenerStad } from './datos';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

export function Estadistica(){
   
    const [m,setm] = useState(0);
    

    useEffect(() => {


        const obtenerDatos = async (a,b,c) => {
            // Simulación de carga de datos
            await new Promise(resolve => setTimeout(resolve, 300));
      
            const data = {
              labels: ["Masculino", "Femenino", "Total de estudiantes"],
              datasets: [
                {
                  label: "Estadisticas personas",
                  data: [a, b, c],
                  backgroundColor: ["#00BFFF", "#FFC0CB","green"],
                  borderColor: "black",
                  borderWidth: 2,
                },
              ],
            };
      
            setdatosg(data);
          };
          
        const obtenerClientes = async () => {
          try {
            const data = await obtenerStad();
            const {mujeres, hombres,total} = data;
            console.log(hombres);
      
          
           obtenerDatos(mujeres,hombres,total);
          } catch (error) {
            console.error("Error:", error);
          }
        };
      
        obtenerClientes();
        console.log("m" + m.total)
      }, []);
     
     //usamos un useState que sera util para la grafica
const [datosg, setdatosg] = useState({
    labels: ["Masculino","Femenino","Total de estudiantes"],//etiquetas de abajo de la grafica
    datasets: [
      //informacion de las barras de cantidad vendida
      {
      
        label: "Estadisticas personas",
        data: [5,m.total,7],
        backgroundColor: [
          "#00BFFF",
          "#FFC0CB",
          "green"
         
        ],
        borderColor: "black",
        borderWidth: 2,

      },
         //informacion de las barras de invertido todo se maneja como objeto
   
    ],
  })

 

  
    return (
      <div  className='w-11/12 mt-10 h-full'>
       
        <Bar data={datosg} />;
         
      </div>
      
       
    )

}