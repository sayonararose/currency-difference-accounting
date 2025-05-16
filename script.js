fetch('https://open.er-api.com/v6/latest/USD')
  .then(response => response.json())
  .then(data => {
    const rate = data.rates.UAH;
    if (rate) {
      document.getElementById('rate').textContent = `1 USD = ${rate.toFixed(2)} UAH`;
    } else {
      document.getElementById('rate').textContent = 'Курс UAH не знайдено';
    }
  })
  .catch(error => {
    document.getElementById('rate').textContent = 'Помилка завантаження курсу';
    console.error('Помилка:', error);
  });
