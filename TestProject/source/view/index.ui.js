/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var nf = sm("do_Notification");
var btn_hello = ui("btn_hello");

btn_hello.on("touch",function(){
    nf.alert("Hello World !!!!!");
});
var btn_touch = ui("do_Button_1");
btn_touch.on("touch",function(){
	nf.alert("touched");
});