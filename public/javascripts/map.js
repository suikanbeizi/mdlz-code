
function toThousands(num) {
var result = '', counter = 0;
num = (num || 0).toString();
for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result = num.charAt(i) + result;
    if (!(counter % 3) && i != 0) { result = ',' + result; }
}
return result;
}
// 获取url参数
function getQueryString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = window.location.search.substr(1).match(reg); 
if (r != null) return unescape(r[2]); return null; 
} 
// 改变经销商数据
var avgImgSize=parseInt(($('.sidebar').width()-20)/20);
function dealerClick(Customer_Code,adcode){
 $.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1063&filters=adcode,customer_code&adcode=' + adcode+'&customer_code='+Customer_Code,
    type: 'get',
    dataType: 'jsonp',
    success:function(data){
        if(data && data.length){
            $('.customerName').html(data[0].customer_name +'￥<span>'+  toThousands(parseInt(data[0].gs_tm/1000))+'</span>');
             $('.customerDetail').css('display','block');
            $('.customerSales').html('Customer yearly sales')
            customerBar(data[0]);
             $('.avg_ordersize').html('avg_ordersize_TY: '+Math.round(data[0].avg_ordersize_ty));
            var imgNum=Math.round(data[0].avg_ordersize_ty/1000);
             if(imgNum>avgImgSize){
                imgNum=avgImgSize;
            }
             $('.avgSize').html('');
            for(var n=0;n<imgNum;n+=1){
                  $('.avgSize').append('<img src="Nuvola_apps_package_purple.svg.png" alt="">');  
            }
           //avgChart_barLine();
        }
    },
});
}
// 改变样式
function changeStyle(adcode){
$('.DT_bar').css('height',$('.sidebar').height()*0.15+'px');
$('.customerBar').css('height',$('.sidebar').height()*0.1+'px');
$('.avgChart').css('height',$('.sidebar').height()*0.4+'px');
$('.monthlySale').css('width',$('.sidebar').width()+'px');
$('.DtOrder_bar').css('height',$('.sidebar').height()*0.12+'px');
$('.tableCross').css('height',$('.sidebar').height()*0.25+'px');
$('.monthlySale').css('height',$('.sidebar').height()*0.35+'px');
$('.crosstab h1').html('Customer list');
$.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1062&filters=adcode',
    type: 'get',
    dataType: 'jsonp',
    data:{'adcode':adcode},
    success:function(data){
        var dataset=data[0];
        // processChart(dataset);
        $.ajax({
            url: 'http://datam.youlishu.com/dataset/json?oid=1063&filters=adcode,customer_code&adcode=' + adcode,
            type: 'get',
            dataType: 'jsonp',
            success:function(d){
                d = d.sort(function(a,b){
                return b.gs_tm-a.gs_tm;
                 });
                if(d && d.length){ 
                    $('.MTD h1').html(dataset.name +' MTD :' + toThousands(parseInt(dataset.mtd/1000))+'k<span class="pro_num">Active Dealers:'+ dataset.active_dealers+ '</span>');
                }
            },
        });
        $('.GS').html('<h1>Last Working day GS ￥ <span >'+  (toThousands(parseInt(dataset.last_working_day_gs/1000)) || 0) +
            'k</span> With <span>'+ toThousands(dataset.last_working_day_orders || 0) +' </span>Orders By <span>'
            + (dataset.dts_with_orders_daily || 0) +'</span> DTS On an average Order Size ￥<span>'
            +  (toThousands(parseInt(dataset.last_working_day_gs/dataset.last_working_day_orders/1000)) ||  0)+'k</span></h1>');
        DtOrder_bar(dataset);
        DT_bar(dataset);
        $('.customerName').html('')
        $('.customerDetail').css('display','none');
        $('.customerSales').html('Province yearly sales')
        customerBar(dataset);
        avgChart_barLine(dataset); //柱状折线图

         //cat柱状折线图
    }
});
$.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1071',
    type: 'get',
    dataType: 'jsonp',
    success:function(data){ 
        classify_right_pie(data);//饼状图
        monthlySale(data[0]);
        $('.mtd_process').html('<div>MTD:</div><div><p style="width:100%;font-size:12px; margin:5px 0;" data-value="'+parseInt(data[0].mtd_vs_st*100)+'">Pace</p>'+
        '<progress max="100" value="'+parseInt(data[0].mtd_vs_st*100)+'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width:50%">'+parseInt(data[0].mtd_vs_st*100)+'%</span></div></progress></div>');
        $('.qtd_process').html('<div>QTD:</div><div><p style="width:100%;font-size:12px; margin:5px 0;" data-value="'+parseInt(data[0].qtd_vs_st*100)+'">Pace</p>'+
            '<progress max="100" value="'+parseInt(data[0].qtd_vs_st*100)+'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width:50%">'+parseInt(data[0].qtd_vs_st*100)+'%</span></div></progress></div>');
        $('.ytd_process').html('<div>YTD:</div><div><p style="width:100%;font-size:12px; margin:5px 0;" data-value="'+parseInt(data[0].ytd_vs_st*100)+'">Pace</p>'+
            '<progress max="100" value="'+parseInt(data[0].ytd_vs_st*100)+'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width:50%">'+parseInt(data[0].ytd_vs_st*100)+'%</span></div></progress></div>');
    }
});

