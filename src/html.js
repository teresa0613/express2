import express from 'express'
export const html = express.Router()

html.get('/', (req, res) => {
    res.send(`
  <!DOCTYPE html > 
< html  lang =" en " > 
  < head > 
    < meta  charset =" utf-8 " />
     < title > Exercices express 2 </ title > 
  </ head > 

  < body > 
    < p > LE TEXTE A RETOURNER DEVRA SE TROUVER ICI </ p > 
  </ body > 
</ html >
  `)
})
