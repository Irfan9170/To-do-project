//check off specific todo by clicking  $("li").click(function(){
$("ul").on("click","li",function(){
	if($(this).css("color")==="rgb(128, 128, 128)") {
		$(this).css({
			color:"black",
			textDecoration:"none"
		});
	} else {
	$(this).css({
		color:"grey",
		textDecoration:"line-through"
	});
	//$(this).css("text-decoration","line-through");


	//create a class in todo.css with .completed {
	//	color:gray;
	//	text-decoration:;ine-through;
	//}    then in above instead of if-else statment
	//$(this).toggleClass("completed");

}
});

// to delete to-do;parent() because it is targeting span right now to remove "li" we use parent
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation
});

//add new todo $("input[type='text']").keypress(function(event){
$("input[type='text']").keypress(function(event){
	//console.log("key pressed");
	if(event.which === 13) {
		//console.log("Entered pressed");
		var entertext=$(this).val();
		$(this).val("");
		//create new li and append to it
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+entertext+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});