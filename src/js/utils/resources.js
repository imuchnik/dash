var resources = {
  baseUrl: '/kratos',
  orgName: 'devdesign',
  routes: {
    team: function(action) {
      resources.baseUrl + '/orgs/' + resources.orgName + '/teams/' + action.teamName
    },
    teamMember: function(action) {
      return resources.routes.team + '/roles/' + action.roleName + '/' + action.userId;
    },
    teamAddAsset: function(action) {
      return resources.routes.team + '/resources/' + action.resourceName;
    },
    teamRemoveAsset: function(action) {
      return resources.routes.teamAddAsset(action) + '/' + action.assetId;
    },
    ALL_TEAMS: '/kratos/orgs/devdesign/teams',
    ALL_USERS: '/kratos/users',
    CURRENT_USER_INFO: '/kratos/user'
  }
};
module.exports = resources;
