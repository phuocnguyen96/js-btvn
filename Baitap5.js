/**
 * B1 : Dữ liệu đàu vào (input) :
 * Nhập vào ký số.
 * B2 : Thực Hiện :
 * Tìm số thứ nhất = math.floor(kiso/10)
 * Tìm số thứ hai = 
 */

var kiSo;
kiSo = prompt("Vui lòng nhập một số có 2 chữ số : ","");
var cdKiSo = Number(kiSo)
var soThuNhat = Math.floor(cdKiSo / 10)
var soThuHai = cdKiSo % 10;
var final = soThuNhat + soThuHai
alert("Tổng của 2 ký số trong số vừa nhập là = " + final)