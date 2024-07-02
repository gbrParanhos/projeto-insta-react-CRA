import React from "react";

const User = () => {
  const [name,setName] = React.useState('Anônimo');
  const [urlImg, setUrlImg] = React.useState('assets/img/Anonimo.png')

  const changeName = () => {
    const questionName = prompt('Qual nome deseja utilizar?');

    if(questionName) {
      setName(questionName);
    }
  }

  const changeUrlImg= () => {
    const questionImg = prompt('Qual imagem deseja utilizar?');

    if(questionImg) {
      setUrlImg(questionImg);
    }
  }

  return(
    <div className="usuario">
      <img onClick={changeUrlImg} src={urlImg} alt="imagem de perfil"/>
      <div className="texto">
        <span>
          <strong>{name}</strong>
          <ion-icon onClick={changeName} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}

export default User