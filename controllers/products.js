exports.helloWorldFromController = (req, res, next) => {
    res.send(process.env.APP_NAME)
    // res.send(`Hello ${req.params.name || req.query.name || ''}`);
};

exports.setCookie = (req, res, next) => {
    res.setHeader('Set-Cookie', 'isLogin=true')
    console.log(req.get('Cookie').split(';')[0].trim().split('=')[1] || '')
    res.render('test');
}