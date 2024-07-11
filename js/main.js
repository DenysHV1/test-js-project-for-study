const body = document.querySelector('.body');
body.style.backgroundImage = 'linear-gradient(90deg,#9e50d3,#1a1fff,#1e98dd)'

const header = `
<header>
	<div class="container header-inner">
		<div class = "header-inner-top">
			<address class = "header-top-address">
				<ul class="header-address-list">
					<li class="header-address-item"><a class="heder-address_link" href="#">+1800-123-4567</a></li>
					<li class="header-address-item"><a class="heder-address_link" href="#">info@brandexponents.com</a></li>
				</ul>
			</address>
			<ul class = "header-top-socials">
				<li class="header-socials-item"><a class="heder-socials_link" href="#">f</a></li>
				<li class="header-socials-item"><a class="heder-socials_link" href="#">t</a></li>
				<li class="header-socials-item"><a class="heder-socials_link" href="#">l</a></li>
				<li class="header-socials-item"><a class="heder-socials_link" href="#">p</a></li>
			</ul>
		</div>
		<div class="header-inner-bottom">
			<nav class="header-bottom-nav">
				<a class="header_logo" href="#">LOGO</a>
				<ul class="header-nav-list">
					<li class="header-nav-list-item"><a class="heder-nav_link" href="#">Home</a></li>
					<li class="header-nav-list-item"><a class="heder-nav_link" href="#">Why SEO?</a></li>
					<li class="header-nav-list-item"><a class="heder-nav_link" href="#">Services</a></li>
					<li class="header-nav-list-item"><a class="heder-nav_link" href="#">Team</a></li>
					<li class="header-nav-list-item"><a class="heder-nav_link" href="#">Pricing</a></li>
					<li class="header-nav-list-item"><a class="heder-nav_link" href="#">Blog</a></li>
					<li class="header-nav-list-item"><a class="heder-nav_link" href="#">Contact</a></li>
				</ul>
				<button class="header-nav-button type="button">Enquiry</button>
			</nav>
		</div>
	</div>
</header>`;
// в БОДІ помістили ХЕДЕР
body.insertAdjacentHTML('afterbegin', header);

// знайшли в хедері дів і дали йому клас
const headerContainer = document.querySelector('header> div:first-child');
headerContainer.classList.add('container');

//знайшли в контейнера перший ДІВ і дали йому клас
const headerContainerTop = document.querySelector('header> div:first-child > div:first-child');
headerContainerTop.classList.add('header-inner-top');

//знайшли в контейнера другий ДІВ і дали йому клас
const headerContainerBottom = document.querySelector('header > div:first-child > div:last-child');
headerContainerBottom.classList.add('header-inner-bottom');

//address
const headerTopAddress = document.querySelector('div:first-child > address:first-child');
headerTopAddress.classList.add('header-top-address');

//header-address-list
const headerAddressList = document.querySelector('header div div address ul');
headerAddressList.classList.add('header-address-list');

//header-top-socials
const headerTopSocialsUl = document.querySelector('div:first-child > ul:last-child');
headerTopSocialsUl.classList.add('header-top-socials');

//header-bottom-nav
const headerBottomNav = document.querySelector('div:last-child > nav:first-child');
headerBottomNav.classList.add('header-bottom-nav');

//header_logo
const headerLogo = document.querySelector('div:last-child > nav:first-child > a:first-child');
headerLogo.classList.add('header_logo');
headerLogo.setAttribute('href', '#')

//header-nav-list
const headerNavList = document.querySelector('div nav ul');
headerNavList.classList.add('header-nav-list');

//header-nav-button
const headerNavButton = document.querySelector('div nav button');
headerNavButton.classList.add('header-nav-button')
headerNavButton.setAttribute('type', 'button')

//header-nav-list-item
const headerNavListItem1 = document.querySelector('nav ul li:nth-child(1)');
const headerNavListItem2 = document.querySelector('nav ul li:nth-child(2)');
const headerNavListItem3 = document.querySelector('nav ul li:nth-child(3)');
const headerNavListItem4 = document.querySelector('nav ul li:nth-child(4)');
const headerNavListItem5 = document.querySelector('nav ul li:nth-child(5)');
const headerNavListItem6 = document.querySelector('nav ul li:nth-child(6)');
const headerNavListItem7 = document.querySelector('nav ul li:nth-child(7)');
headerNavListItem1.classList.add('header-nav-list-item');
headerNavListItem2.classList.add('header-nav-list-item');
headerNavListItem3.classList.add('header-nav-list-item');
headerNavListItem4.classList.add('header-nav-list-item');
headerNavListItem5.classList.add('header-nav-list-item');
headerNavListItem6.classList.add('header-nav-list-item');
headerNavListItem7.classList.add('header-nav-list-item');

