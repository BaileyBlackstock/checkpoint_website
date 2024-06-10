const express = require('express');
const path = require('path');
const port = process.env.port || 8000;

const app = express();

// static folder
app.use(express.static(path.join(__dirname,"public")));

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
app.get('/', (req, res) => {
    res.render('index', { loggedIn: false,
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
        {name:"distance", items:["All", "<1km", "<3km", "<5km","<10km","<25km","<50km","<100km"]}]
    });
});

app.listen(port, () => {
    console.log(`Server is Running on port ${port}.`)
});