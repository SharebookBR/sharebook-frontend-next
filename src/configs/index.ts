interface ConfigType {
	ApiUrl: string;
	viaCepUrl: string;
	siteKeyGoogleRecaptcha: string;
}

const config: ConfigType = {
	ApiUrl: process.env.NEXT_PUBLIC_SHAREBOOK_API ?? 'https://sharebook.com.br/api/',
	viaCepUrl: 'https://viacep.com.br/',
	siteKeyGoogleRecaptcha: '6LcxaXAUAAAAAGM8zgwQvgMuykwiBPgMr0P7sNL3'
};

export default config;
