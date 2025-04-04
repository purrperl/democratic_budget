let legendData = [
    { label: 'Housing', percentage: 20 },
    { label: 'Healthcare', percentage: 15 },
    { label: 'Education', percentage: 25 },
    { label: 'Technology', percentage: 10 },
    { label: 'Public Works', percentage: 30 }
];

export function setupLegend() {
    const legendContainer = document.getElementById('legend-container');
    if (legendContainer) {
        legendData.forEach((item) => {
            const legendItem = document.createElement('div');
            legendItem.textContent = `${item.label}: ${item.percentage}%`;
            legendContainer.appendChild(legendItem);
        });
    }
}

export function updateLegend(data: { label: string, percentage: number }[]) {
    // Update legend with new data
}