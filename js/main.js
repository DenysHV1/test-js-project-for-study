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












const main = `<main></main>`;
body.insertAdjacentHTML('beforeend', main);



const footer = `<footer></footer>`;
body.insertAdjacentHTML('beforeend', footer);
