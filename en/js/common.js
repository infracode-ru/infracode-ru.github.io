$(document).ready(function() {

	// Drop lang on hover
	$('.lang > li').hover(function(){
		$(this).children('.lang-drop').stop(false, true).fadeIn(500);
	}, function(){
		$(this).children('.lang-drop').stop(false, true).fadeOut(500);
	});

	// Плавный скролл
	$('.slowly').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top + 0;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	// Выдвигающееся меню
	$('.toggle-nav').on('click', function() {
		$(this).toggleClass('on');

		var $this = $(this);
		if($this.hasClass('on')){
			$('.mnu-mob').animate({
				right: '0px'
			}, 200);
			$('body').animate({
				right: '220px'
			}, 200);
		} else {
			$('.mnu-mob').animate({
				right: '-220px'
			}, 200);
			$('body').animate({
				right: '0px'
			}, 200);
		}
	});

	// Зкарыть меню при клике на ссылку
	$('.mnu-mob a').click(function() {
		$('.mnu-mob').css('right', '-220px');
		$('body').css('right', '0px');
	});

	//Отправка данных на почту
	$(".callback-form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$('.callback-form-success').css('transform', 'scale(1)');
			setTimeout(function() {
				$('.callback-form-success').css('transform', 'scale(0)');
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
