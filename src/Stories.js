import Story from "./Story";

const Stories = () => {
  const storyList = [
    { alt: '9gag', src: 'assets/img/9gag.svg' },
    { alt: 'meowed', src: 'assets/img/meowed.svg' },
    { alt: 'barked', src: 'assets/img/barked.svg' },
    { alt: 'nathanwpylestrangeplanet', src: 'assets/img/nathanwpylestrangeplanet.svg' },
    { alt: 'wawawicomics', src: 'assets/img/wawawicomics.svg' },
    { alt: 'respondeai', src: 'assets/img/respondeai.svg' },
    { alt: 'filomoderna', src: 'assets/img/filomoderna.svg' },
    { alt: 'memeriagourmet', src: 'assets/img/memeriagourmet.svg' }

  ]

  return(
    <div className="stories">
      {storyList.map((storyItem,indexItem) => <Story storyItem = {storyItem} key={indexItem} />)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

export default Stories