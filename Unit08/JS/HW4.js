var n;
var S=0;
var h=1;
do
{
	n=prompt("Nhập vào n");
	n=parseInt(n);
}
while(isNaN(n)||n<=0);


for (var i = 1; i <=n ; i++) {
    h=h*i;
	S=S+i/h;
}
alert("Tổng của dãy là "+S);