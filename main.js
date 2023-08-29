console.log("Script loaded");
const products = getAvailableProducts();
//render random products 

function renderProducts(products) {
    const ulTag = document.querySelector("section ul");
    ulTag.innerHTML = "";
    products.forEach(product => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `
        <ul>
            <li>${product.name}</li>
            <li>price: ${product.price}</li>
            <li>Rating: ${product.rating}</li>
        </ul>
        `;
    ulTag.appendChild(liTag);
    })
}
renderProducts(products);

//render filtered products by searching the name 
const inputTag = document.getElementById("searchByName");
inputTag.addEventListener("input", () => renderFilteredArray(products));

function renderFilteredArray (products) {
    const filteredArray = products.filter(product => 
        product.name.toLowerCase().startsWith(inputTag.value.toLowerCase())
    );
    renderProducts(filteredArray);
}

//render filtered products by maxPrice
const inputPriceTag = document.getElementById("maxPrice");
inputPriceTag.addEventListener("input", () => renderMaxPrice(products));

function renderMaxPrice(products) {
    const filteredArray = products.filter(product => product.price <= inputPriceTag.value);
    renderProducts(filteredArray);
}

//sort by price, name, rating
const selectTag = document.getElementById("dropdown");
selectTag.addEventListener("change", () => renderSortBy(products));

function renderSortBy(products) {
    const value = selectTag.value;

    switch (value) {
        case "price": 
            products.sort((a, b) => a.price - b.price);
            break;
        case "name":
            products.sort((a, b) => {
                const nameA = a.name.replace(/"/g, '').toLowerCase();
                const nameB = b.name.replace(/"/g, '').toLowerCase();
                return (nameA > nameB) ? 1 : (nameA < nameB) ? -1 : 0;
            });
            break;
        case "rating":
            products.sort((a, b) => b.rating - a.rating);
            break;
        default: 
        return renderProducts(products);
    }
    renderProducts(products);
}