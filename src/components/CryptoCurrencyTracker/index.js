import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import CryptoCurrenciesList from '../CryptoCurrenciesList'

class CryptoCurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.timerId = setInterval(this.getTheData, 1500)
  }

  componentWillUnmount() {
    this.setState({isLoading: true})
    clearInterval(this.timerId)
  }

  getTheData = async () => {
    this.setState({isLoading: true})
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      id: each.id,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    if (data !== undefined) {
      this.setState({currencyList: updatedData, isLoading: false})
    }
  }

  render() {
    const {isLoading, currencyList} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptoCurrenciesList currencyList={currencyList} />
        )}
      </div>
    )
  }
}

export default CryptoCurrencyTracker
