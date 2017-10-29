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