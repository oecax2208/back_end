const { Sequelize } = require('sequelize');

const db = new Sequelize('u958879414_pos', 'u958879414_pos', 'Janda123!@#', {
  host: '92.113.22.83',
  dialect: 'mysql',
  port: 3306,
  timezone: '+07:00',
  logging: console.log,
});

module.exports = db;

// db = 'u958879414_pos'

// //deploy
// Hostname: 
// 92.113.22.83
// Database:
// u958879414_pos
// Username:
// u958879414_pos
// Password:
// Janda123!@#

// deployv2
// Hostname:
// localhost
// Database:
// brabsenm_kasirv2
// Username:
// brabsenm_kasirv2
// Password:
// eUMVUMNhtjfyXwtCDww8
