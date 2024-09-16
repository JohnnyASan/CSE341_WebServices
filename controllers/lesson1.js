const johnnyRoute = (req, res) => {
    res.send('Johnny Sanabria');
};

const radaRoute = (req, res) => {
    res.send('Rada Sanabria');
};

const gigRoute = (req, res) => {
    res.send('Gigabyte Sanabria');
};

module.exports = {
    johnnyRoute,
    radaRoute,
    gigRoute
};