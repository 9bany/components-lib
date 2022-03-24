import proConfig from './rollup.pro.config';
import devConfig from './rollup.dev.config';

const isProd = process.env.NODE_ENV === 'production';
const config = isProd ? proConfig : devConfig;

export default config;