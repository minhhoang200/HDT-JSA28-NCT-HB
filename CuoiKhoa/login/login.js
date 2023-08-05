const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const login = document.getElementById("login-form");
login.addEventListener("submit", function (event) {
    event.preventDefault(); //// Ngăn sự kiện reload mặc định của trình duyệt.

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    // in ra email và pass người dùng nhập được nhé
    const data = {
        username: login.username.value.trim(),
        password: login.password.value.trim(),
        
    }
    


    if (data.password.length == 0 && data.username.length == 0 ) {
        alert("Please input all");
    }
    else if (data.password.length < 8) {
        alert("Password must be at least 8 characters");
    }
    else if (!data.password.match(lowerCaseLetter)) {
        alert("Password must be contain a lowercase letter");
    }
    else if (!data.password.match(upperCaseLetter)) {
        alert("Password must be contain a uppercase letter");
    }
    else if (!data.password.match(numbers)) {
        alert("Password must be contain a number or special character");
    }
    
    else {
        // Xử lý với LocalStorage
        if (localStorage.users) {
            // Kiểm tra nếu trên localStorage đã có khóa: users
            let users = JSON.parse(localStorage.users);

            let dem = 0
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === data.email) {
                    dem++;
                    alert("Please input another email");
                }
            }
            // Kiểm tra biến dem nếu dem>0 => email này đã bị trùng lăp.
            if (dem == 0) {
                users.push(data);
                localStorage.setItem("users", JSON.stringify(users));
                location.replace("../login/login.html");
            }
        }
        else {
            localStorage.setItem("users", JSON.stringify(
                [data]
            ));
            location.replace("../login/login.html");
        }

    }
})