json.name  @message.user.name
json.content  @message.content
json.image  @message.image.url
json.user_id  @message.user_id
json.date  @message.created_at.strftime('%F %T')
