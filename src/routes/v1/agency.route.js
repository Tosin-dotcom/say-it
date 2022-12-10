const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { agencyController } = require('../../controllers');

const { agencyValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(auth('manageAgents'), validate(agencyValidation.createAgency), agencyController.createAgent)
  .get(agencyController.getAllAgent);

router.route('/:id').get(validate(agencyValidation.getAgencyById), agencyController.getAgentById);

module.exports = router;
