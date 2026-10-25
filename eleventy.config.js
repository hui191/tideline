module.exports = function (cfg) {
  cfg.addPassthroughCopy({ 'src/style.css': 'style.css' })
  cfg.addFilter('ymd', (d) => new Date(d).toISOString().slice(0, 10))
  return {
    dir: { input: 'src', output: '_site', includes: '_includes' },
    markdownTemplateEngine: 'njk',
  }
}
