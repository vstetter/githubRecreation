var githubProfile ={

init: function() {

  githubProfile.initStyling();
  // githubProfile.initEvents();
},
//
initStyling: function() {

  githubProfile.renderUserprofile();
  githubProfile.renderAllRepos(githubRepos);
},
//
// initEvents: function() {
//
// },


renderUserprofile: function () {

  var user= _.template(templates.userProfile);
  $("aside").append(user(githubUser));
},



renderRepos: function (repoObject) {

  var repoTmpl = _.template(templates.repos);
  $(".repos").append(repoTmpl(repoObject));
},

renderAllRepos: function (repoArray) {

  _.each(repoArray,githubProfile.renderRepos);
}


};



$(document).ready(function () {
githubProfile.init();

});
