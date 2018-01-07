var liquidFill = function(){
    var liquidFill = echarts.init(document.getElementById('liquidFill'));
    liquidFillOption = {
        series: [{
            type: 'liquidFill',
            shape:'roundRect',
            data: [{
                value: 0.2,
                itemStyle: {
                    normal: {
                        color: '#f57230'
                    }
                }
            }, 0.1],
            radius: '90%',
            backgroundStyle:{
                color:'transparent'
            },
            outline:{
                borderDistance: 5,
                itemStyle: {
                    color:'#000000',
                    borderWidth: 6,
                    borderColor: '#156ACF'
                }
            },
            label:{
                normal:{
                    formatter:'13%',
                    fontSize: 10
                }

            }
        }]
    };
    liquidFill.clear();
    liquidFill.setOption(liquidFillOption);
}

var fenqu = function () {
    var fenqu = echarts.init(document.getElementById('fenqu'));
    fenquOption = {
        baseOption: {
            timeline: {
                show: false,
                autoPlay: true,
                playInterval: 2000,
                itemStyle: {
                    normal: {
                        color: '#04a5f1'
                    },
                    emphasis: {
                        color: '#04a5f1'
                    }
                },
                lineStyle: {
                    color: '#ddd'
                },
                checkpointStyle: {
                    color: '#04a5f1',
                    borderColor: 'rgba(4, 165, 261, .5)'
                },
                data: ['2017/01', '2017/02', '2017/03', '2017/04', '2017/05', '2017/06','2017/07','2017/08']
            },
            series: [{
                name: '',
                type: 'pie',
                radius: ['50%','68%'],
                center: ['50%', '50%'],
                clockwise: false,
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                            fontSize: '12',
                            fontWeight: 'normal',
                        },
                        // position: 'center',
                        formatter:  '{b}：{d}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                    },
                    emphasis: {
                        borderWidth: 0,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }],
            color: [
                '#00acee',
                '#52cdd5',
                '#79d9f1',
                '#a7e7ff',
                '#c8efff'
            ]
        },
        options: [{ // 这是'2017/01' 对应的 option

            series: [{
                data:[
                    {value:4, name:'AFH/Import',selected:true,itemStyle: {normal: {color: '#2078d1'}}},
                    {value:13, name:'EC',itemStyle: {normal: {color: '#7c3ba8'}}},
                    {value:26, name:'KA',itemStyle: {normal: {color: '#1cddd9'}}},
                    {value:20, name:'Great East',itemStyle: {normal: {color: '#ff00f3'}}},
                    {value:19, name:'Great North',itemStyle: {normal: {color: '#fb0065'}}},
                    {value:12, name:'Great West',itemStyle: {normal: {color: '#1f6086'}}},
                    {value:16, name:'Great South',itemStyle: {normal: {color: '#ff941b'}}},
                    {value:16, name:'eB2B',itemStyle: {normal: {color: '#72c3f3'}}},
                ]
            }],

        }, { // 这是'2017/01' 对应的 option
            series: [{
                data:[
                    {value:4, name:'AFH/Import',itemStyle: {normal: {color: '#2078d1'}}},
                    {value:13, name:'EC',selected:true,itemStyle: {normal: {color: '#7c3ba8'}}},
                    {value:26, name:'KA',itemStyle: {normal: {color: '#1cddd9'}}},
                    {value:20, name:'Great East',itemStyle: {normal: {color: '#ff00f3'}}},
                    {value:19, name:'Great North',itemStyle: {normal: {color: '#fb0065'}}},
                    {value:12, name:'Great West',itemStyle: {normal: {color: '#1f6086'}}},
                    {value:16, name:'Great South',itemStyle: {normal: {color: '#ff941b'}}},
                    {value:16, name:'eB2B',itemStyle: {normal: {color: '#72c3f3'}}},
                ]
            }]
        }, { // 这是'2017/01' 对应的 option
            series: [{
                data:[
                    {value:4, name:'AFH/Import',itemStyle: {normal: {color: '#2078d1'}}},
                    {value:13, name:'EC',itemStyle: {normal: {color: '#7c3ba8'}}},
                    {value:26, name:'KA',selected:true,itemStyle: {normal: {color: '#1cddd9'}}},
                    {value:20, name:'Great East',itemStyle: {normal: {color: '#ff00f3'}}},
                    {value:19, name:'Great North',itemStyle: {normal: {color: '#fb0065'}}},
                    {value:12, name:'Great West',itemStyle: {normal: {color: '#1f6086'}}},
                    {value:16, name:'Great South',itemStyle: {normal: {color: '#ff941b'}}},
                    {value:16, name:'eB2B',itemStyle: {normal: {color: '#72c3f3'}}},
                ]
            }]
        }, { // 这是'2017/01' 对应的 option

            series: [{
                data:[
                    {value:4, name:'AFH/Import',itemStyle: {normal: {color: '#2078d1'}}},
                    {value:13, name:'EC',itemStyle: {normal: {color: '#7c3ba8'}}},
                    {value:26, name:'KA',itemStyle: {normal: {color: '#1cddd9'}}},
                    {value:20, name:'Great East',selected:true,itemStyle: {normal: {color: '#ff00f3'}}},
                    {value:19, name:'Great North',itemStyle: {normal: {color: '#fb0065'}}},
                    {value:12, name:'Great West',itemStyle: {normal: {color: '#1f6086'}}},
                    {value:16, name:'Great South',itemStyle: {normal: {color: '#ff941b'}}},
                    {value:16, name:'eB2B',itemStyle: {normal: {color: '#72c3f3'}}},
                ]
            }]
        }, { // 这是'2017/01' 对应的 option
            series: [{
                data:[
                    {value:4, name:'AFH/Import',itemStyle: {normal: {color: '#2078d1'}}},
                    {value:13, name:'EC',itemStyle: {normal: {color: '#7c3ba8'}}},
                    {value:26, name:'KA',itemStyle: {normal: {color: '#1cddd9'}}},
                    {value:20, name:'Great East',itemStyle: {normal: {color: '#ff00f3'}}},
                    {value:19, name:'Great North',selected:true,itemStyle: {normal: {color: '#fb0065'}}},
                    {value:12, name:'Great West',itemStyle: {normal: {color: '#1f6086'}}},
                    {value:16, name:'Great South',itemStyle: {normal: {color: '#ff941b'}}},
                    {value:16, name:'eB2B',itemStyle: {normal: {color: '#72c3f3'}}},
                ]
            }]
        }, { // 这是'2017/01' 对应的 option
            series: [{
                data:[
                    {value:4, name:'AFH/Import',itemStyle: {normal: {color: '#2078d1'}}},
                    {value:13, name:'EC',itemStyle: {normal: {color: '#7c3ba8'}}},
                    {value:26, name:'KA',itemStyle: {normal: {color: '#1cddd9'}}},
                    {value:20, name:'Great East',itemStyle: {normal: {color: '#ff00f3'}}},
                    {value:19, name:'Great North',itemStyle: {normal: {color: '#fb0065'}}},
                    {value:12, name:'Great West',selected:true,itemStyle: {normal: {color: '#1f6086'}}},
                    {value:16, name:'Great South',itemStyle: {normal: {color: '#ff941b'}}},
                    {value:16, name:'eB2B',itemStyle: {normal: {color: '#72c3f3'}}},
                ]
            }]
        },
            { // 这是'2017/01' 对应的 option
                series: [{
                    data:[
                        {value:4, name:'AFH/Import',itemStyle: {normal: {color: '#2078d1'}}},
                        {value:13, name:'EC',itemStyle: {normal: {color: '#7c3ba8'}}},
                        {value:26, name:'KA',itemStyle: {normal: {color: '#1cddd9'}}},
                        {value:20, name:'Great East',itemStyle: {normal: {color: '#ff00f3'}}},
                        {value:19, name:'Great North',itemStyle: {normal: {color: '#fb0065'}}},
                        {value:12, name:'Great West',itemStyle: {normal: {color: '#1f6086'}}},
                        {value:16, name:'Great South',selected:true,itemStyle: {normal: {color: '#ff941b'}}},
                        {value:16, name:'eB2B',itemStyle: {normal: {color: '#72c3f3'}}},
                    ]
                }]
            },
            { // 这是'2017/01' 对应的 option

                series: [{
                    data:[
                        {value:4, name:'AFH/Import',itemStyle: {normal: {color: '#2078d1'}}},
                        {value:13, name:'EC',itemStyle: {normal: {color: '#7c3ba8'}}},
                        {value:26, name:'KA',itemStyle: {normal: {color: '#1cddd9'}}},
                        {value:20, name:'Great East',itemStyle: {normal: {color: '#ff00f3'}}},
                        {value:19, name:'Great North',itemStyle: {normal: {color: '#fb0065'}}},
                        {value:12, name:'Great West',itemStyle: {normal: {color: '#1f6086'}}},
                        {value:16, name:'Great South',itemStyle: {normal: {color: '#ff941b'}}},
                        {value:16, name:'eB2B',selected:true,itemStyle: {normal: {color: '#72c3f3'}}},
                    ]
                }]
            }],
    };

    fenqu.clear();
    fenqu.setOption(fenquOption);

}

