const BAChartDataValue = [4, 3, 1, 7];

// Chart Names
const BAChartDataLabel = [
  "არასწორი პასუხი",
  "სწორი პასუხი",
  "მინიშნებით გაცემული",
  "პასუხგაუცემელი",
];

/* Chart Colors */
const BAChartJobErrColors = [
  "rgb(255, 107, 107)",
  "rgb(107, 203, 119)",
  "rgb(254, 209, 66)",
  "rgb(178, 178, 178)",
];

let BAChartCountTotal = 0;
if (BAChartDataValue.length > 0) {
  BAChartCountTotal = BAChartDataValue.reduce(function (
    acc,
    currentVal,
    currentIdx,
    arr
  ) {
    return acc + currentVal;
  },
  0);
}

window.addEventListener("load", function () {
  let BAChartCtx = document
    .getElementById("BA-chart-job-error")
    .getContext("2d");
  let BAChartJobErr = new Chart(BAChartCtx, {
    type: "doughnut",
    data: {
      labels: BAChartDataLabel,
      datasets: [
        {
          data: BAChartDataValue,
          backgroundColor: BAChartJobErrColors,
          borderColor: "#fff",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: "top",
        fontSize: 22,
        fontColor: "#000",
        fontStyle: "bold",
        text: "სწორი / არასწორი პასუხები",
      },
      plugins: {
        labels: [
          {
            render: "percentage",
            fontColor: "#fff",
          },
        ],
        // doughnutlabel: {
        //   labels: [
        //     {
        //       text: "Total: " + BAChartCountTotal,
        //     },
        //   ],
        // },
      },
      legend: {
        display: false,
      },
    },
  });
});
