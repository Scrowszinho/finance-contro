import React, { useState } from "react";
import "./StockTicker.scss";
import axios from 'axios';
import setVariationColor from "../../utils/set-variation-color";

export default function StockTicker() {
    const [data, setData]: any = useState();
    if (!data) {
        axios({
            method: 'GET',
            baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL,BTC-BRL,GBP-BRL,ARS-BRL,CAD-BRL,AUD-BRL,ETH-BRL,DOGE-BRL,LTC-BRL',
        })
            .then(data => data.data)
            .then(data => {
                let rows = [];
                for (var column in data) {
                    rows.push(
                        data[column]
                    )
                }
                setData(rows);
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            {data &&
                <div className="stock-ticker">
                    <ul className="stock-item">
                    {data.map((coin : any, index : any)=>
                    <li key={index}>
                    {coin.code}  R$ {coin.bid}
                    <span className="coin-variation" style={{color: setVariationColor(coin.pctChange)}}> {coin.pctChange}%</span>
                    </li>)    
                    
                    }
                    </ul>
                </div>
            }
        </>
    );
}