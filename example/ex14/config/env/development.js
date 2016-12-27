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
