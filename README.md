#  個人書架 Personal Library

這是一個使用 HTML、CSS、JavaScript 和 Bootstrap 製作的靜態「個人書庫」網站，用來展示個人收藏的書籍清單，重點在於版面設計與響應式排版練習。

##  專案特色

- 書籍以卡片形式排版，整齊美觀
- 使用 Bootstrap 提供一致且現代化的 UI 元件
- 響應式設計：在手機、平板與桌面裝置上皆有良好顯示效果
- 使用 HTML、CSS 建立版面
- 使用 JavaScript 在「我的書架」頁面載入時動態插入一筆假資料（mock data），模擬新增書籍的情境
- 使用 JavaScript 在「贊助我們」頁面控制右上角購物車數字

##  使用技術

- **HTML5**：建構頁面結構
- **CSS3**：自訂樣式、排版與動畫效果
- **Bootstrap 5**：快速建立響應式排版與 UI 樣式
- **JavaScript**：用於簡單的動態效果

## 專案結構
personal-library/
├── index.html # 主頁面
├── 個人書架.html 
├── 個人資料.html 
├── 常見問題.html 
├── 最新消息.html 
├── 贊助頁面.html 
├── css/
│ └── bookshelf.css # 自訂樣式檔
│ └── bootstrap.css 
│ └── index.css # 自訂樣式檔
├── js/
│ └── personals_bookt.js # 插入假書籍資料的 JavaScript 程式
│ └──  donate.js # 在「贊助我們」頁面控制右上角購物車數字的 JavaScript 程式
│ └──  bootstrap.bundle.js 
└── img/ # 書籍封面圖片或預設圖片
└── 出版社頁面/ 
└── 作者頁面/ 
└── 書籍頁面/

## 使用方式

1. 將專案 clone 到本地端：
   ```bash
   git clone https://github.com/Ting0824/personal_library.git
  
2. 開啟 index.html 即可在瀏覽器中使用，無需後端伺服器。


## ppt連結

[點此查看 Canva 簡報](https://www.canva.com/design/DAGovrGhuTc/1xga0pIVQwtDEdnO513drQ/view?utm_content=DAGovrGhuTc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc20af70ca5)


## 未來改進方向

- 新建 Usra-personal-library 專案
- 串接 Google API
- 改為由使用者實際操作新增書籍
- 加入書籍分類、搜尋與篩選功能
- 整合 LocalStorage 或後端 API 儲存資料

## License

本專案為個人練習作品，僅供學習與展示使用，無授權限制。


