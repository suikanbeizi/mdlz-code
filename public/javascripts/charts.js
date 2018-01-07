


var DT_bar = function (data){

    // $('.DT_bar').css('width',document.documentElement.clientWidth>750?$('.sidebar').width()*0.5:$('.sidebar').width());
    var DTBar = echarts.init(document.getElementById('DT_bar'));
    var L3Max = [(parseInt((data.biscuit_l3m || 0)/1000)+parseInt((data.gum_l3m || 0)/1000)+parseInt((data.chocolate_l3m || 0)/1000)),(parseInt((data.biscuit_l2m || 0)/1000)+parseInt((data.gum_l2m || 0)/1000)+parseInt((data.chocolate_l2m || 0)/1000)),
    (parseInt((data.biscuit_lm || 0)/1000)+parseInt((data.gum_lm || 0)/1000)+parseInt((data.chocolate_lm || 0)/1000)),(parseInt((data.biscuit_mtd || 0)/1000)+parseInt((data.gum_mtd || 0)/1000)+parseInt((data.chocolate_mtd || 0)/1000))];
    DTBarOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
             data:['Biscuit','Gum','chocolate'],
             bottom:'0',
             textStyle:{
                color:'#ffffff',
             },
             itemHeight:document.documentElement.clientWidth>750?14:10,
             padding:document.documentElement.clientWidth>750?5:0

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: document.documentElement.clientWidth>750?'20':'60',
            top: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['L3M','L2M','LM','TM'],
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                min : 0,
                max :  (Math.max.apply(null, L3Max)),
                interval:  parseInt(Math.max.apply(null, L3Max)/5),
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    },
                    formatter: '{value}k'
                }
            }
        ],
        series : [
            {
                name:'Biscuit',
                type:'bar',
                stack: 'type',
                data:[parseInt(data.biscuit_l3m/1000), parseInt(data.biscuit_l2m/1000), parseInt(data.biscuit_lm/1000), parseInt(data.biscuit_mtd/1000)],
                itemStyle:{
                    normal:{
                        color:'#f8ff76'
                    }
                },
                barWidth:'30px'
            },
            {
                name:'Gum',
                type:'bar',
                stack: 'type',
                data:[parseInt(data.gum_l3m/1000), parseInt(data.gum_l2m/1000), parseInt(data.gum_lm/1000), parseInt(data.gum_mtd/1000)],
                itemStyle:{
                    normal:{
                        color:'#d49cef'
                    }
                },
                barWidth:'30px'
                
            }
            ,
            {
                name:'chocolate',
                type:'bar',
                stack: 'type',
                data:[parseInt(data.chocolate_l3m/1000), parseInt(data.chocolate_l2m/1000), parseInt(data.chocolate_lm/1000), parseInt(data.chocolate_mtd/1000)],
                itemStyle:{
                    normal:{
                        color:'#ff6e91'
                    }
                },
                barWidth:'30px'
            }
        ]   
    };
    DTBar.clear();
    DTBar.setOption(DTBarOption);

}
// customer bar
var customerBar = function (dealer){
	var gsTtd=parseInt(dealer.gs2017_expected)-parseInt(dealer.ytd_2017);
    // $('.customerBar').css('width',$('.sidebar').width());
    var customerBar = echarts.init(document.getElementById('customerBar'));
    customerBarOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
             data:['YTD','GS'],
             right:'0',
             textStyle:{
                color:'#ffffff',
             },
            
        },
        grid: {
            left: '3%',
            right: '6%',
            bottom: '0',
            top: '25',
            containLabel: true
        },
        yAxis : [
            {
                type : 'category',
                data : ['2016','2017'],
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        xAxis : [
            {
                type : 'value',
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8,
                         
                    },
                    formatter: '{value}m'
                }
            }   
        ],
        series : [
            {
                name:'YTD',
                type:'bar',
                stack: 'type',
                data:[ 0, Math.round(dealer.ytd_2017/1000000)],
                itemStyle:{
                    normal:{
                        color:'#f8ff76',
                        position: 'insideRight',
                        barBorderRadius: 5
                    }
                },
                barWidth:'50%'

            },
            {
                name:'GS',
                type:'bar',
                stack: 'type',
                data:[ Math.round(dealer.gs_2016/1000000), 0],
                itemStyle:{
                    normal:{
                        color:'#ff6e91',
                        position: 'insideRight',
                        barBorderRadius: 5
                    }
                },
                barWidth:'50%'
                
            }
           
        ]   
    };
    customerBar.clear();
    customerBar.setOption(customerBarOption);
 
}

