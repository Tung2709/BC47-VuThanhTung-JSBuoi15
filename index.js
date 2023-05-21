/*
EXERCISE 1:
1. Input: Điểm 3 môn thi, khu vực, đối tượng thi

2. Process:
	- Lấy Input: từ UI thông qua DOM
	- Tính tổng điểm:
			- Tính điểm khu vực
			- Tính điểm đối tượng
			- Tổng điểm = tổng điểm 3 môn thi + điểm khu vực + điểm đối tượng
	- Xác định đậu rớt: tổng điểm >= điểm chuẩn, không môn nào = 0 => đậu, ngược lại rớt

3. Output: tổng điểm, kết quả đậu hay rớt

*/
function areaGrade(area) {
  if (area === "A") return 2;
  if (area === "B") return 1;
  if (area === "C") return 0.5;
  if (area === "khuvuc") alert("Hãy chọn khu vực");
  return 0;
}
function typeGrade(type) {
  if (type === "1") return 2.5;
  if (type === "2") return 1.5;
  if (type === "3") return 1;
  if (type === "doituong") alert("Hãy chọn đối tượng");
  return 0;
}

function exercise1() {
  var benchmark = +document.getElementById("benchmark").value;
  var sub1 = +document.getElementById("sub1").value;
  var sub2 = +document.getElementById("sub2").value;
  var sub3 = +document.getElementById("sub3").value;
  var area = document.getElementById("area").value;
  var type = document.getElementById("type").value;
  console.log(area, type);
  var areaGrade1 = +areaGrade(area);
  var typeGrade1 = +typeGrade(type);
  var total = sub1 + sub2 + sub3 + areaGrade1 + typeGrade1;

  document.getElementById("totalGrade").innerHTML = total;

  if (total >= benchmark && sub1 != 0 && sub2 != 0 && sub3 != 0) {
    document.getElementById("result").innerHTML = "Đậu";
  } else {
    document.getElementById("result").innerHTML = "Rớt";
  }
}

document.getElementById("btnSubmit").onclick = exercise1;

/*
EXERCISE 2:

1. Input: tên và số kw

2. Process: 
	- Lấy Input qua UI bằng DOM
	= Tính tiền qua số Kw

3. Output: số tiền tương ứng với kw đã sử dụng

*/

function calckw(kw) {
  var total;
  if (kw < 0) {
    alert("Nhập số không hợp lệ");
    return;
  }
  if (kw <= 50) {
    total = kw * 500;
    return total;
  }
  if (kw <= 100) {
    total = 50 * 500 + (kw - 50) * 650;
    return total;
  }
  if (kw <= 200) {
    total = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    return total;
  }
  if (kw <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    return total;
  }
  if (kw > 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    return total;
  }
}

function exercise2() {
  var user = document.getElementById("nameUser").value;
  console.log(user);
  if (user === "") {
    alert("Nhập tên người dùng");
    return;
  }
  var kw = document.getElementById("kwNumber").value;
  var total = calckw(kw);
  document.getElementById("user").innerHTML = user;
  document.getElementById("totalMoney").innerHTML = total;
}

document.getElementById("btnSubmit2").onclick = exercise2;

/*
EXERCISE 3: TÍNH THUẾ THU NHẬP CÁ NHÂN

1. Input: thu nhập năm, số người phụ thuộc

2. Process: 
	- Lấy input từ UI bằng DOM
	- Tính thu nhập chịu thuế
	- Tính thuế thu nhập cá nhân

3. Output: tiền thuế phải nộp

*/

function calcTax(tax) {
  if (tax > 960) return (tax * 35) / 100;
  if (tax > 624) return (tax * 30) / 100;
  if (tax > 384) return (tax * 25) / 100;
  if (tax > 210) return (tax * 20) / 100;
  if (tax > 120) return (tax * 15) / 100;
  if (tax > 60) return (tax * 10) / 100;
  if (tax > 0) return (tax * 5) / 100;
}

function exercise3() {
  var income = +document.getElementById("incomePerYear").value;
  if (income == "") {
    alert("Nhập thu nhập");
    return;
  }
  var person = +document.getElementById("numberPerson").value;
  if (person == "") {
    alert("Nhập số người phụ thuộc");
    return;
  }
  var incomeTax = income - 4 - person * 1.6;
  document.getElementById("tax").innerHTML = calcTax(incomeTax);
}

document.getElementById("btnSubmit3").onclick = exercise3;

/*
EXERCISE 4: TÍNH TIỀN CÁP

1. Input: mã khách hàng, loại khách hàng, số kết nối, số kênh

2. Process:
	- Lấy input từ UI thông qua DOM
	- Tính tiền cáp theo loại khách hàng

3. Output: tiền cáp

*/document.getElementById("typeCustom").onchange=function(){
if (document.getElementById("typeCustom").value==="company"){
	document.getElementById("connectNumber").style.display="inline";
}
}

function calcCap(custom, connect, channel) {
  if (custom === "citizen") return 4.5 + 20.5 + 7.5 * channel;
  if (custom === "company" && connect <= 10) return 15 + 75 + 50 * channel;
  if (custom === "company" && connect > 10)
    return 15 + 75 + (connect - 10) * 5 + 50 * channel;
}

function exercise4(){
	var id= document.getElementById("IDCustomer").value;
	var customer=document.getElementById("typeCustom").value;
	var connectNumber=+document.getElementById("connectNumber").value;
	var channelNumber=+document.getElementById("channelNumber").value;
	if(id===""){
		alert("Hãy nhập mã khách hàng");
		return;
	}
	if(customer==="type"){
		alert("Hãy chọn loại hình khách hàng");
		return;
	}
	if(channelNumber===""){
		alert("Hãy nhập số kênh");
		return;
	}
	if(customer==="company"&&connectNumber===""){
		alert("Hãy nhập số kết nối");
		return;
	}
	document.getElementById("ID").innerHTML=id;
	document.getElementById("total4").innerHTML=calcCap(customer,connectNumber,channelNumber);
}

document.getElementById("btnSubmit4").onclick=exercise4;