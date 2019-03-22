// var al=confirm("Check");
// if(al)
// {
// 	alert("Good");

// }
// else
// {
// 	alert("bad");
// }
// var val=prompt("Nhập họ tên");
// alert("Tên của bạn là"+val);
// console.log("Vinh");
// document.write("<b style='color:red'> "+val+"</b>");

// var a=prompt("Nhập a");

// do
// {
// 	a=prompt("Nhập a:");
// 	a=parseFloat(a);
// }
// while(isNaN(a));
// a=parseFloat(a);
// b=parseFloat(b);
// if(isNaN(a))
// {
// 	a=prompt("Nhập lại a");
// }
// if(isNaN(b))
// {
// 	a=prompt("Nhập lại b");
// }
// if(a==0&&b==0)
// {
// 	alert("Phương trình vô nghiệm");
// }
// else if(a==0&&b!=0)
// {
// 	alert("Phương trình vô nghiệm");
// }
// else
// {
// 	alert("Phương trình có nghiệm"+(-b/a));
// }
// var S=0;
// var n=prompt("Nhập vào n");
// n=parseInt(n);
// for (var i = 0; i < n; i++) {
// 	S=S+((i+1)/(i+2));
// }
// alert(S);
// do
// {
// 	var n=prompt("Nhập vào n");
// 	n=parseInt(n);
// }
// while(isNaN(n)|| n<=0);
// var mang=new Array(n);
// for (var i = 0; i < n; i++) {
// 	do
// {
// 	var mang[i]=prompt("Nhập vào n");
// 	mang[i]=parseInt(mang[i]);
// }
// while(isNaN(mang[i]));
// }
// var tong=0;
// for (var i = 0; i < n; i++) {
// 	tong=tong + mang[i];
// }
// alert(tong);
function nhapSo(Thongbao)
{
	var m;
	do
	{
        m=prompt("Nhập vào "+Thongbao+"");
        m=parseInt(m);
	}
	while(isNaN(m));
	return m;

}



n=nhapSo("n");
var mang=new Array(n);
for (var i = 0; i < n; i++) {
	mang[i]=nhapSo("Nhập phần tử thứ "+(i+1)+"");
}
alert(mang);