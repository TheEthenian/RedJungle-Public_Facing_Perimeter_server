const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const PORT = 5090;

app.use(express.json());
app.use(bodyParser.json());

//Storage {Temporary data}
let items_list = [
    {username: 'Powerranger', email: 'fish@company.org', payment:'yes', cookie:'somethingrandom'},
    {username: 'Breadwinners', email: 'spagetti@bread.com', payment:'no', cookie:'cheesebread'},
    {username: 'Breadwinners', email: 'spagetti@bread.com', payment:'no', cookie:'cheesebread'}
];


// functions
const update_items = (items) => {
    for (let i=0 ; i < items.length ; i++ ){
        items_list.push(items[i]);
    }
   return 
};


//routing logic
app.get('/', (req,res) => {
    res.status(200).json({content: items_list});
});

app.post('/', (req, res) => {
    if (req.body.length > 1) {
        update_items(req.body);
    }else{
        items_list.push(req.body)
    }
    console.log(req.body);
    res.status(200).json({message:'RedJungle Calling',data: req.body});
});

app.listen(PORT, () => {
    console.log(`RedJungle server running on http://localhost:${PORT}`);
});




