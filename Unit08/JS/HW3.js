var m, n, k;
var sum = 0;
do {
    m=prompt("Nhập số nguyên m");
    m=parseInt(m);
    n=prompt("Nhập số nguyên n");
    n=parseInt(n);
    if (m < n) {
        alert("Bạn phải nhập m >= n");
    }
} while (m < n);
k=prompt("Nhập số nguyên k");
k=parseInt(k);
for (var i = m - 1; i >= n + 1; i--) { 
    if (i % k == 0) {
        sum = sum + i;
    }

}
alert("Tổng các số chia hết cho k trong khoảng m,n là "+sum);