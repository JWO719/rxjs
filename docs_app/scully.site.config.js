exports.config = {
  projectRoot: './src',
  projectName: 'site',
  outDir: './dist/static',
  extraRoutes: [
    '/',
    '/api',
    '/operator-decision-tree',
    '/team',
    '/resources',
    '/api/index',
    '/guide/installation',
    '/guide/observable',
    '/guide/observer',
    '/guide/operators',
    '/guide/overview'
  ],
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
};