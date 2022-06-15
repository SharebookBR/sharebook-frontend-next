const axiosMockIntance = {
	post: jest.fn(),
	get: jest.fn()
	// get: jest.fn((path, other) => {
	// 	console.log('axiosmock-get', path, other);
	// })
};
const axiosMock = {
	__esModule: true,
	create: jest.fn(() => axiosMockIntance)
	// post: jest.fn().mockResolvedValue({ data: {} }),
	// get: jest.fn().mockResolvedValue({ data: {} })
};

export default axiosMock;
