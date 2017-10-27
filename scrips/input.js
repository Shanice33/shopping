$(function () {
   $("#inputSearch").focus(function () {
       if($(this).val()==this.defaultValue){
           $(this).val("");
       }
   }).blur(function () {
       if($(this).val()==""){
           $(this).val(this.defaultValue);
       }
   }).keyup(function (e) {
       if(e.which==13){
           alert("提交成功");
       }
   });
});