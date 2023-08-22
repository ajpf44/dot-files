const canvasChart = document.getElementById('chart')

const labels = ['Availability','Performance','Quality']
let valores = [0,0,0]

const c =  new Chart(canvasChart, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes', 
            data: valores,
            borderWIdth: 1
        }]
    },
    opstions:{
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})