var kapie = function(){
    var kaChart = echarts.init(document.getElementById('kaChart'));
    kaChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 11, name: '', itemStyle: {normal: {color: '#2078d1'}}},
                    {value: 89, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'KA'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
,
        ]
    };

    kaChart.clear();
    kaChart.setOption(kaChartOption);
}

var ecpie = function(){
    var ecChart = echarts.init(document.getElementById('ecChart'));
    ecChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 23, name: '', itemStyle: {normal: {color: '#2078d1'}}},
                    {value: 77, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'EC'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
            ,
        ]
    };

    ecChart.clear();
    ecChart.setOption(ecChartOption);
}
var afhpie = function(){
    var afhChart = echarts.init(document.getElementById('afhChart'));
    afhChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 11, name: '', itemStyle: {normal: {color: '#2078d1'}}},
                    {value: 89, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'AFH etc'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
            ,
        ]
    };

    afhChart.clear();
    afhChart.setOption(afhChartOption);
}
var eastpie = function(){
    var eastChart = echarts.init(document.getElementById('eastChart'));
    eastChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 11, name: '', itemStyle: {normal: {color: '#8a00ec'}}},
                    {value: 78, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'G East'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
            ,
        ]
    };

    eastChart.clear();
    eastChart.setOption(eastChartOption);
}
var westpie = function(){
    var westChart = echarts.init(document.getElementById('westChart'));
    westChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 12, name: '', itemStyle: {normal: {color: '#ff00f3'}}},
                    {value: 88, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'G West'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
            ,
        ]
    };

    westChart.clear();
    westChart.setOption(westChartOption);
}
var northpie = function(){
    var northChart = echarts.init(document.getElementById('northChart'));
    northChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 20, name: '', itemStyle: {normal: {color: '#fb0065'}}},
                    {value: 80, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'G North'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
            ,
        ]
    };

    northChart.clear();
    northChart.setOption(northChartOption);
}
var southpie = function(){
    var southChart = echarts.init(document.getElementById('southChart'));
    southChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 22, name: '', itemStyle: {normal: {color: '#ff941b'}}},
                    {value: 78, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'G South'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
            ,
        ]
    };

    southChart.clear();
    southChart.setOption(southChartOption);
}
var unmatchedpie = function(){
    var unmatchedChart = echarts.init(document.getElementById('unmatchedChart'));
    unmatchedChartOption = {

        series: [
            {
                name: 'ka',
                type: 'pie',
                selectedMode: 'single',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 1,
                        length2: 1
                    }
                },
                data: [
                    {value: 22, name: '', itemStyle: {normal: {color: '#72c3f3'}}},
                    {value: 78, name: '', itemStyle: {normal: {color: '#65f5f3'}}},

                ],
                animation: false
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#ff941b'
                        },
                        formatter: 'eB2B'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:''},

                ],
                animation: false
            }
            ,
        ]
    };

    unmatchedChart.clear();
    unmatchedChart.setOption(unmatchedChartOption);
}

