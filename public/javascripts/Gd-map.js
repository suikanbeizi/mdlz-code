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

 // liquidFill();
 fenqu();
 kapie();
 ecpie();
 afhpie();
 eastpie();
 westpie();
 northpie();
 southpie();
 unmatchedpie();
 pbChart();
 CandyChart();
 gumChart();
 biscuitChart();
 chocolateChart();
 yoyChart();
 cheeseChart();
 var map = new AMap.Map('container', {

     resizeEnable: true,
     zoom: 5,
     zooms:[4,13],
     center: [110.485352, 31.603692],
     mapStyle:'amap://styles/2b9ebef8e258fa76553520776ee11a14',
     labelzIndex:120
 });
 var trafficLayer = new AMap.TileLayer.Traffic({
     zIndex: 100
 });
 //实时交通
 // trafficLayer.setMap(map);
//卫星地图切换
 AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {

     var layerCtrl = new BasicControl.LayerSwitcher({
         //my-red 见上方style
         theme: 'my-red',
         position: 'br'
     });

     map.addControl(layerCtrl);
 });
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
           
        function toggleHoverFeature(feature) {
             if (!feature) {
                 return;
             }
             var props = feature.properties;

             //更新相关多边形的样式
             var polys = districtExplorer.findFeaturePolygonsByAdcode(props.adcode);
             render(props.adcode,"#158ff1");
             // clearInterval(intarval);
              window.open('http://datav.emdlz.com.cn:2017/dealer?adcode='+props.adcode);
             //  $.ajax({
             //     url: 'http://datam.youlishu.com/dataset/json?oid=1062&filters=adcode&adcode='+props.adcode,
             //     type: 'get',
             //     dataType: 'jsonp',
             //     success:function(data){
             //         infoWindow.setContent('<p>' + data[0].name + '</p><p><span>Yesterday_GS:</span>'+ (data[0].Yesterday_GS || 0)+'</p><p><span>Yesterday_Orders:</span>'+ (data[0].Last_Working_Day_Orders || 0)+'</p><p><span>2015_province_gs:</span>' + toThousands(parseInt(data[0].GS_2015/1000)) + 
             //             'k</p><p><span>2016_province_gs:</span>' + toThousands(parseInt(data[0].GS_2016/1000)) + 'k</p><p><span>2017_province_ytd:</span>' + 
             //             toThousands(parseInt(data[0].YTD_2017/1000)) + 'k</p>' + 
             //             '<a href="http://www.youlishu.com/yizi/second/second.html?adcode='+data[0].adcode+'" target="view_window id="detail">查看详情</a>');
             //         infoWindow.open(map, [data[0].lng,data[0].lat]);
             //     },
             // });
         }

         districtExplorer.on('featureClick', function(e, feature) {
             toggleHoverFeature(feature);
         });

         districtExplorer.on('outsideClick', function(e) {
          districtExplorer.clearFeaturePolygons();    
          });

     });

 // AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {
 //
 //     if (!PathSimplifier.supportCanvas) {
 //         alert('当前环境不支持 Canvas！');
 //         return;
 //     }
 //
 //     //just some colors
 //
 //     var pathSimplifierIns = new PathSimplifier({
 //         zIndex: 110,
 //         //autoSetFitView:false,
 //         map: map, //所属的地图实例
 //
 //         getPath: function(pathData, pathIndex) {
 //
 //             return pathData.path;
 //         },
 //         getHoverTitle: function(pathData, pathIndex, pointIndex) {
 //
 //             if (pointIndex >= 0) {
 //                 //point
 //                 return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
 //             }
 //
 //             return pathData.name + '，点数量' + pathData.path.length;
 //         },
 //         renderOptions: {
 //             pathLineStyle: {
 //                 dirArrowStyle: false,
 //                 pathLineStyle: 0
 //             },
 //             getPathStyle: function(pathItem, zoom) {
 //
 //                 var color = 'transparent',
 //                     lineWidth = 1;
 //
 //                 return {
 //                     pathLineStyle:{
 //                         lineWidth: 1,
 //                         strokeStyle: 'rgba(204, 63, 88,0)',
 //                         borderWidth: 1,
 //                         borderStyle: 'rgba(204, 63, 88,0)',
 //                     },
 //                     pathLineSelectedStyle: {
 //                         lineWidth: 1,
 //                         strokeStyle: 'rgba(204, 63, 88,0)',
 //                         borderWidth: 1,
 //                         borderStyle: 'rgba(204, 63, 88,0)',
 //                     },
 //                     pathNavigatorStyle: {
 //                         fillStyle: color
 //                     },
 //                     pathLineHoverStyle:{
 //                         disableIfSelected:false
 //                     }
 //
 //             };
 //             }
 //         }
 //     });
 //
 //     window.pathSimplifierIns = pathSimplifierIns;
 //     $.getJSON('http://a.amap.com/amap-ui/static/data/big-routes.json', function(d) {
 //
 //         pathSimplifierIns.setData(d);
 //
 //         //initRoutesContainer(d);
 //
 //         function onload() {
 //             pathSimplifierIns.renderLater();
 //         }
 //
 //         function onerror(e) {
 //             alert('图片加载失败！');
 //         }
 //
 //         //创建一个巡航器
 //         var navg0 = pathSimplifierIns.createPathNavigator(1, {
 //             loop: true, //循环播放
 //             speed: 500000,
 //             pathNavigatorStyle: {
 //                 //使用图片
 //                 content: PathSimplifier.Render.Canvas.getImageContent('./img//car.png', onload, onerror),
 //                 strokeStyle: null,
 //                 fillStyle: null,
 //                 //经过路径的样式
 //                 pathLinePassedStyle: {
 //                         lineWidth: 1,
 //                         strokeStyle: 'rgba(204, 63, 88,0)',
 //                         borderWidth: 1,
 //                         borderStyle: 'rgba(204, 63, 88,0)',
 //
 //                 }
 //             }
 //         });
 //
 //         navg0.start();
 //
 //
 //         var navg1 = pathSimplifierIns.createPathNavigator(0, {
 //             loop: true,
 //             speed: 1000000,
 //             pathNavigatorStyle: {
 //                 width: 24,
 //                 height: 24,
 //                 //使用图片
 //                 content: PathSimplifier.Render.Canvas.getImageContent('./img//car.png', onload, onerror),
 //                 strokeStyle: null,
 //                 fillStyle: null,
 //
 //                 //经过路径的样式
 //                 pathLinePassedStyle: {
 //                     lineWidth: 1,
 //                     strokeStyle: 'rgba(204, 63, 88,0)',
 //                     borderWidth: 1,
 //                     borderStyle: 'rgba(204, 63, 88,0)',
 //                 }
 //             }
 //         });
 //
 //         navg1.start();
 //
 //         var navg2 = pathSimplifierIns.createPathNavigator(7, {
 //             loop: true,
 //             speed: 500000,
 //             pathNavigatorStyle: {
 //                 width: 16,
 //                 height: 32,
 //                 content: PathSimplifier.Render.Canvas.getImageContent('./img/car.png', onload, onerror),
 //                 strokeStyle: null,
 //                 fillStyle: null
 //             }
 //         });
 //
 //         navg2.start();
 //
 //         var navg3 = pathSimplifierIns.createPathNavigator(5, {
 //             loop: true,
 //             speed: 500000,
 //             pathNavigatorStyle: {
 //                 autoRotate: false, //禁止调整方向
 //                 pathLinePassedStyle: null,
 //                 width: 24,
 //                 height: 24,
 //                 content: PathSimplifier.Render.Canvas.getImageContent('./img//car.png', onload, onerror),
 //                 strokeStyle: null,
 //                 fillStyle: null
 //             }
 //         });
 //
 //         navg3.start();
 //     });
 // });


 var infoWindow = new AMap.InfoWindow({
     offset: new AMap.Pixel(100, -40)
 });
 function markerClick(e){
     infoWindow.setContent(e.target.content);
     infoWindow.open(map, e.target.getPosition());
 }
  var t=0;

 var intervalStart=function(){
     var intarval= window.intarval =setInterval(function(){
         infoWindow.close();
         // infoWindow.setContent(markers[t].content);
         // infoWindow.open(map, markers[t].getPosition());
         infoWindow.setContent(daqus[t].content);
         infoWindow.open(map, daqus[t].getPosition());
         t+=1;
         if(t === 7){
             t=0;
         }
     },15000)
 }
