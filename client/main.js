// npm init -y in our console before we install anything, in root folder, IMPORTANT
const loginForm = document.getElementById("login-form")
const messageSection = document.getElementById("login-message")
const colorSelect = document.getElementById("color-select")
const getColorOptions = () => {
    axios
        .get("http://localhost:5757/colors")
        .then(res => {
            // console.log(res.data);
            const colors = res.data
            const colorsMap = colors.map((color) => {
                return `<option value="${color}">${color}</option>`;
            });
            // console.log(colorsMap)
            colorsMap.forEach((colorOption) => {
                colorSelect.innerHTML += colorOption
                // this innerHTML bit is an alternative to document.createElement.
            });
            // console.log(colorSelect.innerHTML)
        })
        .catch(err => console.log(err));
};
getColorOptions();
// console.dir(loginForm) // gives us the .js object instead of .html, which is what .log gives us.
// () => {} is a callback function, will run when the event happens
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("username")
    const usernameValue = usernameInput.value;
    const passwordInput = document.getElementById("password")
    const passwordValue = passwordInput.value;
    
    axios
        .get(`http://localhost:5757/login?username=${usernameValue}&password=${passwordValue}`)
        .then((res) => {
            console.log(res.data)
            const loginMessage = document.createElement("h2")
            loginMessage.textContent = `Hey ${res.data.username}! Thanks for loggin in!`
            messageSection.append(loginMessage)
        })
        .catch(err => {
            console.log(err.response.data)
        })
})

colorSelect.addEventListener("change", (e) => {
    console.log("THIS IS MY COLOR: ", e.target.value)
    document.body.style.backgroundColor = e.target.value
})