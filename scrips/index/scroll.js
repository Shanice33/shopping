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