layui.use('element', function(){
  var element = layui.element;
  
});
layui.use('form', function(){
  var form = layui.form;
  
});
layui.use('layer', function(){
  var layer = layui.layer;
}); 
layui.use('laydate', function(){
  var laydate = layui.laydate;
  //执行一个laydate实例
  laydate.render({
    elem: '#test1' //指定元素
    ,type: 'month'
    ,done: function(value, date, endDate){
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
  });
  laydate.render({
    elem: '#test2' //指定元素
    ,type: 'month'
    ,done: function(value, date, endDate){
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
  });
  laydate.render({
    elem: '#test3' //指定元素
    ,type: 'month'
    ,done: function(value, date, endDate){
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
  });
  laydate.render({
    elem: '#test4' //指定元素
    ,type: 'month'
    ,done: function(value, date, endDate){
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
  });
  laydate.render({
    elem: '#test5' //指定元素
    ,type: 'month'
    ,done: function(value, date, endDate){
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
  });
  laydate.render({
    elem: '#test6' //指定元素
    ,type: 'month'
    ,done: function(value, date, endDate){
    console.log(value); //得到日期生成的值，如：2017-08-18
    console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
  });
});
// function displayMon(){
//     var tt=document.getElementById('tt');
//     var toChange=document.getElementById('toChange');
//     if (tt.style.display=="none") {
//         tt.style.display="block";
//         toChange.innerHTML="&#xe619;";
//         theMonsOpen();
//     }else{
//         tt.style.display="none";
//         toChange.innerHTML="&#xe61a;";
//     }
// }
function thisHeight(){
	var allHeight=document.getElementById('allHeight');
	var treamHeight=document.getElementById('treamHeight');
	var ah = allHeight.offsetHeight;
	var th = treamHeight.offsetHeight;
	if (ah>th) {
		treamHeight.style.height=ah +'px';
	}
	if (th>ah){
		allHeight.style.height=th +'px';
	}
}
thisHeight();
function thisDag(){
	var GMV=document.getElementById('GMV');
	var serveNum=document.getElementById('serveNum');
	var tAdd90=document.getElementById('tAdd90');
	var Types=document.getElementById('Types');
	var thisGMV=document.getElementById('thisGMV');
	var thisServeNum=document.getElementById('thisServeNum');
	var thisTAdd90=document.getElementById('thisTAdd90');
	var thisTypes=document.getElementById('thisTypes');
	GMV.onclick=function(){
		thisGMV.style.display="block";
		thisServeNum.style.display="none";
		thisTAdd90.style.display="none";
		thisTypes.style.display="none";
	}
	serveNum.onclick=function(){
		thisGMV.style.display="none";
		thisServeNum.style.display="block";
		thisTAdd90.style.display="none";
		thisTypes.style.display="none";
	}
	tAdd90.onclick=function(){
		thisGMV.style.display="none";
		thisServeNum.style.display="none";
		thisTAdd90.style.display="block";
		thisTypes.style.display="none";
	}
	Types.onclick=function(){
		thisGMV.style.display="none";
		thisServeNum.style.display="none";
		thisTAdd90.style.display="none";
		thisTypes.style.display="block";
	}
}
thisDag();
function openIn1(){
    var mask=document.getElementById('mask');
    var goodPage=document.getElementById('goodPage');
    mask.style.display="block";
    goodPage.style.display="block";
    mask.onclick=function(){
        mask.style.display="none";
        goodPage.style.display="none";
    }
}
function openIn(){
	var mask=document.getElementById('mask');
	var loadPage=document.getElementById('loadPage');
	mask.style.display="block";
	loadPage.style.display="block";
	mask.onclick=function(){
		mask.style.display="none";
		loadPage.style.display="none";
	}
}
function monOpenIn(){
	var mask=document.getElementById('mask');
	var monOpen=document.getElementById('monOpen');
	mask.style.display="block";
	monOpen.style.display="block";
	mask.onclick=function(){
		mask.style.display="none";
		monOpen.style.display="none";
	}
}
function numOpenIn(){
	var mask_in=document.getElementById('mask_in');
	var numOpen=document.getElementById('numOpen');
	mask_in.style.display="block";
	numOpen.style.display="block";
	mask_in.onclick=function(){
		mask_in.style.display="none";
		numOpen.style.display="none";
	}
}
function crmOpenIn(){
	var mask_in=document.getElementById('mask_in');
	var cRMOpen=document.getElementById('CRMOpen');
	mask_in.style.display="block";
	cRMOpen.style.display="block";
	mask_in.onclick=function(){
		mask_in.style.display="none";
		cRMOpen.style.display="none";
	}
}
function allda() {
	var myChart = echarts.init(document.getElementById('allData'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['应完成','已完成','七天GMV环比']
            },
            xAxis: {
                data: ["南江盟","全真教","星辰派","问天楼"]
            },
            yAxis: {},
            series: [{
                name: '应完成',
                type: 'bar',
                data: [4300, 4500, 4200, 4000],
                itemStyle:{  normal:{color:'#2ec7c9'}}  
            },
            {
                name: '已完成',
                type: 'bar',
                data: [3964.5, 3820, 3455, 3622],
                itemStyle:{  normal:{color:'#b6a2de'}}  
            },
            {
                name: '七天GMV环比',
                type: 'bar',
                data: [1390, 3220, 2355, 3322],
                itemStyle:{  normal:{color:'#5ab1ef'}}  
            }],
            label:{
                normal:{
                    show:true,
                    position:'top',
                    textStyle:{
                        color:'black'
                    }
                }
            }
        };
        
        // 使用配置项和数据显示图表。
        myChart.setOption(option);
}
allda();
function goodDa() {
    var myChart = echarts.init(document.getElementById('goofLine'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['应完成','已完成']
            },
            xAxis: {
                data: ["南江盟","全真教","星辰派","问天楼"]
            },
            yAxis: {},
            series: [{
                name: '应完成',
                type: 'bar',
                data: [4300, 4500, 4200, 4000],
                itemStyle:{  normal:{color:'#c12e34'}}  
            },
            {
                name: '已完成',
                type: 'bar',
                data: [3964.5, 3820, 3455, 3622],
                itemStyle:{  normal:{color:'#e6b600'}}  
            }],
            label:{
                normal:{
                    show:true,
                    position:'top',
                    textStyle:{
                        color:'black'
                    }
                }
            }
        };
        
        // 使用配置项和数据显示图表。
        myChart.setOption(option);
}
goodDa();
function danger() {
	var myChart = echarts.init(document.getElementById('dangerPic'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['低GMV店铺']
            },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
            },
            yAxis: {},
            series: [{
                name: '低GMV店铺',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20],
                itemStyle:{  normal:{color:'#22a7f0'}}  
            }],
            label:{
                normal:{
                    show:true,
                    position:'top',
                    textStyle:{
                        color:'black'
                    }
                }
            }
        };
        
        // 使用配置项和数据显示图表。
        myChart.setOption(option);
}
danger();
function mon() {
	var myChart = echarts.init(document.getElementById('mon'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '',
            },
            tooltip: {},
            legend: {
                data:['合作店铺数','应上新数量','已上新数量']
            },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
            },
            yAxis: {},
            series: [
            {
                name: '合作店铺数',
                type: 'bar',
                data: [50, 20, 30, 15, 10, 20,7, 20, 36, 10, 10, 20],
                itemStyle:{  normal:{color:'#8fc14e'}}  
            },
            {
                name: '应上新数量',
                type: 'bar',
                data: [500, 200, 360, 100, 100, 200,50, 200, 360, 100, 100, 200],
                itemStyle:{  normal:{color:'#477dc7'}}  
            },
            {
                name: '已上新数量',
                type: 'bar',
                data: [567, 290, 366, 150, 180, 200,57, 280, 306, 100, 80, 210],
                itemStyle:{  normal:{color:'#cc4444'}}  
            }],
            label:{
                normal:{
                    show:true,
                    position:'top',
                    textStyle:{
                        color:'black'
                    }
                }
            }
        };
        
        // 使用配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (params) {
        console.log(params.name);
    	monOpenIn();
});
}
mon();
// function theMonsOpen(){
//     function mon1() {
//     var myChart = echarts.init(document.getElementById('mon1'));

//         // 指定图表的配置项和数据
//         var option = {
//             title: {
//                 text: '南江盟',
//                 x: 'center'
//             },
//             tooltip: {},
//             legend: {
//                 show:false,
//                 data:['合作店铺数','应上新数量','已上新数量']
//             },
//             xAxis: {
//                 data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
//             },
//             yAxis: {},
//             series: [
//             {
//                 name: '合作店铺数',
//                 type: 'bar',
//                 data: [50, 20, 30, 15, 10, 20,7, 20, 36, 10, 10, 20],
//                 itemStyle:{  normal:{color:'#8fc14e'}}  
//             },
//             {
//                 name: '应上新数量',
//                 type: 'bar',
//                 data: [500, 200, 360, 100, 100, 200,50, 200, 360, 100, 100, 200],
//                 itemStyle:{  normal:{color:'#477dc7'}}  
//             },
//             {
//                 name: '已上新数量',
//                 type: 'bar',
//                 data: [567, 290, 366, 150, 180, 200,57, 280, 306, 100, 80, 210],
//                 itemStyle:{  normal:{color:'#cc4444'}}  
//             }],
//             label:{
//                 normal:{
//                     show:true,
//                     position:'top',
//                     textStyle:{
//                         color:'black'
//                     }
//                 }
//             }
//         };
        
//         // 使用配置项和数据显示图表。
//         myChart.setOption(option);
//         myChart.on('click', function (params) {
//         console.log(params.name);
//         monOpenIn();
// });
// }
// mon1();
// function mon2() {
//     var myChart = echarts.init(document.getElementById('mon2'));

//         // 指定图表的配置项和数据
//         var option = {
//             title: {
//                 text: '全真教',
//                 x: 'center'
//             },
//             tooltip: {},
//             legend: {
//                  show:false,
//                 data:['合作店铺数','应上新数量','已上新数量']
//             },
//             xAxis: {
//                 data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
//             },
//             yAxis: {},
//             series: [
//             {
//                 name: '合作店铺数',
//                 type: 'bar',
//                 data: [50, 20, 30, 15, 10, 20,7, 20, 36, 10, 10, 20],
//                 itemStyle:{  normal:{color:'#8fc14e'}}  
//             },
//             {
//                 name: '应上新数量',
//                 type: 'bar',
//                 data: [500, 200, 360, 100, 100, 200,50, 200, 360, 100, 100, 200],
//                 itemStyle:{  normal:{color:'#477dc7'}}  
//             },
//             {
//                 name: '已上新数量',
//                 type: 'bar',
//                 data: [567, 290, 366, 150, 180, 200,57, 280, 306, 100, 80, 210],
//                 itemStyle:{  normal:{color:'#cc4444'}}  
//             }],
//             label:{
//                 normal:{
//                     show:true,
//                     position:'top',
//                     textStyle:{
//                         color:'black'
//                     }
//                 }
//             }
//         };
        
//         // 使用配置项和数据显示图表。
//         myChart.setOption(option);
//         myChart.on('click', function (params) {
//         console.log(params.name);
//         monOpenIn();
// });
// }
// mon2();
// function mon3() {
//     var myChart = echarts.init(document.getElementById('mon3'));

//         // 指定图表的配置项和数据
//         var option = {
//             title: {
//                 text: '星辰派',
//                 x: 'center'
//             },
//             tooltip: {},
//             legend: {
//                  show:false,
//                 data:['合作店铺数','应上新数量','已上新数量']
//             },
//             xAxis: {
//                 data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
//             },
//             yAxis: {},
//             series: [
//             {
//                 name: '合作店铺数',
//                 type: 'bar',
//                 data: [50, 20, 30, 15, 10, 20,7, 20, 36, 10, 10, 20],
//                 itemStyle:{  normal:{color:'#8fc14e'}}  
//             },
//             {
//                 name: '应上新数量',
//                 type: 'bar',
//                 data: [500, 200, 360, 100, 100, 200,50, 200, 360, 100, 100, 200],
//                 itemStyle:{  normal:{color:'#477dc7'}}  
//             },
//             {
//                 name: '已上新数量',
//                 type: 'bar',
//                 data: [567, 290, 366, 150, 180, 200,57, 280, 306, 100, 80, 210],
//                 itemStyle:{  normal:{color:'#cc4444'}}  
//             }],
//             label:{
//                 normal:{
//                     show:true,
//                     position:'top',
//                     textStyle:{
//                         color:'black'
//                     }
//                 }
//             }
//         };
        
//         // 使用配置项和数据显示图表。
//         myChart.setOption(option);
//         myChart.on('click', function (params) {
//         console.log(params.name);
//         monOpenIn();
// });
// }
// mon3();
// function mon4() {
//     var myChart = echarts.init(document.getElementById('mon4'));

//         // 指定图表的配置项和数据
//         var option = {
//             title: {
//                 text: '问天楼',
//                 x: 'center'
//             },
//             tooltip: {},
//             legend: {
//                  show:false,
//                 data:['合作店铺数','应上新数量','已上新数量']
//             },
//             xAxis: {
//                 data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
//             },
//             yAxis: {},
//             series: [
//             {
//                 name: '合作店铺数',
//                 type: 'bar',
//                 data: [50, 20, 30, 15, 10, 20,7, 20, 36, 10, 10, 20],
//                 itemStyle:{  normal:{color:'#8fc14e'}}  
//             },
//             {
//                 name: '应上新数量',
//                 type: 'bar',
//                 data: [500, 200, 360, 100, 100, 200,50, 200, 360, 100, 100, 200],
//                 itemStyle:{  normal:{color:'#477dc7'}}  
//             },
//             {
//                 name: '已上新数量',
//                 type: 'bar',
//                 data: [567, 290, 366, 150, 180, 200,57, 280, 306, 100, 80, 210],
//                 itemStyle:{  normal:{color:'#cc4444'}}  
//             }],
//             label:{
//                 normal:{
//                     show:true,
//                     position:'top',
//                     textStyle:{
//                         color:'black'
//                     }
//                 }
//             }
//         };
        
//         // 使用配置项和数据显示图表。
//         myChart.setOption(option);
//         myChart.on('click', function (params) {
//         console.log(params.name);
//         monOpenIn();
// });
// }
// mon4();
// }
function loadOneColumn() {
    var myChart1 = echarts.init(document.getElementById('pic1'));
    // 显示标题，图例和空的坐标轴
    myChart1.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '2000',
            x: 'center',
            y:'center',
            textStyle:{
                fontSize: 12,
                fontWeight: 'normal',
                color: '#333'
            }  
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
        	show:false,
            orient: 'vertical',
            x: 'left',
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [{
            name: '小计统计',
            type: 'pie',
            radius: ['50%', '70%'],  //设置环形的空间大小            
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: []
        }]
    });
    myChart1.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'post',
        url: './json/index.txt',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组 
                brower.push({                    
                    value: item.num,
                    name: item.department
                });
            });
            myChart1.hideLoading();    //隐藏加载动画
            myChart1.setOption({        //加载数据图表                
                legend: {
                    data: names
                },
                series: [{
                    data: brower
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            myChart1.hideLoading();
        }
    });
};
loadOneColumn();
function loadOneColumn2() {
    var myChart2 = echarts.init(document.getElementById('pic2'));
    // 显示标题，图例和空的坐标轴
    myChart2.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '2000',
            x: 'center',
            y:'center',
            textStyle:{
                fontSize: 12,
                fontWeight: 'normal',
                color: '#333'
            }  
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
        	show:false,
            orient: 'vertical',
            x: 'left',
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [{
            name: '小计统计',
            type: 'pie',
            radius: ['50%', '70%'],  //设置环形的空间大小            
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: []
        }]
    });
    myChart2.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'post',
        url: './json/index.txt',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组 
                brower.push({                    
                    value: item.num,
                    name: item.department
                });
            });
            myChart2.hideLoading();    //隐藏加载动画
            myChart2.setOption({        //加载数据图表                
                legend: {
                    data: names
                },
                series: [{
                    data: brower
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            myChart2.hideLoading();
        }
    });
};
loadOneColumn2();
function loadOneColumn3() {
    var myChart3 = echarts.init(document.getElementById('pic3'));
    // 显示标题，图例和空的坐标轴
    myChart3.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '2000',
            x: 'center',
            y:'center',
            textStyle:{
            fontSize: 12,
            fontWeight: 'normal',
            color: '#333'
            }  
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
        	show:false,
            orient: 'vertical',
            x: 'left',
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [{
            name: '小计统计',
            type: 'pie',
            radius: ['50%', '70%'],  //设置环形的空间大小            
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: []
        }]
    });
    myChart3.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'post',
        url: './json/index.txt',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组 
                brower.push({                    
                    value: item.num,
                    name: item.department
                });
            });
            myChart3.hideLoading();    //隐藏加载动画
            myChart3.setOption({        //加载数据图表                
                legend: {
                    data: names
                },
                series: [{
                    data: brower
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            myChart3.hideLoading();
        }
    });
};
loadOneColumn3();
function loadOneColumn4() {
    var myChart4 = echarts.init(document.getElementById('pic4'));
    // 显示标题，图例和空的坐标轴
    myChart4.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '2000',
            x: 'center',
            y:'center',
            textStyle:{
            fontSize: 12,
            fontWeight: 'normal',
            color: '#333'
            }  
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
        	show:false,
            orient: 'vertical',
            x: 'left',
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [{
            name: '小计统计',
            type: 'pie',
            radius: ['50%', '70%'],  //设置环形的空间大小            
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: []
        }]
    });
    myChart4.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'post',
        url: './json/index.txt',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组 
                brower.push({                    
                    value: item.num,
                    name: item.department
                });
            });
            myChart4.hideLoading();    //隐藏加载动画
            myChart4.setOption({        //加载数据图表                
                legend: {
                    data: names
                },
                series: [{
                    data: brower
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            myChart4.hideLoading();
        }
    });
};
loadOneColumn4();