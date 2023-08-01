/**
 *   B1 : Dữ liệu đầu vào (input)
 * Số ngày làm = a. Tiền công/ngày = 100000
 * B2 : Thực hiện :
 * Tính lương = a*100000
 * B3 : Dữ liệu đầu ra (output)
 * Tính tiền lương
*/

var soNgayLam;
var tienCong = 100000;
soNgayLam = prompt("Số ngày làm trong tháng ? : ","");
var cdSoNgayLam = Number(soNgayLam)
var tienLuong = cdSoNgayLam * tienCong;
alert("Tiền lương tháng này của bạn là : " + tienLuong + " Đồng");
// console.log("Tien Luong Thang Nay la ", tienLuong , "Dong" )





