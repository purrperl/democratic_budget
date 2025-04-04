let legendData: { label: string, percentage: number }[] = [];

export function setupLegend(data: { label: string, percentage: number }[]) {
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
        input.addEventListener('change', (e: Event) => {
            const target = e.target as HTMLInputElement;
            const index = parseInt(target.dataset.index || '0');
            const value = parseFloat(target.value);
            legendData[index].percentage = value;
        });
    });
}

export function getLegendData() {
    return legendData;
}

export function updateLegend(data: { label: string, percentage: number }[]) {
    // Update legend with new data
}
