# README

## usersテーブル

<<<<<<< Updated upstream
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
=======
|Column     |Type   |Options    |
|-----------|-------|-----------|
|user       |string |null: false|
|mail_adress|varchar|null: false|





## messagesテーブル

|Column |Type   |Options   |
|-------|-------|----------|
|message|text   |null: true|
|image  |string |null: true|


## groupsテーブル

|Column  |Type   |Options    |
|--------|-------|-----------|
|group   |string |null: false|



## relationsテーブル
>>>>>>> Stashed changes

|Column|Type      |Options                       |
|------|----------|------------------------------|
|user  |references|null: false, foreign_key: true|
<<<<<<< Updated upstream
|group |references|null: false, foreign_key: true|


Association
belongs_to :user
belongs_to :group
=======
|group |references|null: false, foreign_key: true|
>>>>>>> Stashed changes
