// бургер-меню
const burgerIcon = document.querySelector('.burger__icon');
const menu = document.querySelector('.nav');
const headerNavItems = document.querySelectorAll('.header__nav-item');

if (document.documentElement.clientWidth <= 700 && burgerIcon && menu) {
  burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('nav__burger-opened');
  });

  // Закрывать меню при клике на любой пункт меню
  headerNavItems.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('nav__burger-opened');
    });
  });
}
// бургер-меню

// ========================================================

// стилизация элементов списка
let listItems = document.querySelectorAll('.list__item')

  for (let l = 0; l < listItems.length; l++) {
    listItems[l].addEventListener('click', function () {
      for (let k = 0; k < listItems.length; k++) {
      listItems[k].classList.remove('list__item--active');
    }

    this.classList.add('list__item--active');
    })
  }
// стилизация элементов списка

// ========================================================

// фильтры сайдбара
let buttons = document.querySelectorAll('.list__btn');
let contentList = Array.from(document.querySelectorAll('.content__list .content__item'));

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active__btn');
    }

    this.classList.add('active__btn');

    let filter = this.dataset.filter;

    // Фильтр карточек отсюда
    for (let e = 0; e < contentList.length; e++) {
      let contentItem = contentList[e];

      if (filter === 'all' || contentItem.dataset.filter === filter) {
        contentItem.style.display = 'flex';
      } else {
        contentItem.style.display = 'none';
      }
    }
  });
}
// фильтры сайдбара

// ========================================================

// замена содержимого main при нажатии на кнопку навигации
let navItems = document.querySelectorAll('.header__nav-link');
let mainContent = document.querySelectorAll('.main__inner');
let asideList = document.querySelectorAll('.list__wrapper .list');


for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function () {

    for (let j = 0; j < mainContent.length; j++) {
      mainContent[j].classList.remove('main__inner-active');
      if (navItems[i].dataset.nav === mainContent[j].dataset.content) {
        mainContent[j].classList.add('main__inner-active')
      }
      }

      for (let l = 0; l < asideList.length; l++) {
      asideList[l].classList.remove('list__active');
      if (navItems[i].dataset.nav === asideList[l].dataset.list) {
        asideList[l].classList.add('list__active')
      }
      }
  });
}
// замена содержимого main при нажатии на кнопку навигации