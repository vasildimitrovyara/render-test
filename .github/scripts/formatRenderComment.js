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
    else {
      const strippedLink = renderUrl.replace(`-pr-${context.issue.number}`,'');
      
      jiraComment = `Render link: ${strippedLink}`;
    }
    return jiraComment;
  };