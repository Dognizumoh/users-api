

function logger(req, res, next){
    console.log(`${req.method} ${req.originalUrl}${res.statueCode}`);
    next();
}


module.exports = logger