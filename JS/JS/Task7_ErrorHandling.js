// Напишите функцию, которая использует блок try-catch для перехвата и обработки ошибки ТуpеError при доступе к свойству неопределенного объекта.

function Task7(obj) {
  try {
    console.log(obj.property)
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('Ошибка:', error.message)
    } else {
      throw error
    }
  }
}

Task7(null) // Ошибка: Cannot read properties of null (reading 'property')
Task7(undefined) // Ошибка: Cannot read properties of undefined (reading 'property')
Task7({}) // undefined
