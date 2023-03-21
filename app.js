
/*Search Button Finction*/
function expandSearch() {
  var searchBtn = document.querySelector('.search-btn');
  var searchBar = document.querySelector('.search-bar');
  searchBar.classList.toggle('active');
  searchBtn.classList.toggle('active');
  searchBar.focus();
}
