/* exported data */

// this will serve as the database for the home page assets
let homePageAssets = [];

const previousEntriesJSON = localStorage.getItem('javascript-local-storage');
if (previousEntriesJSON !== null) {
  homePageAssets = JSON.parse(previousEntriesJSON);
}
window.addEventListener('beforeunload', function (event) {
  const entriesJSON = JSON.stringify(homePageAssets);
  localStorage.setItem('javascript-local-storage', entriesJSON);
});

// this will serve as the database for the watch list assets
let watchListAssets = [];

const previousEntriesJSON2 = localStorage.getItem('javascript-local-storage');
if (previousEntriesJSON2 !== null) {
  watchListAssets = JSON.parse(previousEntriesJSON2);
}
window.addEventListener('beforeunload', function (event) {
  const entriesJSON = JSON.stringify(watchListAssets);
  localStorage.setItem('javascript-local-storage', entriesJSON);
});
