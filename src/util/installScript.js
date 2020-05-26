// 异步加载外部引入的js文件
export default function installScript(url, parentNode) {
  if (!url) {
    return false;
  }

  if (!parentNode) {
    return false;
  }

  return new Promise((resolve, reject) => {
    let scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.charset = 'utf-8';
    scriptTag.src = url;

    scriptTag.onload = scriptTag.onreadystatechange = function () {
      if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
        scriptTag.onload = scriptTag.onreadystatechange = null;
        // console.log(window.AMap, window.AMap.hasOwnProperty('Map'));
        resolve(window.AMap);
      }
    };

    parentNode.appendChild(scriptTag);
  })
}
