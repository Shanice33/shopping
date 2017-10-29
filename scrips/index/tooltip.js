/*超文字链接提示*/
$(function () {
    var x=10;
    var y=20;
    var myTitle;
    $(".tooltip").mouseover(function (e) {
        myTitle=this.title;
        this.title="";
        var oDiv=$("<div id='tooltip'>"+myTitle+"</div>");
        oDiv.appendTo("body");
        $("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"}).show("fast");
    }).mouseout(function () {
        this.title=myTitle;
        $("#tooltip").remove();
    }).mousemove(function (e) {
        $("#tooltip").css({"top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"});
    });
});