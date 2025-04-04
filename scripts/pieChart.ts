import p5 from 'p5';

let pieChartData = [
    { label: 'Housing', percentage: 20 },
    { label: 'Healthcare', percentage: 15 },
    { label: 'Education', percentage: 25 },
    { label: 'Technology', percentage: 10 },
    { label: 'Public Works', percentage: 30 }
];

export function setupPieChart() {
    new p5((p: p5) => {
        p.setup = function() {
            const canvas = p.createCanvas(600, 400);
            canvas.parent('pie-chart-container');
            drawPieChart(p, pieChartData);
        };
    });
}

function drawPieChart(p: p5, data: { label: string, percentage: number }[]) {
    let lastAngle = 0;
    data.forEach((sector) => {
        let angle = p.radians((sector.percentage / 100) * 360);
        p.fill(p.random(255), p.random(255), p.random(255));
        p.arc(300, 200, 300, 300, lastAngle, lastAngle + angle, p.PIE);
        lastAngle += angle;
    });
}

export function updatePieChart(data: { label: string, percentage: number }[]) {
    // Update pie chart with new data
}

export function drillDownPieChart(department: string) {
    // Drill down into a specific department
}