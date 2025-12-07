let cart = []; // Stores cart items (product prices)
        
        // Function to add product to cart
        function addToCart(price) {
            cart.push(price); // Add product price to the cart array
            updateCartCount();
        }

        // Function to update cart icon count
        function updateCartCount() {
            document.getElementById("cartCount").innerText = cart.length; // Update number on cart icon
        }

        // Function to toggle the cart view
        function toggleCart() {
            if (cart.length > 0) {
                showCheckout();
            } else {
                alert("Your cart is empty!");
            }
        }

        // Function to show the checkout details
        function showCheckout() {
            let cartDetails = cart.map((item, index) => `Product ${index + 1}: $${item}`).join('<br>');
            let totalAmount = cart.reduce((total, item) => total + item, 0);

            document.getElementById("cartDetails").innerHTML = `${cartDetails}<br><strong>Total: $${totalAmount}</strong>`;
            document.getElementById("checkoutContainer").style.display = "block";
        }

        // Function to handle checkout
        function checkout() {
            if (cart.length > 0) {
                alert("Proceeding to payment...");
                window.location.href = "https://remita.net/index";
                cart = []; // Clear cart after checkout
                updateCartCount(); // Reset cart count
                document.getElementById("checkoutContainer").style.display = "none"; // Hide checkout
            } else {
                alert("Your cart is empty. Add products to checkout.");
            }
        }


   
