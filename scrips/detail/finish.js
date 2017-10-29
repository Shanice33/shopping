/*最终购买输出*/
$(function () {
    $("#cart img").click(function () {
        var pro_name=$(".pro_detail_right h4").text();
        var pro_color=$(".color_change strong").text();
        var pro_size=$(".pro_size strong").text();
        var pro_num=$(".pro_num #num_sort").val();
        var pro_price=$(".pro_price span").text();
        var dialog="感谢你的购买，请核对。\n 您购买的东西是：\n产品是："+pro_name
            +";\n 颜色是："+pro_color
            +"；\n 尺寸是:"+pro_size
            +"；\n 数量是："+pro_num
            +"；\n 总价是:"+pro_price+"元。";
        if(confirm(dialog)){
            alert("您已经成功下单！");
        }
        return false;

    });
});