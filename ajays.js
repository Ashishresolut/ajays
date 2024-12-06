// // const express = require('express');
// // const app = express();
// // const config = require('dotenv').config();
// // var bodyParser = require("body-parser");
// // const path = require('path');
// // var cors = require('cors');
// // const session = require('express-session');
// // const cookieparser = require('cookie-parser');


// // console.log('hello check1');
// // app.get('/data', (req, res) => {
// //     res.send('Hello, World!');
// // });


// // // // Use necessary middlewares
// // // app.use(cookieparser());
// // // app.use(session({
// // //     name: "Admin",
// // //     secret: "ADMIN1",
// // //     saveUninitialized: true,
// // //     resave: true,
// // //     cookie: {
// // //         maxAge: 1000 * 60 * 60 * 100
// // //     }
// // // }))

// // // // middleware
// // // app.use(express.json());
// // // app.use(express.urlencoded({ extended: true }));
// // // app.use(bodyParser.json());
// // // app.use(cors());


// // // app.use((err, req, res, next) => {
// // //     console.error(err);
// // //     res.status(500).send('Internal Server Error');
// // // });

// // // app.use('/api/v1', require('./routes/index'))
// // // app.use('/api/v2', require('./routev2/index'))

// // // // upload
// // // app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
// // // app.use("/Jsonfiles", express.static(path.join(__dirname, 'Jsonfiles')));

// // // //connect to server
// // const port = process.env.PORT || 3000;

// // app.listen(port, (err) => {
// //     if (err) {
// //         console.log(err);
// //         return;
// //     }
// //     console.log("app listening on port " + port);
// // })




// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// Import Express framework
const express = require('express');
const app = express();
const port = 3000;

// Define a GET API
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello, this is your GET API response!',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
