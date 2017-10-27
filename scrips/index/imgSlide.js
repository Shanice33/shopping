/*新款上市模块横向滚动*/
$(function () {
    //len是图片个数，page是展示这些图片的页数；
    var len=$(".prolist_content ul li").length;
    var i=4;
    var page=Math.ceil(len/4);
    //p表示当前页数
    var p=1;
    //获取显示容器框架的宽度，每一次以这个宽度移动去展示不同页面的图片；
    var liWidth=$(".prolist").width();
    //设置整个<li>列表的宽度，让div容器能在水平方向上装下它们；
    var allWidth=$(".prolist_content li").outerWidth(true);
    $(".prolist_content").width(allWidth*len);

    $(".module_left_right img").click(function () {
        var dir=$(this).attr("class");
        if(dir=="goLeft"){
            if(p==1){
                p=page;//$(".prolist_content").animate({left:-liWidth*(p-1)},1000);
            }
            else{
                p--;
                //$(".prolist_content").animate({left:-liWidth*(p-1)},1000);
            }
        }
        if(dir=="goRight"){
            if(p==page){
                p=1;
                //$(".prolist_content").animate({left:-liWidth*(p-1)},1000);
            }
            else{
                p++;
                //$(".prolist_content").animate({left:-liWidth*(p-1)},1000);
            }
        }
        console.log(p);
        move($(".prolist_content"),p);
    });

    function move(obj,p) {
        obj.stop(true,false).animate({left:-liWidth*(p-1)},1000);
    }
});
