exports.helloWorldFromController = (req, res, next) => {
    res.send(`Hello ${req.params.name || req.query.name || ''}`);
};