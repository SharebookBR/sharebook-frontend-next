import axios from 'axios';
import config from '@sharebook-configs';

const sharebookAxiosClient: any = axios.create({
	baseURL: config.ApiUrl,
	timeout: 10 * 1000, // 10 seconds per default
	headers: {
		'Content-type': 'application/json',
		'x-requested-with': 'web'
	}
});

export default sharebookAxiosClient;
