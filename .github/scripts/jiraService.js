// const https = require('https');
// const axios = require('axios');

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
  // async addComment (issueId, data) {
    return fetch('addComment', {
      pathname: path,
    }, {
      method: 'POST',
      body: data,
    })
  // }
}

// module.exports = async ({ data = '', path = '', method = 'POST' }) =>
//   new Promise((resolve, reject) => {
//     const req = https.request(
//       { headers, port, method, hostname, path },
//       (res) => {
//         let rawData = '';
//         console.log(res)





//         // res.setEncoding('utf8');

//         // res.on('data', (chunk) => {
//         //   rawData += chunk;
//         // });

//         // res.on('end', () => {
//         //   try {
//         //     const parsedData = rawData ? JSON.parse(rawData) : null;

//         //     if (parsedData && (parsedData.errorMessages || []).length) {
//         //       throw new Error(parsedData.errorMessages[0]);
//         //     }
//         //     resolve(parsedData);
//         //   } catch (e) {
//         //     reject(e);
//         //   }
//         // });
//       },
//     );

//     // req.on('error', (e) => {
//     //   console.error(e);
//     //   reject(e);
//     // });

//     // req.write(data);
//     // req.end();
//   });
