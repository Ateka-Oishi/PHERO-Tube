const loadCategory = async(category="All") => {
  const callButton = document.getElementById(category);
  const allButtons = document.querySelectorAll("#allButtons button");
  allButtons.forEach(buttons =>{
    buttons.classList.remove('btn-error');
  });

  callButton.classList = `btn btn-error`;
  const response = await fetch
        (`https://openapi.programming-hero.com/api/videos/categories`);
  const data = await response.json();
  const item = data.data;
  for(let i=0; i<item.length; i++){
    if(item[i].category == category){
      var categoryId = item[i].category_id;
      break;
    }
  }
  console.log(category);
  console.log(categoryId);
  loadVideo(categoryId);

}

const loadVideo = async(categoryId) => {
  console.log(categoryId);
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML='';
  const loadingData = document.getElementById('loading-data');
  loadingData.classList.remove('hidden');
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );

  const data = await response.json();
  displayAllCards(false, data.data);
  loadingData.classList.add('hidden');
}

loadCategory();
//loadVideo();






