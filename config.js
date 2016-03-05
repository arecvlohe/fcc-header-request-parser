let configs = {
  local: {
    env: 'local',
    hostname: 'localhost',
    port: process.env.PORT || 3000,
    app: {
      name: 'FCC Request Header Parser Service | Local',
    },
  },
  development: {
    env: 'development',
    hostname: 'localhost',
    port: process.env.PORT || 30001,
    app: {
      name: 'FCC Request Header Parser Service | Dev',
    },
  },
  test: {
    env: 'test',
    hostname: process.env.HOSTNAME || 'localhost',
    port: process.env.PORT || 30002,
    app: {
      name: 'FCC Request Header Parser Service | Test',
    },
  },
  production: {
    env: 'production',
    hostname: process.env.HOSTNAME || 'localhost',
    port: process.env.PORT || 5000,
    app: {
      name: 'FCC Request Header Parser Service',
    },
  },
};

let config = configs[process.env.NODE_ENV || 'local'];

module.exports = config;
