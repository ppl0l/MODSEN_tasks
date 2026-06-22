// Напишите функцию, которая извлекает данные из API и отменяет запрос, если он занимает больше указанного времени.

async function Task10(url, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return await response.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('Timeout');
    }
    throw err;
  }
}

Task10('https://jsonplaceholder.typicode.com/posts/1', 2000)
  .then(data => console.log(data))
  .catch(err => console.error('Ошибка:', err.message));
  