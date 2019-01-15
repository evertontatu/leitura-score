import React, { Component } from 'react'
import {Button} from 'react-materialize';


class BoxPost extends Component{
  render(){    
    return(
      <div className="box-post">
        <p>Data: </p>
        <h4>Título</h4>
        <p>Autor: </p>
        
        
        <Button waves='light'>Gostei</Button>
        <Button waves='light'>Não Gostei</Button>
        <p>Votos: </p>
        <p>Comentários: </p>
        <Button waves='light'>Detalhes</Button>
        <Button waves='light'>Editar</Button>
        <Button waves='light'>Excluir</Button>
        
      </div>
    )
  }
}

export default BoxPost;
