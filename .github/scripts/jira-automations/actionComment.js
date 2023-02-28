const executeTeamAction = require('./utils/executeTeamAction');
const findBranchThroughPR = require('../utils/findBranchThroughPR');

const extractRenderLink = (comment) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = comment.match(urlRegex);

  const hasMatchingUrls = urls && urls.length;
  if (!hasMatchingUrls) return null;

  const renderUrl = urls.find((url) => url.includes('onrender.com'));

  if (!renderUrl) return null;

  if (renderUrl[renderUrl.length - 1] === '.') {
    return renderUrl.slice(0, -1);
  }

  return renderUrl;
};

const setRenderLinkComment = async ({ renderLink }) => {
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
};

module.exports = async ({ github, context, actionName }) => {
  setTimeout(async () => {
    try {
      const { comment } = context.payload;
      if (!comment || !comment.body) {
        throw new Error('Comment missing');
      } else {
        const renderLink = extractRenderLink(comment.body);
        const renderLinkComment = setRenderLinkComment(renderLink);
      }
      
      console.log(renderLinkComment);
      return renderLinkComment
    } catch (e) {
      console.error(e);
    }
  }, 30000)
};
