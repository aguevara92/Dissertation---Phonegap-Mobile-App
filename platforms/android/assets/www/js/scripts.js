/* SIGNUP */
$("#signup").click(function(){
	console.log("Sign Up");
    var url = "http://andrs.ec/dev/crimestoppers/signup.php";
    var firstname=$("#firstname").val();
    var lastname=$("#lastname").val();
    var email=$("#email").val();
    var student_id=$("#student_id").val();
    var phone=$("#phone").val();
    var password=$("#password").val();
    var dataString="firstname="+firstname+"&lastname="+lastname+"&email="+email+"&student_id="+student_id+"&phone="+phone+"&password="+password+"&signup=";
    if($.trim(firstname).length>0 & $.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#signup").val('Connecting...');},
            success: function(data){
                if( data == 'success' ) {
                    localStorage.login="true";
                    localStorage.student_id=student_id;
                    window.location.href = "user-view.html";
                } else if ( data == 'exists' ){
                    alert("exists");
                } else if ( data == 'failed' ){
                    alert("failed");
                } else{
                	alert("Error")
                }
            }
        });
    }
    return false;
});

/* LOGIN */
$("#login").click(function(){
    var url = "http://andrs.ec/dev/crimestoppers/login.php";
    var student_id=$("#student_id").val();
    var password=$("#password").val();
    var dataString="student_id="+student_id+"&password="+password+"&login=";
    if($.trim(student_id).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#login").html('Connecting...');},
            success: function(data){
                switch(data) {
				    case "student":
				        localStorage.login="student";
	                    localStorage.student_id=student_id;
	                    window.location.href = "user-view.html";
				        break;
				    case "admin":
				        localStorage.login="admin";
	                    localStorage.student_id=student_id;
	                    window.location.href = "admin-view.html";
				        break;
				    case "password-incorrect":
				        alert("The password is incorrect");
				        break;
				    case "no-exists":
				        alert("There is no account with that student ID");
				        break
				    default:
				}
            },
            afterSend: function(){ $("#login").html('Login');},
        })
    } return false;
});

/* SEND PUSH TO ALL STUDENTS FROM FORM */
$("#sendPushToAll").click(function(){
	console.log("Send Push to all the students");
    var url = "http://andrs.ec/dev/crimestoppers/PushNotifications/sendPushToAll.php";
    var message=$("#message").val();
    var dataString="message="+message+"&sendPush=";
    if($.trim(message).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#sendPushToAll").val('Sending...');},
            success: function(data){
                
            },
            afterSend: function(){ $("#sendPushToAll").val('Message sent');},
        });
    }
    return false;
});

/* SEND PUSH TO STUDENT "Im on my way" */
$("#sendPushStudent").click(function(){
    var url = "http://andrs.ec/dev/crimestoppers/PushNotifications/sendPushToUser.php";
    var student_id=$("#student_id").text();
    var dataString="student_id="+student_id;
    console.log("Send Push to " + student_id);
    if($.trim(student_id).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            success: function(data){
                
            },
            afterSend: function(){ $("#sendPushStudent").val('Message sent');},
        });
    }
    return false;
});


/* LIST OF ALERTS */
if ($("#list-alerts").length != 0){
    var url = "http://andrs.ec/dev/crimestoppers/listOfAlerts.php";
    var dataString="&alerts=";    
    $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        //beforeSend: function(){ $("#login").html('Connecting...');},
        success: function(data){
        	if (data == ""){
        		$("#list-alerts").html("<p>There are no current alerts</p>");
        	} else {
        		$("#list-alerts").html(data);
        	}
        },
    })
};

/* MARK THE ALERT AS SOLVED */
$("#solve-alert").click(function(){
    var url = "http://andrs.ec/dev/crimestoppers/solveAlert.php";
    var alert_id= getQueryVariable("alert_id");
    var dataString="alert_id="+alert_id;
    console.log("Solve Alert - " + alert_id);   
    $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        success: function(data){
            //$("#solve-alert").text("Marked as Solved Succesfully");
            window.location.href = "admin-view.html";
        }
    });
    return false;  
});

