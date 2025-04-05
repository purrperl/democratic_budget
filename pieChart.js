import p5 from 'p5';

let pieChartData = [];

export function setupPieChart(data) {
    pieChartData = data;
    new p5((p) => {
        p.setup = function() {
            const canvas = p.createCanvas(600, 400);
            canvas.parent('pie-chart-container');
            drawPieChart(p);
        };
    });
}

function drawPieChart(p) {
    let lastAngle = 0;
    pieChartData.forEach((sector) => {
        let angle = p.radians((sector.percentage / 100) * 360);
        p.fill(p.random(255), p.random(255), p.random(255));
        p.arc(300, 200, 300, 300, lastAngle, lastAngle + angle, p.PIE);
        lastAngle += angle;
    });
}

export function updatePieChart(data) {
    pieChartData = data;
    new p5((p) => {
        p.clear();
        drawPieChart(p);
    });
}

export function drillDownPieChart(department) {
    // Drill down into a specific department
}
