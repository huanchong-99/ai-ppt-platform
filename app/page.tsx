// 直接导出HTML内容
export default function Home() {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI PPT大师</title>
        <meta httpEquiv="refresh" content="0;url=/static-app.html" />
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
          }
          .container {
            text-align: center;
          }
          h1 {
            color: #1677FF;
          }
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #1677FF;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
            margin: 20px auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          a {
            color: #1677FF;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.onload = function() {
            window.location.href = '/static-app.html';
          }
        `}} />
      </head>
      <body>
        <div className="container">
          <h1>AI PPT大师</h1>
          <div className="loader"></div>
          <p>正在加载，请稍候...</p>
          <p>如果页面没有自动跳转，请<a href="/static-app.html">点击这里</a></p>
        </div>
      </body>
    </html>
  )
}