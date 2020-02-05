document.getElementById('menu').addEventListener('click',function(){
	var menu = document.getElementsByClassName("disable").className;
	menu = menu +" " + scrollMenu;
	document.getElementsByClassName("disable").className.replace('menu');
});