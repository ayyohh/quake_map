import axios from 'axios'

const usgsQuakeByMonth = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson'

class QuakeMonth {

	static all() {
	const request = axios.get(usgsQuakeByMonth)
	return request
	}
}


export default QuakeMonth