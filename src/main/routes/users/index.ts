import { Router } from 'express';

// import { adaptExpressRoute } from '../../adapters/express-route-adapter';
// import makeCreateUserController from '../../factories/user/create-user';

export default (router: Router) => {
  router.get('/:id', (req, res) => {
    res.status(201).json({ msg: `one user ${req.params.id}` });
  });

  router.get('/', (_req, res) => {
    res.status(201).json({ msg: `all users` });
  });
  return router;
};
