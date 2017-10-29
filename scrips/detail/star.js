/*商品评分效果*/
$(function () {
    $(".rating li a").click(function () {
        var title=$(this).attr("title");
        var oUl=$(this).parents("ul.rating");
        var oLi=$(this).parent();
        var name=oLi.attr("class");
        oUl.removeClass().addClass("rating "+name+"star");
        alert("你对商品的评分是："+title);
        return false;
    });
});