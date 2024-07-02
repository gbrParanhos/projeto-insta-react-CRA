import Post from "./Post";

const Posts = () => {
  const postList = [
    {
      userPost: { alt: 'meowed', src: 'assets/img/meowed.svg' },
      contentImg: { alt: 'gato-telefone', src: 'assets/img/gato-telefone.svg' },
      userLike: { alt: 'respondeai', src: 'assets/img/respondeai.svg' },
      countLikes: 101523
    },
    {
      userPost: { alt: 'barked', src: 'assets/img/barked.svg' },
      contentImg: { alt: 'dog', src: 'assets/img/dog.svg' },
      userLike: { alt: 'adorable_animals', src: 'assets/img/adorable_animals.svg' },
      countLikes: 99159
    },
    {
      userPost: { alt: 'meowed', src: 'assets/img/meowed.svg' },
      contentImg: { alt: 'gato-telefone', src: 'assets/img/gato-telefone.svg' },
      userLike: { alt: 'respondeai', src: 'assets/img/respondeai.svg' },
      countLikes: 28648
    }
  ]

  return(
    <div className="posts">
      {postList.map((postItem,indexItem) => <Post postItem = {postItem} key = {indexItem} />)}
    </div>
  )
}

export default Posts