$.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1063&filters=adcode&adcode=' + adcode,
    type: 'get',
    dataType: 'jsonp',
    success:function(data){
        if(data && data.length){
             data = data.sort(function(a,b){
                return b.gs_tm-a.gs_tm;
            });
            $('.avg_ordersize').html('avg_ordersize_TY: '+Math.round(data[0].avg_ordersize_ty));
            var imgNum=parseInt(data[0].avg_ordersize_ty/1000);
            if(imgNum>avgImgSize){  
                imgNum=avgImgSize;
            }
             $('.avgSize').html('');
            for(var n=0;n<imgNum;n+=1){
                  $('.avgSize').append('<img src="./img/Nuvola_apps_package_purple.svg.png" alt="">');  
            }
            
            $('.tableContent').html('');
            $('.tableContent').append('<tr class="tableTitle"><td width="15%">CustomerCode</td><td width="15%">CustomerName</td>'+
                '<td width="15%">MTD_orders</td><td width="15%">MTD_GS</td><td width="15%">QTD</td><td width="15%">YTD_GS</td></tr>');
           
            $.each(data,function(index, value) {
                var content ='<tr><td width="15%" onclick=dealerClick('+ value.customer_code+','+adcode+')><a href="#">'+ value.customer_code +'</a></td>'+
                '<td width="15%">'+ value.customer_name +'</td><td width="15%">'+ value.gs_orders +'</td><td width="15%">'+ 
                toThousands(parseInt(value.gs_tm/1000)) +'k</td><td width="15%">'+ toThousands(parseInt(value.qtd/1000)) +'k</td><td width="15%">'+ toThousands(parseInt(value.ytd_2017/1000)) +'k</td></tr>';
                $('.tableContent').append(content);
            });
        }
    },
}); 
// cat 右侧
// $('.cat').html('');



}

var url_adcode=getQueryString('adcode') || 310000;
changeStyle(url_adcode);

// 绘图
var indoorMap;
AMap.plugin(['AMap.IndoorMap'], function() {
    var indoorMap = new AMap.IndoorMap({alwaysShow:true});
    var map = new AMap.Map('container', {

        resizeEnable: true,
        zoom: 5,
        zooms:[5,20],
        center: [110.485352, 31.603692],
        mapStyle:'amap://styles/2b9ebef8e258fa76553520776ee11a14',
        labelzIndex:100,
        showIndoorMap:false,//隐藏地图自带的室内地图图层
        layers:[indoorMap,new AMap.TileLayer()]
    });
    window.map = map;
});

var scale = new AMap.Scale({});
map.addControl(scale);

AMapUI.loadUI(['geo/DistrictExplorer'], function(DistrictExplorer) {

   //创建一个实例
   var districtExplorer = window.districtExplorer = new DistrictExplorer({
        eventSupport: true, //打开事件支持
        map: map
    });

   var render = window.render = function(adcode,color){
        districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
           //更新地图视野
           //map.setBounds(areaNode.getBounds(), null, null, true);
           //清除已有的绘制内容
           districtExplorer.clearFeaturePolygons();
           //绘制子区域
           districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
               return {
                   cursor: 'default',
                   bubble: true,
                   strokeColor: 'transparent',
                   strokeWeight: 0, //线宽
                   fillColor: color, //填充色
                   fillOpacity: 0.8,//填充透明度
               };
           });
       });
   }
   var bigRender = window.bigRender = function(adcode,color){
        districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
           //更新地图视野
           //map.setBounds(areaNode.getBounds(), null, null, true);
           //清除已有的绘制内容
     
           //绘制子区域
           districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
               return {
                   cursor: 'default',
                   bubble: true,
                   strokeColor: 'transparent',
                   strokeWeight: 0, //线宽
                   fillColor: color, //填充色
                   fillOpacity: 0.8,//填充透明度
               };
           });
       });
   }
    render(100000,"transparent");
    setTimeout(function(){
       // if(url_adcode){
       //      render(url_adcode,"#158ff1");
       //
       // }
       // else{
            render(100000,"transparent");
       // }
    },500)
   function toggleHoverFeature(feature) {
        if (!feature) {
            return;
        }
        var props = feature.properties;

        //更新相关多边形的样式
        var polys = districtExplorer.findFeaturePolygonsByAdcode(props.adcode);
        // render(props.adcode,"#158ff1");
        changeStyle(props.adcode);
        infoWindow.close();
    }

    districtExplorer.on('featureClick', function(e, feature) {
        toggleHoverFeature(feature);
        
    });

    districtExplorer.on('outsideClick', function(e) {
     districtExplorer.clearFeaturePolygons();    
     });

});
//行政区查询

//测距
var ruler1, ruler2;
map.plugin(["AMap.RangingTool"], function() {
    ruler1 = new AMap.RangingTool(map);
    AMap.event.addListener(ruler1, "end", function(e) {
        ruler1.turnOff();
    });
    var sMarker = {
        icon: new AMap.Icon({
            size: new AMap.Size(19, 31),//图标大小
            image: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png"
        })
    };
    var eMarker = {
        icon: new AMap.Icon({
            size: new AMap.Size(19, 31),//图标大小
            image: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png"
        }),
        offset: new AMap.Pixel(-9, -31)
    };
    var lOptions = {
        strokeStyle: "solid",
        strokeColor: "#FF33FF",
        strokeOpacity: 1,
        strokeWeight: 2
    };
    var rulerOptions = {startMarkerOptions: sMarker, endMarkerOptions: eMarker, lineOptions: lOptions};
    ruler2 = new AMap.RangingTool(map, rulerOptions);
});

function startRuler(){
    ruler2.turnOff();
    ruler1.turnOn();
}

var infoWindow = new AMap.InfoWindow({
offset: new AMap.Pixel(100, -40)
});
function markerClick(e,adcode){
infoWindow.setContent(e.target.content);
infoWindow.open(map, e.target.getPosition());
render(e.target.getTitle(),"#158ff1");
changeStyle(adcode);
clearInterval(intarval);

}
var t=0;

var intervalStart=function(){
var intarval= window.intarval =setInterval(function(){
    infoWindow.close();
    infoWindow.setContent(markers[t].content);
    infoWindow.open(map, markers[t].getPosition());
    t+=1;
    if(t === 31){
        t=0;
    }
},15000)
}
// intervalStart();

