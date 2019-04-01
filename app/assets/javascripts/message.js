
$(function() {
  function buildHTML(message){

    var html = `<div class="main-message__box">
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
                  </div>`
    return html;
  }

  $("#new_message").on('submit', function(e) {
  	e.preventDefault();
    var formData = new FormData(this);
    // 下までスクロール
    $('.main-message').animate({scrollTop: $(".main-message")[0].scrollHeight});
    // console.log(url)
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
      var html = buildHTML(data);
      $('.main-message').append(html);
      $('#new_message').val('');
      // 連続投稿
      $('.new_message__submit').attr('disabled', false);
    });
  });
});
