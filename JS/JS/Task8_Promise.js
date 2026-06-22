// Напишите функцию, которая принимает массив URL-адресов и параллельно загружает содержимое каждого URL-адреса с помощью Promises.

function Task8(urls) {
  const promises = urls.map(url => fetch(url))
  
  return Promise.all(promises)
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
]

Task8(urls)
  .then(responses => {
    return Promise.all(responses.map(r => r.json()))
  })
  .then(data => {
    console.log('Загружено:', data)
  })
  .catch(error => {
    console.error('Ошибка загрузки:', error)
  })
