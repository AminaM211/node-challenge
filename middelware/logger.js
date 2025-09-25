const logger = (req, res, next)=>{
    console.log("I am a logger");
    next();
}

module.exports = logger;