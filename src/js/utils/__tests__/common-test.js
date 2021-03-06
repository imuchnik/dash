jest.dontMock('../../utils/common');

describe('Get all teams method', function() {
  it('should call the teams URL', function() {
    var common = require('../../utils/common'),
      resources = require('../../utils/resources'),
      $ = require('jquery');
    common.getAllTeams();

    expect($.get).toBeCalledWith(resources.routes.ALL_TEAMS);

  });
});

describe('User  and team functions/actions', function() {
  it('should call the correct routes when user actions are invoked', function() {
    var common = require('../../utils/common'),
      resources = require('../../utils/resources'),
      $ = require('jquery');
    var opts = {'foo': 'boo'};

    common.getAllUsers();
    expect($.get).toBeCalledWith(resources.routes.ALL_USERS);

    common.teamAddMember(opts);
    expect($.ajax).toBeCalled();

    common.teamRemoveMember(opts);
    expect($.ajax).toBeCalled();

    common.teamCreate();
    expect($.ajax).toBeCalled();

    common.teamRemoveAsset();
    expect($.ajax).toBeCalled();

    common.getCurrentUserInfo();
    expect($.get).toBeCalledWith(resources.routes.CURRENT_USER_INFO);

    common.teamAddAsset({assetData: 'foo'});
    expect($.ajax).toBeCalled();

    common.userData({userData: 'foo'});
    expect($.ajax).toBeCalled();

  });
});
