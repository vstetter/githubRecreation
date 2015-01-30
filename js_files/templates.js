var templates = {};

templates.userProfile = [
"<div>",
"<img src = <%= avatar_url %> width='230' height='230'>",
"<h1><%= name %></h1>",
"<h3><%= login %></h3>",
"<p><span class='octicon octicon-location'></span><%= location %></p>",
"<p><span class='octicon octicon-clock'></span><span>Joined on </span><%= created_at %></p>",
"<div class='userStats'>",
"<a href ='<%= followers %>'><span>Followers</span></a>",
"<a href ='<%= starred_url %>'><span>Starred</span></a>",
"<a href = '<%= following %>'><span>Following</span></a>",
"</div>",
"</div>"

].join("");



templates.repos = [
"<div class = 'repoName'>",
"<div class='repoNameDescrUpdate'>",
"<h3><%= name %></h3>",
"<p><%= description  %></p>",
"<p><%= updated_at %></p>",
"</div>",
"<div class='repoStatsLine'>",
"<span><%= language %></span>",
"<span class='octicon octicon-star'></span>",
"<span><%= stargazers_count %></span>",
"<span class='octicon octicon-git-branch'></span>",
"<span><%= forks_count %></span>",
"</div>",
"</div>"

].join("");



templates.pushEvent = [
"<div class = 'push'>",
"<%=  created_at %>",
"<span class='pushBlue'><%= actor.login %></span>",
"<span> pushed to </span>",
"<span class='pushBlue'><%=  payload.ref %></span>",
"<span> at </span>",
"<span class='pushBlue'><%=  repo.name %></span>",
// "<p><%=  message %></p>",
// "<%=  payload.commits %>",//message part of an object in an array
"</div>"

].join("");

templates.createEvent = [
"<div class = 'create'>",
"<%=  created_at %>",
"<span class='createBlue'><%= actor.login %></span>",
"<span> created </span>",
"<span class='createBlue'><%= payload.ref_type %></span>",
"<span> at </span>",
"<span class='createBlue'><%=  repo.name %></span>",
// "<p><%=  message %></p>",
// "<%=  payload.commits %>",//message part of an object in an array
"</div>"

].join("");
