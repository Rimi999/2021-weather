/* 
kAKAO Aap Key:	a1087f86f0900c2dc9d5f49d87b8a9d5

*/


$(function() {

	/*************** 글로벌 설정 *****************/
	var time;
	var timeDivision;
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
	initBg();
	initMap();


	function initBg() {
		var d = new Date('2021-05-07 03:33:33');
		time = d.getHours();
		timeDivision = 
		(time >= 2 	&& time < 6	) ? 1 : 
		(time >= 6 	&& time < 10) ? 2 :
		(time >= 10 && time < 14) ? 3 :
		(time >= 14 && time < 18) ? 4 :
		(time >= 18 && time < 22) ? 5 : 6;

		for(var i=1; i<=6; i++) $bgWrapper.removeClass('active'+i);
		$bgWrapper.addClass('active'+timeDivision);
	}

	function initMap() {
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(36.239934, 127.555918),
			level: 13,
			draggable : false,
			zoomable : false,
		};

		var map = new kakao.maps.Map(container, options);
		map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
	}

	/*************** 이벤트 등록 *****************/



	/*************** 이벤트 콜백 *****************/


});