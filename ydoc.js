module.exports = {
  "title": "Linking Fresh 接口管理平台",
  "keywords": "api管理,接口管理,接口文档,api文档",
  "author": "ymfe",
  "description": "飞熊领鲜以“诚信成就，专业共赢”的价值观，搭建SaaS级数字供应链服务云平台，交易全流程可追溯，为合作伙伴提供公开、透明的上下游交易方案。",
  "plugins": ["search", "img-view"],
  "dist": "static/doc",
  "pluginsConfig": {
    "import-asset": {
      "css": "web.css"
    } 
  },
  version: require('./package.json').version,
  markdownIt: function(md){
    md.use(require('markdown-it-include'), __dirname)
  }
}
