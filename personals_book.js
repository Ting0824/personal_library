// 控制頂端導航欄顯示與隱藏
const navbarTogglerBtn = document.getElementById("navbarTogglerBtn");
const navbarCollapse = document.getElementById("navbarNav");

// 點擊漢堡按鈕時控制頂端導航欄的顯示與隱藏
navbarTogglerBtn.addEventListener("click", function () {
  navbarCollapse.classList.toggle("show");
});

// 獲取書籍封面和彈跳視窗的元素
let modals = {
  bookCover1: document.getElementById("bookModal1"),
  bookCover2: document.getElementById("bookModal2"),
  bookCover3: document.getElementById("bookModal3"),
  bookCover4: document.getElementById("bookModal4"),
  bookCover5: document.getElementById("bookModal5"),
  bookCover6: document.getElementById("bookModal6"),
  bookCover7: document.getElementById("bookModal7"),
  bookCover8: document.getElementById("bookModal8"),
  bookCover9: document.getElementById("bookModal9"),
  bookCover10: document.getElementById("bookModal10"),
};

// 綁定書籍封面的點擊事件，打開對應的彈跳視窗
// document.getElementById("classCover1").onclick = function () {
//   modals.bookCover1.style.display = "block";
// };
// document.getElementById("classCover2").onclick = function () {
//   modals.bookCover2.style.display = "block";
// };
// document.getElementById("classCover3").onclick = function () {
//   modals.bookCover3.style.display = "block";
// };
// document.getElementById("classCover4").onclick = function () {
//   modals.bookCover4.style.display = "block";
// };
// document.getElementById("classCover5").onclick = function () {
//   modals.bookCover5.style.display = "block";
// };
// document.getElementById("classCover6").onclick = function () {
//   modals.bookCover6.style.display = "block";
// };
// document.getElementById("classCover7").onclick = function () {
//   modals.bookCover7.style.display = "block";
// };
// document.getElementById("classCover8").onclick = function () {
//   modals.bookCover8.style.display = "block";
// };
// document.getElementById("classCover9").onclick = function () {
//   modals.bookCover9.style.display = "block";
// };
// document.getElementById("classCover10").onclick = function () {
//   modals.bookCover10.style.display = "block";
// };

// 用 Object.keys() 遍歷 modals 並自動綁定事件
Object.keys(modals).forEach((key, index) => {
  let coverId = `classCover${index + 1}`;
  let bookCoverElement = document.getElementById(coverId);

  // 如果書籍封面元素存在，綁定點擊事件
  if (bookCoverElement) {
    bookCoverElement.onclick = function () {
      modals[key].style.display = "block";
    };
  }
});

// // 抓取每個彈跳視窗關閉按鈕
// var closeBtn1 = document.getElementsByClassName("closeBtn")[0];
// var closeBtn2 = document.getElementsByClassName("closeBtn")[1];
// var closeBtn3 = document.getElementsByClassName("closeBtn")[2];
// var closeBtn4 = document.getElementsByClassName("closeBtn")[3];
// var closeBtn5 = document.getElementsByClassName("closeBtn")[4];
// var closeBtn6 = document.getElementsByClassName("closeBtn")[5];
// var closeBtn7 = document.getElementsByClassName("closeBtn")[6];
// var closeBtn8 = document.getElementsByClassName("closeBtn")[7];
// var closeBtn9 = document.getElementsByClassName("closeBtn")[8];
// var closeBtn10 = document.getElementsByClassName("closeBtn")[9];

