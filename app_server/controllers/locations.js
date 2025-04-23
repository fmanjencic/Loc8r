const homeList = (req, res) => {
    res.render('index', {title: 'All Locations'});
};

const locationInfo = (req, res) => {
    res.render('index', {title: 'Location Info'});
};

const addReview = (req, res) => {
    res.render('index', {title: 'Review of Location'});
};

module.exports = {
    homeList, locationInfo, addReview
}