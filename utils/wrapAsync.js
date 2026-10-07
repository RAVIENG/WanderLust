//in ejs-5 WrapAsync is not required
function wrapAsync(fn){
    return function (req,res,next){
        fn(req,res,next).catch(next)
    }
}

module.exports = wrapAsync;