var githubProfile ={

// init: function() {
//
// },
//
// initStyling: function() {
// githubProfile.renderUserprofile(githubUser);
// },
//
// initEvents: function() {
//
// },


renderUserprofile: function () {

  var user= _.template(templates.userProfile);
  $("aside").append(user(githubUser));

}

//
// renderRepos: function () {
//
//
//
//
// }
//
//
//
//
//
};



$(document).ready(function () {
githubProfile.renderUserprofile();

});
