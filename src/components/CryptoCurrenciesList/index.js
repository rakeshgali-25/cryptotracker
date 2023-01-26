import {Component} from 'react'
import './index.css'

import CryptoCurrencyItem from '../CryptoCurrencyItem'

class CryptoCurrenciesList extends Component {
  render() {
    const {currencyList} = this.props
    return (
      <div className="card-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />

        <div className="list-container">
          <div className="top-box">
            <p className="left">Coin Type</p>
            <div className="right">
              <p className="para">USD</p>
              <p className="para">EURO</p>
            </div>
          </div>

          <ul className="list">
            {currencyList.map(each => (
              <CryptoCurrencyItem key={each.id} each={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptoCurrenciesList
