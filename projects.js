import { project } from './project_data.js';
//looping through the projects array one by one and adding html to contents div

for (var i = 0; i < project.length; i++) {
  document.getElementById("contents").innerHTML += `
    <a href="${project[i].link}" target="_blank">
<div class="box">
  <div class="inner-box" style="background: rgba(255, 255, 255, 0.8);">
    <div class="title">${project[i].title}</div>
      <div class="image">
        <img
          src="${project[i].image}"
          alt="${project[i].title}" />
      </div>
    <div class="date_completion">
     ${project[i].completed}
    </div>
     <hr>
     <div class="project_details">
     ${project[i].details}
     </div>
  </div>
  <!--<a href="${project[i].github}" target="_blank"
    rel="noopener noreferrer">
    <div class="github-code">Code on Github</div>
  </a>-->
</div>
</a>`;
}
