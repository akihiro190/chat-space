$(function(){
  function buildHTML(message){
    var image = (message.image)? `<img class="lower-message__image" src="${message.image}"/>` : '';
    var html =
    `<div class='message' data-message-id="${message.id}">
      <div class='upper-message'>
        <div class='upper-message__name'>
         ${message.name}
        </div>
        <div class='upper-message__date'>
        ${message.date}
        </div>
      </div>
      <div class='lower-message'>
        <p class='lower-message__content'>
        ${message.content}
        </p>
        ${image}
      </div>
    </div>`
    return html;
  }
  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    var message_id = $('.message:last').data('messageId');
    $.ajax({
      url: location.href,
      data: {
        message: { id: message_id }
      },
      dataType: 'json'
    })
    .done(function(messages) {
      var insertHTML = '';
        messages.forEach(function(message){
          insertHTML += buildHTML(message);
        });
      $('.messages').append(insertHTML);
      $(".messages").animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('error')
    });
  } else {
    crearInterval(interval);
  }
  } , 5000 );
});
