const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

request('https://www.ulabox.com/categoria/cereales-y-semillas/1455', (err, response, body) => {
    let $ = cheerio.load(body)
    let productos = $('.product-item')
    for (let i = 0; i < productos.length; i++){
        let nombre = productos[i].attribs['data-product-name']
        let precio = productos[i].attribs['data-price']
        let marca = productos[i].attribs['data-product-brand']
        let id = productos[i].attribs['data-product-id']
        console.log(nombre, precio, marca, id);
        
    }
})