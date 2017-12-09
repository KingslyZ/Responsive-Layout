window.onload=function(){
	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	$("#aaa").click(function(){
		this.addClass("myhot")
	})
}