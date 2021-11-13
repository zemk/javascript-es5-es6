let json = '{"id":2}'
try {
  let user = JSON.parse(json);
  console.log(user);
  if(!user.name) {
    throw new Error('В этих данных  нет имени !')
  }
  console.log('Результат')
} catch (error) {
  console.log(error)
} finally {
  console.log("А я выполнюсь вегда!")
}
console.log("работать дальше");

// error.name error.message  error.stack 