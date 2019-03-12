# README

## usersテーブル

|Column     |Type   |Options                               |
|-----------|-------|--------------------------------------|
|name       |string |null: false ,index: true ,unique: true|


Association
has_many :user_groups
has_many :groups, through: :user_groups
has_many :messages


## messagesテーブル

|Column  |Type       |Options                       |
|--------|-----------|------------------------------|
|content |text       |                              |
|image   |string     |                              |
|user    |references |null: false, foreign_key: true|
|group   |references |null: false, foreign_key: true|

Association
belongs_to :user
belongs_to :group



## groupsテーブル

|Column  |Type   |Options    |
|--------|-------|-----------|
|name    |string |null: false|


Association
has_many :user_groups
has_many :users, through: :user_groups
has_many :messages




## user_groupsテーブル

|Column|Type      |Options                       |
|------|----------|------------------------------|
|user  |references|null: false, foreign_key: true|
|group |references|null: false, foreign_key: true|


Association
belongs_to :user
belongs_to :group