// var count=0,x,y,x1,y1,outTime=15;
// window.setInterval(go, 1000);
// function go() {
// count++;
// if (count === outTime) {
//    clearInterval(intarval);
//    intervalStart();
// }
// }
// document.onmousemove = function (event) {
// x1 = event.clientX;
// y1 = event.clientY;
// if (x != x1 || y != y1) {
//     count = 0;
// }
// x = x1;
// y = y1;
// };
function dealerMarkerClick(e,adcode,Customer_Code){
infoWindow.setContent(e.target.content);
infoWindow.open(map, e.target.getPosition());
// render(e.target.getTitle(),"#158ff1");   
dealerClick(Customer_Code,adcode);
 clearInterval(intarval);
}
var nowDate = new Date();
var nowTimePecent = (nowDate.getDate()-1)/31;
var createMarker = function(data,hide,index) {
var div = document.createElement('div');
div.className = 'circle';
var icon;
var YTD;
var width;
var lightColor = 'rgba(0,0,0,0.2)' ,lightColor1 = 'rgba(0,0,0,0.2)';
if(data.ytd_2017){
    YTD=data.ytd_2017;
}

if((data.mtd/data.mtd_st)>nowTimePecent){
    icon = new AMap.Icon({
        image : 'http://wyc-store.oss-cn-shanghai.aliyuncs.com/images/yizi/green1.png',//24px*24px
        imageSize : new AMap.Size(28,46)
    });
}
else if(nowTimePecent-(data.mtd/data.mtd_st)>0.3){
    icon = new AMap.Icon({
        image : 'http://wyc-store.oss-cn-shanghai.aliyuncs.com/images/yizi/red1.png',//24px*24px
        imageSize : new AMap.Size(28,46)
    });
}
else{
     icon = new AMap.Icon({
        image : 'http://wyc-store.oss-cn-shanghai.aliyuncs.com/images/yizi/yellow1.png',//24px*24px
        imageSize : new AMap.Size(28,46)
    });
}

if(nowTimePecent-(data.mtd/data.mtd_st)>0.1){
    lightColor = '#e84065';
    cont = 'off track';
}
else{
    lightColor = '#1afbd9';
    cont = 'on track';
}


var marker = new AMap.Marker({
    //content: div,
    icon:icon,
    title:data.adcode,
    position: [data.lng,data.lat],
    zIndex: 150,
    offset: new AMap.Pixel(-10, -40)
});
marker.content = '<p>' + data.name + '<div class="light_pos"><span class="cont">'+ cont+'</span><span class="light" style="background-color:'+lightColor +';"></span><br>'+
'</div></p><p><span>Yesterday_GS:</span>'+  toThousands(parseInt((data.yesterday_gs || 0)/1000))+'k<span style="margin-left:30px;">Yesterday_Orders:</span>'+ 
 toThousands(data.last_working_day_orders || 0)+'</p>'+
 '<span class="spanStyle1">MTD:</span><span class="spanStyle1" style="margin-right:20px">'+ toThousands(parseInt((data.mtd  || 0)/1000))+'k</span>'+
'<span class="spanStyle1">MTD_ST:</span><span class="spanStyle1" style="margin-right:20px">'+ toThousands(parseInt((data.mtd_st  || 0)/1000))+'k</span><br/>'+
'<p style="width:100%;font-size:12px;" data-value="'+parseInt(((data.mtd/data.mtd_st) || 0)*100)+
'">MTD_Actual_VS_MTD_ST</p><progress max="100" value="'+ parseInt((data.mtd/data.mtd_st)*100) +
'" class="MTD_Actual_VS_MTD_ST"><div class="progress-bar"><span style="width: '+ 
parseInt(data.mtd_actual_vs_mtd_st*100)+'%">'+ parseInt(data.mtd_actual_vs_mtd_st*100)+'%</span></div></progress>'+
'<p style="width:100%;font-size:12px;" data-value="'+parseInt((data.qtd_actual_vs_qtd_st || 0)*100)+
'">QTD_Actual_VS_QTD_ST</p><progress max="100" value="'+ parseInt(data.qtd_actual_vs_qtd_st*100) +
'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width: '+ 
parseInt(data.qtd_actual_vs_qtd_st*100)+'%">'+ parseInt(data.qtd_actual_vs_qtd_st*100)+'%</span></div></progress>'+
'<p style="width:100%;font-size:12px;" data-value="'+parseInt((data.ytd_actual_vs_ytd_st || 0)*100)+
'">YTD_Actual_VS_YTD_ST</p><progress max="100" value="'+ parseInt(data.ytd_actual_vs_ytd_st*100) +
'" class="YTD_Actual_VS_YTD_ST"><div class="progress-bar"><span style="width: '+ 
parseInt(data.ytd_actual_vs_ytd_st*100)+'%">'+ parseInt(data.ytd_actual_vs_ytd_st*100)+'%</span></div></progress>' + 
'<span class="spanStyle">Buscit_LM:</span><span class="spanStyle" style="margin-right:20px">'+ toThousands(parseInt((data.biscuit_lm || 0)/1000))+'k</span>'+
'<span class="spanStyle">Chcolate_LM:</span><span class="spanStyle" style="margin-right:20px">'+ toThousands(parseInt((data.chocolate_lm || 0)/1000))+'k</span>'+
'<span class="spanStyle">Gum_LM:</span><span class="spanStyle" style="margin-right:20px">'+ toThousands(parseInt((data.gum_lm || 0)/1000))+'k</span><br/>'+
'<a href="#" id="detail" onclick="_onClick(' + index + ')">查看详情</a>';
marker.on('click',function(e){
    markerClick(e,index);
    $('.amap-info-close').click(function(event) {
        intervalStart();
    });
})
marker.subMarkers = [];
if(!hide){  
    marker.setMap(map)
}
return marker;
}



