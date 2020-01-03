'use strict';

import tracer from 'dd-trace';
import axios from 'axios';
	
async function getTracer() {
	let response
	try {
		response = await axios('http://169.254.169.254/latest/meta-data/local-ipv4')	
	} catch(e) {
		console.warn('error fetching agent hostname')
	}
	
	const host = response && response.metadata || 'localhost'

	if(!(response && response.metadata)) {
		console.warn('response metadata missing, defaulting to localhost')	
	}

	tracer.init({ debug: true, host: host });
	return tracer
}

export default getTracer
