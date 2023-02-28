module.exports = ({comment}) => {
    console.log(comment);
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