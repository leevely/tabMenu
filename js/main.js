'use strict';
$(document).ready(function () {

     //변수 tab에 new TabMenu라는 클래스(하단)를 넣어라(복사하라)
    //플러그인의 개념

    var tab1 = new TabMenu({
        selector: ".tab1"            //객체데이터
    });

    var tab2 = new TabMenu({
        selector: ".tab2",
        fade: true,     //값을 안적으면 undefined가 들어감 -> false로 변환됨
        duration: 400 // fade되는 속도
    });

});