// Call current student
$('#callStudent').on("click", function() {
	var phone=$("#phone").text();
    window.open('tel:' + phone, '_system');
});

// Call current student
$('.make-a-call-button').on("click", function() {
	var phone = this.getAttribute('data-myattr');
    window.open('tel:' + phone, '_system');
});


/* LOGOUT */
$("#logout").click(function(){
	localStorage.login="false";
	window.location.href = "login.html";
});

/* GET VIEWPORT SIZES **/
windowHeight = $(window).height();
windowWidth = $(window).width();

/* GET DOM SIZES **/
extraButtons = $('.extraButtons').outerHeight();
panicButton = $('.panicButton').outerHeight();

/* PANIC ACTIVATED */
panicActive = false;

/** SET HEIGHT OF PANIC BUTTON **/
newHeight = windowHeight - extraButtons;
panicButton = newHeight;
$( '.panicButton' ).css( "height", newHeight);
$(window).resize(function(){ /** IF ITS RESIZED **/
	windowHeight = $(window).height();
    newHeight = windowHeight - extraButtons;
	$( '.panicButton' ).css( "height", newHeight);
	panicButton = newHeight;
});

/** FAST TOUCH **/
window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);


/** DRAG PANIC BUTTON **/
$(document).ready(function(e) {
    $('.panicButton').draggable(
    {	
	    axis: 'y',
	    scroll: false,
	    containment: [0, 0, windowWidth, windowHeight-panicButton],
	    start: function (event, ui) {
	        initialPos = ui.position.top;
	        $(this).addClass("Yaxis");
	    },
        drag: function(event, ui){
			var position = $(this).position();
			if (position.top <= 0) {
				$(this).draggable({ disabled: true });  
				$(this).addClass('panicActive');
				PanicActivated();
	        }
        },
        stop: function( event, ui ) {
			$(this).draggable('option', 'axis', "y");
		},
		revert : function(event, ui) {
			var position = $(this).position();
			if (position.top == 0) {
				console.log('top:' + position.top);
				$(this).data("uiDraggable").originalPosition = {
					bottom : 0,
					left : 0,
					top: extraButtons
				};
				return event;
			} else {
				return !event;
			}
		}
    });
});

function PanicActivated(){
	if(!panicActive){
		//Quick Vibration
		navigator.vibrate([100,100,100,350,500]);
		console.log("Alert sent");

		var dataString = 'student_id='+localStorage.student_id+'&latitude='+myLatitud+'&longitude='+myLongitude+'&alert=true';
		$.ajax({
			type:'POST',
			data:dataString,
			url:'http://andrs.ec/dev/crimestoppers/sendAlert.php',
			success:function(data) {
				console.log("Alert Saved");
			}
		});


		var pushDataString = 'student_id='+localStorage.student_id;
		$.ajax({
            type: "POST",
            url:'http://andrs.ec/dev/crimestoppers/PushNotifications/sendPushAlert.php',
            data: pushDataString,
            crossDomain: true,
            cache: false,
            success: function(data){
                console.log("Push Sent");
            }
        });
		

		$('.not-activated').addClass('activated');
		$('.activated').removeClass('not-activated');

		// Desaparecer el texto del Slide
		// Agregar "ACTIVATED"
		// Can you speak?
		// Alert your emergency contact

		panicActive = true;
	} 
}


/** CANCEL ALERT **/
$('.close-button').on( "click", function() {
	console.log('transition back');
	$('.panicButton').draggable({ disabled: false }); 
	$('.panicButton').removeClass('panicActive'); 
	//swap classes
	$('.activated').addClass('not-activated');
	$('.not-activated').removeClass('activated');

	panicActive = false;
});


/** CALL THE POLICE **/
$('.call').on( "click", function() {
	window.open('tel:999', '_system');
});


