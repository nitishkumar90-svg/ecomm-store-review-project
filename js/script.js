let $filter = document.getElementById(`toggle-filter`),
    $filter_options = document.getElementById(`filter-options`),
    $nav = document.getElementById(`nav-icon`),
    $navOptions = document.getElementById(`nav-options`),
    $shop_menu = document.getElementById(`shop-submenu`),
    $shop_options = document.getElementById(`shop-submenu-options`)

const toggleFilterOptions = () => {
    $filter_options.classList.toggle('hidden-on-mobile-view')
}

const toggleNavOptions = () => {
    $navOptions.classList.toggle('hidden')
}

const toggleShopOptions = () => {
    $shop_options.classList.toggle(`hidden`)
}

window.onload = function (event) {
    $filter.addEventListener('click', toggleFilterOptions)
    $nav.addEventListener('click', toggleNavOptions)
    $shop_menu.addEventListener('click', toggleShopOptions)
 }


