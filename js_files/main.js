
var githubProfile ={

init: function() {

  githubProfile.initStyling();
  githubProfile.initEvents();
},

initStyling: function() {

  githubProfile.renderUserprofile();
  githubProfile.renderAllRepos(githubRepos);
  githubProfile.renderAllActivities(githubEvents);
},

initEvents: function() {

  $('.activeClass a').click(function(event){
    event.preventDefault();

    var relatedClass = "." + $(this).attr('rel');
    $(this).closest("li").siblings().removeClass('activeNav');
    $(this).closest('li').addClass("activeNav");
    $(relatedClass).siblings().removeClass('active');
    $(relatedClass).addClass('active');
  });
},


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
},


renderActivity: function (myObject) {

  if (myObject.type==='PushEvent') {
  var pushTmpl = _.template(templates.pushEvent);
  $(".activityfeed").append(pushTmpl(myObject));
} else if (myObject.type==='CreateEvent') {
  var createTmpl = _.template(templates.createEvent);
  $(".activityfeed").append(createTmpl(myObject));
  };
},

renderAllActivities: function (activityArray) {
  _.each(activityArray, githubProfile.renderActivity)
}
};



$(document).ready(function () {
githubProfile.init();



});
