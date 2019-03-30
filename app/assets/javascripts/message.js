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
                     <% if message.content.present? %>
                        <% p.lower-message__content %>
                            ${message.content}
                  = image_tag message.image.url, class: 'lower-message__image' if message.image.present?`

    return html;
  }
  // var position = $("form").offset().top;
  $('.main-message').animate({scrollTop: $(".main-message")[0].scrollHeight});
  $("#new_message").on('submit', function(e) {
  	e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
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
      $('.main-message').append(html)
      $('#new_message').val('')
    })
  });
});







