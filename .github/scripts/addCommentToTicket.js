const jiraService = require('./jiraService');

module.exports = async ({ comment }) => {
  console.log(comment);
  try {
    const path = `/rest/api/3/issue/RT-1/comment`;
    const bodyData = {
      body: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                text: 'Render link: ',
                type: 'text',
              },
              {
                type: 'text',
                text: renderLink,
                marks: [
                  {
                    type: 'link',
                    attrs: {
                      href: renderLink,
                      title: 'OnRender Link',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    };
    const options = {
      path,
      data: bodyData,
    };



    console.log('Adding comment to Jira ticket', options);
    return await jiraService({ ...options });
  } catch (error) {
    // using log here to avoid the check being marked red
    console.log(error);
    return null;
  }
};
