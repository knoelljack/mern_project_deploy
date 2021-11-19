import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import './Search.css';
import axios from 'axios';

const Search = (props) => {

    const [search, setSearch] = useState("");
    const [coin, setCoin] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();
    const {coinList,setCoinList} = props;

    const submitHandler = e => {
        console.log('SUBMITTED');
        setSubmitted(!submitted);
    }
    
    const searchHandler = e => {
        setSearch(e.target.value);
        if(e.target.value.length >= 3){
        axios.get(`https://api.coinbase.com/v2/prices/${e.target.value}-USD/spot`)
            .then(res => {
                console.log(res.data);
                setCoin(res.data.data);
                setError("");
            })
            .catch(err => {
                console.log(err);
                setError('INVALID ENTRY');
            })
        }
    }

    // useEffect(() => {
    //     axios.get(`https://api.coinbase.com/v2/prices/${search}-USD/spot`)
    //         .then(res => {
    //             console.log(res.data);
    //             setCoin(res.data.data);
    //             setError("");
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             setError('INVALID ENTRY');
    //         })
    // }, [search.length == 3])


    return (
        <div className='search'>
            <h2>Search for a cryptocurrency</h2>
            <br />
            <form onSubmit={submitHandler}>
                <label>Enter Coin Ticker:</label><br />
                <input type="text" onChange={searchHandler}/> <br />
            </form>
            <h3>{error}</h3>
            {
                (coin) ?
                <div>
                    <div onClick={e => history.push(`/coin/${coin.base}/${coin.currency}`)} className='coin'>
                        <img className='searchcoinpic' src="https://i.gifer.com/origin/71/719ea2f44c791fc07e0e811940a0232b_w200.gif" alt="User Added Coin" />
                        <div>{coin.base}</div>
                        <div>{coin.amount} {coin.currency}</div>
                    </div> 
                    <button onClick={e => setCoinList([...coinList, coin])}>Add Coin to List</button>
                </div>
                : <div/>
            }
        </div>
    )
}

export default Search
