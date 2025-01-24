const getProducts=async()=>{

    const params = new URLSearchParams(window.location.search);
    const category=params.get('category');
    const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`);
    console.log(data);
    return data;
    
}
const prinProductes=async()=>{
    const pdata= await getProducts();
 
 const result=pdata.products.map((product)=>{
     return `
     <div class= "product">
     <img src="${product.thumbnail}"/>
     <h3> ${product.title}</h3>
     <span> ${product.price}</span>
     </div>
     `
  }).join(' ');
  document.querySelector(".products .row").innerHTML=result;
 }
 prinProductes();