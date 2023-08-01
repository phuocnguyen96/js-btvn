/**
 * B1 : Dữ liệu đầu vào (input) :
 * Nhập chiều dài và chiều rộng
 * B2 : Thực Hiện :
 * Chu vi = ( dài + rộng ) *2
 * Diện tích = Dài * Rộng
 * B3 : Dữ liệu đầu ra :
 * Tính Chu vi và diện tích hình chữ nhật
 */

var chieuDai,chieuRong;
chieuDai = prompt("Vui lòng nhập chiều dài của hình chữ nhật ? : ","");
chieuRong = prompt("Vui lòng nhập chiều rộng của hình chữ nhật ? : ","");
var cdChieuDai = Number(chieuDai)
var cdChieuRong = Number(chieuRong)
var dienTich = cdChieuDai * cdChieuRong;
var chuVi = (cdChieuDai + cdChieuRong) *2;
alert("Diện tích của hình chữ nhật là : " + dienTich)
alert("Chu vi của hình chữ nhật là : " + chuVi);