const canvasChart = document.getElementById('chart')

const labels = ['Availability','Performance','Quality']
let val = [0,0,0]

const myChart =  new Chart(canvasChart, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes', 
            data: val,
            borderWIdth: 1
        }]
    },
    opstions:{
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    includeBounds: true,
                }
            }
        }
    }
})


export {
    myChart,
    val
}