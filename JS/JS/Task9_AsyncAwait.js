// Напишите функцию, которая сначала загружает данные с одного сервера, а затем использует эти данные для выполнения запроса к другому серверу.
// Используйте async/await для обеспечения последовательного выполнения запросов.

async function Task9() {
  const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const user = await userRes.json()
  
  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  const posts = await postsRes.json()
  
  return { user, posts }
}

Task9()
  .then(data => console.log(data.posts.length))
  .catch(err => console.log(err.message))
