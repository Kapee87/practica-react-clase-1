import { useState } from "react";
import ListItem from "./ListItem";

const electrodomesticosData = [
   {id: 1, strong: 'Heladera', span:'Gafa'},
   {id: 2, strong: 'Secarropas', span:'Kohinoor'},
   {id: 3, strong: 'Cocina', span:'Escorial'},
   {id: 4, strong: 'Batidora', span:'Peabody'},
   {id: 5, strong: 'Aire acondicionado', span:'Lift'}
 ]

function Lista(){
  
  const [electrodomesticos, setElectrodomesticos]=useState(electrodomesticosData);

  function eliminarItem(itemAEliminar){
    const listaActualizada = electrodomesticos.filter(item => item.id !== itemAEliminar);
    setElectrodomesticos(listaActualizada);
  }
  
    return(
        <ul>
          <li><h3>Lista de Electrodomésticos </h3> </li>
          {/* versión de bajo perfomance con index */}
          {electrodomesticos.map((item, index) => (
            <ListItem key={index} contenido={item} eliminar={eliminarItem} />
          )) }
          {/* versión mejorada con id unico */}
          {electrodomesticos.map(item => (
            <ListItem key={item.id} contenido={item} eliminar={eliminarItem} />
          ))}

          {/* { children } */}
          </ul>
    )
}

export default Lista;