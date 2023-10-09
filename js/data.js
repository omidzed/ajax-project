/* exported data */

let data = {
  view: 'home-page',
  assets: [],
  nextAssetId: 1
};

const previousEntriesJSON = localStorage.getItem('javascript-local-storage');
if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}
window.addEventListener('beforeunload', function (event) {
  const entriesJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', entriesJSON);
});
