export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT) || 3001,
  dataBase: {
    url: process.env.DATABASE_URL,
  },
  cloudApiKey: process.env.CLOUD_APIKEY,
  serverApiKey: process.env.SERVER_API_KEY,
});
