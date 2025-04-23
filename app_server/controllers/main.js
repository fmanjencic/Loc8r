//GET Homepage
const index = (req, res) => {
    res.render('index', {title: 'Express'});
};

//Exports
module.exports = {
    index
}