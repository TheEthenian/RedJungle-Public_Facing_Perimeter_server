const bodyParser = require('body-parser');
const axios = require('axios');

const express = require('express');
const app = express();
const PORT = 5090;
const get_data_url = 'http://redjungle-00.lab:6090';

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


function unpack_update_list(data){
    const itemlist = [];
    data.forEach( item => {
        itemlist.push(item);
    });
    
    return itemlist;
};



//routing logic
app.get('/', (req,res) => {
    res.send('Hello , wrong page targeted')
});


app.get('/fastapi', (req,res) => {

    function fetch_specific_data(target_url){

        axios.get(target_url) 
            .then( response => {
                const processed_list = unpack_update_list(response.data);
                res.send(processed_list);
            })
            .catch(error => {
                 console.error('Error fetching data: ', error);
            });
    };

    fetch_specific_data(get_data_url);
    
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




