import { Router } from 'express';

export default (router: Router) => {
  router.get('/', (_req, res) => {
    res.status(200).json({ msg: 'all clients' });
  });

  router.get('/:id', (req, res) => {
    res.status(200).json({ msg: `one client ${req.params.id}` });
  });
  return router;
};
