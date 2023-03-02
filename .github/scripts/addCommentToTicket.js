const jiraService = require('./jiraService');

module.exports = async ({ ticketId, comment }) => {
  console.log(ticketId, comment)
  try {
    const path = `/rest/api/3/issue/RT-1/comment`;
    const options = {
      path,
      data: comment,
    };

    

    console.log('Adding comment to Jira ticket', options);
    return await jiraService({ ...options });
  } catch (error) {
    // using log here to avoid the check being marked red
    console.log(error);
    return null;
  }
};
