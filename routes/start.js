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
    categories: [{name:"type", items:["All", "cards", "board games", "video games", "memorabilia"]},
    {name:"price", items:["All", "<$20", "<$50", "<$200", "<$100", "<$250", "<$1000"]},
    {name:"distance", items:["All", "<1km", "<3km", "<5km","<10km","<25km","<50km","<100km"]}],
    show: true,
};

router.get('/', (req, res) => {
    data.show = (req.query.show === 'true');
    console.log(data.show);
    res.render('index', data);
});

module.exports = router;