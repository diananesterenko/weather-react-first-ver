module.exports = function (api) {
    return {
      plugins: ['macros'],
      presets:[
        "@babel/preset-env",
        "@babel/preset-react"
    ]
    }
  }
  