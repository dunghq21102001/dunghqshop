const switchRegister = document.getElementById('user_switch-btn-register')
const switchLogin = document.getElementById('user_switch-btn-login')
const paginationItem = document.querySelectorAll('.pagination-item')
const categoryItem = document.querySelectorAll('.category-items')
const angleCategory = document.querySelectorAll('.bride-category')
const fakeCategory = document.querySelectorAll('.fake-category')
const filterBtn = document.querySelectorAll('.home-filter-btn')


switchRegister.onclick = function () {
    document.getElementById('loginModalLog').style.display = 'none'
    document.getElementById('loginModal').style.display = 'block'
}

switchLogin.onclick = function () {
    document.getElementById('loginModal').style.display = 'none'
    document.getElementById('loginModalLog').style.display = 'block'
}

for (var i = 0; i < paginationItem.length; ++i) {
    paginationItem[i].onclick = function (e) {
        e.preventDefault()
        document.querySelector('.pagination-item.pagination-item--active').classList.remove("pagination-item--active")
        this.className = 'pagination-item--active pagination-item'
    }
}

for (let i = 0; i < categoryItem.length; ++i) {
    categoryItem[i].onclick = function (e) {
        e.preventDefault()
        document.querySelector('.category-items.category-items--active').classList.remove('category-items--active')
        categoryItem[i].classList.add('category-items--active')
        document.querySelector('.fake-category.bride-category').classList.remove('bride-category')
        for (let j = 0; j < fakeCategory.length; ++j) {
            fakeCategory[i].classList.add('bride-category')
        }
    }
}

for(var i = 0; i< filterBtn.length; ++i) {
    filterBtn[i].onclick = function(e) {
        document.querySelector('.home-filter-btn.btn.btn--primary').classList.remove('btn--primary')
        this.className = 'home-filter-btn btn btn--primary'
    }
}


