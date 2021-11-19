import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css'

const Details = () => {

    const { id, currency } = useParams();
    const [coin, setCoin] = useState({});

    // useEffect(() => {
    //     axios.get(`https://api.coinbase.com/v2/prices/${id}-${currency}/spot`)
    //         .then(res=>{
    //             console.log(res);
    //             console.log(res.data);
    //             setCoin(res.data.data);
    //         })
    //         .catch(err => console.log(err))
    // }, [id])

    useEffect(() => {
        axios.get(`https://data.messari.io/api/v1/assets/${id}/metrics`)
            .then(res => {
                console.log(res.data.data);
                setCoin(res.data.data);
            })
            .catch(err => console.log(err))
    }, [id])

    function abbrNum(number, decPlaces) {
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10, decPlaces);

        // Enumerate number abbreviations
        var abbrev = ["k", "m", "b", "t"];

        // Go through the array backwards, so we do the largest first
        for (var i = abbrev.length - 1; i >= 0; i--) {

            // Convert array index to "1000", "1000000", etc
            var size = Math.pow(10, (i + 1) * 3);

            // If the number is bigger or equal do the abbreviation
            if (size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round(number * decPlaces / size) / decPlaces;

                // Add the letter for the abbreviation
                number += abbrev[i];

                // We are done... stop
                break;
            }
        }

        return number;
    }

    return (
        <>
            {
                (coin.name) ?
                    <div>
                        <h1>{coin.name}</h1>
                        <h2>{coin.symbol}</h2>
                        <h2>$ {coin.market_data.price_usd.toFixed(2)} USD</h2>
                        <div className="main">
                            <div className="subsection">
                                <h3>Marketcap Info:</h3>
                                <p>Current Marketcap USD: ${abbrNum(coin.marketcap.current_marketcap_usd,2)}</p>
                                <p>Market Dominance: {coin.marketcap.marketcap_dominance_percent.toFixed(2)} %</p>
                                <p>Rank: {coin.marketcap.rank}</p>
                                <p>Volume Turnover last 24hr: {coin.marketcap.volume_turnover_last_24_hours_percent ? coin.marketcap.volume_turnover_last_24_hours_percent.toFixed(2) : null} %</p>
                            </div>
                            <div className="subsection">
                                <h3>On-chain Data:</h3>
                                <p>Active Addresses: {coin.on_chain_data.active_addresses}</p>
                                <p>Total Addresses: {coin.on_chain_data.addresses_count}</p>
                                <p>Hash Rate: {coin.on_chain_data.hash_rate ? coin.on_chain_data.hash_rate.toFixed(2):null}</p>
                                <p>Blocks Added Last 24hr: {coin.on_chain_data.blocks_added_last_24_hours}</p>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <br />
                        <p>*All Data on Details Accessed Through Messari API</p>
                    </div>
                    : <h1>Loading...</h1>
            }
        </>
    )
}

export default Details
