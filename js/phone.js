const loadData = async (searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
  
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // Show all button
    const showAllBtn = document.getElementById('show-all');
    if(phones.length > 12){
       showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }
    // slice 12
    phones = phones.slice(0,12);

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact w-96 bg-red-100 shadow-2xl`;
        phoneCard.innerHTML = `
        <figure><img src=${phone.image} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);
    });

    toggleLoadingSpinner(false);
}

const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchInput = document.getElementById('search-input');
    const searchValue =searchInput.value;
    console.log(searchValue);
    
    loadData(searchValue);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loadingScreen');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }

}





