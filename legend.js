let legendData = [];

export function setupLegend(data) {
    legendData = data;
    const legendContainer = document.getElementById('legend-container');
    if (legendContainer) {
        legendContainer.innerHTML = '';
        data.forEach((item) => {
            const legendItem = document.createElement('div');
            legendItem.textContent = `${item.label}: ${item.percentage}%`;
            legendContainer.appendChild(legendItem);
        });
    }
}

export function updateLegend(data) {
    setupLegend(data);
}

export function getLegendData() {
    return legendData;
}
