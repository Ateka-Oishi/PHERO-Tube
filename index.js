const handleCategory = async () => {

    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
        );

    const data = await response.json();
    const tabContainer = document.getElementById('tab-container');

     data.data.slice(0,4).forEach((category) =>{
        const div = document.createElement("div");
        div.innerHTML=`
        <a onclick="handleLoadVideo('${category.category_id}')" class="tab">${category.category}</a> 
        `;

        tabContainer.appendChild(div);
    });
};

const handleLoadVideo = async(categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );

  const data = await response.json();
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML="";
  data.data?.forEach((video)=>{
    const div = document.createElement("div");
    div.innerHTML=`
    <div class="card w-full h-full bg-base-100 shadow-xl">
    <figure>
    
      <img
        src=${video?.thumbnail}
        alt=""/>
    </figure>
    <div class="card-body">
      <div class="card-footer flex justify-between mt-8">
        <div class="flex">
          <div>
            <div class="">
              <div class="w-14">
                <img
                 src= "${video?.authors[0]?.profile_picture}"
                class="rounded-full">
              </div>
            </div>
          </div>
          <div>
          <h2 class="card-title">${video.title}</h2>
            <h6>${video?.authors[0]?.profile_name}<span></span></h6>
            <h3>${video?.others.views}</h3>
          </div>
        </div>
        
      </div>
    </div>
  </div>
      `;
      cardContainer.appendChild(div);
          });

  };









    
handleCategory();
handleLoadVideo();

