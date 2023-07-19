// JavaScript Document

$(document).ready(function() {
// Форма обратной связи................................./

var regVr22 = "<div><img style='margin-bottom:-4px;' src='load.gif' alt='Отправка...' width='16' height='16'><span style='font: 11px Verdana; color:#333; margin-left:6px;'>Сообщение отправляется...</span></div><br />";

$("#send").click(function(){
		$("#loadBar").html(regVr22).show();
		var posName = $("#posName").val();
		var posEmail = $("#posEmail").val();
		var posText = $("#posText").val();
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: {"posName": posName, "posEmail": posEmail, "posText": posText},
			cache: false,
			success: function(response){
		var messageResp = "<p style='font-family:Arial,sans-serif;color:#8b8e94;line-height:24px;font-size:17px; border:1px solid #009ca8; padding:10px; border-radius:4px; -moz-border-radius:4px; -webkit-border-radius:4px; background-color:#fff;'>Спасибо, <strong>";
		var resultStat = "!</strong> Ваше сообщение отправлено!</p>";
		var oll = (messageResp + posName + resultStat);
				if(response == 1){
				$("#loadBar").html(oll).fadeIn(3000);
				$("#posName").val("");
				$("#posEmail").val("");
				$("#posText").val("");
				} else {
		$("#loadBar").html(response).fadeIn(3000); }
										}
		});
		return false;
});


});