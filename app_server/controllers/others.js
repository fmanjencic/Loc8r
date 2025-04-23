//GET Homepage
const about = (req, res) => {
    res.render('index', {title: 'About Us'});
};

//Exports
module.exports = {
    about
}