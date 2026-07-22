const searchProperty = () => {

<<<<<<< HEAD
 axios.get(`https://web-production-2b5327.up.railway.app/api/properties/search/`,{
=======
 axios.get(`http://127.0.0.1:8000/api/properties/search/`,{
>>>>>>> cb63a18ddda248b2650ce42d49997ae2d717fdc0
   params:{
      city: city,
      bhk: bhk,
      min_price: minPrice,
      max_price: maxPrice,
      type: propertyType
   }
 }).then(res=>{
     setProperties(res.data)
 })

};