var dealerMarker=function(data){
var icon;
var width;
if(data.gs_tm < 0){
    if(data.ytd_2017>1028181){
        width=24;
    }
    else if(data.ytd_2017>133822&&data.ytd_2017<1028181){
        width=16;
    }
    else if(data.ytd_2017<133822){
        width=10;
    }
    icon = new AMap.Icon({
        // image : 'http://wyc-store.oss-cn-shanghai.aliyuncs.com/images/DataV%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91/%E7%BA%A2%E8%89%B2%281%29.png   ',//24px*24px
        //icon可缺省，缺省时为默认的蓝色水滴图标，
         image : 'http://wyc-store.oss-cn-shanghai.aliyuncs.com/images/DataV%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91/%E9%BB%84%E8%89%B2%281%29.png',
        imageSize : new AMap.Size( width, width)
    });
}
else{
    if(data.ytd_2017>10199706){
        width=24;
    }
    else if(data.ytd_2017>1001783&&data.ytd_2017<10199706){
        width=16;
    }
    else if(data.ytd_2017<1001783){
        width=10;
    }
    if(data.is_incre){
        icon = new AMap.Icon({
            image : 'http://wyc-store.oss-cn-shanghai.aliyuncs.com/images/DataV%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91/%E8%93%9D%E7%BB%BF%281%29.png',//24px*24px
            //icon可缺省，缺省时为默认的蓝色水滴图标，
            imageSize : new AMap.Size(width,width)
        });
    }
    else {
        icon = new AMap.Icon({
            image : 'http://wyc-store.oss-cn-shanghai.aliyuncs.com/images/DataV%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91/%E9%BB%84%E8%89%B2%281%29.png',//24px*24px
            //icon可缺省，缺省时为默认的蓝色水滴图标，
            imageSize : new AMap.Size(width,width)
        });
    
   }
}

var dealer = new AMap.Marker({
        icon:icon,
        title:data.name,
        position: [data.lng,data.lat],
        zIndex: 150,
        offset: new AMap.Pixel(0,0)
    });
dealer.content='<p>'+ data.customer_name+'<p>';

dealer.on('click',function(e){

    dealerMarkerClick(e,data.adcode,data.customer_code);

});
// dealer.setMap(map);
map.add(dealer);
map.setFitView(dealers);

return dealer;
}
var dealers=[];
var _onClick = function(index) {
$.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1063&filters=adcode&adcode=' + index,
    type: 'get',
    dataType: 'jsonp',
    success:function(data){

        if(data && data.length){

            map.remove(markers);
            infoWindow.close();
            for(var i = 0;i<data.length;i+=1){
                var dealer=dealerMarker(data[i]);

                dealers.push(dealer);
            }

        }
    },
});


// if(index){
//     map.add(markers[index].subMarkers);
//     map.setFitView(markers[index].subMarkers);
//     map.remove(markers);
// }
 infoWindow.close();
clearInterval(intarval);
}

