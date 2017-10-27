/*模块展开和关闭*/
$(function () {
    $(".module_up_down").click(function () {
        var oImg=$(this).find("img");
        var pre=$(this).prev();
        if(oImg.attr("src")=="images/down.gif") {
            //oImg.attr("src", "images/up.gif");
            pre.slideUp("slow",function () {
                oImg.attr("src", "images/up.gif");
            });
        }else{
            //oImg.attr("src", "images/down.gif");
            pre.slideDown("slow",function () {
                oImg.attr("src", "images/down.gif");
            });
        }
    });
});