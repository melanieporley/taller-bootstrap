const btnOptions = document.getElementById('options');
const optionsList = document.getElementById('list');
const container = document.getElementById('container');
const search = document.getElementById('search');
const navbarToggler = document.getElementById('navbar-toggler');


btnOptions.addEventListener('click', ()=> {
    if(optionsList.classList.contains('d-none')){
     optionsList.classList.remove('d-none');
     optionsList.classList.add('d-block');   
     container.classList.add('row');
    
    } else {
        optionsList.classList.remove('d-block');
        optionsList.classList.add('d-none'); 
        container.classList.remove('row');
    }
  
});



navbarToggler.addEventListener('click', ()=> {

     if(search.classList.contains('position-absolute')){
     search.classList.remove('position-absolute');
     search.classList.remove('end-0');
    } else {
        search.classList.add('position-absolute');
        search.classList.add('end-0');
    }
   
});

