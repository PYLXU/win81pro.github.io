function dynamicIp(cityName){
	$("#ctiyName").html(cityName);
    var url = encodeURI("http://wthrcdn.etouch.cn/weather_mini?city="+cityName);
    $.get({
        url: url,
        dataType: "json",
        async: false,
        success: function (data) {
            var todayWeather = data.data.forecast[0];
            $("#ganmao").html("穿衣指数:"+data.data.ganmao);//穿衣
            var fengli = todayWeather.fengli;
            $("#fengx").html("风向风力:"+todayWeather.fengxiang+fengli.substring(fengli.indexOf("T")+3,fengli.indexOf("T")+5));//风向
            $("#heightwend").html("最"+todayWeather.high);//最高温
            $("#low").html("最"+todayWeather.low);//最低温温
            $("#wendu").html(data.data.wendu);//当前温度
            var arr = todayWeather.date.split("日");
            $("#date").html(arr[0]+"日<br>"+arr[1]);//当前日期
            var type= todayWeather.type;//天气
            if(type=="晴"){
                changeWeather(weather[4]);
            }else if(type=="多云"){
                changeWeather(weather[1]);
            }else if(type=="小雨"){
                changeWeather(weather[2]);
            }else if(type=="雪"){
                changeWeather(weather[0]);
            }else if(type=="雷阵雨"){
                changeWeather(weather[3]);
            }
            $("#table_next").width($(".details").width()+86);
            for(var i=1;i<data.data.forecast.length;i++){
                var arr = data.data.forecast[i].date.split("日");
                var type= data.data.forecast[i].type;
                $("#content"+i).html(arr[1]);//日期
                if(type=="晴"){
                    document.getElementById('svgDiv'+i).className='sunny';
                }else if(type=="多云"){
                    document.getElementById('svgDiv'+i).className='cloudy';
                }else if(type=="小雨"){
                    document.getElementById('svgDiv'+i).className='rainy';
                }else if(type=="雪"){
                    document.getElementById('svgDiv'+i).className='snowy';
                }else if(type=="雷阵雨"){
                    document.getElementById('svgDiv'+i).className='stormy';
                }
            }
        }
    });

}

