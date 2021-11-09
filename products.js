/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      products: [],
      name: '',
      description: '',
      price: '',
    };
  },
  methods: {
    allProducts: function() {
      // Make a request for a user with a given ID
      axios.get('http://localhost:3000/products')
        .then(response => {
          // handle success
          console.log(response.data);
          this.products = response.data;
        });
    },
    createProduct: function() {
      axios.post('http://localhost:3000/products', {
        name: this.name,
        description: this.description,
        price: this.price
      })
        .then(response => {
          console.log(response.data);
          this.products.push(response.data);
        });
    } 
  },
});