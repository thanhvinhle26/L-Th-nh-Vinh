
var n;
var S=0;
do
{
	n=prompt("Nhập vào n");
	n=parseInt(n);
}
while(isNaN(n)||n<=0);


for (var i = 1; i <=n ; i++) {
	S=S+1/i;
}
alert("Tổng của dãy là "+S);