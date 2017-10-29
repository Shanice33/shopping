/*使用jqzoom*/
$(function(){
    $(".jqzoom").jqueryzoom({
        xzoom: 300, //放大图的宽度(默认是 200)
        yzoom: 300, //放大图的高度(默认是 200)
        offset: 10, //离原图的距离(默认是 10)
        position: "right", //放大图的定位(默认是 "right")
        preload:1
    });
});

/*点击左侧产品小图片切换大图*/
$(function () {
    $(".imgList li").click(function () {
        var imgSrc=$(this).find("img").attr("src");
        var arr=imgSrc.split(".");
        var imgSrc_small=arr[0]+"_small."+arr[1];
        var imgSrc_big=arr[0]+"_big."+arr[1];

        $("#bigImg").attr({"src":imgSrc_small,"jqimg":imgSrc_big});
        $("#thickImg").attr("href",imgSrc_big);
    });
});

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

/*衣服颜色切换*/
$(function () {
    $(".color_change ul li").click(function () {
        var oImg=$(this).find("img");
        var imgSrc=oImg.attr("src");
        var arr=imgSrc.split(".");
        var arrList=[arr[0]+"_one."+arr[1],arr[0]+"_two."+arr[1],arr[0]+"_three."+arr[1]]

        var imgSrc_big=arr[0]+"_one_big."+arr[1];
        var imgSrc_small=arr[0]+"_one_small."+arr[1];
        $("#bigImg").attr({"src":imgSrc_small,"jqimg":imgSrc_big});
        $("#thickImg").attr("href",imgSrc_big);

        for(var i=0;i<3;i++){
            var str=arrList[i];
            $(".imgList li").eq(i).find("img").attr("src",str);
        }

        var text=oImg.attr("alt");
        $(".color_change strong").text(text);
    });
});

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