var avgChart_barLine = function(data){
    var gs2017 = [parseInt(data.jan_ty_gs/1000),parseInt(data.feb_ty_gs/1000),parseInt(data.mar_ty_gs/1000),parseInt(data.apr_ty_gs/1000),
    parseInt(data.may_ty_gs/1000),parseInt(data.jun_ty_gs/1000),parseInt(data.jly_ty_gs/1000),parseInt(data.aug_ty_gs/1000),
    parseInt(data.sep_ty_gs/1000),parseInt(data.oct_ty_gs/1000),parseInt(data.nov_ty_gs/1000),parseInt(data.dec_ty_gs/1000)];

    var gs2016 = [parseInt(data.jan_ly_gs/1000),parseInt(data.feb_ly_gs/1000),parseInt(data.mar_ly_gs/1000),parseInt(data.apr_ly_gs/1000),
    parseInt(data.may_ly_gs/1000),parseInt(data.jun_ly_gs/1000),parseInt(data.jly_ly_gs/1000),parseInt(data.aug_ly_gs/1000),
    parseInt(data.sep_ly_gs/1000),parseInt(data.oct_ly_gs/1000),parseInt(data.nov_ly_gs/1000),parseInt(data.dec_ly_gs/1000)];

    var orders2017 = [parseInt(data.jan_ty_orders),parseInt(data.feb_ty_orders),parseInt(data.mar_ty_orders),parseInt(data.apr_ty_orders),
    parseInt(data.may_ty_orders),parseInt(data.jun_ty_orders),parseInt(data.jly_ty_orders),parseInt(data.aug_ty_orders),
    parseInt(data.sep_ty_orders),parseInt(data.oct_ty_orders),parseInt(data.nov_ty_orders),parseInt(data.dec_ty_orders)];

    var orders2016 = [parseInt(data.jan_ly_orders),parseInt(data.feb_ly_orders),parseInt(data.mar_ly_orders),parseInt(data.apr_ly_orders),
    parseInt(data.may_ly_orders),parseInt(data.jun_ly_orders),parseInt(data.jly_ly_orders),parseInt(data.aug_ly_orders),
    parseInt(data.sep_ly_orders),parseInt(data.oct_ly_orders),parseInt(data.nov_ly_orders),parseInt(data.dec_ly_orders)];

    var avgChartBar = echarts.init(document.getElementById('avgChart'));
    avgChartOption = {
   
        legend: {
            data:['2016','2017','vs PP','vs LY'],
            textStyle:{
                color:'#ffffff',
             },
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '20px',
            top: '25',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['jan','feb','mar','apr','may','jun','jly','aug','sep','oct','nov','dec'],
                axisPointer: {
                    type: 'shadow'
                },
                nameTextStyle: {
                    color: '#ffffff'
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'GS',
                axisLabel: {
                    formatter: '{value}'
                },
                nameTextStyle: {
                    color: '#ffffff'
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            },
            {
                type: 'value',
                name: 'Orders',
                axisLabel: {
                    formatter: '{value} '
                },
                nameTextStyle: {
                    color: '#ffffff'
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        series: [
            {
                name:'2016',
                type:'bar',
                data: gs2016,
                itemStyle: {
                    normal: {
                        color: '#f8ff76'
                    }
                }
            },
            {
                name:'2017',
                type:'bar',
                data:gs2017,
                itemStyle: {
                    normal: {
                        color: '#d49cef'
                    }
                }
            },
            {
                name:'vs PP',
                type:'line',
                yAxisIndex: 1,
                data:orders2017,
                itemStyle: {
                    normal: {
                        color: '#ff6e91'
                    }
                }
            },
            {
                name:'vs LY',
                type:'line',
                yAxisIndex: 1,
                data:orders2016,
                itemStyle: {
                    normal: {
                        color: '#73fbe1'
                    }
                }
            }
        ]
    };
    avgChartBar.clear();
    avgChartBar.setOption(avgChartOption);
}
    // cat柱状图
var monthlySale = function(data){
    
    var gs2017 = [parseInt(data.jan_ty_gs/1000),parseInt(data.feb_ty_gs/1000),parseInt(data.mar_ty_gs/1000),parseInt(data.apr_ty_gs/1000),
    parseInt(data.may_ty_gs/1000),parseInt(data.jun_ty_gs/1000),parseInt(data.jly_ty_gs/1000),parseInt(data.aug_ty_gs/1000),
    parseInt(data.sep_ty_gs/1000),parseInt(data.oct_ty_gs/1000),parseInt(data.nov_ty_gs/1000),parseInt(data.dec_ty_gs/1000)];

    var gs2016 = [parseInt(data.jan_ly_gs/1000),parseInt(data.feb_ly_gs/1000),parseInt(data.mar_ly_gs/1000),parseInt(data.apr_ly_gs/1000),
    parseInt(data.may_ly_gs/1000),parseInt(data.jun_ly_gs/1000),parseInt(data.jly_ly_gs/1000),parseInt(data.aug_ly_gs/1000),
    parseInt(data.sep_ly_gs/1000),parseInt(data.oct_ly_gs/1000),parseInt(data.nov_ly_gs/1000),parseInt(data.dec_ly_gs/1000)];

    var orders2017 = [parseInt(data.jan_ty_orders),parseInt(data.feb_ty_orders),parseInt(data.mar_ty_orders),parseInt(data.apr_ty_orders),
    parseInt(data.may_ty_orders),parseInt(data.jun_ty_orders),parseInt(data.jly_ty_orders),parseInt(data.aug_ty_orders),
    parseInt(data.sep_ty_orders),parseInt(data.oct_ty_orders),parseInt(data.nov_ty_orders),parseInt(data.dec_ty_orders)];

    var orders2016 = [parseInt(data.jan_ly_orders),parseInt(data.feb_ly_orders),parseInt(data.mar_ly_orders),parseInt(data.apr_ly_orders),
    parseInt(data.may_ly_orders),parseInt(data.jun_ly_orders),parseInt(data.jly_ly_orders),parseInt(data.aug_ly_orders),
    parseInt(data.sep_ly_orders),parseInt(data.oct_ly_orders),parseInt(data.nov_ly_orders),parseInt(data.dec_ly_orders)];

    var monthlySale = echarts.init(document.getElementById('monthlySale'));
    monthlySaleOption = {
   
        legend: {
            data:['2016','2017','vs PP','vs LY'],
            textStyle:{
                color:'#ffffff',
             },
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '20px',
            top: '25',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['jan','feb','mar','apr','may','jun','jly','aug','sep','oct','nov','dec'],
                axisPointer: {
                    type: 'shadow'
                },
                nameTextStyle: {
                    color: '#ffffff'
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'GS',
                axisLabel: {
                    formatter: '{value}'
                },
                nameTextStyle: {
                    color: '#ffffff'
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            },
            {
                type: 'value',
                name: 'Orders',
                axisLabel: {
                    formatter: '{value} '
                },
                nameTextStyle: {
                    color: '#ffffff'
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        series: [
            {
                name:'2016',
                type:'bar',
                data: gs2016,
                itemStyle: {
                    normal: {
                        color: '#f8ff76'
                    }
                }
            },
            {
                name:'2017',
                type:'bar',
                data:gs2017,
                itemStyle: {
                    normal: {
                        color: '#d49cef'
                    }
                }
            },
            {
                name:'vs PP',
                type:'line',
                yAxisIndex: 1,
                data:orders2017,
                itemStyle: {
                    normal: {
                        color: '#ff6e91'
                    }
                }
            },
            {
                name:'vs LY',
                type:'line',
                yAxisIndex: 1,
                data:orders2016,
                itemStyle: {
                    normal: {
                        color: '#73fbe1'
                    }
                }
            }
        ]
    };
    monthlySale.clear();
    monthlySale.setOption(monthlySaleOption);
}
var TM = [];
var DtOrder_bar = function(data){
    
    $('.DtOrder_bar').css('width',$('.sidebar').width());
    var DtOrder_barChart = echarts.init(document.getElementById('DtOrder_bar'));
    TM = [(data.mtd_dt_with_orders || 0),(data.mtd_dt_without_orders || 0),(data.dt_with_orders_in3m_include_tm || 0)];

    DtOrder_barOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '0',
            top: '5',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['HasOrders TM','withOut HasOrders','hasOrder with 3M'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Customers',
                min:0,
                max: Math.max.apply(null, TM),
                interval:  parseInt(Math.max.apply(null, TM)/5),
                axisLabel: {
                    formatter: '{value} ',
                    textStyle:{
                        color:'#ffffff',
                        fontSize:document.documentElement.clientWidth>750?12:8
                    }
                }
            }
        ],
        series: [
      
            {
                name:'Customers',
                type:'bar',
                data:[
                {value:(data.mtd_dt_with_orders || 0),itemStyle: {normal: {color: '#f8ff76'}}},
                {value:(data.mtd_dt_without_orders || 0),itemStyle: {normal: {color: '#d49cef'}}},
                {value:(data.dt_with_orders_in3m_include_tm || 0),itemStyle: {normal: {color: '#ff6e91'}}}
                ],
                itemStyle:{
                    normal:{
                        color:'#2d7ccb',
                    }
                },
                barMaxWidth: 30,
                barMinHeight: 30
            }
        ]
    };
    DtOrder_barChart.clear();
    DtOrder_barChart.setOption(DtOrder_barOption);
    DtOrder_barChart.off('click');
    DtOrder_barChart.on('click', function (params) {
        var adcode; 
        var adcodeName;
        if(data.adcode){
            adcode = data.adcode;
            adcodeName = 'adcode';
        }else{
            adcode = data.id;
            adcodeName = 'regiongroupid'
        }

        var status;
        var pieUrl;
        var name;
        var stautsNum;
        name = params.name;
            if(name === 'HasOrders TM'){
                status = 'mtd_dt_with_orders';
                stautsNum = 1;
            }
            else if(name === 'withOut HasOrders'){
                status = 'mtd_dt_with_orders';
                stautsNum = 0;
            }
            else if(name === 'hasOrder with 3M'){
                status='dt_with_orders_in3m_include_tm';
                stautsNum = 1;
            }
        
            pieUrl='http://datam.youlishu.com/dataset/json?oid=1063&filters='+adcodeName +','+ status +'&'+adcodeName+'=' + adcode +'&'+status+'='+stautsNum;
            $.ajax({
                url: pieUrl,
                type: 'get',
                dataType: 'jsonp',
                success:function(d){ 
                    if(d && d.length){
                        console.log(data);
                        d = d.sort(function(a,b){
                            return b.gs_tm-a.gs_tm;
                        });
                        $('.tableContent').html('');
                        $('.tableContent').append('<tr class="tableTitle"><td width="15%">CustomerCode</td><td width="15%">CustomerName</td>'+
                        '<td width="15%">MTD_orders</td><td width="15%">MTD_GS</td><td width="15%">QTD</td><td width="15%">YTD_GS</td></tr>');
                        $.each(d,function(index, value) {
                            var content ='<tr><td width="15%" onclick=dealerClick('+ value.customer_code+','+adcode+')>'+ value.customer_code +'</td>'+
                            '<td width="15%">'+ value.customer_name +'</td><td width="15%">'+ (value.gs_orders || 0) +'</td><td width="15%">'+ 
                            toThousands(parseInt(value.gs_tm/1000)) +'k</td><td width="15%">'+ toThousands(parseInt(value.qtd/1000)) +'k</td><td width="15%">'+ toThousands(parseInt(value.ytd_2017/1000)) +'k</td></tr>';
                            $('.tableContent').append(content);
                        });
                    }else{
                        $('.tableContent').html('');
                        $('.tableContent').append('<tr class="tableTitle"><td width="15%">CustomerCode</td><td width="15%">CustomerName</td>'+
                        '<td width="15%">MTD_orders</td><td width="15%">MTD_GS</td><td width="15%">QTD</td><td width="15%">YTD_GS</td></tr>');
                    }
                },
            });
    });

}

// cat饼状图进度条

var classify_right_pie = function(data){

    $('.classify_right').css('width',$('.sidebar').width()*0.25+'px');
    if(data[5].is_on_track === 1){
        $('.Biscuits_track').css('background','#1afbd9');
        $('.Biscuits_track').next('span').html('on track')
    }
    else{
        $('.Biscuits_track').css('background','#e84065');
        $('.Biscuits_track').next('span').html('off track')
    }
    if(data[5].dp_vs_py === 1){
        $('.Biscuits_dp').css('background','#1afbd9');
        $('.Biscuits_dp').next('span').html('on track')
    }
    else{
        $('.Biscuits_dp').css('background','#e84065');
        $('.Biscuits_dp').next('span').html('off track')
    }

    var classify_right_pieChart = echarts.init(document.getElementById('classify_right'));
    classify_right_pieOption = {
        
            series: [
                {
                    name:'Biscuits',
                    type:'pie',
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
                            formatter: parseInt(data[5].mtd_vs_st*100)+'%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value: parseInt(data[5].mtd_vs_st*100), name:'',itemStyle: {normal: {color: '#084eda'}}},
                        {value: parseInt(100-data[5].mtd_vs_st*100), name:'',itemStyle: {normal: {color: 'transparent'}}},
                        
                    ],
                    animation: false
                },
                {
                    name:'',
                    type:'pie',
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
                    data:[
                        {value:1, name:''},
                       
                    ],
                    animation: false
                }
            ]
        };

    classify_right_pieChart.clear();
    classify_right_pieChart.setOption(classify_right_pieOption); 
    if(data[0].is_on_track === 1){
        $('.Chocolate_track').css('background','#1afbd9');
        $('.Chocolate_track').next('span').html('on track')
    }
    else{
        $('.Chocolate_track').css('background','#e84065');
        $('.Chocolate_track').next('span').html('off track')
    }
    if(data[0].dp_vs_py === 1){
        $('.Chocolate_dp').css('background','#1afbd9');
        $('.Chocolate_dp').next('span').html('on track')
    }
    else{
        $('.Chocolate_dp').css('background','#e84065');
        $('.Chocolate_dp').next('span').html('off track')
    }
    var classify_right_pieChart1 = echarts.init(document.getElementById('classify_right1'));
    classify_right_pieOption1 = {
        
            series: [
                {
                    name:'Chocolate',
                    type:'pie',
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
                            formatter: parseInt(data[0].mtd_vs_st*100)+'%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:parseInt(data[0].mtd_vs_st*100), name:'',itemStyle: {normal: {color: '#7c3ba8'}}},
                        {value:parseInt(100-data[0].mtd_vs_st*100), name:'',itemStyle: {normal: {color: 'transparent'}}},
                        
                    ],
                    animation: false
                },
                {
                    name:'',
                    type:'pie',
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
                    data:[
                        {value:1, name:''},
                       
                    ],
                    animation: false
                }
            ]
        };

    classify_right_pieChart1.clear();
    classify_right_pieChart1.setOption(classify_right_pieOption1);      

    if(data[1].is_on_track === 1){
        $('.Candy_track').css('background','#1afbd9');
        $('.Candy_track').next('span').html('on track')
    }
    else{
        $('.Candy_track').css('background','#e84065');
        $('.Candy_track').next('span').html('off track')
    }
    if(data[1].dp_vs_py === 1){
        $('.Candy_dp').css('background','#1afbd9');
        $('.Candy_dp').next('span').html('on track')
    }
    else{
        $('.Candy_dp').css('background','#e84065');
        $('.Candy_dp').next('span').html('off track')
    }
    var classify_right_pieChart2 = echarts.init(document.getElementById('classify_right2'));
    classify_right_pieOption2 = {
        
            series: [
                {
                    name:'Candy',
                    type:'pie',
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
                            formatter: parseInt(data[1].mtd_vs_st*100)+'%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:parseInt(data[1].mtd_vs_st*100), name:'',itemStyle: {normal: {color: '#d00f23'}}},
                        {value:parseInt(100-data[1].mtd_vs_st*100), name:'',itemStyle: {normal: {color: 'transparent'}}},
                        
                    ],
                    animation: false
                },
                {
                    name:'',
                    type:'pie',
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
                    data:[
                        {value:1, name:''},
                       
                    ],
                    animation: false
                }
            ]
        };

    classify_right_pieChart2.clear();
    classify_right_pieChart2.setOption(classify_right_pieOption2); 

    if(data[4].is_on_track === 1){
        $('.Gum_track').css('background','#1afbd9');
        $('.Gum_track').next('span').html('on track')
    }
    else{
        $('.Gum_track').css('background','#e84065');
        $('.Gum_track').next('span').html('off track')
    }
    if(data[4].dp_vs_py === 1){
        $('.Gum_dp').css('background','#1afbd9');
        $('.Gum_dp').next('span').html('on track')
    }
    else{
        $('.Gum_dp').css('background','#e84065');
        $('.Gum_dp').next('span').html('off track')
    }
    var classify_right_pieChart3 = echarts.init(document.getElementById('classify_right3'));
    classify_right_pieOption3 = {
        
            series: [
                {
                    name:'Gum',
                    type:'pie',
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
                            formatter: parseInt(data[4].mtd_vs_st*100)+'%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:parseInt(data[4].mtd_vs_st*100), name:'',itemStyle: {normal: {color: '#00bca9'}}},
                        {value:parseInt(100-data[4].mtd_vs_st*100), name:'',itemStyle: {normal: {color: 'transparent'}}},
                        
                    ],
                    animation: false
                },
                {
                    name:'',
                    type:'pie',
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
                    data:[
                        {value:1, name:''},
                       
                    ],
                    animation: false
                }
            ]
        };

    classify_right_pieChart3.clear();
    classify_right_pieChart3.setOption(classify_right_pieOption3);

    if(data[3].is_on_track === 1){
        $('.Beverage_track').css('background','#1afbd9');
        $('.Beverage_track').next('span').html('on track')
    }
    else{
        $('.Beverage_track').css('background','#e84065');
        $('.Beverage_track').next('span').html('off track')
    }
    if(data[3].dp_vs_py === 1){
        $('.Beverage_dp').css('background','#1afbd9');
        $('.Beverage_dp').next('span').html('on track')
    }
    else{
        $('.Beverage_dp').css('background','#e84065');
        $('.Beverage_dp').next('span').html('off track')
    }
    var classify_right_pieChart4 = echarts.init(document.getElementById('classify_right4'));
    classify_right_pieOption4 = {
        
            series: [
                {
                    name:'Beverage',
                    type:'pie',
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
                            formatter: parseInt(data[3].mtd_vs_st*100)+'%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:parseInt(data[3].mtd_vs_st*100), name:'',itemStyle: {normal: {color: '#f16332'}}},
                        {value:parseInt(100-data[3].mtd_vs_st*100), name:'',itemStyle: {normal: {color: 'transparent'}}},
                        
                    ],
                    animation: false
                },
                {
                    name:'',
                    type:'pie',
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
                    data:[
                        {value:1, name:''},
                       
                    ],
                    animation: false
                }
            ]
        };

    classify_right_pieChart4.clear();
    classify_right_pieChart4.setOption(classify_right_pieOption4);     

    if(data[2].is_on_track === 1){
        $('.Cheese_track').css('background','#1afbd9');
        $('.Cheese_track').next('span').html('on track')
    }
    else{
        $('.Cheese_track').css('background','#e84065');
        $('.Cheese_track').next('span').html('off track')
    }
    if(data[2].dp_vs_py === 1){
        $('.Cheese_dp').css('background','#1afbd9');
        $('.Cheese_dp').next('span').html('on track')
    }
    else{
        $('.Cheese_dp').css('background','#e84065');
        $('.Cheesee_dp').next('span').html('off track')
    }
    var classify_right_pieChart5 = echarts.init(document.getElementById('classify_right5'));
    classify_right_pieOption5 = {
        
            series: [
                {
                    name:'Cheese',
                    type:'pie',
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
                            formatter: parseInt(data[2].mtd_vs_st*100)+'%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:parseInt(data[2].mtd_vs_st*100), name:'',itemStyle: {normal: {color: '#ffe800'}}},
                        {value:parseInt(100-data[2].mtd_vs_st*100), name:'',itemStyle: {normal: {color: 'transparent'}}},
                        
                    ],
                    animation: false
                },
                {
                    name:'',
                    type:'pie',
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
                    data:[
                        {value:1, name:''},
                       
                    ],
                    animation: false
                }
            ]
        };

    classify_right_pieChart5.clear();
    classify_right_pieChart5.setOption(classify_right_pieOption5);    
}