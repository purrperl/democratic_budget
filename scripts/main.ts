import { setupPieChart, updatePieChart, drillDownPieChart } from './pieChart';
import { setupLegend, updateLegend, getLegendData } from './legend';

window.setup = function() {
    const initialData = [
        { label: 'Housing', percentage: 20 },
        { label: 'Healthcare', percentage: 15 },
        { label: 'Education', percentage: 25 },
        { label: 'Technology', percentage: 10 },
        { label: 'Public Works', percentage: 30 }
    ];

    setupPieChart(initialData);
    setupLegend(initialData);

    document.getElementById('save-button')?.addEventListener('click', () => {
        const legendData = getLegendData();
        updatePieChart(legendData);
        alert('Budget saved successfully!');
    });
};