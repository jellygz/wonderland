import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red","Blue","Yellow","Green","Purple","Orange"],
            datasets: [
                {
                   label: '# of votes',
                   data: [12, 19, 3, 5, 2, 3],
                   borderColor: [
                    'rgba(83, 142, 212, 1)',
                    'rgba(53, 162, 235,1)',
                    'rgba(153, 12, 45, 1',
                    'rgba(33, 12, 115, 1)',
                    'rgba(169, 225, 15, 1)',
                    'rgba(98, 1, 45, 1)'
                ],
                   backgroundColor: [
                    'rgba(83, 142, 212, 0.4)',
                    'rgba(53, 162, 235, 0.4)',
                    'rgba(153, 12, 45, 0.4)',
                    'rgba(33, 12, 115, 0.4)',
                    'rgba(169, 225, 15, 0.4)',
                    'rgba(98, 1, 45, 0.4)'
                ],
                borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })    
    }, [setChartData, setChartOptions])

    return(
        <>
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </>
    )
}