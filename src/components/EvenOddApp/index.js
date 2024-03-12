import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-app-contaier">
        <div className="even-odd-app-card">
          <h1 className="heading"> Count {count}</h1>
          <p className="desc">Count is {displayText}</p>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              Increment
            </button>
            <p className="desc-2">Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
