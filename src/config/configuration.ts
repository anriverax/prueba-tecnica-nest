/*
const getDatabaseUrl = () => {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return null;

  // Extraer el usuario, la contraseña y el resto de la URL
  const [userWithPassword, rest] = dbUrl.split('@');
  const [srv, user, password] = userWithPassword.split(':');
  const encodedPassword = encodeURIComponent(password);

  // Reconstruir la URL de la base de datos
  console.log('srv => ', srv);
  console.log('user => ', user);
  console.log('other => ', password);
  console.log(encodedPassword);
  return `${user}:${encodedPassword}@${rest}`;
};

*/
export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT) || 3001,
  dataBase: {
    url: process.env.DATABASE_URL,
  },
  cloudApiKey: process.env.CLOUD_APIKEY,
});