// // 點擊關閉按鈕關閉彈跳視窗
// closeBtn1.onclick = function () {
//   modals.bookCover1.style.display = "none";
// };
// closeBtn2.onclick = function () {
//   modals.bookCover2.style.display = "none";
// };
// closeBtn3.onclick = function () {
//   modals.bookCover3.style.display = "none";
// };
// closeBtn4.onclick = function () {
//   modals.bookCover4.style.display = "none";
// };
// closeBtn5.onclick = function () {
//   modals.bookCover5.style.display = "none";
// };
// closeBtn6.onclick = function () {
//   modals.bookCover6.style.display = "none";
// };
// closeBtn7.onclick = function () {
//   modals.bookCover7.style.display = "none";
// };
// closeBtn8.onclick = function () {
//   modals.bookCover8.style.display = "none";
// };
// closeBtn9.onclick = function () {
//   modals.bookCover9.style.display = "none";
// };
// closeBtn10.onclick = function () {
//   modals.bookCover10.style.display = "none";
// };

// 抓取所有的關閉按鈕和書籍封面
let closeBtns = document.getElementsByClassName("closeBtn");

// 將 closeBtns 轉換為陣列，並綁定點擊事件
// Array.from(closeBtns)把類陣列轉換為陣列
Array.from(closeBtns).forEach((closeBtn, index) => {
  closeBtn.onclick = function () {
    let modalKey = `bookCover${index + 1}`;
    if (modals[modalKey]) {
      modals[modalKey].style.display = "none";
    }
  };
});

// 點擊其他區域關閉彈跳視窗，單獨設定會覆蓋掉前一個設定
// Object.keys返回物件屬性的陣列
window.onclick = function (event) {
  Object.keys(modals).forEach(function (key) {
    if (event.target == modals[key]) {
      modals[key].style.display = "none";
    }
  });
};

// 當輸入特定ISBN並點選儲存會新增一個新書頁面在版面上
let clickAdd = document.querySelector("#saveNewBook");
let addNew = document.querySelector("#newBookHome");
var addNewBookModal = new bootstrap.Modal(
  document.getElementById("addNewBook")
);

// 後面印出的物件的動作要和新印出的一起行動，否則會先行動完
clickAdd.addEventListener("click", () => {
  addNew.innerHTML = `
   <div class="h-100">
     <img src="./img/書籍照片/城市.jpg" alt="" class="bookCover card-img-top img-fluid mt-3" id="classCover11">
     <div class="card-body">
       <strong>
         <h5 class="card-title ps-4 mt-2">99%隱形的城市日常設計</h5>
         </strong>
         <a href="../作者頁面/羅曼．馬斯.html" class="card-body ps-4 pt-5">羅曼．馬斯 </a><br/>
         <a href="../作者頁面/柯特．科爾斯泰特.html" class="card-body ps-4 pt-5">柯特．科爾斯泰特</a>
         <br />
         <a class="card-body ps-4 pt-5" href="./出版社頁面/野人出版社.html">野人文化</a>
         </div>
         </div>`;
  addNewBookModal.hide();
  // 給予彈跳視窗變數
  let modals = {
    bookCover1: document.getElementById("bookModal1"),
    bookCover2: document.getElementById("bookModal2"),
    bookCover3: document.getElementById("bookModal3"),
    bookCover4: document.getElementById("bookModal4"),
    bookCover5: document.getElementById("bookModal5"),
    bookCover6: document.getElementById("bookModal6"),
    bookCover7: document.getElementById("bookModal7"),
    bookCover8: document.getElementById("bookModal8"),
    bookCover9: document.getElementById("bookModal9"),
    bookCover10: document.getElementById("bookModal10"),
    bookCover11: document.getElementById("bookModal11"),
  };
  // let bookCover11 = document.getElementById("bookModal11");
  // 抓取封面並設定事件
  document.getElementById("classCover11").onclick = function () {
    modals.bookCover11.style.display = "block";
  };
  // 設定關閉按鈕
  var closeBtn11 = document.getElementsByClassName("closeBtn")[10];
  closeBtn11.onclick = function () {
    modals.bookCover11.style.display = "none";
  };
  // 設定點選視窗關閉，單獨設定會造成其他彈跳視窗無法透過點選其他部分關閉，因此同時也要再重新宣告彈跳視窗物件
  window.onclick = function (event) {
    Object.keys(modals).forEach(function (key) {
      if (event.target == modals[key]) {
        modals[key].style.display = "none";
      }
    });
  };
});
