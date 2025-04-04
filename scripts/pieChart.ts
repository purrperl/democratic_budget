import p5 from 'p5';

let pieChartData: { label: string, percentage: number }[] = [];

export function setupPieChart(data: { label: string, percentage: number }[]) {
    pieChartData = data;
    new p5((p: p5) => {
        p.setup = function() {
            const canvas = p.createCanvas(600, 400);
            canvas.parent('pie-chart-container');
            drawPieChart(p);
        };
    });
}

function drawPieChart(p: p5) {
    let lastAngle = 0;
    pieChartData.forEach((sector) => {
        let angle = p.radians((sector.percentage / 100) * 360);
        p.fill(p.random(255), p.random(255), p.random(255));
        p.arc(300, 200, 300, 300, lastAngle, lastAngle + angle, p.PIE);
        lastAngle += angle;
    });
}

export function updatePieChart(data: { label: string, percentage: number }[]) {
    pieChartData = data;
    new p5((p: p5) => {
        p.clear();
        drawPieChart(p);
    });
}

export function drillDownPieChart(department: string) {
    // Drill down into a specific department
}
