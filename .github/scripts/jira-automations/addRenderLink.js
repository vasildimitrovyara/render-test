const Utils = require('../utils/utils');

const AddRenderLink = ({ github, context, actionName }) => {
    const branchName = Utils.findBranchThroughPR({        
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

module.exports = new AddRenderLink();