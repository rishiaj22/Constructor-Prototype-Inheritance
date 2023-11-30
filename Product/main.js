var parent = document.getElementById('parent');
var product_container = document.createElement('div');
product_container.id = 'product_container';
var products = [
    {
        id :1,
        imgSrc : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
        price:"Rs.320",
        rating : 4.2
    },
    {
        id :2,
        imgSrc : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
        price:"Rs.232",
        rating : 2.3
    },
    {
        id :3,
        imgSrc : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
        price:"Rs.121",
        rating : 6.2
    },
    {
        id :4,
        imgSrc : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
        price:"Rs.232",
        rating : 1.2
    }
];

for(let i =0;i<products.length;i++){
    let currentProduct = products[i];
    var product_item = document.createElement('div');
    product_item.className = 'product_item';
    var product_image = document.createElement('img');
    product_image.src = currentProduct.imgSrc;
    var product_price = document.createElement('p');
    product_price.textContent = currentProduct.price;
    var product_rating = document.createElement('p');
    product_rating.textContent = currentProduct.rating;
    product_item.append(product_image,product_price,product_rating);
    product_container.append(product_item);
}

parent.append(product_container);

