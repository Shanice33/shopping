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
// function changeImg(){
//     $(".imgList li").click(function () {
//         var imgSrc=$(this).find("img").attr("src");
//         var arr=imgSrc.split(".");
//         var imgSrc_small=arr[0]+"_small."+arr[1];
//         var imgSrc_big=arr[0]+"_big."+arr[1];
//
//         $("#bigImg").attr({"src":imgSrc_small,"jqimg":imgSrc_big});
//         $("#thickImg").attr("href",imgSrc_big);
//     });
// }