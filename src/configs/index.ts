interface ConfigType {
	ApiUrl: string;
	viaCepUrl: string;
}

const config: ConfigType = {
	ApiUrl: process.env.NEXT_PUBLIC_SHAREBOOK_API ?? 'https://dev.sharebook.com.br/api/',
	viaCepUrl: 'https://viacep.com.br/'
};

export default config;
