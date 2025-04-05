let legendData = [];

export function setupLegend(data) {
    legendData = data;
    const legendContainer = document.getElementById('legend-container');
    if (legendContainer) {
        legendData.forEach((item, index) => {
            const legendItem = document.createElement('div');
            legendItem.classList.add('legend-item');
            legendItem.innerHTML = `
                <span>${item.label}: </span>
                <input type="number" value="${item.percentage}" data-index="${index}">%
            `;
            legendContainer.appendChild(legendItem);
        });
    }

    const inputs = document.querySelectorAll('#legend-container input');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const target = e.target;
            const index = parseInt(target.dataset.index || '0');
            const value = parseFloat(target.value);
            legendData[index].percentage = value;
        });
    });
}

export function getLegendData() {
    return legendData;
}

export function updateLegend(data) {
    // Update legend with new data
}
