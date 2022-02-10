const express = require("express")
const fs = require("fs");
const app = express();
const router = express.Router();
const {books} = require("../public/book.json");


router.get("/random", (req, res, next) => {
    let a = [];
    var random = Math.floor(Math.random() * books.length);
    for (i = 0; i < 3; i++) {
        while(a.includes(random) > 0){
            random = Math.floor(Math.random() * books.length);
        }
        a.push(books[random]);
    }
    res.send(a);
});

router.get("/sort", (req, res, next) => {
    let result = books.sort((a,b)=> new Date(b.published).getTime() - new Date(a.published).getTime());
    res.send(result);
});

router.get("/names", (req, res, next) => {
    let names = [];
    books.map((name) => {
        names += name.author;
    })
    res.send(names);
})

router.get("/allbooks", (req, res) =>{
    res.send(books);
})

router.get("/book/:isbn", (req, res, next) => {
    const isbn = req.params.isbn;
    const isbnNumber = books.filter((isbnNumber) => {
        return isbnNumber.isbn === isbn
    })
    res.send(isbnNumber)
});

router.get("/search", (req, res, next) => {
    const title = req.query.title.toLowerCase();
    const search = books.filter((search) => {
        return search.title.toLowerCase().includes(title)
    })
    res.send(search)
});

router.get("/search", (req, res, next) => {
    const title = req.query.title.toLowerCase();
    const search = books.filter((search) => {
        return search.title.toLowerCase().includes(title)
    })
    res.send(search)
});

router.get("/page/:type", (req, res, next) => {
    if (req.params.type == 'min') {
        next();
    }
    let a = [];
    const max = books.filter((page) => {
         a.push(page.pages);
    })
    const Max = Math.max(...a);
    let book = books.filter((pageMax) => {
        return pageMax.pages == Max;
    })
    
    res.send(book);
}, (req, res) => {
    let a = [];
    const min = books.filter((page) => {
         a.push(page.pages);
    })
    const Min = Math.min(...a);
    let book = books.filter((pageMin) => {
        return pageMin.pages == Min;
    })
    res.send(book);
});

router.get("/publisher", (req, res, next) => {
    const publish = books.map((publish) => {
         return publish.publisher;
    })
    const counts = {};
    publish.forEach(function (x) { 
        counts[x] = (counts[x] || 0) + 1; 
    });
    res.send(counts)
});


module.exports = router;