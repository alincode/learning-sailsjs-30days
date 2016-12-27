# ex14: 在 Sails.js 上安裝 Sequelize

這個範例將使用 MySQL 資料庫，所以我們採用 [Sequelize](http://docs.sequelizejs.com/en/latest/)，網路上已經有別人寫好的 hook 叫 [sails-hook-sequelize](https://www.npmjs.com/package/sails-hook-sequelize)，可以讓 sequelize 跟 sails 連接。

**安裝 sequelize hook**

`npm install mysql --save`
`npm install sails-hook-sequelize --save`

**編輯 .sailsrc**

```
{
  "generators": {
    "modules": {}
  },
  "hooks": {
    "orm": false,
    "pubsub": false,
    "grunt": false,
    "sockets": false
  }
}
```

**建立空的 databases**

```
$ mysql -uroot -p
mysql> CREATE SCHEMA sandbox DEFAULT CHARACTER SET utf8mb4;
```

**編輯設定檔**

```
// config/env/development.js
module.exports = {
  models: {
    connection: 'mysql',
    migrate: process.env.MODELS_MIGRATE || 'safe'
  },
  connections: {
    mysql: {
      'user': process.env.MYSQL_ENV_MYSQL_USER_NAME || 'root',
      'password': process.env.MYSQL_ENV_MYSQL_USER_PASS || 'root',
      'database': process.env.MYSQL_ENV_MYSQL_USER_DB || 'sandbox',
      'dialect': 'mysql',
      options: {
        'host': process.env.MYSQL_PORT_3306_TCP_ADDR || '127.0.0.1',
        'port': process.env.MYSQL_PORT_3306_TCP_PORT || 3306,
        'dialect': 'mysql',
        dialectOptions: {
          charset: 'utf8mb4'
        }
      }
    }
  }
};

```

**新增 domain**

檔名一定要是大寫

```
//  api/models/User.js
module.exports = {
  attributes: {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  associations: function() {},
  options: {
    tableName: 'users',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
```