/** TRANSITION TO INSIDE PAGES **/
$('.callButton:not(".check-in")').on( "click", function() {
	console.log('transition');
	$('body').addClass('inside-page');
	
	/** hide the panic button **/
	var styles = {
      top : '',
      bottom: -panicButton +10
    };
    $( '.panicButton' ).css( styles );
    $('.panicButton').draggable({ disabled: true });  
    
    /** Reveal the page **/
    $('.extraButtons').css('height',extraButtons);
    target = $(this).data("target");
    target = "#" + target;
    $(target).addClass('active');
	
	/** hide extra buttons **/
	$('.callButton')
});


/** TRANSITION BACK TO MAIN PAGE **/
$('.icon-close').on( "click", function() {
	console.log('transition back');
	$('body').removeClass('inside-page');
	$('.panicButton').draggable({ disabled: false });  
	
	/** hide the panic button **/
	var styles = {
		top : '',
		bottom: 0
    };
    $( '.panicButton' ).css( styles );
    
    /** Reveal the page **/
    $('.active').removeClass('active');
});


/** GET GEOLOCATION **/
var myLatitud;
var myLongitude;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	//StatusBar.backgroundColorByHexString("#dbdbea");
	//StatusBar.backgroundColorByHexString("#333");
	// Get the location of the device
	var onSuccess = function(position) {
        myLatitud = position.coords.latitude;
        myLongitude = position.coords.longitude;
        console.log('Latitud: ' + myLatitud);	
		console.log('Longitude: ' + myLongitude);

		checkSafeZone();
    };

    // onError Callback receives a PositionError object
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError); // call the function

    // Check if the point is inside the polygon (location)
    function checkSafeZone(){
	    function inside(point, vs) {
		    // ray-casting algorithm based on
		    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
		    var x = point[0], y = point[1];
		    var inside = false;
		    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
		        var xi = vs[i][0], yi = vs[i][1];
		        var xj = vs[j][0], yj = vs[j][1];
		        var intersect = ((yi > y) != (yj > y))
		            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
		        if (intersect) inside = !inside;
		    }
		    return inside;
		};

		var avenueCampus = [
			[52.252465, -0.894680],
			[52.252785, -0.893426],
			[52.253766, -0.894067],
			[52.254860, -0.891100],
			[52.251160, -0.887432],
			[52.250318, -0.890429],
			[52.250704, -0.894070]
		];

		var parkCampus = [
			[52.272334, -0.888016],
			[52.276945, -0.883051],
			[52.276370, -0.880159],
			[52.272881, -0.877815],
			[52.269817, -0.881135]
		];

		
		//if (inside([ myLatitud, myLongitude ], testingArea) || inside([ myLatitud, myLongitude ], avenueCampus) || inside([ myLatitud, myLongitude ], parkCampus)){
		if (inside([ myLatitud, myLongitude ], avenueCampus) || inside([ myLatitud, myLongitude ], parkCampus)){
			$(".check-in").addClass("safe");
			$("#geolocation").html('You are in a Safe Zone');

		} else {
			$(".check-in").removeClass("safe");
			$("#geolocation").html('You are not in a Safe Zone');
		}
	}
	/*
	StatusBar.show();
	StatusBar.backgroundColorByHexString("#333");
	if (cordova.platformId == 'android') {
	    StatusBar.backgroundColorByHexString("#333");
	}
	*/
}


/** FAQ **/
$(document).ready(function(e) {
	$('#faq h3').each(function() {
		var tis = $(this), state = false, answer = tis.next('div').hide().css('height','auto').slideUp();
		tis.click(function() {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
		});
	});
});






$(function () {

$('#UnRegisterP').click(function (e) {
	alert("click");
    var pushNotification = window.plugins.pushNotification;
    swal("Un-Registration Complete!", "You will no longer recieve push notifications!", "success");
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "990461005412", appid: "6265B-4F39E" });

    //register for pushes
    pushNotification.unregisterDevice(
        function (status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
            swal("Un-Registration Complete!", "You will no longer recieve push notifications!", "success");
        },
        function (status) {
            console.warn(JSON.stringify(['failed to register ', status]));
            swal("Error: Registering...", "Something went wrong", "error");
        }
    );
});
});