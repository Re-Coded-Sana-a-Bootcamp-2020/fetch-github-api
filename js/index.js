// https://api.github.com/repos/[userName]/[repoName]

document.getElementById('getData').addEventListener('click', () => {
  let repoInfo = '';
  fetch('LINK_GOES_HERE')
    .then((res) => res.json())
    .then((data) => {
      // Do something here.
    });

  document.getElementById('repo').innerHTML = repoInfo;
});
