const express = require('express')
const app = express()
const port = 5000
var arr = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/user', (req, res) => {
    res.json(arr);
});

app.post('/user', (req, res) => {
    console.log(req.body);
    arr.push({ ...req.body, id: arr.length + 1 });
    res.send("Successfully added ");
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    console.log(id)

    const filterarr = arr.filter((ele)=>{
        return ele.id != id 
    })

    arr = filterarr
    res.json(filterarr)


    res.json("Successfully Deleted ")
    
});

app.put('/user/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)

    const query = req.query
    console.log(query)
    console.log(req.body)


    const findInd = arr.findIndex((ele)=>{

        
        if(ele.id == id){
            ele.Todo = req.body.Todo
            return(res.json("Sucsess Fully Added "))
        }
        res.json("Check request")
                
    })

    const find = arr.find((ele)=>{
        return ele.id == id
    })

    console.log(find)
    console.log(findInd)


   
})
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));