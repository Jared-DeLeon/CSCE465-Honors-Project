$('.flip-card-inner').click(function() {
	var clicks = $(this).data('clicks');
  	if (clicks) {
    	$(this).css("transform", "rotateY(180deg)");
  	} else {
    	$(this).css("transform", "");
  	}
  	$(this).data("clicks", !clicks);
    
});

function validateForm() {
	var pwd = document.forms["pwdForm"]["Password"].value;
	var spot = document.getElementById("ErrorText");

	spot.innerHTML = "The password: " + pwd + " is incorrect!";
	return false;
}

function validateForm1() {
	alert("Not a User, please log in using your Google Account!");
}

function room2() {
	alert("Wrong Password!");
}

function room3() {
	var pwd, text;
	pwd = document.forms["pwdForm"]["Password"].value;
	if(pwd == "HackingThough3ImOnASpree!"){

		var result = confirm("You got the password!!! \n Click OK to go to the next room");
		if(result){
			alert("73% of people were able to pass this room! Congrats! ");
			alert("Commenting your code is important, but sometimes it can give people information they shouldn't have \n It may not be the secret password, but any information put out there can potentially be used against you so make sure to hide as much as possible!");
			window.open("../Rooms/Room4.html");
		}
		window.close();
		
	}else{
		alert("Wrong Password!");
	}
}

function createCookie() {
	document.cookie = "password = Room4IsAnOpenDoor!";
}

function room4() {
	var pwd, text;
	pwd = document.forms["pwdForm"]["Password"].value;
	if(pwd == "Room4IsAnOpenDoor!"){

		var result = confirm("You got the password!!! \n Click OK to go to the next room");
		if(result){
			alert("65% of people were able to pass this room! Congrats!");
			alert("Cookies store session information, like a trail of cookie crumbs so that when you come back it remembers your face!");
			alert("This can be convenient so you don't have to keep inputting your information\nHowever other sites could potentially steal your cookies that may contain sensitive information like your login credentials!\nSo make sure to clear out your cookies every once in a while!");
			window.open("../Rooms/Room5.html");
		}
		window.close();
		
	}else{
		alert("Wrong Password!");
	}
}


function room5() {
	alert("10% of people were able to pass this room! Congrats!")
	window.open("../Rooms/Room6.html");
	window.close();
}

function room6() {
	window.open("../Rooms/Room6.html");
	window.close()
}
function validateLogin() {

	var usr, pwd;
	usr = document.getElementById("email_input").value;
	pwd = document.getElementById("password_input").value;

	var result = confirm("Your username and pwd are: " + usr + " " + pwd + "\nYour gmail information has been phished. Be careful next time!\n(Note: this info has not been stored)");
	if(result){
		alert("90% of people fell for this scam...Be more careful with your information \n This also shows why you should have several passwords! \n In the case your google account is hacked, what else is now vulnerable?")
		window.open("../Rooms/Room2.html");
	}
	window.close()
}

function startGame() {
	alert("Starting! You can now close the homepage!");
	window.open("./Rooms/Room1.html");
}