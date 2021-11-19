import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';



const Dashboard = (props) => {

    const [bitcoin, setBitcoin] = useState({});
    const [eth, setEth] = useState({});
    const [solana, setSolana] = useState({});
    const [doge, setDoge] = useState({});
    const history = useHistory();
    const { currency, coinList } = props;


    useEffect(() => {
        axios.get(`https://api.coinbase.com/v2/prices/BTC-${currency}/spot`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setBitcoin(res.data.data);
            })
            .catch(err => console.log(err))
    }, [currency])

    useEffect(() => {
        axios.get(`https://api.coinbase.com/v2/prices/ETH-${currency}/spot`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setEth(res.data.data);
            })
            .catch(err => console.log(err))
    }, [currency])

    useEffect(() => {
        axios.get(`https://api.coinbase.com/v2/prices/SOL-${currency}/spot`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setSolana(res.data.data);
            })
            .catch(err => console.log(err))
    }, [currency])

    useEffect(() => {
        axios.get(`https://api.coinbase.com/v2/prices/DOGE-${currency}/spot`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setDoge(res.data.data);
            })
            .catch(err => console.log(err))
    }, [currency])

    

    return (
        <div className='dash'>
            <div onClick={e => history.push(`/coin/${bitcoin.base}/${currency}`)} className='coin'>
                <img className='bitcoinpic' src="https://thumbs.gfycat.com/LameMaleBorzoi-max-1mb.gif" alt="Bitcoin" />
                <div>{bitcoin.base}</div>
                <div>{bitcoin.amount} {bitcoin.currency}</div>
            </div>
            <div onClick={e => history.push(`/coin/${eth.base}/${currency}`)} className='coin'>
                <img className='coinpic' src="https://uploads.twitchalerts.com/000/059/135/109/ethereum%20spinning.gif" alt="Ethereum" />
                <div>{eth.base}</div>
                <div>{eth.amount} {eth.currency}</div>
            </div>
            <div onClick={e => history.push(`/coin/${solana.base}/${currency}`)} className='coin'>
                <img className='coinpic' src="https://jmww.io/static/media/hold-23-sm.9dc472c0.gif" alt="solana" />
                <div>{solana.base}</div>
                <div>{solana.amount} {solana.currency}</div>
            </div>
            <div onClick={e => history.push(`/coin/${doge.base}/${currency}`)} className='coin'>
                <img className='dogeimg' src="https://giffiles.alphacoders.com/213/213067.gif" alt="doge" />
                <div>{doge.base}</div>
                <div>{doge.amount} {doge.currency}</div>
            </div>
            {
                coinList.map((coin, index) => {
                    return (
                        <div  key={index} onClick={e => history.push(`/coin/${coin.base}/${currency}`)} className='coin'>
                            <img className='searchcoinpic' src="https://i.gifer.com/origin/71/719ea2f44c791fc07e0e811940a0232b_w200.gif" alt="coin" />
                            <div>{coin.base}</div>
                            <div>{coin.amount} {doge.currency}</div>
                        </div>
                    )
                })
            }
            <hr />
            <p>*All Data on Dashboard Accessed Through Coinbase API</p>
        </div>
    )
}

export default Dashboard
