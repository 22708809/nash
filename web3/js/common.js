  /* MENU */
$(function(){
		/*prop.utilitiesContainer_switch.on('click', function(){
			// ナビゲーションと、ヘッダユーティリティ領域の表示／非表示を切り替える
			prop.utilitiesContainer.toggleClass(prop.visible_selector);
			prop.mainNavigation.toggleClass(prop.visible_selector);
		});*/
	$('.ulicon').click(function(){
		$('#nav ul').slideToggle();
	});
});


  /* 上下滾動 */
$(function(){
  /* home_line plugin */
  var $Ul = $('.home_line ul'),
      $LI = $Ul.append($Ul.html()).children(),
      _height = $('.home_line').height() * -1,
      scrollSpeed = 900,
      timer,
      speed = 10 + scrollSpeed;
  
  $LI.hover(function(){ clearTimeout(timer); }, function(){  timer = setTimeout(showad, speed);	});
 
	function showad(){
		var _now = $Ul.position().top / _height;
		_now = (_now + 1) % $LI.length;
 
		$Ul.animate({
			top: _now * _height
		}, scrollSpeed, function(){
			if(_now == $LI.length / 2){
				$Ul.css('top', 0);
			}
		});
		timer = setTimeout(showad, speed);
	}
 
	timer = setTimeout(showad, speed);
 
	$('.home_line a').focus(function(){
		this.blur();
	});
  
  $(".panel_menu button").click(function(){
    $(".panel_menu ul").toggleClass("open");
  });
});