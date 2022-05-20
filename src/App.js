import './App.css';
import Lista from './components/Lista.js'

function App() {
const clase = {
  numero : '5',
  tema : 'Angular'
}



 const estilos = {
   color:'blue',
   fontSize: 30,
 }

const autos = [
  {id: 1, strong: 'Corsa', span:'Chevrolet'},
  {id: 2, strong: 'Siena', span:'Fiat'},
  {id: 3, strong: 'Ka', span:'Ford'},
  {id: 4, strong: 'Gol', span:'Volkswagen'},
  {id: 5, strong: 'A7', span:'Audi'},
  {id: 6, strong: 'Sandero', span: 'Renault'}
]

const electrodomésticos = [
  {id: 1, strong: 'Heladera', span:'Gafa'},
  {id: 2, strong: 'Secarropas', span:'Kohinoor'},
  {id: 3, strong: 'Cocina', span:'Escorial'},
  {id: 4, strong: 'Batidora', span:'Peabody'},
  {id: 5, strong: 'Aire acondicionado', span:'Lift'}
]

const esLigth= true;

  return (
    <div className={App}>
        <h2 style={estilos} > Bienvenidos a la clase {clase.numero} de {clase.tema}  </h2>
          <Lista lista={autos} titulo='Lista de Autos' />
          <Lista lista={electrodomésticos} titulo='Lista de Electrodomésticos'>
            <li style={{backgroundColor: 'red'}}>Fin de la lista</li>
            </Lista>
    </div>
  );
}

export default App;
