function filterValues (result) {
    return _.filter(result.values, function (value) {
        return value.timestamp <= moment().unix();
    });
}

function getLabels (result) {
    return getLast(_.map(result.values, function (value) {
        return moment(value.timestamp * 1000).format('LT');
    }));
}

function getValues (result) {
    return getLast(_.map(result.values, function (value) {
        return value.value;
    }));
}

function getLast(values, total = 15) {
    return _.last(values, total);
}

Template.adminServerChart.onRendered(function () {
    Meteor.call('adminServerChart', this.data.server._id, function (error, results) {
        if (error) {
            Alert.open(error);
            return false;
        }

        // Chart
        var context = $('#chart').get(0).getContext('2d');
        var chart = new Chart(context);

        // Filter values
        _.each(results, function (result, type) {
            results[type].values = filterValues(result);
        });

        // Data
        var data = {
            labels: getLabels(results.cpu),
            datasets: [
                {
                    label: 'CPU',
                    unit: results.cpu.unit,
                    fillColor: 'rgba(210, 214, 222, 1)',
                    strokeColor: 'rgba(210, 214, 222, 1)',
                    pointColor: 'rgba(210, 214, 222, 1)',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: getValues(results.cpu)
                },
                {
                    label: 'Memory',
                    unit: results.mem.unit,
                    fillColor: 'rgba(60,141,188,0.9)',
                    strokeColor: 'rgba(60,141,188,0.8)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data: getValues(results.mem)
                }
            ]
        };

        // Options
        var options = {
            showScale: true,
            scaleShowGridLines: true,
            scaleGridLineColor: 'rgba(0,0,0,.5)',
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: false,
            scaleShowVerticalLines: false,
            bezierCurve: true,
            bezierCurveTension: 0.3,
            pointDot: true,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: false,
            maintainAspectRatio: true,
            responsive: true,
            multiTooltipTemplate: '<%=datasetLabel%>: <%=value%> <%=window.Units[datasetLabel.toLowerCase()]%>'
        };

        // Units
        window.Units = {
            cpu: results.cpu.unit,
            memory: results.mem.unit
        };

        // Generate
        chart.Line(data, options);
    });
});
