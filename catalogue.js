
console.clear()

// ================================
// 1. PRODUCT DATA (MANUAL)
// ================================

let products = [
    {
        id: 1,
        name: "Men's Hoodie",
        price: 12000,
        preview: "/img/img3.jpg"
    },
    {
        id: 2,
        name: "Women's Jacket",
        price: 18000,
        preview: "/img/img4.jpg"
    },
    {
        id: 3,
        name: "Casual Sneakers",
        price: 25000,
        preview: "/img/img1.jpg"
    },
    {
        id: 4,
        name: "Silver Versace Bracelet",
        price: 39999,
        preview: "/img/img2.jpg"
    }
]

// ================================
// 2. PRODUCT CARD CREATOR FUNCTION
// ================================

function createProductCard(ob)
{
    // Main card container
    let card = document.createElement('div')
    card.className = 'product-card'

    // Product image
    let img = document.createElement('img')
    img.src = ob.preview

    // Product name
    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode(ob.name)
    h3.appendChild(h3Text)

    // Product price
    let price = document.createElement('p')
    let priceText = document.createTextNode('NG ' + ob.price)
    price.appendChild(priceText)

    // Link to product details page
    let link = document.createElement('a')
    link.href = 'product.html?' + ob.id
    link.appendChild(document.createTextNode('View Product'))

    // Assemble card
    card.appendChild(img)
    card.appendChild(h3)
    card.appendChild(price)
    card.appendChild(link)

    return card
}

// ================================
// 3. RENDER ALL PRODUCTS
// ================================

let catalogue = document.getElementById('catalogue')

for(let i = 0; i < products.length; i++)
{
    let productCard = createProductCard(products[i])
    catalogue.appendChild(productCard)
}
