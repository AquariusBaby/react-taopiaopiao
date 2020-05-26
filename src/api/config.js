const env = process.env.NODE_ENV || 'development';
const ip = process.env.NODE_ENV_IP;

let envConfig = {
  development: {
    apiBaseURL: ''
  },
  production: {
    apiBaseURL: ''
  }
};

export default envConfig;
