'use strict';
$(document).ready(function () {

     //���� tab�� new TabMenu��� Ŭ����(�ϴ�)�� �־��(�����϶�)
    //�÷������� ����

    var tab1 = new TabMenu({
        selector: ".tab1"            //��ü������
    });

    var tab2 = new TabMenu({
        selector: ".tab2",
        fade: true,     //���� �������� undefined�� �� -> false�� ��ȯ��
        duration: 400 // fade�Ǵ� �ӵ�
    });

});

