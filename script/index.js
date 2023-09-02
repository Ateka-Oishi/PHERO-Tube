let fetchSort =[];
const handleCategory = async () => {

    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
        );

    const data = await response.json();
    const tabContainer = document.getElementById('tab-container');

     data.data.slice(0,4).forEach((category) =>{
        const div = document.createElement("div");
        div.innerHTML=`
        <a onclick="handleLoadVideo('${category.category_id}')" class="tab hover:bg-[#FF1F3D] hover:text-[white]">${category.category}</a> 
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
    <div class="card bg-base-100 shadow-xl">
    <figure class="">
    <img
    src=${video?.thumbnail}
        alt="" class="w-full object-cover h-52">
    </figure>

    <div class="card-body">
    
    <div class="flex">
    <img
      src= "${video?.authors[0]?.profile_picture}"
      class="rounded-full" style="width: 36px;
      height: 36px;
      object-fit: cover;">
       </div>
       </div>
       
    <div class="font-normal text-sm">
    <h2 class="card-title">${video.title}</h2>
    <p>${video?.authors[0]?.verified? `
    <div class="flex flex-row gap-[5px] pb-2">
    <p>${video?.authors[0]?.profile_name}</p>
    <img class="w-[20px] h-[20px]" src="verified.png">
    </div>` :
    `${video?.authors[0]?.profile_name}`
    } 
    </p>
    <h3>${video?.others?.views} views</h3>
    
    </div>
    </div>
    </div>
    `;
      cardContainer.appendChild(div);
          });

  };

  const sortByView =() =>{
    let arr = fetchSort.sort((a,b)=>{
      let sort1 = a.views.split('/').join('-');
      let sort2 = b.views.split('/').join('-');
      return new viewer(sort1)-new viewer(sort2);
    })
  }



  

    
handleCategory();
handleLoadVideo(arr);





