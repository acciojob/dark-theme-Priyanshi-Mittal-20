//your code here
function swapTheme()
{
	let container=document.querySelector("#app")
	let btn=document.querySelector("#swap")
	if(container.getAttribute("class")==="day")
	{
		container.setAttribute("class","night")
		btn.setAttribute("class","button_night")
	}
	else
	{
		container.setAttribute("class","day")
		btn.setAttribute("class","button_day")
	}
}
