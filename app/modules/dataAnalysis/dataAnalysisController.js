define([
  'jquery',
  'chart'
], function (
  $
  ) {
    return {
      init: function () {
        this.initChart();
      },
      initChart: function () { 
        var chartEl = $("#chart")[0];
        if(!chartEl.getContext) { 
          // manually init canvas shim on ie7/ie8
          G_vmlCanvasManager.initElement(chartEl);  
        }            
        var ctx = chartEl.getContext("2d");
        var data = {
          labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
          datasets: [
            {
              label: "Male",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: [106898, 103937, 99492, 87213, 101943, 118848, 103120]
            },
            {
              label: "Female",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [97516, 94796, 91818, 79673, 94684, 110633, 95993]
            }
          ]
        };
        new Chart(ctx).Line(data, {
          bezierCurve: false
        });
      }
    };
  });