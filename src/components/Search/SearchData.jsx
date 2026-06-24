const searchProperty = () => {

 axios.get(`http://127.0.0.1:8000/api/properties/search/`,{
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