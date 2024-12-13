const express = require("express");
const app = express();
let port = 8080;
let mysql = require("mysql2");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const { faker } = require('@faker-js/faker');
app.use(express.urlencoded({ extended: true }));    //handling post request.
app.use(express.json());


app.use(express.static(path.join(__dirname, "/public")))
function createRandomUser() {
    return faker.string.uuid()
};


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Manmay@1234",
    database: "VIT"
});



//Listening to the server.
app.listen(port, () => {
    console.log('App is listening to port ' + port);
});


newUserId = createRandomUser();


app.get("/users/add", (req, res) => {
    res.render("add.ejs", { id: newUserId });
});


app.post("/users/add/:id", (req, res) => {
    let { id } = req.params;
    let { username, email, password } = req.body;
    query_ = "INSERT INTO user VALUES(?,?,?,?)";
    data = [id, username, email, password];
    console.log(id, username, email, password);
    connection.query(query_, data, (err, result) => {
        try {
            if (err) throw err;
            console.log(result);
            res.redirect("/users");
        } catch (err) {
            res.send(err);
        }
    });
});




// get functionality.
app.get("/users-count", (req, res) => {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err
            // console.log(result);
            result_ = result[0]['COUNT(*)']
            res.render("home.ejs", { result_ });
        });
    }
    catch (err) {
        res.send(err);
    }
});



app.get("/users", (req, res) => {
    let q = "SELECT * FROM user;"
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("users.ejs", { users: result });
        });
    }
    catch (err) {
        console.log(err);
    }
});



app.get("/users/:id/Edit", (req, res) => {
    let { id } = req.params;
    // res.send("UPDATE YOUR INFORMATION.");
    const q1 = "SELECT * FROM user where UserId=?";
    connection.query(q1, id, (err, result) => {
        try {
            if (err) throw err;
            // console.log(result);
            let [UserId, username, email, password] = [result[0]["UserId"], result[0]["username"], result[0]["email"], result[0]["password"]];
            res.render("authentication.ejs", { id });
        }
        catch (err) {
            res.send(err);
        }
    });
});




app.post("/users/:id", (req, res) => {
    let { id } = req.params;
    let { username, email, password } = req.body;
    let query_ = "UPDATE user SET username=?,email=?,password=? WHERE UserId=?";
    let data = [username, email, password, id];
    connection.query(query_, data, (err, result) => {
        try {
            if (err) throw err;
            // console.log(data);
            res.redirect("/users");
        } catch (err) {
            res.send(err);
        }
    });
});



app.post("/users/:id/authentication", (req, res) => {
    let { id } = req.params;
    let { pass } = req.body;
    q1 = `SELECT password from user where UserId="${id}"`;
    connection.query(q1, (err, result) => {
        try {
            if (err) throw err;
            if (pass == result[0]["password"]) {
                res.render("edit.ejs", { UserId: id });
            }
            else {
                res.send("Warning ! Password not correct ! ");
            }
        } catch (err) {
            res.send(err);
        }
    });
});

app.get("/users/:id/Check", (req, res) => {
    let { id } = req.params;
    res.render("check.ejs", {id});
})

//delete the data from the database.
app.post("/users/:id/Delete", (req, res) => {
    let { id } = req.params;
    let { email_, password_ } = req.body;
    //code for checking the emailid and password.
    q1 = 'SELECT * FROM user where UserId=?';
    connection.query(q1, id, (err, result_) => {
        let email_id = result_[0]["email"];
        let password_user = result_[0]["password"];
        if (password_ == password_user && email_ == email_id) {
            query_ = "DELETE FROM user WHERE UserId=?";
            connection.query(query_, id, (err, result) => {
                try {
                    if (err) throw err;
                    res.redirect("/users");
                } catch (err) {
                    res.send(err);
                }
            });
        }
        else {
            res.send("INVALID Credentials USED ! :(");
        }
    });

});