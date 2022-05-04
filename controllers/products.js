exports.helloWorldFromController = (req, res, next) => {
    res.send(process.env.APP_NAME)
    // res.send(`Hello ${req.params.name || req.query.name || ''}`);
};