const Utils = {
    extractIssueNumberFromUrl: async(url = '') => {
        const split = url.split('/');

        if (!split.length) {
          return undefined;
        }
      
        const lastElement = split[split.length - 1];
      
        if (!lastElement || isNaN(lastElement)) {
          return undefined;
        }
      
        return lastElement;
    },
    fetchPullRequest: async({ github, owner, repo, issueNumber }) => {
        try {
            const { data } = await github.request(
              `GET /repos/${owner}/${repo}/pulls/${issueNumber}`,
            );
        
            return data;
          } catch (error) {
            return null;
          }
    },
    findBranchThroughPR: async({ github, owner, repo, issueNumber }) => {
        try {
        const pullRequestDetails = await fetchPullRequest({
            github,
            owner,
            repo,
            issueNumber,
        });
    
        return pullRequestDetails.head.ref;
        } catch (error) {
        return false;
        }
    }
}

module.exports = new Utils();