var createName = function(data) {
    var nameDiv='<div class="nameSpan">'+ data.province +'</div>';
    var name = new AMap.Marker({
        content: nameDiv,
        title:data.name,
        position: [data.lng,data.lat],
        zIndex: 150,
        offset: new AMap.Pixel(-15,0)
    });
       name.setMap(map);
           return name;
};
//门店数据
var city = function(province) {
    map.remove(provinceNumMarkers);

    $.ajax({
        url: '/city',
        type: 'post',
        dataType: 'json',
        data:{'province':province} ,
        success:function(data){
            points(data);
        },
        error:function(err){
            console.log(err);
        }
    });
};
var cityMarkers =[];
var cluster;
var pointslng,pointslat;
var points = function(data){
    var mdIcon = new AMap.Icon({
        image : './img/旗子.png',//24px*24px
        //icon可缺省，缺省时为默认的蓝色水滴图标，
        imageSize : new AMap.Size(24,24)
    });
    for(var i=0;i<data.length-1;i+=1){
        pointslng = parseFloat(data[i].split(',')[2].replace(/"/g,''));
        pointslat = parseFloat(data[i].split(',')[3].replace(/"/g,''));
        cityMarkers.push(new AMap.Marker({
            position:[pointslng,pointslat],
            icon: mdIcon,
            offset: new AMap.Pixel(-15,-15)
        }))
    }
    var count  = cityMarkers.length;
    var _renderCluserMarker = function (context) {
        var factor = Math.pow(context.count/count,1/18)
        var div = document.createElement('div');
        var Hue = 180 - factor* 180;
        var bgColor = 'hsla('+Hue+',100%,50%,0.7)';
        var fontColor = 'hsla('+Hue+',100%,20%,1)';
        var borderColor = 'hsla('+Hue+',100%,40%,1)';
        var shadowColor = 'hsla('+Hue+',100%,50%,1)';
        div.style.backgroundColor = bgColor
        var size = Math.round(30 + Math.pow(context.count/count,1/5) * 20);
        div.style.width = div.style.height = size+'px';
        div.style.border = 'solid 1px '+ borderColor;
        div.style.borderRadius = size/2 + 'px';
        div.style.boxShadow = '0 0 1px '+ shadowColor;
        div.innerHTML = context.count;
        div.style.lineHeight = size+'px';
        div.style.color = fontColor;
        div.style.fontSize = '14px';
        div.style.textAlign = 'center';
        context.marker.setOffset(new AMap.Pixel(-size/2,-size/2));
        context.marker.setContent(div)
    }

    cluster = new AMap.MarkerClusterer(map,cityMarkers,{
        gridSize:80,
        renderCluserMarker:_renderCluserMarker
    });

    AMapUI.load(['ui/geo/DistrictExplorer','ui/misc/PointSimplifier', 'lib/$'], function(DistrictExplorer, PointSimplifier, $) {

        if (!PointSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
        }

        // var pointSimplifierIns = new PointSimplifier({
        //     map: map, //所属的地图实例
        //
        //     getPosition: function(item) {
        //         if (!item) {
        //             return null;
        //         }
        //         //返回经纬度
        //         return [item.split(',')[2], item.split(',')[3]];
        //     },
        //     getHoverTitle: function(dataItem, idx) {
        //         return dataItem.address;
        //     },
        //     renderOptions: {
        //         //点的样式
        //         pointStyle: {
        //             width: 0,
        //             height: 0
        //         },
        //         //鼠标hover时的title信息
        //         hoverTitleStyle: {
        //             position: 'top'
        //         }
        //     }
        // });
        //
        // window.pointSimplifierIns = pointSimplifierIns;
        // pointSimplifierIns.setData(data);


        // pointSimplifierIns.on('pointClick pointMouseover pointMouseout', function(e, record) {
        //     //console.log(e.type, record);
        // });
        var colors = [

        ];
        var districtExplorer = window.districtExplorer = new DistrictExplorer({
            map: map,
            eventSupport: true, //打开事件支持
            preload: [100000] //预加载全国
        });

        //要聚合的点列表
        var lngLatList;

        //当前聚焦的区域
        var currentAreaNode = null;

        //鼠标hover提示内容
        var $tipMarkerContent = $('<div class="tipMarker top"></div>');



        //根据Hover状态设置相关样式
        function toggleHoverFeature(feature, isHover, position) {



            if (!feature) {
                return;
            }

            var props = feature.properties;

            if (isHover) {




            }

            $('#area-tree').find('h2[data-adcode="' + props.adcode + '"]').toggleClass('hover', isHover);

            //更新相关多边形的样式
            var polys = districtExplorer.findFeaturePolygonsByAdcode(props.adcode);
            for (var i = 0, len = polys.length; i < len; i++) {

                polys[i].setOptions({
                    fillOpacity: isHover ? 0.5 : 0.2
                });
            }
        }



        //监听鼠标在feature上滑动
        districtExplorer.on('featureMousemove', function(e, feature) {
            //更新提示位置

        });

        //feature被点击
        districtExplorer.on('featureClick', function(e, feature) {

            var props = feature.properties;

            //如果存在子节点
            if (props.childrenNum > 0) {
                //切换聚焦区域
                switch2AreaNode(props.adcode);
            }
        });

        //外部区域被点击
        districtExplorer.on('outsideClick', function(e) {

            districtExplorer.locatePosition(e.originalEvent.lnglat, function(error, routeFeatures) {

                if (routeFeatures && routeFeatures.length > 1) {
                    //切换到省级区域
                    switch2AreaNode(routeFeatures[1].properties.adcode);
                } else {
                    //切换到全国
                    switch2AreaNode(100000);
                }

            }, {
                levelLimit: 2
            });
        });


        //绘制区域面板的节点
        function renderAreaPanelNode(ele, props, color) {

            var $box = $('<li/>').addClass('lv_' + props.level);

            var points = groupedPointsCache[props.adcode] || [];

            var $h2 = $('<h2/>').addClass('lv_' + props.level).attr({
                'data-adcode': props.adcode,
                'data-level': props.level,
                'data-children-num': props.childrenNum || void(0),
                // 'data-center': props.center.join(',')
            }).html(props.name + '(' + points.length + ')').appendTo($box);

            if (color) {
                $h2.css('borderColor', color);
            }

            //如果存在子节点
            if (props.childrenNum > 0) {

                //显示隐藏
                $('<div class="showHideBtn"></div>').appendTo($box);

                //子区域列表
                $('<ul/>').addClass('sublist lv_' + props.level).appendTo($box);

                $('<div class="clear"></div>').appendTo($box);

                if (props.level !== 'country') {
                    $box.addClass('hide-sub');
                }
            }

            $box.appendTo(ele);
        }


        //填充某个节点的子区域列表
        function renderAreaPanel(areaNode) {

            var props = areaNode.getProps();

            var $subBox = $('#area-tree').find('h2[data-adcode="' + props.adcode + '"]').siblings('ul.sublist');

            if (!$subBox.length) {
                //父节点不存在，先创建
                renderAreaPanelNode($('#area-tree'), props);
                $subBox = $('#area-tree').find('ul.sublist');
            }

            if ($subBox.attr('data-loaded') === 'rendered') {
                return;
            }

            $subBox.attr('data-loaded', 'rendered');

            var subFeatures = areaNode.getSubFeatures();

            subFeatures.sort(function(f1, f2) {

                var props1 = areaNode.getPropsOfFeature(f1),
                    props2 = areaNode.getPropsOfFeature(f2);

                var points1 = groupedPointsCache[props1.adcode] || [],
                    points2 = groupedPointsCache[props2.adcode] || [];

                return points2.length - points1.length;

            });

            //填充子区域
            for (var i = 0, len = subFeatures.length; i < len; i++) {
                renderAreaPanelNode($subBox, areaNode.getPropsOfFeature(subFeatures[i]), colors[i % colors.length]);
            }

            return $subBox;
        }

        //绘制某个区域的边界
        function renderAreaPolygons(areaNode) {

            //更新地图视野
            map.setBounds(areaNode.getBounds(), null, null, true);

            //清除已有的绘制内容
            districtExplorer.clearFeaturePolygons();

            //绘制子区域
            districtExplorer.renderSubFeatures(areaNode, function(feature, i) {

                var strokeColor = colors[colors.length - 1 - i % colors.length];

                return {
                    cursor: 'default',
                    bubble: true,
                    strokeColor: strokeColor, //线颜色
                    strokeOpacity: 1, //线透明度
                    strokeWeight: 1, //线宽
                    fillColor: 'transparent', //填充色
                    fillOpacity: 0.35, //填充透明度
                };
            });

            //绘制父区域
            districtExplorer.renderParentFeature(areaNode, {
                cursor: 'default',
                bubble: true,
                strokeColor: 'black', //线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 1, //线宽
                fillColor: null, //填充色
                fillOpacity: 0.35, //填充透明度
            });
        }

        //切换区域后刷新显示内容
        function refreshAreaNode(areaNode) {

            districtExplorer.setHoverFeature(null);

            renderAreaPolygons(areaNode);

            //更新选中节点的class
            var $nodeEles = $('#area-tree').find('h2');

            $nodeEles.removeClass('selected');

            var $selectedNode = $nodeEles.filter('h2[data-adcode=' + areaNode.getAdcode() + ']').addClass('selected');

            //展开下层节点
            $selectedNode.closest('li').removeClass('hide-sub');

            //折叠下层的子节点
            $selectedNode.siblings('ul.sublist').children().addClass('hide-sub');
        }

        //切换区域
        function switch2AreaNode(adcode, callback) {

            if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
                return;
            }

            loadAreaNode(adcode, function(error, areaNode) {

                if (error) {

                    if (callback) {
                        callback(error);
                    }

                    return;
                }

                currentAreaNode = window.currentAreaNode = areaNode;

                //设置当前使用的定位用节点
                districtExplorer.setAreaNodesForLocating([currentAreaNode]);

                refreshAreaNode(areaNode);

                if (callback) {
                    callback(null, areaNode);
                }
            });
        }


        var groupedPointsCache = {};

        function getGroupedPoints(adcode) {
            return groupedPointsCache[adcode] || lngLatList;
        }

        //保留中间聚合结果
        function saveGroupedPoints(areaNode, groups) {

            for (var i = 0, len = groups.length; i < len; i++) {

                var subFeature = groups[i].subFeature; //所属子区域

                if (!subFeature) {
                    groupedPointsCache['-out-' + areaNode.getAdcode()] = groups[i].points;
                    continue;
                }

                groupedPointsCache[subFeature.properties.adcode] = groups[i].points;
            }
        }

        //这里创建一个海量点组件
        var pointSimplifierIns;



        pointSimplifierIns = new PointSimplifier({
            zIndex: 115,
            autoSetFitView: false,
            map: map, //所属的地图实例

            getPosition: function(item) {
                return item.pos;
            },
            getHoverTitle: function(item, idx) {
                if (item.gid === -1) {
                    return '区域外';
                }
            },
            //使用GroupStyleRender
            renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
            renderOptions: {
                //点的样式
                pointStyle: {
                    fillStyle: 'transparent',
                    width: 0,
                    height: 0
                },
                getGroupId: function(item) {
                    return item.gid;
                },
                groupStyleOptions: function(gid) {

                    //未知区域


                    return {
                        pointStyle: {
                            fillStyle: 'transparent',
                            //strokeStyle: 'rgba(255,255,255,0.3)',
                            lineWidth: 1
                        }
                    };
                }

            }
        });

        function renderGroupedPoints(groups) {

            var pointsData = [];

            for (var i = 0, len = groups.length; i < len; i++) {

                var gid = groups[i].subFeatureIndex;

                for (var j = 0, jlen = groups[i].points.length; j < jlen; j++) {

                    pointsData.push({
                        gid: gid,
                        pos: groups[i].points[j]
                    });
                }
            }

            pointSimplifierIns.setData(pointsData);
        }

        //加载区域
        function loadAreaNode(adcode, callback) {

            districtExplorer.loadAreaNode(adcode, function(error, areaNode) {

                if (error) {

                    if (callback) {
                        callback(error);
                    }

                    console.error(error);

                    return;
                }

                var points = getGroupedPoints(adcode);

                //当前子区域聚合
                var groups = areaNode.groupByPosition(points, function(item) {
                    return item;
                });

                saveGroupedPoints(areaNode, groups);

                var $subBox = renderAreaPanel(areaNode);

                if (groups.length &&
                    !groups[groups.length - 1].subFeature) {

                    renderAreaPanelNode($subBox, {
                        adcode: '-out-' + areaNode.getAdcode(),
                        name: '区域外',
                        // center: groups[groups.length - 1].points[0]
                    }, 'gray');
                }

                renderGroupedPoints(groups);

                if (callback) {
                    callback(null, areaNode);
                }
            });
        }

        $('#area-tree').on('mouseenter mouseleave', 'h2[data-adcode]', function(e) {

            if (e.type === 'mouseleave') {
                districtExplorer.setHoverFeature(null);
                return;
            }

            var adcode = $(this).attr('data-adcode');

            districtExplorer.setHoverFeature(currentAreaNode.getSubFeatureByAdcode(adcode));
        });


        $('#area-tree').on('click', 'h2[data-children-num]', function() {

            var adcode = $(this).attr('data-adcode');

            switch2AreaNode(adcode);
        });

        $('#area-tree').on('click', '.showHideBtn', function() {

            var $li = $(this).closest('li');

            $li.toggleClass('hide-sub');

            if (!$li.hasClass('hide-sub')) {

                //子节点列表被展开
                var $subList = $li.children('ul.sublist');

                //尚未加载
                if (!$subList.attr('data-loaded')) {

                    $subList.attr('data-loaded', 'loading');

                    $li.addClass('loading');

                    //加载
                    loadAreaNode($li.children('h2').attr('data-adcode'), function() {

                        $li.removeClass('loading');
                    });
                }
            }
        });
        var lngLats = [];
                for (var i = 0, len = data.length; i < len; i++) {

                    if (!data[i]) {
                        continue;
                    }

                    var parts = data[i].split(',');

                    lngLats.push([parseFloat(parts[2].replace(/"/g,'')), parseFloat(parts[3].replace(/"/g,''))]);
                }

                lngLatList = lngLats;

                groupedPointsCache['100000'] = lngLats;

                //加载全国
                switch2AreaNode(100000);


        pointSimplifierIns.on('didRender', function(e, record) {

            var fItems = record.leftNumFunnel;
            var lines = [];

            lines.push('<li class="filter"><i class="desc"> 总共门店数 </i></li>');
            lines.push('<li class="leftNum">' +  '剩余' +
                '：<i class="num">' +
                fItems[0].leftNum.toLocaleString() +
                '</i></li>');
            lines.push('<li class="filter"><i class="desc"> 可视区域内的门店 </i></li>');
            lines.push('<li class="leftNum">' + '剩余' +
                '：<i class="num">' +
                fItems[3].leftNum.toLocaleString() +
                '</i></li>');

            $('#funnelPanel').html(lines.join(''));
        });
    });



};
$('<div id="loadingTip">加载数据，请稍候...</div>').appendTo(document.body);
$.get("./acn_stores_pos.csv",function(csv){
    $('#loadingTip').remove();
    var dataStr = new String(csv);
    var lines = dataStr.split('\n');

    points(lines);
});
var provinceContent = function(data, num, index, province){
    var ContentDiv = '<div class="ContentDiv">'+ num +'</div>';
    var contentNum = new AMap.Marker({
        content: ContentDiv,
        title:data.name,
        position: [data.lng,data.lat],
        zIndex: 160,
        offset: new AMap.Pixel(-30,-30)
    });
    contentNum.on('click',function(e){

        city(province);
        $('#funnelPanel1').css('display','none');
        $('#funnelPanel').css('display','block');
    });
    contentNum.setMap(map);
    return contentNum;
}
var markers = [];
var names = [];
var provinceNumMarkers = [];
$.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1062',
    type: 'get',
    dataType: 'jsonp',
    success:function(data){
        for (var i = 0; i < data.length; i += 1) {
            // var marker = createMarker(data[i],false,data[i].adcode);
            // markers.push(marker);
            var name=createName(data[i])
            names.push(name);
        }
    }
});

var bigArea=function(id){
$.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1064&filters=id',
    type: 'get',
    dataType: 'jsonp',
    data:{'id':id},
    success:function(data){
        var dataset=data[0];
        // processChart(dataset);

        $('.MTD h1').html(dataset.regiongroup +' MTD :' + toThousands(parseInt(dataset.mtd/1000))+'k<span class="pro_num">Active Dealers:'+ dataset.active_dealers+'</span>');
        $('.GS').html('<h1>Last Working day GS ￥ <span >'+ (toThousands(parseInt(dataset.last_working_day_gs/1000)) || 0) +
            'k</span> With <span>'+ (dataset.last_working_day_orders || 0) +' </span>Orders By <span>'
            + (dataset.dts_with_orders_daily || 0) +'</span> DTS On an average Order Size ￥<span>'
            + (toThousands(parseInt(dataset.last_working_day_gs/dataset.last_working_day_orders/1000)) ||  0)+'k</span></h1>');
        DtOrder_bar(dataset);
        DT_bar(dataset);
        avgChart_barLine(dataset);
    }
});
$.ajax({
    url: 'http://datam.youlishu.com/dataset/json?oid=1047&filters=area',
    type: 'get',
    dataType: 'jsonp',
    data:{'area':id},
    success:function(data){
        for(var i=0;i<=data.length;i+=1){
            bigRender(data[i].adcode,"#158ff1");    
        }
    }
});
};
var allNum=0;
// for(var p=0;p<provinceData.length;p++){
//     allNum +=provinceData[p].num;
//     ((function(p){
//         $.ajax({
//             url: 'http://datam.youlishu.com/dataset/json?oid=1062&filters=province&province='+provinceData[p].province,
//             type: 'get',
//             async: false,
//             dataType: 'jsonp',
//             success:function(data){
//                 var provinceNumMarker = provinceContent(data[0],provinceData[p].num,p,provinceData[p].province);
//                 provinceNumMarkers.push(provinceNumMarker);
//             }
//         });
//     }(p)));
//
// }
// loudou(allNum);
function loudou(allNum){
    var lines = [];

    lines.push('<li class="filter"><i class="desc"> 总共门店数 </i></li>');
    lines.push('<li class="leftNum">' +  '总体' +
        '：<i class="num">' +
        allNum +
        '</i></li>');
    lines.push('<li class="filter"><i class="desc"> 可视区域内的门店 </i></li>');
    lines.push('<li class="leftNum">' + '剩余' +
        '：<i class="num">' +
        allNum +
        '</i></li>');

    $('#funnelPanel1').html(lines.join(''));
};

