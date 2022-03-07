import React, { useState } from "react";
import './Home.scss';
import { GiTwoCoins, FaChartLine, BsPlusLg, FaWallet } from 'react-icons/all';
import { CircularChart, BarChart } from "../../components/home-chart/HomeCharts";
import HomeGrid from "../../components/home-grid/HomeGrid";

export default function Home() {
    const [data, setData] = useState([
        {
            type: 'DEBIT',
            value: 100.0,
            date: new Date().getDate(),
            desc: 'Teste',
        },
        {
            type: 'CREDIT',
            value: 100.0,
            date: new Date().getDate(),
            desc: 'Teste',
        }
    ])
    return (
        <div className="home-container">
            <div className="home-content">
                <article className="home-card">
                    <span className="card-header">
                        <h4>
                            <GiTwoCoins className="mr-1" />
                            Patrimônio
                        </h4>
                        <h5>R$ 1.800,00</h5>
                    </span>
                    <CircularChart />
                    <div className="card-content">
                        <span className="mark-sign">Custo</span>
                        <span>
                            <span className="small-sign">R$</span>
                            <span>1.840,90</span>

                        </span>
                        <span className="mark-sign">Retorno</span>
                        <span>
                            <span className="small-sign">R$</span>
                            <span>30,00 (+10%)</span>
                        </span>
                    </div>
                    <div className="performance-area">
                        <span>
                            <FaChartLine /> Meu Desempenho
                        </span>
                        <BarChart />
                    </div>
                </article>
                <article className="home-card">
                    <span className="card-header">
                        <h4>
                            <FaWallet className="mr-1" />
                            Patrimônio
                        </h4>
                        <h4>
                            <BsPlusLg />
                        </h4>
                    </span>
                        <HomeGrid data={data} />
                </article>
            </div>
        </div>
    );
}