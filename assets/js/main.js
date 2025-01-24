

const getCategories = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/category-list`);
    return data;
}

const printCategories = async () => {
    const loader = document.querySelector(".load-container");
    loader.classList.add("active");

    try {
        const ndata = await getCategories();
        const result = ndata.map((category) => {
            return `
                <div class="category">
                    <h2>${category}</h2>
                    <a href="details.html?category=${category}">Details</a>
                </div>
            `;
        }).join(" ");
        document.querySelector(".categories .row").innerHTML = result;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        document.querySelector(".categories .row").innerHTML = "<p>Failed to load categories.</p>";
    } finally {
        loader.classList.remove("active"); 
    }
};


printCategories();

const getProducts = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`);
    console.log(data);
    return data;

}
const printProducts = async () => {
    const loader = document.querySelector(".load-container");
    loader.classList.add("active"); // Show loader

    try { 
        const pdata = await getProducts();
        const result = pdata.products.map((product) => {
            return `
                <div class="product">
                    <img src="${product.thumbnail}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <span>${product.price}</span>
                </div>
            `;
        }).join(" ");
        document.querySelector(".products .row").innerHTML = result;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        document.querySelector(".products .row").innerHTML = "<p>Failed to load products.</p>";
    } finally {
        loader.classList.remove("active"); // Hide loader
    }
};

printProducts();

window.onscroll = function(){
const nav= document.querySelector(".navbar");
const cat= document.querySelector(".products");
 if(window.scrollY > cat.offsetTop){
    nav.classList.add("newNavbar");
 }else{
    nav.classList.remove("newNavbar");
 }
}


const countDown = () => {
    const countDownDate = new Date("2025-03-02T00:00:00").getTime();
    const now = new Date().getTime();
    const dis = countDownDate - now;

    
    const days = Math.floor(dis / 86400000); 
    const hours = Math.floor((dis % 86400000) / 3600000); 
    const minutes = Math.floor((dis % 3600000) / 60000); 
    const seconds = Math.floor((dis % 60000) / 1000); 

   
    document.querySelector("#days").textContent = days;
    document.querySelector("#hours").textContent = hours;
    document.querySelector("#minutes").textContent = minutes;
    document.querySelector("#seconds").textContent = seconds;
};



setInterval( ()=>{
    countDown();


},1000);
