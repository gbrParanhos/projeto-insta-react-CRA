const Suggestion = ({suggestionItem:{userSuggestion,status}}) => {
  return(
    <div className="sugestao">
      <div className="usuario">
        <img src={userSuggestion.src} alt={userSuggestion.alt}/>
        <div className="texto">
          <div className="nome">{userSuggestion.alt}</div>
          <div className="razao">{status}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  )
}

export default Suggestion