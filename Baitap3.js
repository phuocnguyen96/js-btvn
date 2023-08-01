/**
 *   B1 : Dữ liệu đầu vào (input)
 * Số usd muốn quy đổi ra tiền việt
 * B2 : Thực hiện :
 * Tỉ giá = Số USD * 23500
 * B3 : Dữ liệu đầu ra (output)
 * Tính tỉ giá
*/

var soUsd;
var tienViet = 23500;
soUsd = prompt("Nhập số USD muốn qui đổi ? : ","");
var cdSoUsd = Number(soUsd)
var ketQua = cdSoUsd * tienViet;
alert("Tỉ giá quy đổi " + cdSoUsd + " USD = " + ketQua + " Đồng");
