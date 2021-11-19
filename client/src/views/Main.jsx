import React, {useState} from 'react'
import Dashboard from '../components/Dashboard'
import './Main.css'

const Main = (props) => {

    const [currency, setCurrency] = useState('USD');
    const {coinList, setCoinList} = props;

    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <select onChange={ e=> setCurrency(e.target.value)} name="currency" id="currency" defaultValue='USD'>
                <option value="USD">USD</option>
                <option value="BRL">BRL</option>
                <option value="CNY">CNY</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="RUB">RUB</option>
                <option value="XAU">XAU</option>
            </select>
            <Dashboard currency={currency} coinList={coinList}/>
            {
                (coinList.length >= 1) ? <button onClick={e=>setCoinList([])}>Clear Added Coins</button> : <></>
            }
        </div>
    )
}

export default Main
