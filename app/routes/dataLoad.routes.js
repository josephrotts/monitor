var express = require('express');
var router = express.Router();

var dataLoadController = require('./../controllers/dataLoad.controller');
var securityController = require('./../controllers/security.controller');


/**
 * POST /upload
 * Carga un archivo con información a ser procesada
 */
// router.post('/upload', securityController.validatePermission(Organization.permission, 'edit'), Organization.expressValidator(), organizationController.save);
router.post('/upload', dataLoadController.beforeUpload, dataLoadController.upload);

module.exports = router;