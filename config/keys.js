if(process.env.Node_ENV === 'process'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}