//bottom
var pbChart = function() {
    var pbChart = echarts.init(document.getElementById('pbChart'));
    pbChartOption = {
        title: {
            left: 'center',
            text: 'MTD Act：2',
            textStyle:{
                fontSize:'16',
                color: '#a7a1a1'
            }
        },
        series: [
            {
                name: 'Chocolate',
                type: 'pie',
                radius: ['85%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        formatter:  '24%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 24, name: '', itemStyle: {normal: {color: '#84d9a3'}}},
                    {
                        value: 76,
                        name: '',
                        itemStyle: {normal: {color: 'transparent'}}
                    },

                ],
                animation: false
            },
            {
                name: '',
                type: 'pie',
                radius: ['75%', '85%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 1, name: ''},

                ],
                animation: false
            }
        ]
    };

    pbChart.clear();
    pbChart.setOption(pbChartOption);
}

var CandyChart = function() {
//bottom
    var CandyChart = echarts.init(document.getElementById('CandyChart'));
    CandyChartOption = {
        title: {
            left: 'center',
            text: 'MTD Act：2',
            textStyle:{
                fontSize:'16',
                color: '#a7a1a1'
            }
        },
        series: [
            {
                name: 'Chocolate',
                type: 'pie',
                radius: ['85%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        formatter:  '30%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 32, name: '', itemStyle: {normal: {color: '#f58d8d'}}},
                    {
                        value: 87,
                        name: '',
                        itemStyle: {normal: {color: 'transparent'}}
                    },

                ],
                animation: false
            },
            {
                name: '',
                type: 'pie',
                radius: ['75%', '85%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 1, name: ''},

                ],
                animation: false
            }
        ]
    };

    CandyChart.clear();
    CandyChart.setOption(CandyChartOption);
}

