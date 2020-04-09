var photoCurrentPage = [0, 0, 0]

function showLightBox(number)
{
	id='photo'+number;
	$("#"+id).addClass('showLightBoxContainerAnimation');
	$( "#"+id ).find( ".slaidWindow" ).addClass('showSlaidWindow');
}

function closeLightBox(number)
{
	id='photo'+number;
	$("#"+id).removeClass('showLightBoxContainerAnimation');
	$( "#"+id ).find( ".slaidWindow" ).removeClass('showSlaidWindow');
	photoCurrentPage[number]=0;
	window.setTimeout(function(){$( "#"+id ).find('.slaidContainer').css("transform", "translateX(0)");}, 1000);
	window.setTimeout(function(){$( "#"+id ).find('.slaidContainer').css("-webkit-transform", "translateX(0)");}, 1000);
}



function moveToRight(number, howMany)
{
	id='photo'+number;
	if(photoCurrentPage[number]==(howMany-1))
	{
		$( "#"+id ).find('.slaidContainer').css("transform", "translateX(0)");
		$( "#"+id ).find('.slaidContainer').css("-webkit-transform", "translateX(0)");
		photoCurrentPage[number]=0;
	}
	else
	{
		photoCurrentPage[number]++;
		move=photoCurrentPage[number];
		$( "#"+id ).find('.slaidContainer').css("transform", "translateX("+(-100/howMany)*move+"%)");
		$( "#"+id ).find('.slaidContainer').css("-webkit-transform", "translateX("+(-100/howMany)*move+"%)");
	}
}

function moveToLeft(number, howMany)
{
	id='photo'+number;
	if(photoCurrentPage[number]==0)
	{
		$( "#"+id ).find('.slaidContainer').css("transform", "translateX("+(-100/howMany)*(howMany-1)+"%)");
		$( "#"+id ).find('.slaidContainer').css("-webkit-transform", "translateX("+(-100/howMany)*(howMany-1)+"%)");
		photoCurrentPage[number]=howMany-1;
	}
	else
	{
		photoCurrentPage[number]--;
		move=photoCurrentPage[number];
		$( "#"+id ).find('.slaidContainer').css("transform", "translateX("+(-100/howMany)*move+"%)");
		$( "#"+id ).find('.slaidContainer').css("-webkit-transform", "translateX("+(-100/howMany)*move+"%)");
	}
}

