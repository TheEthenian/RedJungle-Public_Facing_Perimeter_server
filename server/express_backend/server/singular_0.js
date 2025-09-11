const axios = require('axios');
const url = 'http://redjungle-00.lab:6010';


const itemlist = [];

function unpack_update_list(data){

    data.forEach( item => {
        itemlist.push(item);
    });
    
    return itemlist;
};


function fetch_specific_data(target_url){

    axios.get(target_url) 
        .then( response => {
            const processed_list = unpack_update_list(response.data);
            console.log(processed_list);
        })
        .catch(error => {
             console.error('Error fetching data: ', error);
        });
};

fetch_specific_data(url);

