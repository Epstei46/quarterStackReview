const users = [
    {
        username: "studawg9000",
        password: "123",
        favColor: "black"
    },
    {
        username: "donald",
        password: "321",
        favColor: "blue"
    },
]

const dropDownItems = [
    "white",
    "black",
    "blue",
    "red",
    "purple",
    "orange",
    "green"
]

module.exports = {
    login: (req, res) => {
        const {username, password} = req.query;
        const foundUser = users.find((user) => {
            return username === user.username
        });
        if(!foundUser){
            res.status(409).send("Username or Password is incorrect!")
        }
        console.log(foundUser);
        res.status(200).send(foundUser);
    },
    getColors: (req, res) => {
        res.status(200).send(dropDownItems)
    },
};