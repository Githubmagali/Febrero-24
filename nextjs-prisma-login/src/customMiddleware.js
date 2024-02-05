import { getSession } from 'next-auth/react';

const customMiddleware = async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return res.redirect('/auth/login'); // Redirige a la página de inicio de sesión si no hay sesión
  }


  return next();
};

export default customMiddleware;
