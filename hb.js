function insertYHElement() {
  var yhBanner = document.createElement("div");
  var yhBannerContent = document.createTextNode("【测试】言出一人歌，歌起万人和");
  yhBanner.appendChild(yhBannerContent); //yhBannerContent 是 yhBanner 的子元素
  yhBanner.className = "yanhe"; //言和绿！
  var getyhParentDiv = document.getElementById("home"); //获取 yhBanner 的父元素
  getyhParentDiv.appendChild(yhBanner);
}

function insertTYElement() {
  var tyBanner = document.createElement("div");
  var tyBannerContent = document.createTextNode("【测试】华风夏韵，洛水天依");
  tyBanner.appendChild(tyBannerContent); //tyBannerContent 是 tyBanner 的子元素
  tyBanner.className = "tianyi"; //天依蓝！
  var gettyParentDiv = document.getElementById("home"); //获取 tyBanner 的父元素
  gettyParentDiv.appendChild(tyBanner);
}

function processCurrentDate() {
  var today = new Date();
  var yanheDay = new Date(today.getFullYear(),7,11);
  var tianyiDay = new Date(today.getFullYear(),7,12); //这俩娃生日居然只差一天……
  if (today.getTime() == yanheDay.getTime()) { //时间戳相同
    insertYHElement();
  }
  if (today.getTime() == tianyiDay.getTime()) {
    insertTYElement();
  }
}
