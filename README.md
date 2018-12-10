# DB設計

## usersテーブル


### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members

## groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|index: true, null: false, unique: true|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|string||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group




