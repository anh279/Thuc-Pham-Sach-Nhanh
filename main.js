document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header"); // Lấy phần tử header
  const headerHeight = header.offsetHeight; // Lấy chiều cao của header
  const headerHeightSmall = 80;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > headerHeight) {
      // Kiểm tra vị trí cuộn trang có vượt qua chiều cao của header không
      header.classList.add("fixed");
      header.style.height = headerHeightSmall + "px";
    } else {
      header.style.height = "";
      header.classList.remove("fixed");
    }
  });
});

function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var tel = document.getElementById("tel").value;
  var user = {
    username: username,
    email: email,
    password: password,
    tel: tel,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng ký thành công");
}

function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else if (username == data.username && password == data.password) {
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Thông tin không chính xác");
  }
}
