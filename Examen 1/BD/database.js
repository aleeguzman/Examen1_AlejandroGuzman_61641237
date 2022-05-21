const mongoose = require('mongoose');

var BDConnect = async () => {
    try {

        await mongoose.connect('mongodb+srv://Aleeguzman:AGNT2517@cluster0.ysaqf.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("BD Connection Success");
    } catch (err) {
        console.log(err);
        throw new Error("BD Connection Error");
    }
}

module.exports = BDConnect