import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {

    basicData: any;

    basicOptions: any;

    data1: any;

    options1: any;

    data2: any;

    options2: any;
    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


        this.basicData = {
            labels: ['Coca-cola', 'Squirt', 'Vitamina C', 'Colageno', 'Agua Dasani', 'Kiss'],
            datasets: [
                {
                    label: 'Productos Totales',
                    data: [540, 325, 702, 620, 700, 896],
                    backgroundColor: ['#a855f7'],
                    borderColor: ['#ffffff'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };


        this.data1 = {
            labels: ['Producto2', 'Producto2', 'Producto2'],
            datasets: [
                {
                    data: [540, 325, 702],
                    borderWidth: 1.5,
                    backgroundColor: ['#f97316','#a855f7','#ff3d32'],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--purple-300'), documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--indigo-300')]
                }
            ]
        };

        this.options1 = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
        this.data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Provincia',
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--purple-500'),
                    backgroundColor: documentStyle.getPropertyValue('--purple-500'),

                    yAxisID: 'y',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.options2 = {
            stacked: false,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },


            }
        };

    }
}
