import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send(`Hello World!`)
});

app.get('/setCookie', (req, res) => {
    res.cookie('myCookie', 'Cookie', {
        maxAge: 20000,
        httpOnly: true,
        secure: true, // --> Https
        sameSite: 'strict', // --> lax
        //expires: new Date("2022-12-31")
    }); 
    res.send(`Hello World!`);
});

app.get('/getCookie', (req, res) => {
    console.log(req.cookies);
    res.send(`Reading cookies`);
});

app.get('/deleteCookie', (req, res) => {
    console.log(req.cookies);

    res.clearCookie('myCookie');
    res.send(`Erase Cookie`);
});

app.listen(port);
console.log(`Server on port ${port}`);