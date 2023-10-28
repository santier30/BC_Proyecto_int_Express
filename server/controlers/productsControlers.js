const getWinesData = async(req, res)=> {
  try {
    const wines = await fetch("https://vinotecareact-default-rtdb.firebaseio.com/wines.json")
  const know = await fetch("https://vinotecareact-default-rtdb.firebaseio.com/Know.json")
  const exc = await fetch("https://vinotecareact-default-rtdb.firebaseio.com/Exclusive.json")
  if(!wines.ok || !know.ok || !exc.ok){throw new Error('failed geting wines');}
  const dataWine = await wines.json()
  const dataKnow = await know.json()
  const dataexc = await exc.json()

    for(let key in dataWine){
      dataWine[key].key = key
    }
    for(let key in dataKnow){
      dataKnow[key].key = key
    }
    for(let key in dataexc){
      dataexc[key].key = key
    }



data = [...Object.values(dataWine),...Object.values(dataKnow),...Object.values(dataexc)]

let lBrands = [];
data.forEach((wine) => {
  if (!lBrands.includes(wine.brand.toLowerCase())) {
    lBrands.push(wine.brand.toLowerCase());
  }
});
let winePrices = data.map((wine) => wine.price);
let biggestPrice = Math.max(...winePrices);
const winesSend = {wines:data,brands:lBrands,biggest:biggestPrice};
res.setHeader('Content-Type', 'application/json');
res.status(200).json(winesSend);
  } catch (error) {
    console.log(error);
  }
  



}
const getKnowData = (req, res)=> {
  fetch("https://vinotecareact-default-rtdb.firebaseio.com/Know.json")
  .then((response) => response.json())
  .then((data) => {
    for(let key in data){
      data[key].key = key
  }
    let know = [...Object.values(data)];
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(know);
    
  })
  .catch((error) => {
    console.error("Error geting Know Vintus wines data:", error);
    res.status(500).send('Error geting Know Vintus wines data:');
  });



}

const getExclusiveData = (req, res)=> {
  fetch("https://vinotecareact-default-rtdb.firebaseio.com/Exclusive.json")
  .then((response) => response.json())
  .then((data) => {
    for(let key in data){
      data[key].key = key
  }
 
    let Exclusive = [...Object.values(data)];
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(Exclusive);
    
  })
  .catch((error) => {
    console.error("Error geting Exclusive wines data:", error);
    res.status(500).send('Error geting Exclusive wines data:');
  });



}

const postNewItem = (req,res)=>{
    const data = req.newWine;
    console.log(data);
  
    fetch("https://vinotecareact-default-rtdb.firebaseio.com/Exclusive.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
     
        console.log('suc')
        return response.json();
      } else {
        
        throw new Error(`Request failed with status: ${response.status}`);
      }
    })
    .then(data => {
     
      res.json({ message: "Data posted successfully", data });
    })
    .catch(error => {
 
      res.status(500).json({ error: error.message });
    });
  }

  const filterWines = (req , res)=>{
    try {
        let { type, brand, priceRangeFrom, priceRangeUpTo, search } = req.query;
        let { filteredWines } = req;
    
        let x = [];
    
        if (type) {
          type = type.split(',');
          for (let i of type) {
            x = [...x, ...filteredWines.filter((wine) => wine.category === i)];
          }
          filteredWines = [...x];
          x = [];
        }
    
        if (brand) {
          brand = brand.split(',');
          for (let i of brand) {
            x = [...x, ...filteredWines.filter((wine) => wine.brand.toLowerCase() === i.toLowerCase())];
          }
          filteredWines = [...x];
        }
    
        if (priceRangeUpTo) {
          priceRangeFrom = Number(priceRangeUpTo);
          x = [...filteredWines.filter((wine) => Math.floor(wine.price) <= priceRangeUpTo)];
          filteredWines = [...x];
        }
    
        if (priceRangeFrom) {
          priceRangeFrom = Number(priceRangeFrom);
          x = [...filteredWines.filter((wine) => Math.floor(wine.price) >= priceRangeFrom)];
          filteredWines = [...x];
        }
    
        if (search) {
          const regex = new RegExp(search.replace(/\s+/g, '\\s*'), 'i');
          x = [...filteredWines.filter((wine) => regex.test(wine.name.replace(/\s/g, '')))];
          filteredWines = [...x];
        }
    
        res.status(200).json(filteredWines);
      } catch (error) {
        console.error("Error filtering wine data:", error);
        res.status(500).send('Error filtering wine data');
      }

}
const getItem = (req , res)=>{
  const name = req.params.wine;
  const key = req.query.key;
  const locations = ['wines', 'Know', 'Exclusive'];
  console.log(name)
  console.log(key)

  const nameFetch = async()=>{
      try{
let data;
         
  for (const location of locations) {
      const response = await fetch(`https://vinotecareact-default-rtdb.firebaseio.com/${location}.json`);
      data = await response.json();
      data = [...Object.values(data)]
      const index = data.findIndex(wine =>wine.name === name)
      if(index !== -1){
      res.setHeader('Content-Type', 'application/json');
      
      res.status(200).json(data[index]);
      break;
         }
      }
      if(!data){throw new Error(`${name} is not in the db`)}





     
      }
      catch(e){
          console.log(e)
          res.status(404).send('Error geting wine data:');
      }

  }
const keyFetch = async ()=>{
  try {
 let data;
  for (const location of locations) {
      const response = await fetch(`https://vinotecareact-default-rtdb.firebaseio.com/${location}/${key}.json`);
      
      if (response.ok) {
        data = await response.json();
        if (data){
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(data);
          break;
        }
        }
      }
      if(!data){nameFetch()}

    }catch (e) {
      console.log(e)
          res.status(404).send('Error geting wine data:');
  }

}

if(key[0]){
  keyFetch()
}else{nameFetch()}



}

