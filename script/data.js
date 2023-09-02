let fetchedTools = [];
const displayAllCards = (sortByView = false, items=fetchedTools) =>{
    fetchedTools = [...items];
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    if(items.length > 0){
        document.getElementById('sort-by-view').removeAttribute('disabled');
        cardContainer.classList = 
        `my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`;
        const remakeItems = fetchedTools;
        if(sortByView){
            remakeItems.sort(function(a, b) {
                return parseInt(b.others.views) - parseInt(a.others.views);

            });
        }
        console.log(remakeItems);
        remakeItems.forEach((item) => {
        console.log(item);

        // convert time
        let seconds = parseFloat(item.others.posted_date);
        let hours = parseInt(seconds/3600);
        let minutes = parseInt(parseInt(seconds%3600)/60);
        const time= hours + 'hrs ' + minutes+' min ago';
        const cardItems = document.createElement('div');
        cardItems.classList = `w-full h-[500px]`;
        cardItems.innerHTML = `
        <figure class="w-full">
        <img src="${item.thumbnail}" alt="" class="rounded-lg w-full h-60">
        </figure>
        <div class="flex justify-end">${item.others.posted_date ?`<p class="absolute -mt-11 p-2 bg-black bg-opacity-80 text-white text-center rounded-2xl">${time}</p>`: ''}</div>
       <div class="flex px-5 pt-5 gap-5">
      <img src="${item.authors[0].profile_picture}" alt="" class="rounded-full w-12 h-12">
     <div>
     <h2 class="card-title">${item.title}</h2>
    <p class="flex gap-3 text-gray-950">
    ${item.authors[0].profile_name} ${item.authors[0].verified === true ? '<img class="w-[10%]" src="images/verified.png"': ''}
    </p>
    <p> ${item.others.views} views</p>
  </div>
</div>
`;
cardContainer.appendChild(cardItems);

    });

}
   else{
    document.getElementById('sort-by-view').setAttribute('disabled', 'true');
    cardContainer.classList=`h-[500px] w-full flex flex-col my-10 justify-center items-center`;
    cardContainer.innerHTML =`
    <img src="images/Icon.png" alt="" class="mx-auto">
    <p class="mt-5 text-4xl text-center font-bold">Oops!! Sorry, There is no<br> content here</p>
    `
   }

};

document.getElementById('sort-by-view').addEventListener('click', () =>{
    displayAllCards(true);
})
