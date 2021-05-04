
const cors = require('cors');
const express = require('express') 
const app = express();

app.use(cors());
app.use(express.json());

const subscribers = {}
let i = 0 ;

 
// first
app.get('/messages/subscribe', (req, res)  =>{

 const id = ++i < 90000 ? i : 1 ;
 subscribers[id] = res ;
 console.log("get ");
 req.on('close', ()=>{
     delete subscribers[id];
    });
  
});
 
//
app.post('/messages', (req, res) => {
    console.log(req.body);
    Object.entries(subscribers).forEach( ([id,response]) => {
        response.json(req.body);
        console.log("post ");
        delete subscribers[id];
    });
    res.status(204).end();
     
});
 
 
app.listen(3000);
console.log("LongPolling running at http://localhost:3000");


