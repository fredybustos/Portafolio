
  var $buttonShowMenu = document.getElementById('showMenu');
  var $buttonHideMenu = document.getElementById('hideMenu');
  var $menu = document.getElementById('menu');
  var $navbar = document.getElementById('navbar');

	var showMenu = function(){
		$buttonShowMenu.classList.remove('is-active');
		$buttonHideMenu.classList.add('is-active');
		$menu.classList.add('is-active');
    $navbar.classList.add('is-active');
	}
	var hideMenu = function(){
		$buttonShowMenu.classList.add('is-active');
		$buttonHideMenu.classList.remove('is-active');
		$menu.classList.remove('is-active');
    $navbar.classList.remove('is-active');
	}


	$buttonShowMenu.addEventListener('click', showMenu);
	$buttonHideMenu.addEventListener('click', hideMenu);
      
   