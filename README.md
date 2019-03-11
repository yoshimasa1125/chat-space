# README

## usersテーブル

|Column     |Type   |Options    |
|-----------|-------|-----------|
|user       |string |null: false|
|mail_adress|varchar|null: false|


Association
has_many :relations
has_many :groups, through: :relations
has_many :messages


## messagesテーブル

|Column |Type   |Options   |
|-------|-------|----------|
|message|text   |null: true|
|image  |string |null: true|


Association
belongs_to :users

## groupsテーブル

|Column  |Type   |Options    |
|--------|-------|-----------|
|group   |string |null: false|


Association
has_many :relations
has_many :users, through: :relations




## relationsテーブル

|Column|Type      |Options                       |
|------|----------|------------------------------|
|user  |references|null: false, foreign_key: true|
|group |references|null: false, foreign_key: true|

Association
belongs_to :user
belongs_to :group