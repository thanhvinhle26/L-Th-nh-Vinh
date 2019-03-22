var S=0;
var count=0;
var i=2;
var t=confirm("Tìm tổng 10 số chẵn đầu tiên");
if (t) {
	
	do
	{
		if (i%2==0) {
			S=S+i;
			count++;
		}
		i++;

	}
	while(count<10);
	alert("Tổng là :"+S);
}
else
{
	alert("Không muốn tìm thì thôi");
}