var _onZoomEnd = function(e) {
    if (map.getZoom() < 5) {
        // map.add(provinceNumMarkers);
        // cluster.removeMarkers(cityMarkers);
        // cityMarkers =[];
        // $('#funnelPanel1').css('display','block');
        // $('#funnelPanel').css('display','none');


    }
}
//map.setFitView();
AMap.event.addListener(map, 'zoomend', _onZoomEnd);
$('.Nation').click(function(){
 map.setZoomAndCenter(5,[106.485352, 34.603692]);
 districtExplorer.clearFeaturePolygons();
 bigArea(1000);
});
$('.east').click(function(){
 map.setZoomAndCenter(6,[118.850097, 32.472695]);
 districtExplorer.clearFeaturePolygons();
 bigArea(1001);
});
$('.west').click(function(){
 map.setZoomAndCenter(5,[97.3828125, 33.284619]);
 districtExplorer.clearFeaturePolygons();
 bigArea(1004);
});
$('.south').click(function(){
 map.setZoomAndCenter(6,[112.609863, 28.2269700]);
 districtExplorer.clearFeaturePolygons();
 bigArea(1003);
});
$('.north').click(function(){
 map.setZoomAndCenter(5,[117.026367, 40.946713]);
 districtExplorer.clearFeaturePolygons();
 bigArea(1002);
});
$('.ka').click(function(){ 
 bigArea(1005);
});
$('.ec').click(function(){
 bigArea(1006);
});
$('.afh').click(function(){
 bigArea(1007); 
});
$('.eB2B').click(function(){
 bigArea(1008); 
});
$('.unmatched').click(function(){
 bigArea(1009); 
});

