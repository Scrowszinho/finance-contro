import React, { useState } from "react";
import './Home.scss';
import { GiTwoCoins, FaChartLine, FaPen, BsPlusLg, FaWallet, BsXLg } from 'react-icons/all';
import { CircularChart, BarChart } from "../../components/home-chart/HomeCharts";
import HomeGrid from "../../components/home-grid/HomeGrid";
import Modal from 'react-modal';
import HomeForm from "../../components/home-form/HomeForm";

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
    ]);
    const [openModal, setOpenModal] = useState(false);
    function closeModal() {
        setOpenModal(false);
    }

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
                            <BsPlusLg onClick={() => setOpenModal(!openModal)} />
                        </h4>

                    </span>
                    <HomeGrid data={data} />
                    <Modal
                        isOpen={openModal}
                        onAfterClose={() => setOpenModal(false)}
                        ariaHideApp={false}
                        onRequestClose={closeModal}
                        className='modal'
                        >
                        <div className="modal-row">
                            <h4>
                                <FaPen className="mr-1" />
                                Editar
                            </h4>
                            <BsXLg onClick={closeModal} />
                        </div>
                        <HomeForm />
                    </Modal>
                </article>
            </div>
        </div>
    );
}