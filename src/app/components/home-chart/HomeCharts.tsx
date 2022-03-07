import React from "react";
import './HomeCharts.scss';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

export function CircularChart() {
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
                }},
                layout:{
                    padding: 10
                },
                responsive:true
            }} />
        </div>
    );
}


export function BarChart() {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [10, 8.72, 2.31],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 1,
            hoverBorderJoinStyle: 'bar',
            hoverOffset: 4,
        }],
        
    };
    return (
        <div className="bar-container">
            <Chart type="bar" data={data} options={{
                plugins:{legend:{
                    display: false
                }},
                scales:{
                    x: {
                        grid: {
                          display: false
                        }
                      },
                      y: {
                        grid: {
                          display: false
                        }
                      }
                },
                indexAxis:'y',
                layout:{
                    padding: 10
                },
                responsive:true
            }} />
        </div>
    );
}