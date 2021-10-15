const switchRegister = document.getElementById('user_switch-btn-register')
const switchLogin = document.getElementById('user_switch-btn-login')
const paginationItem = document.querySelectorAll('.pagination-item')
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
        // paginationItem[6].
        document.querySelector('.pagination-item.pagination-item--active').classList.remove("pagination-item--active")
        this.className = 'pagination-item--active pagination-item'
    }
}

