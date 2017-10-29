/*首页广告效果*/
$(function () {
    var len=$(".num>li").length;
    var index=0;
    var timer;
    $(".num li").mouseover(function () {
        index=$(".num li").index(this);
        showImg(index);
    }).eq(0).mouseover();  /*初始化，自动播放*/

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
       //console.log(p);
        move($(".prolist_content"),p);
    });

    function move(obj,p) {
        obj.stop(true,false).animate({left:-liWidth*(p-1)},1000);
    }
});
/*滚动*/
$(function () {
    var timer;
    $(".scrollNews").hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(function () {
            scroll($(".scrollNews"));
        },3000);
    }).trigger("mouseleave");
});
function scroll(obj) {
    var self=obj.find("ul:first");
    var lineHeight=self.find("li:first").height();
    self.animate({top:-lineHeight+"px"},600,function () {
        self.css("top","0px").find("li:first").appendTo(self);
    });
}
/*模块展开和关闭*/
$(function () {
    $(".module_up_down").click(function () {
        var oImg=$(this).find("img");
        var pre=$(this).prev();
        if(oImg.attr("src")=="images/down.gif") {
            //oImg.attr("src", "images/up.gif");
            pre.slideUp("slow",function () {
                oImg.attr("src", "images/up.gif");
            });
        }else{
            //oImg.attr("src", "images/down.gif");
            pre.slideDown("slow",function () {
                oImg.attr("src", "images/down.gif");
            });
        }
    });
});
/*产品树展开和关闭*/
$(function () {
    $(".m-treeview>li>span").click(function () {
        var parent=$(this).parent();
        //console.log(parent);
        if(parent.attr("class")=="m-expanded"){
            parent.attr("class","m-collapsed");
        }else{
            parent.attr("class","m-expanded");

        }
        //return false;
    });
});
/*超文字链接提示*/
$(function () {
    var x=10;
    var y=20;
    var myTitle;
    $(".tooltip").mouseover(function (e) {
        myTitle=this.title;
        this.title="";
        var oDiv=$("<div id='tooltip'>"+myTitle+"</div>");
        oDiv.appendTo("body");
        $("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"}).show("fast");
    }).mouseout(function () {
        this.title=myTitle;
        $("#tooltip").remove();
    }).mousemove(function (e) {
        $("#tooltip").css({"top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"});
    });
});