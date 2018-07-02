
var data = getData();
var Pie = echarts.init(document.getElementById('Pie'));

var option_p = {
    title : {
        text: data.count,
        subtext: 'Total Test',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.seriesData,
        selected: data.selected
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
Pie.setOption(option_p);

function getData() {
    var nameList = ['Success', 'Failures', 'Ignored'];
    var count = 0;
    var fail = 0;
    var rate = [];
    tests.forEach(function(item){
        count += parseInt(item.count);
        fail += parseInt(item.failures)
    });
    rate = fail/count;
    var seriesData = [
        {name: 'Success', value: 1 - rate, itemStyle: { color: '#06bb57'}},
        {name: 'Failures', value: rate, itemStyle: { color: '#f33029'}},
        {name: 'Ignored', value: 0, itemStyle: { color: '#f8a547'}}
        ];
    var selected = {};
    for (var i = 0; i < 3; i++) {
        name = nameList[i],
        selected[name] = i < 6;
    }
    return {
        count: count,
        seriesData: seriesData,
        selected: selected
    };
}

//表示测试时间的柱状图
var Bar = echarts.init(document.getElementById('Bar'));
var x_Bar = echarts.init(document.getElementById('x_Bar'));

var option_b = {
    title: {
        text: 'Duration',
        subtext: 'tests'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['time']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data:  getTime().name
    },
    series: [
        {
            name: 'time',
            type: 'bar',
            data: getTime().time
        }
    ]
};
var option_c = {
    title: {
        text: 'Duration',
        subtext: 'tests'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['time']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data:  getTime2().name,
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: 'time',
            type: 'bar',
            data: getTime2().time
        }
    ]
};

function getTime(){
    var name = [];
    var time = [];
    var total_time = 0;
    tests.forEach(function(item){
        total_time += parseFloat(item.total_time);
        item.testcase.forEach(function(testcase){
            time.push({value: testcase.time, itemStyle: {color: '#06bb57'}});
            name.push(testcase.name);
        });
    });
    
    name.push('total');
    time.push(total_time)

    return {
        name: name,
        time: time,
    };
}
function getTime2(){
    var name = [];
    var time = [];
    var total_time = 0;
    tests.forEach(function(item){
        total_time += parseFloat(item.total_time);
        item.testcase.forEach(function(testcase){
            time.push({value: testcase.time, itemStyle: {color: '#06bb57'}});
            name.push(testcase.name);
        });
    });

    return {
        name: name,
        time: time,
    };
}
Bar.setOption(option_b);
x_Bar.setOption(option_c);