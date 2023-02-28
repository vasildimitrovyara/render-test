const executeTeamAction = require('./utils/executeTeamAction');
const findBranchThroughPR = require('../utils/findBranchThroughPR');

module.exports = async ({ github, context, actionName }) => {
  setTimeout(async () => {
    try {
      const branchName = 'RT-1-some-text';
      // await findBranchThroughPR({
      //   github,
      //   repo: context.payload.repository.name,
      //   owner: context.payload.repository.owner.login,
      //   issueNumber: context.payload.number,
      // });
  
      const { comment } = context.payload;
      if (!comment || !comment.body) {
        throw new Error('Comment missing');
      }
   
      await executeTeamAction({
        actionName,
        github,
        context,
        branchName,
        comment,
      });
    } catch (e) {
      console.error(e);
    }
  }, 30000)
};
