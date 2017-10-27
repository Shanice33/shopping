/*首页广告效果*/
$(function () {
    var len=$(".num>li").length;
    var index=0;
    var timer;
    $(".num li").mouseover(function () {
       index=$(".num li").index(this);
       showImg(index);
    }).eq(0).mouseover();

    $(".ad").hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(function () {
            showImg(index);
            index++;
            if(index==len){
                index=0;
            }
        },2000);
    });
});
function showImg(index) {
    var lineHeight = $(".slider li img").height();
    var num=lineHeight*index;
    //console.log(lineHeight);
    $(".slider").stop(true,false).animate({top: -num+"px"}, 1000);
    $(".num li").removeClass("on").eq(index).addClass("on");
}