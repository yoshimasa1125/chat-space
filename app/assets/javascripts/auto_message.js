$(function() {
  function autoMessageHTML(message){

  var img = (message.image != null) ? `<img class= "lower-message__image", src="${message.image}">` : ''
	// if (message.image !== null) {
	//    img = `<img class="lower-message__image", src="${message.image}">`
	// }
	var html = `<div class="main-message__box" data-id=${message.id} >
	              <div class="upperbox">
	                <div class="upperbox__talker">
	                  ${message.user_name}
	                </div>
	                <div class="upperbox__date">
	                  ${message.created_at}
	                </div>
	              </div>
	              <div class="text">
	                ${message.content}
	              </div>
	                ${img}
	            </div>`
	return html;
  };
	var reloadMessages = function() {
    var lastMessageId = $('.main-message__box:last').data('id');
    $('.main-message').animate({scrollTop: $(".main-message")[0].scrollHeight});
    $.ajax({
      url: '/groups/:group_id/api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: lastMessageId}
    })

    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
      insertHTML += autoMessageHTML(message);
      });
      $('.main-message').append(insertHTML);
    })
    .fail(function() {
    });
  };
  setInterval(reloadMessages, 5000);
});
