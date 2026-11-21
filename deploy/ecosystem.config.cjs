// PM2 config (VPS): pm2 start deploy/ecosystem.config.cjs && pm2 save
module.exports = {
  apps: [
    {
      name: 'emadhassan',
      script: 'dist/EmadHassan/server/server.mjs',
      cwd: __dirname + '/..',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 4000,
        // لو هتفتح الموقع من دومين/IP تاني غير siteUrl زوده هنا مفصول بفاصلة
        // NG_ALLOWED_HOSTS: '123.45.67.89',
      },
      max_memory_restart: '400M',
    },
  ],
};
