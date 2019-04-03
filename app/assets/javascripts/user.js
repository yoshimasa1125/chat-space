$(function() {

  var search_list = $('#user-search-result');

  function appendbuildHTML(user){
       var html = `<div class="chat-group-user clearfix">
                     <p class="chat-group-user__name">${user.name}</p>
                       <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                   </div>`
   search_list.append(html);
  }

  var search_list = $('#user-search-result');

  function userHTML(name, user_id){
       var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                     <input name='group[user_ids][]' type='hidden' value='ユーザーのid'>
                       <p class='chat-group-user__name'>${name}</p>
                       <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                   </div>`
       return html;
  }

  var search_list = $('#user-search-result');

  function errorHTML(missmatch){
       var html = `<div class="chat-group-user clearfix">
                     <p class="chat-group-user__name">${missmatch}</p>
                   </div>`
       search_list.append(html);
  }

  $("#chat-group-users").on("click","a",function() {
    $(this).parent().remove();
  });

  $("#user-search-result").on("click", "a", function () {
    var name = $(this).attr("data-user-name")
    var user_id = $(this).attr("data-user-id")
    var html = userHTML(name, user_id)
    $('#chat-group-users').append(html);
    $(this).parent().remove();
  })

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $('#user-search-result').empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendbuildHTML(user);
        });
      }else {
        errorHTML("一致する名前はありません");
      }
    })
    .fail(function() {
      alert('名前の検索に失敗しました');
    })
  });
});