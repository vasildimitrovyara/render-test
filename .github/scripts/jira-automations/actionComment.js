const addRenderLink = require('./commands/addRenderLink.js');

module.exports = async ({ context }) => {
  setTimeout(async () => {
    try {
      const { comment } = context.payload;
      if (!comment || !comment.body) {
        throw new Error('Comment missing');
      } else {
        await addRenderLink('RT-1', comment.body);
      }
      
    } catch (e) {
      console.error(e);
    }
  }, 30000)
};