//heder-nav_link
const headerNavLinkA1 = document.querySelector('nav ul li:nth-child(1) > a');
const headerNavLinkA2 = document.querySelector('nav ul li:nth-child(2) > a');
const headerNavLinkA3 = document.querySelector('nav ul li:nth-child(3) > a');
const headerNavLinkA4 = document.querySelector('nav ul li:nth-child(4) > a');
const headerNavLinkA5 = document.querySelector('nav ul li:nth-child(5) > a');
const headerNavLinkA6 = document.querySelector('nav ul li:nth-child(6) > a');
const headerNavLinkA7 = document.querySelector('nav ul li:nth-child(7) > a');
headerNavLinkA1.classList.add('heder-nav_link');
headerNavLinkA2.classList.add('heder-nav_link');
headerNavLinkA3.classList.add('heder-nav_link');
headerNavLinkA4.classList.add('heder-nav_link');
headerNavLinkA5.classList.add('heder-nav_link');
headerNavLinkA6.classList.add('heder-nav_link');
headerNavLinkA7.classList.add('heder-nav_link');
headerNavLinkA1.setAttribute('href', '#');
headerNavLinkA2.setAttribute('href', '#');
headerNavLinkA3.setAttribute('href', '#');
headerNavLinkA4.setAttribute('href', '#');
headerNavLinkA5.setAttribute('href', '#');
headerNavLinkA6.setAttribute('href', '#');
headerNavLinkA7.setAttribute('href', '#');



//header-socials-item
const headerSocialsItemLi1 = document.querySelector('div div ul:last-child > li:nth-child(1)');
const headerSocialsItemLi2 = document.querySelector('div div ul:last-child > li:nth-child(2)');
const headerSocialsItemLi3 = document.querySelector('div div ul:last-child > li:nth-child(3)');
const headerSocialsItemLi4 = document.querySelector('div div ul:last-child > li:nth-child(4)');
headerSocialsItemLi1.classList.add('header-socials-item');
headerSocialsItemLi2.classList.add('header-socials-item');
headerSocialsItemLi3.classList.add('header-socials-item');
headerSocialsItemLi4.classList.add('header-socials-item');

//heder-socials_link
const headerSocialsLinkA1 = document.querySelector('div div ul:last-child > li:nth-child(1) > a');
const headerSocialsLinkA2 = document.querySelector('div div ul:last-child > li:nth-child(2) > a');
const headerSocialsLinkA3 = document.querySelector('div div ul:last-child > li:nth-child(3) > a');
const headerSocialsLinkA4 = document.querySelector('div div ul:last-child > li:nth-child(4) > a');
headerSocialsLinkA1.classList.add('heder-socials_link');
headerSocialsLinkA2.classList.add('heder-socials_link');
headerSocialsLinkA3.classList.add('heder-socials_link');
headerSocialsLinkA4.classList.add('heder-socials_link');
headerSocialsLinkA1.setAttribute('href', '#');
headerSocialsLinkA2.setAttribute('href', '#');
headerSocialsLinkA3.setAttribute('href', '#');
headerSocialsLinkA4.setAttribute('href', '#');

//header-address-item
const headerAddressItemLi1 = document.querySelector('div address ul:first-child > li:nth-child(1)');
const headerAddressItemLi2 = document.querySelector('div address ul:first-child > li:nth-child(2)');
headerAddressItemLi1.classList.add('header-address-item');
headerAddressItemLi2.classList.add('header-address-item');

//heder-address_link
const headerAddressLinkA1 = document.querySelector('div address ul:first-child > li:nth-child(1) > a');
const headerAddressLinkA2 = document.querySelector('div address ul:first-child > li:nth-child(2) > a');
headerAddressLinkA1.classList.add('heder-address_link');
headerAddressLinkA2.classList.add('heder-address_link');
headerAddressLinkA1.setAttribute('href', '#');
headerAddressLinkA2.setAttribute('href', '#');



