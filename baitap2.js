/**
 * B1 : Dữ liệu đầu vào (input) :
 * Nhập 5 số thực
 * B2 : Thực Hiện :
 * Gán tong = tổng của 5 số thực
 * trungBinh = tong/5
 * B3 : Dữ liệu đầu ra :
 * Tính trung bình của 5 số thực
 */

var soThuNhat,soThuHai,soThuBa,soThuTu,soThuNam;
soThuNhat = prompt("Vui lòng nhập số thứ nhất : ","");
soThuHai = prompt("Vui lòng nhập số thứ hai : ","");
soThuBa = prompt("Vui lòng nhập số thứ ba : ","");
soThuTu = prompt("Vui lòng nhập số thứ tư : ","");
soThuNam = prompt("Vui lòng nhập số thứ cuối cùng : ","");
var cdSoThuNhat = Number(soThuNhat)
var cdSoThuHai = Number(soThuHai)
var cdSoThuBa = Number(soThuBa)
var cdSoThuTu = Number(soThuTu)
var cdSoThuNam = Number(soThuNam)
var tong = cdSoThuNhat + cdSoThuHai + cdSoThuBa + cdSoThuTu + cdSoThuNam;
var trungBinh = tong / 5;
alert("Giá trị trung bình của 5 số là : " + trungBinh + ".");
