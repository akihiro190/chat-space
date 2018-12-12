$(function(){
  var search_list = $('.user-search-result');

  function appendName(user) {
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
    </div>`
    search_list.append(html);
  }

  function appendNoName(name) {
    var html = `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${name}</p>`
      search_list.append(html);
  }

  function appendUser(user) {
    var html =
    `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value=${user.id}>
      <p class='chat-group-user__name'>${user.name}</p>
      <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
    </div>`
    $('.chat-group-users').append(html);
  }

  // "#user-serch-field”の部分のテキストフィールドがkeyupしたら、テキストフィールドの文字を取得して変数inputに代入する
  $("#user-search-field").on("keyup", function(){
  // formの値を取得するときはval()を使う
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })
     // jbuilderでarray!を使用しているため、配列型で情報が返ってきて、namesに代入される
    .done(function(names){
      $('.user-search-result').find('.chat-group-user').remove();
      if (names.length !== 0) {
        names.forEach(function(name){
        appendName(name);
        });
      }
      else {
        appendNoName("一致する名前はありません");
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました')
    })
  });

  $(document).on('click', '.user-search-add' , function() {
    $(this).parent().remove();
    var name = $(this).attr('data-user-name')
    var id = $(this).attr('data-user-id')
    var user = {name: name, id: id}
      appendUser(user);
  });

  $(document).on('click', '.user-search-remove' , function() {
    $(this).parent().remove();
  });
});
