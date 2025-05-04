/* ==UserStyle==
@name         daimayuanbetter的背景部分
@version      00001332.25.61
@namespace    jsntzth
@description  * 换了背景
* 方角变的更圆
* 或许看起来更丑？（雾）
@author       what-is-me
@license      No License
==/UserStyle== */

@-moz-document domain("daimayuan.top") {
body {
    background: url(https://cdn.luogu.com.cn/upload/image_hosting/uhiclg5g.png) no-repeat fixed top;
    background-size: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    border-radius: 1rem;
    font-family: 'JetBrains Mono', "Microsoft JhengHei";
    font-size: 18px;
}
body div.container {
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    max-width: 90%!important;
}
h1.d-none{
    color:#66ccff;
    -webkit-text-stroke: 1px white;
}
.bg-light {
    background-color: rgba(248, 249, 250,.8)!important;
    border-radius: 1rem;
}
.card {
    background-color: rgba(248, 249, 250, 0)!important;
    border-radius: 1rem;
}
.table-hover {
    background-color: rgba(248, 249, 250,0)!important;
    border-radius: 1rem;
}
.table-bordered td,
.table-bordered th {
    border: 0px solid #dee2e6 !important;
}
.uoj-content {
    background-color: rgba(248, 249, 250, 0.8)!important;
    border-radius: 1rem;
    padding: 40px;
}
.top-buffer-md {
    margin-left: 15px;
    margin-right: 15px;
}
h4 {
    font-size: 18px;
    font-weight: bold;
}
@font-face {
    font-family: 'JetBrains Mono';
    src: local('JetBrains Mono'), url('https://what-is-me.github.io/font/JetBrainsMono-Regular.woff2') format('woff2');
}
.uoj-footer {
    padding-bottom: 20px;
}
/*水平一般*/
}