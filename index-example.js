import express from 'express';

const port = 8000;
const app = express();

// app.get('/hel*lo', (req,res)=>{
// hello, helfugfwgwiglo

// app.get('/hel?lo', (req,res)=>{
// hello, helo

// app.get('/hel+lo', (req,res)=>{
// hello, helllllllo, helllo

// app.get('/hel(la)?lo', (req,res)=>{
// helo, helalo

// app.get(/.*a$/, (req,res)=>{
// fswnfwna -> endung a

const cb = () => {
    console.log('CB');
    next();
}

app.get('/hello', (req,res)=>{
    res.send('Hello!');
    //res.status(201).send({success:true});
    //res.download('/test.pdf', tessst.pdf);
    //res.redirect(301,'http://google.de');
    //res.set('Content-Type', 'text/plain');
    //res.append('Warning','code');
    //res.type('application/json');
    //res.type('png);
    //res.links();
    //res.cookie('token','sfdfef',{
    //    domain:'',
    //    path: '/',
    //    secure: true,
    //    expires:600000
    //});
    //res.clearCookie('token');
    //res.end();
})

app.listen(port, () => {
    console.log(`Server started on port http://localhos:${port}`);
});
