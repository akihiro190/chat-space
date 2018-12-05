class Group < ApplicationRecord
  has_many :users, through: :members
  has_many :members
  has_many :messages
  validates :name, presence: true

  def show_last_message
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が表示されています'
    else
      'まだメッセージがありません'
    end

  end
end
