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
  });
});
function thisDag(){
	var GMV=document.getElementById('GMV');
	var serveNum=document.getElementById('serveNum');
	var tAdd90=document.getElementById('tAdd90');
	var Types=document.getElementById('Types');
	var thisGMV=document.getElementById('thisGMV');
	var thisServeNum=document.getElementById('thisServeNum');
	var thisTAdd90=document.getElementById('thisTAdd90');
	var thisTypes=document.getElementById('thisTypes');
    var CRM=document.getElementById('CRM');
    var thisCRM=document.getElementById('thisCRM');
	GMV.onclick=function(){
		thisGMV.style.display="block";
		thisServeNum.style.display="none";
		thisTAdd90.style.display="none";
		thisTypes.style.display="none";
        thisCRM.style.display="none";
	}
	serveNum.onclick=function(){
		thisGMV.style.display="none";
		thisServeNum.style.display="block";
		thisTAdd90.style.display="none";
		thisTypes.style.display="none";
        thisCRM.style.display="none";
	}
	tAdd90.onclick=function(){
		thisGMV.style.display="none";
		thisServeNum.style.display="none";
		thisTAdd90.style.display="block";
		thisTypes.style.display="none";
        thisCRM.style.display="none";
	}
	Types.onclick=function(){
		thisGMV.style.display="none";
		thisServeNum.style.display="none";
		thisTAdd90.style.display="none";
		thisTypes.style.display="block";
        thisCRM.style.display="none";
	}
    CRM.onclick=function(){
        thisGMV.style.display="none";
        thisServeNum.style.display="none";
        thisTAdd90.style.display="none";
        thisTypes.style.display="none";
        thisCRM.style.display="block";
    }
}
thisDag();
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
    // 图表配置
var options = {
    "colors":[
        '#2ec7c9','#b6a2de','#5ab1ef'
    ],
    "xAxis": [
        {
            "type": "category",
            "categories": ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"
        ],
        "index": 0,
        "isX": true
    }],
    "legend": {
        // 图例项样式
        "itemStyle": {
        "color": '#666'
        },
    },
    "series": [
    {
        "name": "合作店铺",
        "data": [
        111,222, 2321,1321,111,222,321,1321,111,222,2321,1321
    ],
    "_colorIndex": 0
    },
    {
        "name": "应上新数",
        "data": [
        111,222, 2321,1321,111,222,2321,131,111,222,2321,1321
    ],
    "_colorIndex": 1
    },
    {
        "name": "已上新数",
        "data": [
        111,222, 2321,321,111,222,221,1321,111,222,2321,1321
    ],
    "_colorIndex": 2
    }
    ],
    "yAxis": [
        {
        "title": {
            "text": ""
        },
        "index": 0
        }
    ],
    "chart": {
        "style": {
        "fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
        "color": "#999",
        "fontSize": "12px",
        "fontWeight": "normal",
        "fontStyle": "normal"
    },
    "type": "column"
    },
    "title": {
        "text": "月份统计"
    },
    "plotOptions": {
        "series": {
        "cursor": 'pointer',
        "events": {
            click: function(e) {
                alert(e.point.category);
            }
        },
        "dataLabels": {
        "enabled": true,
        "style":{
            "color":'#666'
        }
    },
    "animation": false
    }
    },
    "credits": {  
    "enabled": false     //不显示LOGO 
    }  
    };
// 图表初始化函数
var chart = Highcharts.chart('container', options);