function init(){
	var tabs = document.getElementsByTagName("p");
	var cha=document.getElementById('tabs');
	
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click",function(){
			var active = document.getElementsByClassName("active")[0];

			active.className="tab";
			this.parentNode.className="active tab";
		});
	}
	var push=document.getElementsByTagName('i');

	push[0].addEventListener("click",function(){
		var active = document.getElementsByClassName("active")[0];
		if(active.nextElementSibling.id!="icon")
		{
			active.nextElementSibling.className="active tab";
			active.className="tab";
		}
		else
		{
			cha.children[1].className="active tab";
			active.className="tab";
		}





	})
	push[1].addEventListener("click",function(){
		var active = document.getElementsByClassName("active")[0];
		if(active.previousElementSibling.id!="icon")
		{
			active.previousElementSibling.className="active tab";
			active.className="tab";
		}
		else
		{
			cha.children[cha.children.length-2].className="active tab";
			active.className="tab";
		}
	})
	

	var setTime=setInterval(function(){
		var active = document.getElementsByClassName("active tab")[0];
		if(active.nextElementSibling.id!="icon")
			{active.nextElementSibling.className="active tab";
		active.className="tab";
	}



},5000);
}