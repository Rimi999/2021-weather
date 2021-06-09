$(function() {
	
	/*************** 글로벌 설정 *****************/
	var time;
	var timeDivison;
	var $stageWrapper = $('.stage-wrapper');


	/*************** 사용자 함수 *****************/
	init();
	function init(){
		var d = new Date();
		time = d.getHours();
		timeDivison =
		(time >= 02	&& time < 06) ? 1:
		(time >= 06	&& time < 10) ? 2:
		(time >= 10 && time < 14) ? 3:
		(time >= 14 && time < 18) ? 4:
		(time >= 18 && time < 22) ?	5:6;

		for(var i=1; i<=6; i++) $stageWrapper.removeClass('active'+i);
		$stageWrapper.addClass('active'+timeDivison);
	}


	/*************** 이벤트 등록 *****************/


	/*************** 이벤트 콜백 *****************/
});