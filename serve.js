const express= require('express')
const app = express()
const path = require('path')

app.use('/css', express.static(path.resolve(__dirname, './css/.vuepress/dist')))
app.use('/vue', express.static(path.resolve(__dirname, './vue/.vuepress/dist')))

app.get('/', (req, res) => {
  res.redirect('/css/')
})

app.listen(3000, () => {
  console.log('\x1B[32m%s\x1B[39m', 'app listening on port 3000!')
})
