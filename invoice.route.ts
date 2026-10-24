import { Router } from 'express';

import { findManyInVoices } from './invoice.service.ts';

const router = Router();

router.get('/api/invoices', (req, res) => {
    const invoices = findManyInVoices();

    res.status(200).json(invoices);
});

export default router;