
const analyzerModel = require('../models/analyzer')



exports.save = async(data)=>{
    return  await analyzerModel.create(data)
}