// .style.backgroundColor = 'red'
console.log(header) 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ➕🟢 🧱🧱🧱🧱🧱🧱🧱 Создание основной разметки и переменных к этой разметки - main > section > ul ul
const main = 
`<main>
	<section class="first-section">
		<div class="container first-section-inner">
			<ul class="test-list">
			</ul>
			<ul class="test-list2">
			</ul>
		</div>
	</section>
</main>`;
body.insertAdjacentHTML('beforeend', main);

//first-section
const firstSection = document.querySelector('main > section:first-child');
firstSection.classList.add('first-section');

//test-list
const testListInFirstSection = document.querySelector('main > section:first-child > div:first-child > ul:first-child');
testListInFirstSection.classList.add('test-list');

const testListInFirstSection2 = document.querySelector('main > section:first-child > div:first-child > ul:nth-child(2)');
testListInFirstSection2.classList.add('test-list2');


// ➕🟢 1️⃣🧩🧩🧩🧩🧩🧩🧩🧩FIRST ARRAY add to marcup 
const arrayFromBackend = [
	{
		carName: 'Bugatty',
		type: '5ss',
		price: 120000, 
		img: 'https://klike.net/uploads/posts/2019-05/1559021804_2.jpg',
	},
	{
		carName: 'Mersedes',
		type: 'S5',
		price: 60000, 
		img: 'https://fullhdoboi.ru/wp-content/uploads/_ph/1/475901848.jpg',
	},
	{
		carName: 'onlySix',
		type: '6',
		price: 30000, 
		img: 'https://s1.1zoom.ru/big0/43/239685-Sepik.jpg',
	},
	{
		carName: 'BMW',
		type: 'S1',
		price: 70000, 
		img: 'https://i.artfile.ru/1920x1080_772171_[www.ArtFile.ru].jpg',
	},
	{
		carName: 'Ferrary',
		type: 'S7',
		price: 90000, 
		img: 'https://mebel-go.ru/mebelgoer/8762Auto___Lamborghini_Photo_of_a_car_Lamborghini_Aventador__063460_.jpg',
	},
]

const itemLiMarkup = arrayFromBackend.map(({carName, type, price, img}) => 
	`<li class = "all-li-with-content">
		<img src="${img}" alt="${carName}">
		<h2>${carName}</h2>
		<h3>${type}</h3>
		<p>${price}</p>
	</li>`
	).join('');
	
	testListInFirstSection.insertAdjacentHTML('afterbegin', itemLiMarkup);



// ➕🟢 2️⃣🧩🧩🧩🧩🧩🧩🧩🧩SECOND ARRAY add to marcup 
const cars2 = [
    {
        img: "https://consumerguide.com/wp-content/uploads/2020/11/6802-2020audia47.jpg",
        carName: "Audi A4",
        type: "2022",
        id: "A4-2022",
        price: "$45,000"
    },
    {
        img: "https://images2.alphacoders.com/107/1072096.jpg",
        carName: "BMW X5",
        type: "2023",
        id: "X5-2023",
        price: "$60,000"
    },
    {
        img: "https://car-images.bauersecure.com/pagefiles/25079/fordmustang2016-03.jpg",
        carName: "Ford Mustang",
        type: "2021",
        id: "Mustang-2021",
        price: "$35,000"
    },
]
const itemLiMarkup2 = cars2.map(({carName, type, price, img}) => 
	`<li class = "all-li-with-content">
		<img src="${img}" alt="${carName}">
		<h2>${carName}</h2>
		<h3>${type}</h3>
		<p>${price}</p>
	</li>`
	).join('');
	
	testListInFirstSection.insertAdjacentHTML('afterbegin', itemLiMarkup2);