// 隐藏按钮
$('.show_button').click(function() {
    if($(this).attr('title') === 'first'){
        $('.button, .direction_button, .direction, .show_tab').animate({right: document.documentElement.clientWidth>750?"27%":"30%"},1000);
        $('.amap-toolbar').animate({left: document.documentElement.clientWidth>750?"26%":"30%"}, 1000);
        $('.dealer-lagend').animate({
            "display":"inline-block",
            "right":document.documentElement.clientWidth>750?"27%":"30%"  
        });
        $(this).html('隐藏');

        $('.sidebar ').animate({
            right: 0,
        }, 1000);
        $('.left_sidebar ').animate({
            left: 0,
        }, 1000);
    }else {
        $('.button, .direction_button,.direction,.dealer-lagend, .show_tab,.amap-toolbar').animate({right: 0},1000);
        $('.amap-toolbar').animate({left: 0}, 1000);
        $(this).html('显示');
        $(this).attr('title','first');
        $('.sidebar ').animate({
            right: '-26%',
        }, 1000);
        $('.left_sidebar ').animate({
            left: '-26%',
        }, 1000);
    }
    
});

$('.areaShow').click(function() {
    if($(this).attr('title') === 'first'){
        $(this).attr('title','second');
        $('#container').css("padding-right","300px");
        $('#panel').css("display","block");
        $('#funnelPanel').css("right","310px");
        $('.direction_button ,.button').css("right","300px");
        $(this).val('隐藏区域定位');
    }else {
        $(this).attr('title','first');
        $('#container').css("padding-right","0px");
        $('#panel').css("display","none");
        $('#funnelPanel').css("right","10px");
        $('.direction_button ,.button').css("right","0px");
        $(this).val('展示区域定位');
    }

});
// tab
$('.tab_button1').click(function(event) {
    $('.left_sidebar1, .sidebar1').css('display','block');
    $('.left_sidebar2, .sidebar2').css('display','none');
});
$('.tab_button2').click(function(event) {
    $('.left_sidebar1, .sidebar1').css('display','none');
    $('.left_sidebar2, .sidebar2').css('display','block');

});
// classify
$('.classify').click(function(){
        $.ajax({
        url: 'http://datam.youlishu.com/dataset/json?oid=1071&filters=category&category='+$(this).attr('title'),
        type: 'get',
        dataType: 'jsonp',
        success:function(data){
            monthlySale(data[0]);
            $('.mtd_process').html('<div>MTD:</div><div><p style="width:100%;font-size:12px; margin:5px 0;" data-value="'+parseInt(data[0].mtd_vs_st*100)+'">Pace</p>'+
        '<progress max="100" value="'+parseInt(data[0].mtd_vs_st*100)+'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width:50%">'+parseInt(data[0].mtd_vs_st*100)+'%</span></div></progress></div>');
        $('.qtd_process').html('<div>QTD:</div><div><p style="width:100%;font-size:12px; margin:5px 0;" data-value="'+parseInt(data[0].qtd_vs_st*100)+'">Pace</p>'+
            '<progress max="100" value="'+parseInt(data[0].qtd_vs_st*100)+'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width:50%">'+parseInt(data[0].qtd_vs_st*100)+'%</span></div></progress></div>');
        $('.ytd_process').html('<div>YTD:</div><div><p style="width:100%;font-size:12px; margin:5px 0;" data-value="'+parseInt(data[0].ytd_vs_st*100)+'">Pace</p>'+
            '<progress max="100" value="'+parseInt(data[0].ytd_vs_st*100)+'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width:50%">'+parseInt(data[0].ytd_vs_st*100)+'%</span></div></progress></div>');
        }
    });
});
$.ajax({
        url: 'http://datam.youlishu.com/dataset/json?oid=1072&filters=category&category=Biscuits',
        type: 'get',
        dataType: 'jsonp',
        success:function(data){
            $('.Biscuits-third-sort').html('');
            $.each(data,function(index, el) {
                $('.Biscuits-third-sort').append('<li onclick="liMouseMove(this,'+el.pace+','+ el.is_on_track+','+el.dp_vs_py+')" >'+el.grp3+'</li>');
            });
        }
    });
