const addCommentToTicket = require('./addCommentToTicket');

module.exports = async ({context}) => {
    const comment = context.payload.comment.body;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = comment.match(urlRegex);
    const hasMatchingUrls = urls && urls.length;
    const renderUrl = urls?.find((url) => url?.includes('onrender.com'));
    let jiraComment = '';

    if (!hasMatchingUrls) return null;
    if (renderUrl) {
      const strippedLink = renderUrl.replace(`-pr-${context.issue.number}`,'');
      
      jiraComment = `Render link: ${strippedLink}`;
    }
    if (!renderUrl) return null;
    await addCommentToTicket({
      ticketId,
      jiraComment,
    });
    // return jiraComment;
  };