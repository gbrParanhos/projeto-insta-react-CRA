import Suggestion from "./Suggestion";

const Suggestions = () => {
  const suggestionList = [
    {
      userSuggestion: { alt: 'bad.vibes.memes', src: 'assets/img/bad.vibes.memes.svg' },
      status: 'Segue você'
    },
    {
      userSuggestion: { alt: 'chibirdart', src: 'assets/img/chibirdart.svg' },
      status: 'Segue você'
    },
    {
      userSuggestion: { alt: 'razoesparaacreditar', src: 'assets/img/razoesparaacreditar.svg' },
      status: 'Novo no Instagram'
    },
    {
      userSuggestion: { alt: 'adorable_animals', src: 'assets/img/adorable_animals.svg' },
      status: 'Segue você'
    },
    {
      userSuggestion: { alt: 'smallcutecats', src: 'assets/img/smallcutecats.svg' },
      status: 'Segue você'
    }
  ]

  return(
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestionList.map((suggestionItem,indexItem) => <Suggestion suggestionItem = {suggestionItem} key = {indexItem} />)}
    </div>
  )
}

export default Suggestions