// ➕🟢 3️⃣🧩🧩🧩🧩🧩🧩🧩🧩THIRT ARRAY add to marcup 
const japan = [
    {
        image_url: "https://s1.1zoom.ru/b5155/454/Japan_Kyoto_Gardens_Pond_Autumn_Pagodas_Bridges_536318_1920x1080.jpg",
        description: "Закат над горами",
        location: "Горы Рокки",
		id: 'none',
    },
    {
        image_url: "https://99px.ru/sstorage/53/2017/08/tmb_206894_3810.jpg",
        description: "Цветущие сакуры",
        location: "Япония",
		id: 34734
    },
    {
        image_url: "https://www.rabstol.net/uploads/gallery/main/253/rabstol_net_japan_11.jpg",
        description: "Абстрактное искусство",
        location: "Галерея современного искусства",
		id: 2323323
    }
]
const japanItem = japan.map(({image_url, description, location, id = 'none'}) => `<li data-id="${id}" class = "all-li-with-content">
	<img src="${image_url}" alt="${description}">
	<h2>${description}</h2>
	<h3>${location}</h3>
</li>`).join('');


testListInFirstSection2.insertAdjacentHTML('afterbegin', japanItem)

// ➖🟢 🧨🧨🧨🧨🧨🧨DELITED SPESIAL ITEM FROM MARCUP⚙️⚙️⚙️
const testListInFirstSection2After = document.querySelector('main > section:first-child > div:first-child > ul:nth-child(2)');





const footer = `<footer></footer>`;
body.insertAdjacentHTML('afterbegin', footer);



///////////////////////////////////////////////////////////////

//game

const buttonUnder = document.querySelector('.my-button-under');
const buttonLeft = document.querySelector('.my-button-left');
const buttonRight = document.querySelector('.my-button-right');
const buttonTop = document.querySelector('.my-button-top');
const buttonRandomColor = document.querySelector('.my-button-color');
const buttonRandomColorBg = document.querySelector('.my-button-color-bg');
const buttonStars = document.querySelector('.my-button-color-stars')

const objectBall = document.querySelector('.balls');
const spaceForPlay = document.querySelector('.play-game');

let stepTopBottom = 0;
let stepRightLeft = 0;
buttonUnder.addEventListener('click', () => {
	stepTopBottom -= 100
	objectBall.style.marginBottom = `${stepTopBottom}px`
})

buttonTop.addEventListener('click', () => {
	stepTopBottom += 100
	objectBall.style.marginBottom = `${stepTopBottom}px`
})

buttonRight.addEventListener('click', () => {
	stepRightLeft -= 100
	objectBall.style.marginRight = `${stepRightLeft}px`
})

buttonLeft.addEventListener('click', () => {
	stepRightLeft += 100
	objectBall.style.marginRight= `${stepRightLeft}px`
})


const arrayColors = ['linear-gradient(90deg,#6a57cd,#b952c5,#d25fba,#e488a1,#fab687)', 'linear-gradient(90deg,#8bff4d,#ece646,#4fc70f)', 'linear-gradient(90deg,#00a7b2,#0056d6,#942192)', 'linear-gradient(90deg,#6eff7f,#00fffb,#6e97ff,#cd7dff)', 'linear-gradient(90deg,#ff204e,#a0153e,#5d0e41,#00224d)', 'linear-gradient(90deg,#9900ff,#4d00db,#000000)', 'linear-gradient(90deg,#000000,#000000,#ff0000)', 'linear-gradient(90deg,#eeff00,#0400ff)', 'linear-gradient(90deg,#0e1ff2,#ff0051,#f1fe37)', 'linear-gradient(90deg,#001eff,#ff000d)', 'linear-gradient(90deg,#000000,#3700ff,#000000)', 'linear-gradient(90deg,#fff100,#e60012)']



const callback = (colors) => {
	const inx = Math.round(Math.random() * colors.length - 1);
	if (inx >= 0){
		return objectBall.style.backgroundImage = colors[inx];
	} else {
		return objectBall.style.backgroundImage = 'linear-gradient(90deg,#fff100,#e60012)'
	}
}

buttonRandomColor.addEventListener('click', () => {
	callback(arrayColors)
})

const callbackBg = (colors) => {
	const inx = Math.round(Math.random() * colors.length - 1);
	if (inx >= 0){
		return spaceForPlay.style.backgroundImage = colors[inx];
	} else {
		return spaceForPlay.style.backgroundImage = 'linear-gradient(90deg,#fff100,#e60012)'
	}
}

buttonRandomColorBg.addEventListener('click', () => {
	callbackBg(arrayColors)
})



buttonStars.addEventListener('click', () => {
	spaceForPlay.classList.toggle('baground-img');
	spaceForPlay.style.backgroundImage = '';
})
