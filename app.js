let express = require('express')

let app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (request, response) => {

	let entries = [{
		  "id":0,
		  "title":"Test first article",
		  "intro":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar lacinia vestibulum. Nullam aliquet feugiat massa sit amet eleifend. Cras fermentum sit amet felis ut elementum. Morbi vitae lorem nulla. Pellentesque non orci convallis, dignissim enim sit amet, mattis magna. Aliquam pretium arcu id est pellentesque, vitae facilisis tellus tincidunt. Aliquam pellentesque nisi vitae laoreet tincidunt. Etiam placerat odio est, et feugiat purus pretium eu. Vestibulum sed posuere nunc.",
			"body":"Aenean sodales elit vel dapibus sollicitudin. Donec non feugiat nisl. Ut purus odio, tempor id metus id, vestibulum ultrices sem. Morbi luctus laoreet leo, id ornare dolor efficitur egestas. Quisque cursus lacus a purus viverra, sit amet tempus tellus posuere. Praesent ac pretium nisl, et sagittis felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum sodales venenatis. Ut posuere, eros quis molestie consectetur, dolor lorem viverra magna, id consectetur ligula neque ac arcu. Sed placerat diam diam. Nulla semper imperdiet libero et pellentesque. Aliquam placerat turpis eros, et bibendum leo pulvinar ac. Aenean nulla nisl, pretium vel aliquam sit amet, condimentum vitae odio. Nam tristique eros nunc, eu sagittis tortor imperdiet ut.",
		  "date":"3/02/2018 12:00"
		},
		{
		  "id":1,
		  "title":"A seconde article",
		  "intro":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar lacinia vestibulum. Nullam aliquet feugiat massa sit amet eleifend. Cras fermentum sit amet felis ut elementum. Morbi vitae lorem nulla. Pellentesque non orci convallis, dignissim enim sit amet, mattis magna. Aliquam pretium arcu id est pellentesque, vitae facilisis tellus tincidunt. Aliquam pellentesque nisi vitae laoreet tincidunt. Etiam placerat odio est, et feugiat purus pretium eu. Vestibulum sed posuere nunc.",
		  "body":"Aenean sodales elit vel dapibus sollicitudin. Donec non feugiat nisl. Ut purus odio, tempor id metus id, vestibulum ultrices sem. Morbi luctus laoreet leo, id ornare dolor efficitur egestas. Quisque cursus lacus a purus viverra, sit amet tempus tellus posuere. Praesent ac pretium nisl, et sagittis felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum sodales venenatis. Ut posuere, eros quis molestie consectetur, dolor lorem viverra magna, id consectetur ligula neque ac arcu. Sed placerat diam diam. Nulla semper imperdiet libero et pellentesque. Aliquam placerat turpis eros, et bibendum leo pulvinar ac. Aenean nulla nisl, pretium vel aliquam sit amet, condimentum vitae odio. Nam tristique eros nunc, eu sagittis tortor imperdiet ut.",
		  "date":"3/02/2018 12:00"
		}]

	let data = {
		adjective:"simple",
		title:"Super simple blog 😎",
		entries:entries
	}

	response.render('pages/index', data)
})
app.listen('8090')
