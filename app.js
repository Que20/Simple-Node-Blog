let express = require('express')

let app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (request, response) => {
	response.render('pages/index', {adjective:"simple!"})
})
app.listen('8080')
