const core = require('@actions/core');
const AWS = require('aws-sdk/global');
const RDS = require('aws-sdk/clients/rds');

const region = core.getInput('aws-region', { required: true });
const accessKeyId = core.getInput('aws-access-key-id', { required: true });
const secretAccessKey = core.getInput('aws-secret-access-key', { required: true });
const groupIds = core
  .getInput('aws-security-group-id', { required: true })
  .split(',')
  .map(item => item.trim());
const port = parseInt(core.getInput('port', { required: false }));

const toPortInput = core.getInput('to-port', { required: false });
const toPort = toPortInput.length > 0 ? parseInt(toPortInput) : false;

const description = core.getInput('description', { required: false });
const protocol = core.getInput('protocol', { required: false });

AWS.config.update({
  region,
  accessKeyId,
  secretAccessKey,
});
const rds = new RDS();

module.exports = {
  region,
  accessKeyId,
  secretAccessKey,
  groupIds,
  port,
  toPort,
  protocol,
  description,
  rds,
};