//MIDLEWARE////////////////////////////////
const modulate = (req, res , next) => {
    const {
        name,
        category,
        brand,
        image,
        short_description,
        long_description,
        price,
        stock,
      } = req.body;

    req.newWine = {
        "name": name.trim().replace(/\s+/g, ' '),
        "category": category,
        "brand": brand.trim().replace(/\s+/g, ' '),
        "image":image ,
        "short_description": short_description.trim().replace(/\s+/g, ' ') ,
        "long_description":  long_description.trim().replace(/\s+/g, ' '),
        "price": price ,
        "stock": parseInt(stock)>99?"99+": stock
      }
      next();
}

const validate =(req , res, next)=>{
    const {
        name,
        category,
        brand,
        image,
        short_description,
        long_description,
        price,
        stock,
      } = req.newWine;

  const err = ()=>{
    res.status(500).json({ error: "invalid data" })
  }

  if(name === "" || !/^[0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑ \-'.]+$/.test(name) || name.length < 3 || name.length > 30 ){return err()}
  if(price === "" || isNaN(parseInt(price)) || parseInt(price) < 0){return err()}
  if(brand === ""||!/^[0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑ \-'.]+$/.test(brand)||brand.toLowerCase().includes("marca"))
  if(stock === ""||isNaN(parseInt(stock)) || parseInt(stock) < 0||parseInt(stock) !== parseFloat(stock)){return err()}
const imageExtensions = ["jpg", "jpeg", "png", "gif"]; 
const extension = image.split(".").pop().toLowerCase();
  if(image === ""||!/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(image)||!imageExtensions.includes(extension)){return err()}
  if(short_description === ""||short_description.length < 10||!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s.,;:!?"'-]*$/.test(short_description)){return err()}
  if(long_description === ""||long_description.length < 30||!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s.,;:!?"'-]*$/.test(long_description)){return err()}
  if(category === ""){return err()}
  next()
}

const getWinesDataMidle = async(req, res , next)=> {
  try {
    const wines = await fetch("https://vinotecareact-default-rtdb.firebaseio.com/wines.json")
  const know = await fetch("https://vinotecareact-default-rtdb.firebaseio.com/Know.json")
  const exc = await fetch("https://vinotecareact-default-rtdb.firebaseio.com/Exclusive.json")
  if(!wines.ok || !know.ok || !exc.ok){throw new Error('failed geting wines');}
  const dataWine = await wines.json()
  const dataKnow = await know.json()
  const dataexc = await exc.json()
  let data = [dataWine, dataKnow, dataexc]
  

  for(let key in dataWine){
    dataWine[key].key = key
  }
  for(let key in dataKnow){
    dataKnow[key].key = key
  }
  for(let key in dataexc){
    dataexc[key].key = key
  }


  req.filteredWines = [...Object.values(dataWine),...Object.values(dataKnow),...Object.values(dataexc)]
  next();

  } catch (error) {
    console.error("Error filtering wine data:", error);
    res.status(500).send('Error filtering wine data');
  }


}
module.exports ={
    getWinesData,
    postNewItem,
    modulate,
    validate,
    getWinesDataMidle,
    filterWines,
    getKnowData,
    getExclusiveData,
    getItem
}