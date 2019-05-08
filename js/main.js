var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'A pair of warm, fuzzy socks',
        altText: "A pair of socks",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        details: ['80% cotton', '20% Polyester', 'Gender-neutral'],
        cart: 0,
        selectVariant: 0,
        variants: [
            {
                variantId:2234,
                variantColor: 'green',
                variantImage: 'img/green.jpg',
                variantQuantity: 10
            },
            {
                variantId:2235,
                variantColor: 'blue',
                variantImage: 'img/blue.jpg',
                variantQuantity: 0
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
        changeColor(index) {
            this.selectVariant = index;
        }
    },
    computed: {
        title() {
            return `${this.brand}  ${this.product}`;
        },
        img() {
            return this.variants[this.selectVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectVariant].variantQuantity
        }
    }
});

