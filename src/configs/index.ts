interface ConfigType {
	ApiUrl: string;
}

const config: ConfigType = {
	ApiUrl: process.env.NEXT_PUBLIC_SHAREBOOK_API ?? ''
};

export default config;
