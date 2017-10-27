/*产品树展开和关闭*/
$(function () {
    $(".m-treeview>li>span").click(function () {
        var parent=$(this).parent();
        console.log(parent);
        if(parent.attr("class")=="m-expanded"){
            parent.attr("class","m-collapsed");
        }else{
            parent.attr("class","m-expanded");

        }
        //return false;
    });
});