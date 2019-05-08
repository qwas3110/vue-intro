
Vue.component( 'product',{
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">

            <div class="product-image">
                <img :src="img" :alt="altText">
            </div>

            <div class="product-info">
                <h1>{{title}}</h1>
                <a :href="link" target="_blank">More products like this</a>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
                <p>shipping: {{shipping}}</p>

                <product-details :details="details"></product-details>
              

                <div v-for="(variant,index) of variants"
                     :key="index"
                     class="color-box"
                     :style="{ backgroundColor: variant.variantColor }"
                     @mouseover="changeColor(index)"
                    >
                </div>
                


                <button @click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }"
                        >
                    Add Cart
                </button>
                
                <button @click="removeCart">remove</button>

             
            </div>
        </div>
    `,
    data() {
        return {
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
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectVariant].variantId);
        },
        removeCart() {
            this.$emit('remove-to-cart',this.variants[this.selectVariant].variantId);
            console.log("hello world");
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
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            } else {
                return `$2.99`;
            }
        }
    }
});

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
         <ul>
            <li v-for="detail of details">{{detail}}</li>
         </ul>
    `
});


var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        remove(id) {
            for ( let x = this.cart.length -1; x >=0; x--) {
                if (this.cart[x] === id) {
                    this.cart.splice(x, 1)
                }
            }
        }
    }
});

