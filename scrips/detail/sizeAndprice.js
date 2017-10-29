/*衣服尺寸选择*/
$(function () {
    $(".pro_size ul li").click(function () {
        var text=$(this).find("span").text();
        $(this).parent().prev().html(text);
    });
});
/*数量和价格联动*/
$(function () {
    var price=$("#price").text();
    $("#num_sort").change(function () {
        var num=$(this).val();
        $(".pro_price span").text(num*price);
    }).trigger("change");

});