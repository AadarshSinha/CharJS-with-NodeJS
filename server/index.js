const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())


app.get('/getData', async (req, res) => {
	try {
		mongoose.connect('mongodb://127.0.0.1:27017/MernStack', function (err, db) {
			if (err) throw err;
		
			var coll = db.collection('ChartJS');
		
			coll.find({}).toArray(function (err, result) {
				if (err) {
					res.send(err);
				} else {
		            res.json({ status: 'ok' ,Data :result})
				}
			})
		
		});
	} catch (err) {
        console.log("error ",err.message)
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.listen(4000, () => {
	console.log('Server started on 4000')
})
