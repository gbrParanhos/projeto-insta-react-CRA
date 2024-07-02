import { useState } from "react"

const Post = ({postItem}) => {

  const [postState,setPostState] = useState(postItem);
  const {userPost,contentImg,userLike,countLikes,liked = false,saved = false} = postState
  
  const addLike = () => {
    const sumLike = liked? -1: 1
    setPostState({...postState, 'countLikes': countLikes + sumLike, 'liked': !liked});
  }

  const savePost = () => {
    setPostState({...postState, 'saved': !saved});
  }

  return(
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={userPost.src} alt={userPost.alt}/>
            {userPost.alt}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={contentImg.src} alt={contentImg.alt} onClick={() => liked? null: addLike()}/>
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name={liked? "heart": "heart-outline"} style={liked? {color: 'red'}: {}} onClick={() => addLike()}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={saved?"bookmark":"bookmark-outline"} onClick={() => savePost()}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={userLike.src} alt={userLike.alt}/>
            <div className="texto">
              Curtido por <strong>{userLike.alt}</strong> e <strong>outras {Intl.NumberFormat('pt-br').format(countLikes)} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Post