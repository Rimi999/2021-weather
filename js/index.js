$(function() {
	
	/*************** 글로벌 설정 *****************/
	var time;
	var timeDivison;
	var weatherIcon = {
		i01: 'bi-brightness-high',
		i02: 'bi-cloud-sun',
		i03: 'bi-cloud',
		i04: 'bi-clouds',
		i09: 'bi-cloud-rain-heavy',
		i10: 'bi-cloud-drizzle',
		i11: 'bi-cloud-lightning',
		i13: 'bi-cloud-snow',
		i50: 'bi-cloud-haze',
	}
	var $bgWrapper = $('.bg-wrapper');


	/*************** 사용자 함수 *****************/
	initBg ();

	function initBg() {
		var d = new Date();
		time = d.getHours();
		timeDivison =
		(time >= 02	&& time < 06) ? 1:
		(time >= 06	&& time < 10) ? 2:
		(time >= 10 && time < 14) ? 3:
		(time >= 14 && time < 18) ? 4:
		(time >= 18 && time < 22) ?	5:6;
		for(var i=1; i<=6; i++) $bgWrapper.removeClass('active'+i);
		$bgWrapper.addClass('active'+timeDivison);
	}
	
	//4a25235891e03dd674f2b7ba12cbf13a



	/*************** 이벤트 등록 *****************/


	/*************** 이벤트 콜백 *****************/
});