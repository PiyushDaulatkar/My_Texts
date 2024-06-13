class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
      this.carts = [];
    }
  
    addToCart(product) {
      this.carts.push(product);
    }
  
    removeFromCart(product) {
      const index = this.carts.indexOf(product);
      if (index !== -1) {
        this.carts.splice(index, 1);
      }
    }
  
    clearCart() {
      this.carts = [];
    }
  }
  
  export default User;
  