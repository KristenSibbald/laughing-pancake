$( document ).ready(function() {
	console.log("ready");


	var remove = function() {
		//select node to remove

	};
	$("#addListElement").click(function(){
		// <li>I am a new list item</li>
		// take what's in the input store in variable listText
		// 
		var listText = $(".newTodo").val(); // use another jquery selector to get the value in input assign to listText;

		var listItem = '<li class="unfinished"><span class="textPadding">' + listText + '</span><button type="button" class="finishedTask">complete</button> <button type="button" class="removeListElement">remove</button></li>';
		$(".containerList").append(listItem);
	$("li").filter(".finishedTask");

	});
  /* 
  	so on the docuument
	if a item with the class finishedTask is clicked
	do the function
  */
  $(document).on('click', '.finishedTask', function(){
  	$(this).closest('li').removeClass('unfinished');
    $(this).closest('li').addClass('finished');
  });

  $(document).on('click', '#showCompleted', function(){
  	$(".unfinished").hide();
  	$(".finished").show();
  });
  $(document).on('click', '#showUncompleted', function(){
  	$(".unfinished").show();
  	$(".finished").hide();
  });
   $(document).on('click', '#showAll', function(){
  	$(".unfinished").show();
  	$(".finished").show();
  });
   $(document).on('click', '.removeListElement', function(){
   	$(this).closest('li').remove();
	});
   
	
	//   so we gotta add a click listener to the complete button.
		//   	how do we select it?
});

// In your html 

// put a style tag above your body tag
// <style> .unfinished { color: red; } </style>