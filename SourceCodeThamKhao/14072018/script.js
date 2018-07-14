"use strict"
var GlobalVariable = 10;
var KetQua = 20; // bien toan cuc global (comment line)
var tempResult = 10;
var n1 = 10;
var n2 = 2;

var arr = new Array(1,-3,2,5);

var Person = {
  'name': 'thien',
  'mark': 9
}

function sapXepMang(arrParams)
{
  function triTuyetDoMang(tmpArray)
  {
    return tmpArray.map(x=>(x>0)?x:-x);
  }
  arrParams = triTuyetDoMang(arrParams);
  return arrParams.sort(function(a,b){
    return b-a;
  });
}
var newArr = sapXepMang(arr);
// document.writeln('newArr: '
//                + newArr.toString());
// document.writeln("<br>");
function tinhDiem(objPerson)
{
  // document.writeln('Diem trong function truoc khi thay doi: '
  //                + objPerson.mark);
  // document.writeln("<br>");
  objPerson.mark = 10;
  // document.writeln('Diem trong function SAU khi thay doi: '
  //                + objPerson.mark);
  // document.writeln("<br>");
}
tinhDiem(Person);
// document.writeln('Diem NGOAI function SAU KHI GOI HAM: '
//                + Person.mark);
// document.writeln("<br>");
var tinhTich2So = function(a,b)
{
  a = 4;
  return a*b;
}

/**
 * comment block
 */
function tinhTong2SoNguyen(num1, num2)
{
  // bien cuc bo local
  var KetQua = num1 + num2 + GlobalVariable;
  return KetQua;
}

// document.writeln('Ket Qua tinh tich 2 so la: '
//+ tinhTich2So(n1, n2));
// document.writeln("<br>");
// document.writeln('n1: '+ n1);
// document.writeln("<br>");
// document.writeln('Ket Qua tinh tong 2 so 4 va 5 la: '
//+ tinhTong2SoNguyen(4, 5));
