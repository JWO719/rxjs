exports.config = {
  projectRoot: './src',
  projectName: 'site',
  outDir: './dist/static',
  extraRoutes: [
    '/team',
    '/resources',
    '/api/index',
    '/guide/installation',
    '/guide/observable',
    '/guide/observer',
    '/guide/operators',
    '/guide/overview'
  ],
  bareProject: true,
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
};