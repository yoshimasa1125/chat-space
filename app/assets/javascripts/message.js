
$(function() {
  function buildMessageHTML(message){
  var img = ""
    if (message.image !== null) {
        img = `<img class="lower-message__image", src="${message.image}">`
    }
    var html = `<div class="main-message__box" data-id=${message.id}>
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

  $("#new_message").on('submit', function(e) {
  	e.preventDefault();
    var formData = new FormData(this);
    $('.main-message').animate({scrollTop: $(".main-message")[0].scrollHeight});
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
     .done(function(data){
      var html = buildMessageHTML(data);
      $('.main-message').append(html);
      $('.form__field').val('');
      $('#message_image').val('');
    })
     .fail(function(){
      alert('エラー');
    })
     .always(function(){
       $('.new_message__submit').attr('disabled', false);
     })
  });
});
