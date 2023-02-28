module.exports = ({context}) => {
    console.log(context);
    const comment = context.payload.comment.body;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = comment.match(urlRegex);
    let jiraComment = '';
    const hasMatchingUrls = urls && urls.length;
    if (!hasMatchingUrls) return null;
  
    const renderUrl = urls.find((url) => url.includes('onrender.com'));
  
    if (!renderUrl) return null;
    if (renderUrl[renderUrl.length - 1] === '.') {
      return renderUrl.slice(0, -1);
    } 
    if (renderUrl) jiraComment = `Render link: ${renderUrl}`;
    return jiraComment;
  };