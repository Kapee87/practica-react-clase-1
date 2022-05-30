const ListItem = ({contenido, eliminar}) =>{

    return(
        <li style={{listStyle: 'none'}} onClick={() => eliminar(contenido.id) } >
            <strong >{contenido.strong} </strong>
            <span style ={ {paddingLeft:5}}>{contenido.span} </span>
      </li>
    )

}


export default ListItem;