import { setupPieChart, updatePieChart, drillDownPieChart } from './pieChart';
import { setupLegend, updateLegend } from './legend';

window.setup = function() {
    setupPieChart();
    setupLegend();
};

window.draw = function() {
    // Update functions can be called here if needed
};