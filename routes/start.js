const express = require("express");
const router = express.Router();

const data = { loggedIn: false,
    username: "balcktack",
    items: [{name:"couch",suburb:"mudgeeraba"},
    {name:"car",suburb:"coomera"},
    {name:"dog",suburb:"tugan"},
    {name:"cat",suburb:"surfers paradise"},
    {name:"man",suburb:"miami"},
    {name:"toyota",suburb:"palm beach"},
    {name:"yatch",suburb:"currumbin"},
    {name:"dirt",suburb:"nerang"}],
    categories: [{name:"type", items:[["all","all"], ["cards","cards"], ["board","board games"], ["video","video games"], ["memorabilia","memorabilia"]]},
    {name:"price", items:[["all","all"], ["20","<$20"], ["50","<$50"], ["200","<$200"], ["100","<$100"], ["250","<$250"], ["1000","<$1000"]]},
    {name:"distance", items:[["all","all"], ["1","<1km"], ["3","<3km"], ["5","<5km"],["10","<10km"],["25","<25km"],["50","<50km"],["100","<100km"]]}],
    show: true,
};

router.get('/', (req, res) => {
    res.render('index', data);
});

module.exports = router;