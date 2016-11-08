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