module.exports = {
  apps: [
    {
      name: 'Jahon Invest Holding',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}