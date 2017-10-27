/*滑过图片出现放大镜效果*/
$(function () {
    $(".content_right .prolist ul li").each(function () {
        var position=$(this).position();
        var oImg_width=$(this).find("img").width();
        var oImg_height=$(this).find("img").height();
        var oSpan=$("<span class='imageMask'></span>");
        oSpan.css({"position":"absolute","cursor":"pointer",
                   "top":position.top+"px","left":position.left+"px",
                   "width":oImg_width+"px","height":oImg_height+"px"});
        oSpan.appendTo($(this).find("a"))
            .hover(function () {
                    $(this).addClass("imageOver");
                },function () {
                    $(this).removeClass("imageOver");
                });
    });
});