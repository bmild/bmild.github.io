//document.onkeydown = function(event) {
function keyHandler(event) {	
	var key_code = event.keyCode;

	element = document.getElementById('viewer');

	switch( key_code ) { 
	// case 48: // 0
	// 	replaceImage(img0,viewer);
	// 	break;
	case 49: // 1
		replaceImage(img1,viewer);
		break;
	case 50: // 2
		replaceImage(img2,viewer);
		break;
	case 51: // 3
		replaceImage(img3,viewer);
		break;
	case 52: // 4
		replaceImage(img4,viewer);
		break;
	case 53: // 5
		replaceImage(img5,viewer);
		break;
	case 54: // 6
		replaceImage(img6,viewer);
		break;
	}
}

function replaceImage(newimage,image)
{
	image.src=newimage.src;
	image.parentNode.href=newimage.src;
	image.style.borderColor=newimage.style.borderColor;

	// swap new image in for zoom
	var ez = $('#'+image.id).data('elevateZoom');
	ez.swaptheimage(newimage.src,newimage.src); 
}


function setBorder(image)
{
	if(image.src.indexOf('0_ref.png')!=-1)
	{
		image.style.borderColor='black';
	}
	else if(image.src.indexOf('1_avg.png')!=-1)
	{
		image.style.borderColor='#3388FF';
	}
	else if(image.src.indexOf('2_hdrplus.png')!=-1)
	{
		image.style.borderColor='#2244AA';
	}
	else if(image.src.indexOf('3_nlm.png')!=-1)
	{
		image.style.borderColor='#FFDD00';
	}
	else if(image.src.indexOf('4_vbm4d.png')!=-1)
	{
		image.style.borderColor='#CC5C00';
	}
	else if(image.src.indexOf('5_ours_kpn.png')!=-1)
	{
		image.style.borderColor='#009933';
	}
	else if(image.src.indexOf('gt.png')!=-1)
	{
		image.style.borderColor='#009933';
	}
}
