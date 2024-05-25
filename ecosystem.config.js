module.exports = {
    apps : [{
      name: 'portofolio2',
      script: 'serve',
      args: '-s build',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }]
  };
  