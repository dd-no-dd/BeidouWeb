
//echarts
var myChart = echarts.init(document.getElementById("echarts-box"));
var option = {
    title: {
        text: "点赞图例",
    },
    tooltip: {},
    legend: {
        data: ["点赞数"],
    },
    xAxis: {
        data: ["巡天", "重明", "帝江", "青鸾"],
    },
    yAxis: {},
    series: [
        {
            name: "点赞数",
            type: "bar",
            data: [1150, 1350, 1650, 1750],
        },
    ],
};

//judge the selection
myChart.setOption(option);
$(".aixin").click(function () {
    var $this = $(this);
    var $hasActive = $this.hasClass("active");
    var $num = $this.siblings().find(".num");
    var $index = $this.parents(".item").data("index");
    if ($hasActive) {
        $this.removeClass("active");
        var newNum = parseInt($num.text()) - 1;
        $num.text(newNum);
        option.series[0].data[$index] = option.series[0].data[$index] - 1;
    } else {
        $this.addClass("active");
        var newNum = parseInt($num.text()) + 1;
        $num.text(newNum);
        option.series[0].data[$index] + 1;
        option.series[0].data[$index] = option.series[0].data[$index] + 1;
    }
    myChart.setOption(option);
});

//头部导航移动端按钮点击事件
$(".nav-btn").click(function () {
  if ($(this).hasClass("closed")) {
    $(".nav-list").stop().slideDown()
    $(this).removeClass("closed")
  } else {
    $(".nav-list").stop().slideUp()
    $(this).addClass("closed")
  }
})