const fs = require('fs');
const path = require('path');

module.exports = function override(config, env) {
  fs.writeFile('webpack-config.json', JSON.stringify(config), (err) => {
    if (err) throw err;
    console.log('配置文件已保存');
  });

  //do stuff with the webpack config...

  // 添加less-loader
  let loaderList = config.module.rules[2].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.less$/,
    use: ["style-loader", "css-loader", "less-loader"]
  });

  // 添加别名
  let alias = config.resolve.alias;
  Object.assign(alias, {
    "@src": path.resolve("src"),
    "@components": path.resolve("src/components"),
    "@style": path.resolve("src/style"),
    "@image": path.resolve("src/image"),
    "@api": path.resolve("src/api"),
    "@view": path.resolve("src/view"),
    "@util": path.resolve("src/util"),
    // "@redux": path.resolve("src/redux"),
    // "@container": path.resolve("src/container")
  });

  return config;
};
