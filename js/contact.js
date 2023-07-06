document.getElementById('names').onblur=function(){
    var phone = document.getElementById('names').value;
//验证电话号
    if (!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(phone))) {
        document.getElementById("imply").style.display = "inline" 
        document.getElementById("imply").innerHTML = "手机号码有误，请重填"
        return false
    }else {
        document.getElementById("imply").innerHTML = "" 
        document.getElementById("imply").style.display = "none" 
        return true;
    }
}


//提交留言的点击事件
$("#btn").click(function () {
    var li = document.createElement("li")
    if (!$("#name").val()) {
        alert("姓名不能为空")
    } else if (!$("#names").val()) {
        alert("电话不能为空")
    } else if (!$("#message").val()) {
        alert("请输入留言")
    } else {
        $(li).append("<p>姓名：" + $("#name").val() + "</span></p>  <p>留言内容：" + $("#message").val() + "</p>");
        //每次最新的留言要放在最前面
        $(".liuyanlist").prepend($(li));
        //清空输入框
        $("#name").val("");
        $("#names").val("");
        $("#message").val("");
    }
})


initMap();//创建和初始化地图
    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(114.357936,30.526212);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    
    initMap();//创建和初始化地图
