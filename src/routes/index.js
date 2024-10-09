const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger-output.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', () => {
    // #swagger.ignore = true
    swaggerUi.setup(swaggerDocument)
});

 
router.use('/contacts', require('./contacts'));

module.exports = router;
