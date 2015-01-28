var templates = {};

templates.userProfile = [
"<div>",
"<img src = <%= avatar_url %>>",
"<h1><%= name %></h1>",
"<h3><%= login %></h3>",
"<p><span class='octicon octicon-location'></span><%= location %></p>",
"<p><span class='octicon octicon-clock'></span><%= created_at %></p>",
"<h6><%= followers %></h6>",
"<h6><%= starred_url %></h6>",
"<h6><%= following %></h6>",
"</div>"

].join("");


//
// templates.repos = [
// "<div class = 'repoName'>",
// "<h3><%= name %></h3>",
// "<p><%= description  %></p>",
// "<p><%= updated_at %></p>",
// "<p><%= language %></p>",
// "<span class='octicon octicon-star'></span>",
// "<p><%= stargazers_count %></p>",
// "<span class='octicon octicon-git-branch'></span>",
// "<p><%= forks_count %></p>",
// "</div>"
//
// ].join("");
//

//
// templates.activity_gitcommit = [
// "<span class='octicon octicon-git-commit'></span>",
// "<div>"
// "<%=  %>",
// "<%=  %>",
// "<%=  %>",
// "</div>"
//
// ]
//
// templates.activity_repo = [
//"<span class="octicon octicon-repo"></span>"
// ]
//
// templates.activity_branch = [
//"<span class="octicon octicon-git-branch"></span>"
// ]
//
// templates.activity_comment = [
//"<span class="octicon octicon-comment-discussion"></span>"
// ]
