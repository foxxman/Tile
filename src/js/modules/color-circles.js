const activateCirclesBlock = (circlesBlock, indexBig) => {
  const config = {
    wordRotateDegs: {
      2: "",
      3: [-45, 45, -135],
      4: [-45, 45, -135, 135],
    },
  };

  //   находим все ссылки на цвета(последний не берем, это центр)
  const colorRefs = [];
  circlesBlock.querySelectorAll(".wrap a").forEach((el, index, arr) => {
    if (index < arr.length - 1) colorRefs.push(el);
  });

  colorRefs.forEach((element, index, arr) => {
    // обертка для слова
    element.innerHTML = `<span id="arc-${index}-${indexBig}">${element.textContent}</span>`;

    new CircleType(document.getElementById(`arc-${index}-${indexBig}`)).radius(
      60
    );

    // console.log(arr.length);
    // skew(-13deg)
    document.getElementById(
      `arc-${index}-${indexBig}`
    ).style.transform = `rotate(${
      config.wordRotateDegs[arr.length][index]
    }deg) `;
  });
};

const configCirclesBlock = (circlesBlock) => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Color", "area of circle"],
      ["Красный", 1],
      ["Белый", 1],
      ["Черный", 1],
    ]);

    var options = {
      legend: "none",
      width: 128,
      height: 128,
      pieHole: 0.4,
      colors: ["#ff0000", "#ffffff", "#000000"],
    };

    var chart = new google.visualization.PieChart(circlesBlock);
    chart.draw(data, options);
  }
};

const initCharts = () => {
  const config = {
    type: "line",
    data: {},
    options: {},
    plugins: [],
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
};

export const activate = () => {
  const circlesBlocks = document.querySelectorAll(".color-circle");
  initCharts();
  circlesBlocks.forEach((circlesBlock) => {
    // configCirclesBlock(circlesBlock);
  });
};
