import {Component} from 'react'

import './index.css'
import ButtonComponent from '../ButtonComponent'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greeting extends Component {
  state = {
    activeButtonId: languageGreetingsList[0].id,
  }

  clickButton = id => {
    this.setState({activeButtonId: id})
  }

  render() {
    const {activeButtonId} = this.state

    const selectedLanguage = languageGreetingsList.find(
      language => language.id === activeButtonId,
    )

    return (
      <div className="greeting-container">
        <h1 className="greeting-heading">Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(each => (
            <ButtonComponent
              details={each}
              key={each.id}
              clickButton={this.clickButton}
              isActive={activeButtonId === each.id}
            />
          ))}
        </ul>
        <img
          src={selectedLanguage.imageUrl}
          className="img"
          alt={selectedLanguage.imageAltText}
        />
      </div>
    )
  }
}

export default Greeting
