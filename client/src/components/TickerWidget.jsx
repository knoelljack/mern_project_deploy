import React from 'react'
import './TickerWidget.css'

const TickerWidget = () => {
    return (
        <div>
            <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script><div id="coinmarketcap-widget-marquee" coins="1,1027,5426,74" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></div>
        </div>
    )
}

export default TickerWidget
