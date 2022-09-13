//this file contains code which can not be reused or specific to this project only
/* We want to use autocomplete multiple time and in multiple projects.For this we are defining a config for autocomplete.
1.fetchData()-function to find movies
2.renderOption()-function that knows how to render a movie
3.onOptionSelect()-function that gets invoked when a user clicks an option
root-element that the autocomplete should be rendered into
*/
const autocompleteConfig={
  renderOption(movie){
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return `
    <img src="${imgSrc}" />
    ${movie.Title} (${movie.Year})
  `;
  },
   
   inputValue(movie){
    return movie.Title;
   },
   async fetchData(searchTerm) {  //to avoid tight coupling between this file and autocomplete
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'd9835cc5',
        s: searchTerm
      }
    });
  
    if (response.data.Error) {
      return [];
    }
    return response.data.Search;
  
  }
}


createAutoComplete({
  ...autocompleteConfig,
root: document.querySelector('#left-autocomplete'), onOptionSelect(movie){
  document.querySelector('.tutorial').classList.add('is-hidden') //from bulma css
  onMovieSelect(movie,document.querySelector('#left-summary'),left)
}
})
createAutoComplete({
  ...autocompleteConfig,
root: document.querySelector('#right-autocomplete'), onOptionSelect(movie){
  document.querySelector('.tutorial').classList.add('is-hidden') //from bulma css
  onMovieSelect(movie,document.querySelector('#right-summary'),right)
}
})

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie,summaryElement,side) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9835cc5',
      i: movie.imdbID
    }
  });

  summaryElement.innerHTML = movieTemplate(response.data);
  if(side==='left'){
    leftMovie=response.data
  }
  else{
    rightMovie=response.data
  }

  if(leftMovie && rightMovie){
    runComparison()
  }
};
const runComparison =()=>{
  const leftSideStats=document.querySelectorAll('#left-summary .notification')
  const rightSideStats=document.querySelectorAll('#right-summary .notification')

  leftSideStats.forEach((leftStat,index)=>{
    const rightStat=rightSideStats[index]
    const leftSideValue=leftStat.dataset.value
    if(rightSideValue > leftSideValue){
      leftStat.classList.remove('is-primary')
      leftStat.classList.add('is-warning')
    }
    else{
      rightStat.classList.remove('is-primary')
      rightStat.classList.add('is-warning')
    }
  })



}

const movieTemplate = movieDetail => {
  const amount=parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g,''))
  const metascore=parseInt(movieDetail.Metascore)
  const imdbRating=parseFloat(movieDetail.imdbRating)
  const imdbVotes=parseFloat(movieDetail.imdbVotes.replace(/,/g,''))
  let awardCount=0
  const awards=movieDetail.Awards.split('').reduce((prev,word)=>{
    const value=parseInt(word)
    if (isNaN(value)){
      return prev;
    }else{
      return prev+value                         
    }
  },0)
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article data-value= ${awards} class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article data-value= ${amount} class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article data-value= ${metascore} class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article data-value= ${imdbRating} class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article data-value= ${imdbVotes} class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};
