var n;
var S=0;
var i=1;
do
{
	n=prompt("Nhập vào n");
	n=parseInt(n);
}
while(isNaN(n)||n<=0);
do
{
S=S+i;
i++;
}
while(i<=n);
alert("Tổng cần tìm là "+ S);