// intervalStart();

var count=0,x,y,x1,y1,outTime=15;
 window.setInterval(go, 1000);
 function go() {
     count++;
     if (count === outTime) {
        // clearInterval(intarval);
        // intervalStart();
     }
 }
  document.onmousemove = function (event) {
     x1 = event.clientX;
     y1 = event.clientY;
     if (x != x1 || y != y1) {
         count = 0;
     }
     x = x1;
     y = y1;
 };
 var intervalTime = new Date();
 var nowDate ;
 setInterval(function(){
     nowDate= new Date();
     $('.nowTime').html(nowDate.getFullYear()+'-'+nowDate.getMonth()+'-'+nowDate.getDate()+' '+nowDate.getHours()+':'+nowDate.getMinutes()+':'+nowDate.getSeconds())
 },1000);
 var nowTimePecent = (intervalTime.getDate()-1)/31;
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
     // '<p style="width:100%;font-size:12px;" data-value="'+parseInt((data.qtd_actual_vs_qtd_st || 0)*100)+
     // '">QTD_Actual_VS_QTD_ST</p><progress max="100" value="'+ parseInt(data.qtd_actual_vs_qtd_st*100) +
     // '" class="QTD_Actual_VS_QTD_ST"><div class="progress-bar"><span style="width: '+ 
     // parseInt(data.qtd_actual_vs_qtd_st*100)+'%">'+ parseInt(data.qtd_actual_vs_qtd_st*100)+'%</span></div></progress>'+
     // '<p style="width:100%;font-size:12px;" data-value="'+parseInt((data.ytd_actual_vs_ytd_st || 0)*100)+
     // '">YTD_Actual_VS_YTD_ST</p><progress max="100" value="'+ parseInt(data.ytd_actual_vs_ytd_st*100) +
     // '" class="YTD_Actual_VS_YTD_ST"><div class="progress-bar"><span style="width: '+ 
     // parseInt(data.ytd_actual_vs_ytd_st*100)+'%">'+ parseInt(data.ytd_actual_vs_ytd_st*100)+'%</span></div></progress>' + 
     '<span class="spanStyle">Buscit_LM:</span><span class="spanStyle" style="margin-right:20px">'+ toThousands(parseInt((data.biscuit_lm || 0)/1000))+'k</span>'+
     '<span class="spanStyle">Chcolate_LM:</span><span class="spanStyle" style="margin-right:20px">'+ toThousands(parseInt((data.chocolate_lm || 0)/1000))+'k</span>'+
     '<span class="spanStyle">Gum_LM:</span><span class="spanStyle" style="margin-right:20px">'+ toThousands(parseInt((data.gum_lm || 0)/1000))+'k</span><br/>'+
     
     '<a href="http://datav.emdlz.com.cn:2017/dealer?adcode='+data.adcode+'" id="detail" target="_blank">查看详情</a>';

     marker.on('click',function(e){
         markerClick(e,index);
         $('.amap-info-close').click(function(event) {
             // intervalStart();
         });
     })
     marker.subMarkers = [];
     if(!hide){  
         marker.setMap(map)
     }
     return marker;
 }
 // 省份MTD
 var createMarkermtd = function(data,hide,index) {
     var provinceMTD='<div class="markermtd"><span>MTD:</span>'+ toThousands(parseInt(data.mtd/1000000)) +'m</div>'
     var markermtd = new AMap.Marker({
         //content: div,
         content:provinceMTD,
         title:data.adcode,
         position: [data.lng,data.lat],
         zIndex: 200,
         offset: new AMap.Pixel(-20, 5)
     });
    
         markermtd.setMap(map);
     
     return markermtd;
 }
 // 省名
 var createName = function(data) {
     var nameDiv='<div class="nameSpan">'+ data.province +'</div>'
     var name = new AMap.Marker({
         content: nameDiv,
         title:data.name,
         position: [data.lng,data.lat],
         zIndex: 150,
         offset: new AMap.Pixel(-15,0)
     });
        name.setMap(map)
            return name;
 }
 // 大区轮播
 var daqus = [];
 var daqu1s = [];
 var daquIcon;
 var animation;
 var daquName = function(data) {
     if(data.state === "0"){
         daquIcon = new AMap.Icon({
                 image : './img/01.gif',//24px*24px
                 //icon可缺省，缺省时为默认的蓝色水滴图标，
                 imageSize : new AMap.Size(45,25)
             });
         animation = '';
         
     } else{
         daquIcon = new AMap.Icon({
                 image : './img/CN.png',//24px*24px
                 //icon可缺省，缺省时为默认的蓝色水滴图标，
                 imageSize : new AMap.Size(30,30)
             });
         animation = 'AMAP_ANIMATION_BOUNCE';
     }

     if(data.lng === 0){
         return false;
     }
     var daqu = new AMap.Marker({
         icon: daquIcon,
         position: [data.lng,data.lat],
         zIndex: 150,
         offset: new AMap.Pixel(-30, -40)
     });

     // daqu.setAnimation(animation);

     daqu.content = '<p>'+ data.area+'</p>'+
     '<p><span>MTD：</span><span>'+ data.MTD+'k</span></p>'+
     '<p><span>MTD_ST：</span><span>'+ data.MTD_st+'k</span></p>'+
     '<p><span>Yesterday_GS： </span><span>'+ data.Yesterday_GS+'k</span></p>'+
     '<p style="width:100%;font-size:12px;" data-value="'+parseInt((data.Pace || 0)*100)+
     '">Pace</p><progress max="100" value="'+ parseInt(data.Pace*100) +
     '" class="MTD_Actual_VS_MTD_ST"><div class="progress-bar"><span style="width: '+ 
     parseInt(data.Pace*100)+'%">'+ parseInt(data.Pace*100)+'%</span></div></progress>';

     // daqu.on('click',function(e){
     //     markerClick(e);
     //     $('.amap-info-close').click(function(event) {
     //         // intervalStart();
     //     });
     // })

    daqu.setMap(map)
        return daqu;
 }


 var daqucontent = function(data,index) {

     // if(data.lng === 0){
     //     return false;
     // }
     var contant = new AMap.Marker({
         content: '<div class="content"><div class="dc"><p>'+ data.RDC_name+'</p>'+
         '<p><span>CASES:</span><span>'+data.MTD+'</span></p>'+
         '<p><span>CFR:</span>'+parseInt(data.CFR)+'%<span></span></p>'+
         '<p><span>MTD%:</span>'+parseInt(data.mtd*100)+'%<span></span></p></div>'+
         '<div class="chart_content"><div class="map_chart" id="map_chart'+index+'"></div></div>'+
         '</div>',
         position: [data.lng,data.lat],
         zIndex: 200,
         offset: new AMap.Pixel(-80, -150)
     });


     contant.setMap(map);
     return contant;
 }


 var markers = [];
 var names = []; 
 var markertmds = [];
 $.ajax({
         url: 'http://datam.youlishu.com/dataset/json?oid=1062',
         type: 'get',
         dataType: 'jsonp',
         success:function(data){
             for (var i = 0; i < data.length; i += 1) {
                 var marker = createMarker(data[i],false,data[i].adcode);
                 markers.push(marker);
                 var name=createName(data[i])
                 names.push(name);
                 var markermtd = createMarkermtd(data[i],false,data[i].adcode);
                 markertmds.push(markermtd);
             }
         },
     });

 $.ajax({
         url: 'http://datam.youlishu.com/dataset/json?oid=1064',
         type: 'get',
         dataType: 'jsonp',
         success:function(data){
             for (var m = 0; m < data.length; m += 1) {
                 // var daqu = daquName(data[m]);
                 // daqus.push(daqu);
                 // var daqu1 = daquName1(data[m]);
                 // daqu1s.push(daqu1);
             }
         },
     });

 $.ajax({
     url: 'http://datam.youlishu.com/dataset/json?oid=1084',
     type: 'get',
     dataType: 'jsonp',
     success:function(data){
         // for (var m = 0; m < data.length; m += 1) {
         //     var contant = daqucontent(data[m],m);
         //     contants.push(contant)
         // }
         for(var l = 0; l < pos.length ;l += 1){
             var daqu = daquName(pos[l]);
             daqus.push(daqu);

         }
     },
 });
 // console.log(json[1]);

 var _onZoomEnd = function(e) {
     if (map.getZoom() < 5) {
        $('.content p').css("font-size","12px");
        $('.content p:nth-child(1)').css("font-size","14px");
     }
     else{
         $('.content p').css("font-size","16px");
        $('.content p:nth-child(1)').css("font-size","20px");
     }
 }
 AMap.event.addListener(map, 'zoomend', _onZoomEnd);
 //map.setFitView();