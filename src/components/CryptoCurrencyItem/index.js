import './index.css'

const CryptoCurrencyItem = props => {
  const {each} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = each

  return (
    <li className="list-item">
      <div className="left-side">
        <img src={currencyLogo} className="logo" alt="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="right-side">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
