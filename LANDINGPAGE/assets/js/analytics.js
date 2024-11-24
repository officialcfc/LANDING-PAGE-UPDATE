
// document.addEventListener('DOMContentLoaded', () => {
//     // Data for charts
// const labels = [
//     'Coastal Shipping', 'City Construction', 'TechAdvantage Software',
//     'Urban Apparel', 'Global Exports Co.', 'Green Gardens',
//     'Innovative Tech', 'Solar Solutions'
// ];
// const dataValues = [14000, 12000, 10000, 8000, 6000, 4000, 2000, 1000];

// // Bar Chart
// const barCtx = document.getElementById('barChart').getContext('2d');
// const barChart = new Chart(barCtx, {
//     type: 'bar',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: 'Amount (in home currency)',
//             data: dataValues,
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: { display: false },
//             title: {
//                 display: true,
//                 text: 'Bar Chart: Unpaid Invoices Amount'
//             }
//         },
//         scales: {
//             x: { beginAtZero: true },
//             y: { beginAtZero: true }
//         }
//     }
// });


// // Pie Chart
// const pieCtx = document.getElementById('pieChart').getContext('2d');
// const pieChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: labels,
//         datasets: [{
//             data: dataValues,
//             backgroundColor: [
//                 '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', 
//                 '#9467bd', '#8c564b', '#e377c2', '#7f7f7f'
//             ]
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: { position: 'right' },
//             title: {
//                 display: true,
//                 text: 'Pie Chart: Percentage of Unpaid Invoices'
//             }
//         }
//     }
// });

// // Function to download charts as images
// function downloadCharts() {
//     const barURL = barChart.toBase64Image();
//     const pieURL = pieChart.toBase64Image();

//     const link = document.createElement('a');
//     link.href = barURL;
//     link.download = 'BarChart.png';
//     link.click();

//     link.href = pieURL;
//     link.download = 'PieChart.png';
//     link.click();
// }
// });



// document.addEventListener('DOMContentLoaded', () => {
//   // Bar Chart
// const barCanvas = document.getElementById('barChart');
// // Set the height for the bar chart canvas dynamically
// barCanvas.height = 600; // Set the height to 600px

// const barCtx = barCanvas.getContext('2d');
// const barChart = new Chart(barCtx, {
//     type: 'bar',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: 'Amount (in home currency)',
//             data: unpaidValues,
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: { display: false },
//             title: {
//                 display: true,
//                 text: 'Bar Chart: Unpaid Invoices Amount'
//             }
//         },
//         scales: {
//             x: { beginAtZero: true },
//             y: { beginAtZero: true }
//         }
//     }
// });


//     // Pie Chart (Percentage of Paid Invoices)
//     const pieCtx = document.getElementById('pieChart').getContext('2d');
//     const pieChart = new Chart(pieCtx, {
//         type: 'pie',
//         data: {
//             labels: labels,
//             datasets: [{
//                 data: paidValues,
//                 backgroundColor: [
//                     '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', 
//                     '#9467bd', '#8c564b', '#e377c2', '#7f7f7f'
//                 ]
//             }]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: { position: 'right' },
//                 title: {
//                     display: true,
//                     text: 'Pie Chart: Percentage of Paid Invoices'
//                 }
//             }
//         }
//     });

//     // Function to download charts as images
//     function downloadCharts() {
//         const barURL = barChart.toBase64Image();
//         const pieURL = pieChart.toBase64Image();

//         const link = document.createElement('a');
//         link.href = barURL;
//         link.download = 'BarChart.png';
//         link.click();

//         link.href = pieURL;
//         link.download = 'PieChart.png';
//         link.click();
//     }
// });




document.addEventListener('DOMContentLoaded', () => {
    // Data for charts
    const labels = [
        'Coastal Shipping', 'City Construction', 'TechAdvantage Software',
        'Urban Apparel', 'Global Exports Co.', 'Green Gardens',
        'Innovative Tech', 'Solar Solutions'
    ];

    const unpaidValues = [14000, 12000, 10000, 8000, 6000, 4000, 2000, 1000]; // Unpaid invoices
    const paidValues = [6000, 8000, 9000, 2000, 4000, 6000, 8000, 9000]; // Paid invoices

    // Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Amount (in home currency)',
                data: unpaidValues,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Bar Chart: Unpaid Invoices Amount'
                }
            },
            scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true }
            }
        }
    });

    // Pie Chart (Percentage of Paid Invoices)
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: paidValues,
                backgroundColor: [
                    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', 
                    '#9467bd', '#8c564b', '#e377c2', '#7f7f7f'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'right' },
                title: {
                    display: true,
                    text: 'Pie Chart: Percentage of Paid Invoices'
                }
            }
        }
    });
});