$.ajax({
        url: 'http://datam.youlishu.com/dataset/json?oid=1072&filters=category&category=Chocolate',
        type: 'get',
        dataType: 'jsonp',
        success:function(data){
            $('.Chocolate-third-sort').html('');
            $.each(data,function(index, el) {
                $('.Chocolate-third-sort').append('<li onclick="liMouseMove(this,'+el.pace+','+ el.is_on_track+','+el.dp_vs_py+')">'+el.grp3+'</li>');
            });
        }
    });
$.ajax({
        url: 'http://datam.youlishu.com/dataset/json?oid=1072&filters=category&category=Candy',
        type: 'get',
        dataType: 'jsonp',
        success:function(data){
            $('.Candy-third-sort').html('');
            $.each(data,function(index, el) {
                $('.Candy-third-sort').append('<li onclick="liMouseMove(this,'+el.pace+','+ el.is_on_track+','+el.dp_vs_py+')">'+el.grp3+'</li>');
            });
        }
    });
$.ajax({
        url: 'http://datam.youlishu.com/dataset/json?oid=1072&filters=category&category=Gum',
        type: 'get',
        dataType: 'jsonp',
        success:function(data){
            $('.Gum-third-sort').html('');
            $.each(data,function(index, el) {
                $('.Gum-third-sort').append('<li onclick="liMouseMove(this,'+el.pace+','+ el.is_on_track+','+el.dp_vs_py+')">'+el.grp3+'</li>');
            });
        }
    });
$.ajax({
        url: 'http://datam.youlishu.com/dataset/json?oid=1072&filters=category&category=Beverage',
        type: 'get',
        dataType: 'jsonp',
        success:function(data){
            $('.Beverage-third-sort').html('');
            $.each(data,function(index, el) {
                $('.Beverage-third-sort').append('<li onclick="liMouseMove(this,'+el.pace+','+ el.is_on_track+','+el.dp_vs_py+')">'+el.grp3+'</li>');
            });
        }
    });
$.ajax({
        url: 'http://datam.youlishu.com/dataset/json?oid=1072&filters=category&category=Cheese',
        type: 'get',
        dataType: 'jsonp',
        success:function(data){
            $('.Cheese-third-sort').html('');
            $.each(data,function(index, el) {
                $('.Cheese-third-sort').append('<li onclick="liMouseMove(this,'+el.pace+','+ el.is_on_track+','+el.dp_vs_py+')">'+el.grp3+'</li>');
            });
        }
    });

function liMouseMove(obj,pace,track,py){
         e =  window.event;
        $('.third-cont').css({
            display: 'block',
            left: e.pageX,
            top: e.pageY
        });

        var thirdContBackground1 = track === 1?'#1afbd9':'#e84065';
        var thirdContStatus1 = track === 1?'on track':'off track';
        var thirdContBackground2 = py === 1?'#1afbd9':'#e84065';
        var thirdContStatus2 = py === 1?'on track':'off track';
        $('.third-cont').html('<div class="third-cont-margin"><h1>'+$(obj).html()+'</h1>'+
            '<p style="width:100%;font-size:12px; margin:5px 0;" data-value="'+parseInt(pace*100)+'">Pace</p>'+
            '<progress max="100" value="'+parseInt(pace*100)+'" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar">'+
            '<span style="width:50%">'+parseInt(pace*100)+'%</span></div></progress><div class="third-cont-track">'+
            '<p><span class="classify_cont third-cont-track-span" style="background-color:'+thirdContBackground1+'"></span><span>'+thirdContStatus1+'</span></p>'+
            '<p><span class="classify_cont third-cont-track-span" style="background-color:'+thirdContBackground2+'"></span><span>'+thirdContStatus2+'</span></p></div></div>');
}

