const ListItem = (props) =>{

    return(
        <li style={{listStyle: 'none'}}>
            <strong >{props.contenido.strong} </strong>
            <span style ={ {paddingLeft:5}}>{props.contenido.span} </span>
      </li>
    )

}


export default ListItem;