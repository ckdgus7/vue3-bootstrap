module.exports = {
  runtimeCompiler: true,
  pages: {
    default: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    second: {
      entry: 'src/second/main.js',
      template: 'public/second-page.html',
      filename: 'second-page.html'
    }
  },
};