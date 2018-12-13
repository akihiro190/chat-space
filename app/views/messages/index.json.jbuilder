json.array! @messages do |message|
  json.name message.user.name
  json.content message.content
  json.image message.image.url
  json.user_id  message.user_id
  json.group_id  message.group_id
  json.id  message.id
  json.date  message.created_at.strftime('%F %T')
end