var gumChart = function() {
//bottom
    var gumChart = echarts.init(document.getElementById('gumChart'));
    gumChartOption = {
        title: {
            left: 'center',
            text: 'MTD Act：2',
            textStyle:{
                fontSize:'16',
                color: '#a7a1a1'
            }
        },
        series: [
            {
                name: 'Chocolate',
                type: 'pie',
                radius: ['85%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        formatter:  '15%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 15, name: '', itemStyle: {normal: {color: '#f4d646'}}},
                    {
                        value: 85,
                        name: '',
                        itemStyle: {normal: {color: 'transparent'}}
                    },

                ],
                animation: false
            },
            {
                name: '',
                type: 'pie',
                radius: ['75%', '85%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 1, name: ''},

                ],
                animation: false
            }
        ]
    };

    gumChart.clear();
    gumChart.setOption(gumChartOption);
}
var biscuitChart = function() {
//bottom
    var biscuitChart = echarts.init(document.getElementById('biscuitChart'));
    biscuitChartOption = {
        title: {
            left: 'center',
            text: 'MTD Act：2',
            textStyle:{
                fontSize:'16',
                color: '#a7a1a1'
            }
        },
        series: [
            {
                name: 'Chocolate',
                type: 'pie',
                radius: ['85%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        formatter:  '20%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 20, name: '', itemStyle: {normal: {color: '#26a2ed'}}},
                    {
                        value: 80,
                        name: '',
                        itemStyle: {normal: {color: 'transparent'}}
                    },

                ],
                animation: false
            },
            {
                name: '',
                type: 'pie',
                radius: ['75%', '85%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 1, name: ''},

                ],
                animation: false
            }
        ]
    };

    biscuitChart.clear();
    biscuitChart.setOption(biscuitChartOption);
}

var chocolateChart = function() {
//bottom
    var chocolateChart = echarts.init(document.getElementById('chocolateChart'));
    chocolateChartOption = {
        title: {
            left: 'center',
            text: 'MTD Act：2',
            textStyle:{
                fontSize:'16',
                color: '#a7a1a1'
            }
        },
        series: [
            {
                name: 'Chocolate',
                type: 'pie',
                radius: ['85%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        formatter:  '11%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 11, name: '', itemStyle: {normal: {color: '#f05050'}}},
                    {
                        value: 89,
                        name: '',
                        itemStyle: {normal: {color: 'transparent'}}
                    },

                ],
                animation: false
            },
            {
                name: '',
                type: 'pie',
                radius: ['75%', '85%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 1, name: ''},

                ],
                animation: false
            }
        ]
    };

    chocolateChart.clear();
    chocolateChart.setOption(chocolateChartOption);
}

