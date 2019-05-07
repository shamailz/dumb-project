
console.log("hello!")

var colorArray = ["green", "blue", "purple", "teal", "yellow"];
var colorArrayTwo = ["blue", "red", "teal", "gray", "purple"];
var colorArrayThree = ["purple", "yellow", "teal", "blue", "red"];
var colorArrayFour = ["blue", "green", "red", "purple", "yellow"];
var colorArrayFive = ["red", "green", "orange", "purple", "teal"];
var colorArraySix = ["blue", "green", "purple", "pink", "teal"];

var counter = 0; 
var pictureTop = $(".picture").offset().top;
var boxTop = $(".color").scrollTop();
var colorTop = $(".color").offset().top;
console.log(colorTop , boxTop)

$(".box-2").draggable();
$(".box-1").draggable();
$(".box-3").draggable();
$(".box-4").draggable();
$(".box-5").draggable();
$(".box-6").draggable();

$(".box-2").scroll(function(){	
	// console.log("working");
	$(".color").fadeIn(4000).css("background-color", colorArray[counter]);
	counter++;
	if(counter == colorArray.length){ 
		counter = 0
	}
});
$(".box-1").scroll(function(){	
	// console.log("working");
	$(".color2").fadeIn(4000).css("background-color", colorArrayTwo[counter]);
	counter++;
	if(counter == colorArrayTwo.length){ 
		counter = 0
	}
});
$(".box-3").scroll(function(){	
	// console.log("working");
	$(".color3").fadeIn(4000).css("background-color", colorArrayThree[counter]);
	counter++;
	if(counter == colorArrayThree.length){ 
		counter = 0
	}
});
$(".box-4").scroll(function(){	
	// console.log("working");
	$(".color4").fadeIn(4000).css("background-color", colorArrayFour[counter]);
	counter++;
	if(counter == colorArrayFour.length){ 
		counter = 0
	}
});
$(".box-5").scroll(function(){	
	// console.log("working");
	$(".color5").fadeIn(4000).css("background-color", colorArrayFive[counter]);
	counter++;
	if(counter == colorArrayFive.length){ 
		counter = 0
	}
});
$(".box-6").scroll(function(){	
	// console.log("working");
	$(".color6").fadeIn(4000).css("background-color", colorArraySix[counter]);
	counter++;
	if(counter == colorArraySix.length){ 
		counter = 0
	}
});

$("#picture.1").click(function(){
	$("#picture.1").src("src" , "images/pic-4-black.jpg").removeId("#picture.1").addClass(".pic");
});