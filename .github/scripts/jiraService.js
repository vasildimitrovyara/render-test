const fetch = require('node-fetch')

const port = 443;
const hostname = 'yaradigitalfarming.atlassian.net';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Basic ${Buffer.from(
    `${process.env.JIRA_AUTOMATION_USER}:${process.env.JIRA_AUTOMATION_TOKEN}`,
  ).toString('base64')}`,
};

module.exports = async ({path, data}) => {
    return fetch('addComment', {
      pathname: path,
    }, {
      method: 'POST',
      body: data,
    })
}



