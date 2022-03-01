import React from "react";
import './HomeChart.scss';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

export default function HomeChart() {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 1,
            hoverBorderJoinStyle: 'round',
            hoverOffset: 4,
        }],
        
    };
    return (
        <div className="chart-container">
            <Chart type="doughnut" data={data} options={{
                plugins:{legend:{
                    display: false
                }}
            }} />
        </div>
    );
}