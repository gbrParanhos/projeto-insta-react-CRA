const Story = ({storyItem:{alt,src}}) => {
  return(
    <div className="story">
      <div className="imagem">
        <img src={src} alt={alt}/>
      </div>
      <div className="usuario">
        {alt}
      </div>
    </div>
  )
}

export default Story