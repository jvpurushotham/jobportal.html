const searchForm = document.getElementById('job-search');
const searchResult = document.getElementById('search-result');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const keyword = searchForm.elements.keyword.value;
  const location = searchForm.elements.location.value;

  searchResult.textContent = `Searching for jobs with keyword "<span class="math-inline">\{keyword\}" in location "</span>{location}"...`;

  setTimeout(() => {
    searchResult.textContent = `Found some jobs!`;
  })}
