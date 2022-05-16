import './App.css';


function App() {
const clase = {
  numero : '5',
  tema : 'Angular'
}

const autos = [
  {id: 1, nombre: 'Corsa', marca:'Chevrolet'},
  {id: 2, nombre: 'Siena', marca:'Fiat'},
  {id: 3, nombre: 'Ka', marca:'Ford'},
  {id: 4, nombre: 'Gol', marca:'Volkswagen'},
  {id: 5, nombre: 'A7', marca:'Audi'}
]

const estilos = {
  color:'blue',
  fontSize: 30,
}
const esLigth= true;

  return (
    <div className={esLigth ? 'ligth' : 'dark' }>
        <h2 className={esLigth ? 'ligth-title' : 'dark-title' } >Bienvenidos a la práctica de React {clase.numero}  </h2>
      <ul>
          {autos.map(auto => (
            <li key={auto.id}>
              <strong>{auto.marca} </strong>
              <span>{auto.nombre} </span>
            </li>
          )) }
          </ul>
          <button id='tema' >Cambiar tema</button>
    </div>
  );
}

export default App;
