const Utils = require('../utils/utils');

module.exports = ({ github, context, actionName }) => {
  const utils = new Utils();
  const branchName = utils.findBranchThroughPR({        
      github,
      repo: context.payload.repository.name,
      owner: context.payload.repository.owner.login,
      issueNumber: context.payload.number
  });
  const { comment } = context.payload;
  
  if (!comment || !comment.body) {
    throw new Error('Comment missing');
  }
}

