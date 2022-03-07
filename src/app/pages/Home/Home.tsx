import React from "react";
import './Home.scss';
import { GiTwoCoins, FaChartLine } from 'react-icons/all';
import {CircularChart, BarChart} from "../../components/home-chart/HomeChart";

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <article className="home-card">
                    <span className="total-money">
                        <h4>
                            <GiTwoCoins />
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
                    <div className="card-content">

                    </div>
                </article>
            </div>
        </div>
    );
}