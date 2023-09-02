// loading category from api
const loadCategory = async(category="All") => {
  const callButton = document.getElementById(category);
  const allButtons = document.querySelectorAll("#allButtons button");
  allButtons.forEach(buttons =>{
    buttons.classList.remove('bg-[#FF1F3D]', 'text-white', 'hover:bg-[#FF1F3D]', 'hover:text-white');
  });

  callButton.classList = `btn bg-[#FF1F3D] hover:bg-[#FF1F3D] hover:text-white text-white`;
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
  // console.log(category);
  // console.log(categoryId);
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






