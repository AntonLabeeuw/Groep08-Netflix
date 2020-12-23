"use strict";

window.onload = function () {

    let chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark1",
        animationEnabled: true,
        title:{
            text: "Kijkers op Netflix in de afgelopen weken"   
        },
        axisX: {
            interval: 1,
            intervalType: "day",
            valueFormatString: "DD/MM"
        },
        axisY:{
            title: "Aantal kijkers (in miljoenen)",
            includeZero: true,
            valueFormatString: "#0",
        },
        data: [{        
            type: "line",
            markerSize: 12,
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "$###.#",
            dataPoints: [        
                { x: new Date(2020, 11, 4), y: 101, indexLabel: "gain", markerType: "triangle",  markerColor: "#55bc7d" },
                { x: new Date(2020, 11, 5), y: 115, indexLabel: "gain", markerType: "triangle",  markerColor: "#55bc7d" },
                { x: new Date(2020, 11, 6) , y: 107, indexLabel: "loss", markerType: "cross", markerColor: "#e50914" },
                { x: new Date(2020, 11, 7) , y: 109, indexLabel: "gain", markerType: "cross", markerColor: "#e50914" },
                { x: new Date(2020, 11, 8) , y: 119, indexLabel: "gain", markerType: "triangle", markerColor: "#55bc7d" },
                { x: new Date(2020, 11, 9) , y: 135, indexLabel: "gain", markerType: "triangle", markerColor: "#55bc7d" },
                { x: new Date(2020, 11, 10) , y: 103, indexLabel: "loss", markerType: "cross", markerColor: "#e50914" },
                { x: new Date(2020, 11, 11) , y: 113, indexLabel: "gain", markerType: "cross", markerColor: "#e50914" },
                { x: new Date(2020, 11, 12) , y: 107, indexLabel: "loss", markerType: "triangle", markerColor: "#55bc7d" },
                { x: new Date(2020, 11, 13) , y: 122, indexLabel: "gain", markerType: "cross", markerColor: "#e50914" },
                { x: new Date(2020, 11, 14) , y: 123, indexLabel: "gain", markerType: "triangle", markerColor: "#55bc7d" },
                { x: new Date(2020, 11, 15) , y: 119, indexLabel: "loss", markerType: "cross", markerColor: "#e50914" }
            ]
        }]
    });
    chart.render();
    
};