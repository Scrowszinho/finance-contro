import React from "react";
import './Home.scss';
import { GiTwoCoins } from 'react-icons/all';
import HomeChart from "../../components/home-chart/HomeChart";

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
                    <HomeChart />
                    <div className="card-content">
                        <span>teste</span>
                        <span>teste</span>
                    </div>
                </article>
                <article className="home-card">
                    <div className="card-content">
                        <span>teste</span>
                        <span>teste</span>
                    </div>
                </article>
            </div>
        </div>
    );
}