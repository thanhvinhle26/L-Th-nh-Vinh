var count=0;
var t=confirm("Bạn có muốn in ra số lượng số nguyên chia hết cho 3 hoặc 7 từ 1 đến 100");
if (t) {
	for (var i = 0; i <=100; i++) {
		if (i%3==0||i%7==0) {
			count++;
		}
	}
}
alert("Số cần tìm là "+count);