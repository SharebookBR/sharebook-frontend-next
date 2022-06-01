//Needs is .js file because is used into next.config.mjs

const config = {
	ApiUrl: process.env.NEXT_PUBLIC_SHAREBOOK_API ?? 'https://sharebook.com.br/api/',
	viaCepUrl: 'https://viacep.com.br/'
};

export default config;
