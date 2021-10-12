const switchRegister = document.getElementById('user_switch-btn-register')

switchRegister.onclick = function () {
    document.getElementById('loginModalLog').style.display = 'none'
    document.getElementById('loginModal').style.display = 'block'
}


const switchLogin = document.getElementById('user_switch-btn-login')

switchLogin.onclick = function () {
    document.getElementById('loginModal').style.display = 'none'
    document.getElementById('loginModalLog').style.display = 'block'
}

