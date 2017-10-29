/*Tab 选项卡 标签*/
$(function () {
    $(".tab_menu li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        var index=$(".tab_menu li").index(this);
        //console.log(index);
        showTab(index);
    }).hover(function () {
        $(this).addClass("hover");
    },function () {
        $(this).removeClass("hover");
    });
});
function showTab(index) {
    $(".tab_box div").eq(index).removeClass("hide").siblings().addClass("hide");
}