var cheeseChart = function() {
//bottom
    var cheeseChart = echarts.init(document.getElementById('cheeseChart'));
    cheeseChartOption = {
        title: {
            left: 'center',
            text: 'MTD Act：2',
            textStyle:{
                fontSize:'16',
                color: '#a7a1a1'
            }
        },
        series: [
            {
                name: 'cheese',
                type: 'pie',
                radius: ['85%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        formatter:  '11%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 11, name: '', itemStyle: {normal: {color: '#41c572'}}},
                    {
                        value: 89,
                        name: '',
                        itemStyle: {normal: {color: 'transparent'}}
                    },

                ],
                animation: false
            },
            {
                name: '',
                type: 'pie',
                radius: ['75%', '85%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 1, name: ''},

                ],
                animation: false
            }
        ]
    };

    cheeseChart.clear();
    cheeseChart.setOption(cheeseChartOption);
}
//yoy
var yoyChart = function() {
//bottom
    var  yoyChart = echarts.init(document.getElementById('yoyChart'));
    yoyChartOption = {
        tooltip : {
            trigger: 'item',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:'{a} {c}'
        },
        legend: {
            data:['Biscuit','Candy','Cheese','Chocolate','Gum','Tang','Unmatched'],
            orient: 'vertical',
            right: '0',
            top:'20',
            borderRadius: '50%',
            textStyle:{
                borderRadius:'50%',
                color: '#ffffff',
                fontSize: '10'
            }

        },

        title:{
            left: 'left',
            text: 'YOY GS',
            textStyle:{
                fontSize:'16',
                color: '#40C0C0'
            }
        },
        grid: {
            left: '3%',
            right: '110',
            bottom: '3%',
            top: '30px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月'],
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: document.documentElement.clientWidth > 750 ? 12 : 8
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: document.documentElement.clientWidth > 750 ? 12 : 8
                    }
                }
            }
        ],
        series : [
            {
                name:'Biscuit',
                type:'bar',
                stack: '2016',
                data:[743, 226, 423, 297, 429, 426, 367,510,537,383,472],
                itemStyle:{
                    normal:{
                        color:'#26a2ed'
                    }

                }
            },
            {
                name:'Candy',
                type:'bar',
                stack: '2016',
                data:[220, 182, 191, 234, 290, 330, 310,123,123,456,123],
                itemStyle:{
                    normal:{
                        color:'#f58d8d'
                    }

                }

            },
            {
                name:'Cheese',
                type:'bar',
                stack: '2016',
                data:[150, 232, 201, 154, 190, 330, 410,,123,123,23],
                itemStyle:{
                    normal:{
                        color:'#41c572'
                    }

                }
            },
            {
                name:'Chocolate',
                type:'bar',
                stack: '2016',
                data:[150, 232, 201, 154, 90, 30, 100,12,123,13,45],
                itemStyle:{
                    normal:{
                        color:'#f05050'
                    }

                }
            },
            {
                name:'Gum',
                type:'bar',
                stack: '2016',
                data:[150, 232, 201, 154, 190, 130, 110,10,123,123,123],
                itemStyle:{
                    normal:{
                        color:'#f4d646'
                    }

                }
            },
            {
                name:'Tang',
                type:'bar',
                stack: '2016',
                data:[150, 232, 201, 154, 190, 130, 110,10,12,23,45],
                itemStyle:{
                    normal:{
                        color:'#84d9a3'
                    }

                }
            },
            {
                name:'Unmatched',
                type:'bar',
                stack: '2016',
                data:[150, 232, 201, 154, 190, 130, 110,50,60,45,30],
                itemStyle:{
                    normal:{
                        color:'#72c3f3',
                        barBorderRadius:[50,50,0,0]
                    }

                }
            },
            {
                name:'Biscuit',
                type:'bar',
                stack: '2017',
                data:[743, 226, 423, 297, 429, 426, 367,510,537,383,472],
                itemStyle:{
                    normal:{
                        color:'#26a2ed'
                    }

                }
            },
            {
                name:'Candy',
                type:'bar',
                stack: '2017',
                data:[220, 182, 191, 234, 290, 330, 310,123,123,456,123],
                itemStyle:{
                    normal:{
                        color:'#f58d8d'
                    }

                }

            },
            {
                name:'Cheese',
                type:'bar',
                stack: '2017',
                data:[150, 232, 201, 154, 190, 330, 410,123,123,23,12],
                itemStyle:{
                    normal:{
                        color:'#41c572'
                    }

                }
            },
            {
                name:'Chocolate',
                type:'bar',
                stack: '2017',
                data:[150, 232, 201, 154, 90, 30, 100,12,123,13,45],
                itemStyle:{
                    normal:{
                        color:'#f05050'
                    }

                }
            },
            {
                name:'Gum',
                type:'bar',
                stack: '2017',
                data:[150, 232, 201, 154, 190, 130, 110,10,123,123,123],
                itemStyle:{
                    normal:{
                        color:'#f4d646'
                    }

                }
            },
            {
                name:'Tang',
                type:'bar',
                stack: '2017',
                data:[150, 232, 201, 154, 190, 130, 110,10,12,23,45],
                itemStyle:{
                    normal:{
                        color:'#84d9a3'
                    }

                }
            },
            {
                name:'Unmatched',
                type:'bar',
                stack: '2017',
                data:[150, 232, 201, 154, 190, 130, 110,50,60,45,30],
                itemStyle:{
                    normal:{
                        color:'#72c3f3',
                        barBorderRadius:[50,50,0,0]
                    }

                }
            },
        ]
    };

    yoyChart.clear();
    yoyChart.setOption(yoyChartOption);
}
