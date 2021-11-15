import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';

type Props = {
    countTerm: any
}


function Chart({ countTerm }: Props) {

    if (countTerm !== null) {
        const data = {
            labels: Object.keys(countTerm),
            datasets: [{
                label: 'Number of Terms',
                data: Object.values(countTerm),
                backgroundColor: [
                    'rgba(255, 205, 86, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 205, 86)',
                ],
                borderWidth: 1
            }]

        }

        return (
            <div>
                <Bar
                    data={data}

                />
            </div>
        )
    } else {
        return (<div></div>)
    }

}

export default Chart
