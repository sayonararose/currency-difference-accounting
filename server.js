const http = require('http');
const url = require('url');

const PORT = 3000;

const personalData = {
  login: 'is-31fiot-23-081',
  surname: 'Савенко',
  name: 'Анастасія',
  course: '2',
  group: 'ІС-31'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const login = parsedUrl.query.login;

  if (parsedUrl.pathname === '/info') {
    if (login === personalData.login) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="uk">
        <head>
          <meta charset="UTF-8">
          <title>Особисті дані</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              background: #f0f0f0;
              text-align: center;
            }
            table {
              margin: 0 auto;
              border-collapse: collapse;
              background: #fff;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            th, td {
              padding: 12px 20px;
              border: 1px solid #ccc;
            }
            th {
              background: #f7f7f7;
            }
            caption {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <table>
            <caption>Особисті дані</caption>
            <tr><th>Логін</th><td>${personalData.login}</td></tr>
            <tr><th>Прізвище</th><td>${personalData.surname}</td></tr>
            <tr><th>Ім’я</th><td>${personalData.name}</td></tr>
            <tr><th>Курс</th><td>${personalData.course}</td></tr>
            <tr><th>Група</th><td>${personalData.group}</td></tr>
          </table>
        </body>
        </html>
      `);
    } else {
      res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h2 style="color:red; text-align:center;">Доступ заборонено: невірний логін</h2>`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Сторінка не знайдена');
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}/info?login=is-31fiot-23-081`);
});
