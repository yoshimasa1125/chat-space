# README

## usersテーブル

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

|Column|Type      |Options                       |
|------|----------|------------------------------|
|user  |references|null: false, foreign_key: true|
|group |references|null: false, foreign_key: true|