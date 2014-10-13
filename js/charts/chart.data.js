 var pieData = [
        {
          value: 85,
          color:"#BCD646",
          highlight: "#BCD646",
          label: "Prepared by Firm"
        },
        {
          value: 15,
          color: "#48ADE2",
          highlight: "#93529F",
          label: "Prepared Elseware"
        }
      
      ];
      var pieData2 = [
        {
          value: 25,
          color:"#48ADE2",
          highlight: "#BCD646",
          label: "Prepared by Firm"
        },
        {
          value: 15,
          color: "#A3CD39",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },
          {
          value: 15,
          color: "#643F98",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },  {
          value: 15,
          color: "#858585",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },

      
      ];
         var pieData3 = [
        {
          value: 45,
          color:"#BDD747",
          highlight: "#BCD646",
          label: "Prepared by Firm"
        },
        {
          value: 9,
          color: "#3A7FC2",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },
          {
          value: 22,
          color: "#643F98",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },  {
          value: 35,
          color: "#A3CD39",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },

      
      ];
         var pieData4 = [
        {
          value: 2,
          color:"#BCD646",
          highlight: "#BCD646",
          label: "Prepared by Firm"
        },
        {
          value: 15,
          color: "#A3CD39",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },
          {
          value: 50,
          color: "#48ADE2",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },  {
          value: 25,
          color: "#93529F",
          highlight: "#93529F",
          label: "Prepared Elseware"
        },

      
      ];


      window.onload = function(){
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx).Pie(pieData, {
              animationEasing : "easeInOutQuart",
              tooltipFontSize: 10,
              percentageInnerCutout : 0,
              animationSteps: 90,
              tooltipFillColor: "RGBA(133, 133, 133, 0.8)",
              responsive : false
      });
      var ctx2 = document.getElementById("chart-area2").getContext("2d");
        window.myPie = new Chart(ctx2).Pie(pieData2, {
              animationEasing : "easeInOutQuart",
              tooltipFontSize: 10,
              percentageInnerCutout : 0,
              animationSteps: 90,
              tooltipFillColor: "RGBA(133, 133, 133, 0.8)",
              responsive : false
      });
     var ctx3 = document.getElementById("chart-area3").getContext("2d");
        window.myPie = new Chart(ctx3).Pie(pieData3, {
              animationEasing : "easeInOutQuart",
              tooltipFontSize: 10,
              percentageInnerCutout : 0,
              animationSteps: 90,
              tooltipFillColor: "RGBA(133, 133, 133, 0.8)",
              responsive : false
      });
          var ctx4 = document.getElementById("chart-area4").getContext("2d");
        window.myPie = new Chart(ctx4).Pie(pieData4, {
              animationEasing : "easeInOutQuart",
              tooltipFontSize: 10,
              percentageInnerCutout : 0,
              animationSteps: 90,
              tooltipFillColor: "RGBA(133, 133, 133, 0.8)",
              responsive : false
      });
  };
