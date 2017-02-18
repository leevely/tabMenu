'use strict';
$(document).ready(function () {

    var tab = new TabMenu(); //변수 tab에 new TabMenu라는 클래스(하단)를 넣어라(복사하라)
                              //플러그인의 개념
});


function TabMenu() {  //TabMenu라는 클래스임
    this.init();     // this는 TabMenu를 의미!
    this.initEvent();
}

TabMenu.prototype = {

    // 구조를 정리
    init: function () {   // init는 메소드
        this.$tabMenu = $(".tab_menu li");
        this.$tabContents = $(".tab_contents li");
        this.oldIndex = null;
        this.currentIndex = 0;
    },

    // 시작하자마자 실행할 이벤트들   $(this) : 클릭한메뉴
    initEvent: function () {
        var _this = this; //this는 탭메뉴라는 클래스를 의미함

        this.$tabMenu.on("click", function () {
            _this.renewIndex( $(this) );
            _this.toggleMenu( $(this) );
            _this.toggleContent();
        });
    },

    // 번호 갱신 기능
    renewIndex: function ($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },

    // 메뉴 변경 기능
    toggleMenu: function ($this) {
        this.$tabMenu.not($this).removeClass("active");
        $this.addClass("active");
    },

    // 이미지 변경 기능
    toggleContent: function () {
        this.$tabContents.eq(this.oldIndex).hide();
        this.$tabContents.eq(this.currentIndex).show();
    }
};