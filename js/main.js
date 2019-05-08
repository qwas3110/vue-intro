var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: 'img/green.jpg',
        altText: "A pair of socks",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        inStock: true,
        details: ['80% cotton', '20% Polyester', 'Gender-neutral'],
        cart: 0,
        variants: [
            {
                variantId:2234,
                variantColor: 'green',
                variantImage: 'img/green.jpg'
            },
            {
                variantId:2235,
                variantColor: 'blue',
                variantImage: 'img/blue.jpg'
            }
        ]
    },
    methods: {
        addToCart() {
            this.cart ++;
        },
        removeCart() {
            this.cart !== 0 ? (this.cart --) : (this.cart = 0);
        },
        changeColor(img) {
            this.image = img;
        }
    }
});

