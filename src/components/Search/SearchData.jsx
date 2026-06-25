const searchProperty = () => {

 axios.get(`https://web-production-2b5327.up.railway.app/api/properties/search/`,{
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