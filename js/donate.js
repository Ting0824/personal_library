document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// 購物車點選購買後改變樣式
// 可以分寫在同一個程式碼內但分開執行嗎?
// let cartBnt = document.querySelector("#shopCart1");
// let cartBnt2 = document.querySelector("#shopCart2");
// let cartBnt3 = document.querySelector("#shopCart3");
// let cartBnt4 = document.querySelector("#shopCart4");

// cartBnt.addEventListener("click", () => {
//   // 檢查按鈕當前的內容是否已經是填滿的購物車圖示
//   if (cartBnt.innerHTML.includes("bi-cart-fill")) {
//     // 如果已經是填滿的購物車圖示，則恢復原本內容
//     cartBnt.innerHTML = '<h3 class="bi bi-cart"> </h3>';
//   } else {
//     // 否則改成填滿的購物車圖示
//     cartBnt.innerHTML = '<h3 class="bi bi-cart-fill"> </h3>';
//   }
// });
// cartBnt2.addEventListener("click", () => {
//   // 檢查按鈕當前的內容是否已經是填滿的購物車圖示
//   if (cartBnt2.innerHTML.includes("bi-cart-fill")) {
//     // 如果已經是填滿的購物車圖示，則恢復原本內容
//     cartBnt2.innerHTML = '<h3 class="bi bi-cart"> </h3>';
//   } else {
//     // 否則改成填滿的購物車圖示
//     cartBnt2.innerHTML = '<h3 class="bi bi-cart-fill"> </h3>';
//   }
// });
// cartBnt3.addEventListener("click", () => {
//   // 檢查按鈕當前的內容是否已經是填滿的購物車圖示
//   if (cartBnt3.innerHTML.includes("bi-cart-fill")) {
//     // 如果已經是填滿的購物車圖示，則恢復原本內容
//     cartBnt3.innerHTML = '<h3 class="bi bi-cart"> </h3>';
//   } else {
//     // 否則改成填滿的購物車圖示
//     cartBnt3.innerHTML = '<h3 class="bi bi-cart-fill"> </h3>';
//   }
// });
// cartBnt4.addEventListener("click", () => {
//   // 檢查按鈕當前的內容是否已經是填滿的購物車圖示
//   if (cartBnt4.innerHTML.includes("bi-cart-fill")) {
//     // 如果已經是填滿的購物車圖示，則恢復原本內容
//     cartBnt4.innerHTML = '<h3 class="bi bi-cart"> </h3>';
//   } else {
//     // 否則改成填滿的購物車圖示
//     cartBnt4.innerHTML = '<h3 class="bi bi-cart-fill"> </h3>';
//   }
// });

// 控制導向個人頁面
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表單的預設提交行為

    // 成功後，跳轉到指定的頁面
    window.location.href = "./個人資料.html"; // 替換為你自訂的頁面 URL
  });

// 購物車數量改變
let cartCount = 0; // 紀錄選中的商品數量
const cartCountDisplay = document.getElementById("cart-count"); // 取得購物車數量顯示區域
const cartButtons = document.querySelectorAll(".cart-btn"); // 取得所有「加入購物車」按鈕

// 為每個購物車按鈕添加點擊事件
cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector("h3"); // 取得按鈕內的購物車圖示

    // 檢查按鈕是否已經被選中
    if (icon.classList.contains("bi-cart-fill")) {
      // 如果已選中，恢復原本狀態，數量減少
      icon.classList.remove("bi-cart-fill");
      icon.classList.add("bi-cart");
      cartCount--; // 減少購物車數量
    } else {
      // 如果未選中，變更為選中狀態，數量增加
      icon.classList.remove("bi-cart");
      icon.classList.add("bi-cart-fill");
      cartCount++; // 增加購物車數量
    }

    // 更新右上角購物車數量顯示
    cartCountDisplay.textContent = `+${cartCount}`;
  });
});
