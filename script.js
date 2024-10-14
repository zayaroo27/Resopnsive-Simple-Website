
$(document).ready(function() {
    let cart = JSON.parse(localStorage.getItem('shoplistlocal')) || [];


    const loadCartFromLocalStorage = () => {
        if (cart.length > 0) {
            $('.list').empty();
            cart.forEach((product, index) => {
                addToCartHTML(product, index);
            });
            updateCartCount();  
        }
    };


    $("#market").on("click", ".addCart", function(e) {
        e.preventDefault();  


        let card = $(this).closest('.card');
        let productImage = card.find('img').attr('src');
        let productTitle = card.find('.title').text().trim();


        const product = {
            title: productTitle,
            image: productImage
        };
        cart.push(product);

 
        localStorage.setItem('shoplistlocal', JSON.stringify(cart));


        $('.list').empty();
        cart.forEach((item, index) => {
            addToCartHTML(item, index);
        });


        updateCartCount();
    });


    const addToCartHTML = (product, index) => {
        $('.list').append(`
            <li class="item" data-index="${index}">
                <img src="${product.image}" alt="${product.title}">
                <div class="title">${product.title}</div>
                <button class="remove-item">Remove</button>
            </li>
        `);
    };


    const updateCartCount = () => {
        let itemCount = cart.length;  
        $('.count').text(itemCount);
        if (itemCount > 0) {
            $('.count').css({"display": "block"});
        } else {
            $('.count').css({"display": "none"});
        }
    };


    $(".list").on("click", ".remove-item", function () {
        const index = $(this).parent().data('index');
        cart.splice(index, 1);  
        $(this).parent().remove();


        localStorage.setItem('shoplistlocal', JSON.stringify(cart));

   
        updateCartCount();
    });


    $(".openpopup2").click(function() {
        cart = []; 
        localStorage.clear();  
        $('.list').empty();  
        updateCartCount();  
    });


    $('#tray').click(function(){
        $('.app').fadeIn(500); 
    });

  
    $('.closewindow').click(function(){
        $('.app').fadeOut(500);  
    });

    loadCartFromLocalStorage();
});




const popupContainer = document.getElementById('popup-container');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');


const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');


loginBtn.addEventListener('click', () => {
  popupContainer.style.display = 'block';
  loginForm.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'block';
  signupForm.style.display = 'block';
});


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  popupContainer.style.display = 'none';
  loginForm.style.display = 'none';
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  popupContainer.style.display = 'none';
  signupForm.style.display = 'none';
});



