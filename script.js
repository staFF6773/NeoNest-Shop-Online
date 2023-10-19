document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');
    const cartIcon = document.getElementById('cart-icon');
    const cartMenu = document.getElementById('cart-menu');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const closeCartButton = document.getElementById('close-cart'); // Nuevo botón para cerrar el carrito

    // Datos de ejemplo de productos
    const productsData = [
        { id: 1, name: 'Jackherelook-zapatillas', price: 75, image: 'imagenes/jackherelook.png', description: '' },
        { id: 2, name: 'Playera Fuchi Guacala', price: 60, image: 'imagenes/fuchi.png', description: '' },
        { id: 3, name: 'Sudaderas para mujer', price: 80, image: 'imagenes/sudadera.jpg', description: '' },
        { id: 4, name: 'Camiseta Termica Aural', price: 56, image: 'imagenes/camisagorda.png', description: '' },
        { id: 5, name: 'Guantes Termicos Impermeables Moto', price: 66, image: 'imagenes/guantes.png', description: '' },
        { id: 6, name: 'Gorro de punto de acrílico para invierno', price: 45, image: 'imagenes/gor.jpg', description: '' },
        { id: 7, name: 'Calcetines Bob Esponja', price: 25, image: 'imagenes/bov.jpg', description: '' },
        { id: 8, name: 'iPhone 15 Pro MAX', price: 1400, image: 'imagenes/iphone-15-pro.jpg', description: '' },
        { id: 9, name: 'Consola PlayStation 5 ', price: 600, image: 'imagenes/play-5.jpg', description: '' },
        // Agrega más productos según sea necesario
    ];

    // Variable para mantener el estado del carrito
    const cart = {
        items: [],
        total: 0,
    };

    // Renderiza los productos en la tienda
    productsData.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onclick="showProductDescription('${product.description}')">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button class="button" onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        productsContainer.appendChild(productElement);
    });

    // Función para mostrar u ocultar el menú del carrito con animación
    window.toggleCartMenu = function () {
        if (cartMenu.style.display === 'block') {
            cartMenu.classList.remove('show');
            setTimeout(() => {
                cartMenu.style.display = 'none';
            }, 500); // Espera a que termine la animación antes de ocultar completamente
        } else {
            cartMenu.style.display = 'block';
            setTimeout(() => {
                cartMenu.classList.add('show');
            }, 50); // Espera a que el display se actualice antes de agregar la clase
        }
    };

    // Función para cerrar el menú del carrito
    window.closeCartMenu = function () {
        cartMenu.classList.remove('show');
    };

    // Agrega un evento al botón para cerrar el carrito
    closeCartButton.addEventListener('click', function () {
        cartMenu.classList.remove('show');
    });

    // Función para agregar un producto al carrito
    window.addToCart = function (productId) {
        const productToAdd = productsData.find(product => product.id === productId);

        if (productToAdd) {
            // Añadir el producto al carrito
            cart.items.push({ id: productToAdd.id, name: productToAdd.name, price: productToAdd.price });
            // Actualizar el total del carrito
            cart.total += productToAdd.price;
            // Actualizar la interfaz del carrito
            updateCartUI();
        }
    };

    // Función para actualizar la interfaz del carrito
    function updateCartUI() {
        cartItemsContainer.innerHTML = ''; // Limpiar la lista de elementos del carrito

        cart.items.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price}</span>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        cartTotalElement.textContent = cart.total; // Actualizar el total del carrito
        document.getElementById('cart-count').textContent = cart.items.length; // Actualizar la cantidad de ítems
    }

    // Nuevas funciones para las opciones del menú
    window.checkout = function () {
        if (cart.items.length === 0) {
            alert('No hay artículos en el carrito. Agrega artículos antes de proceder al pago.');
            return;
        }
        
        window.location.href = 'pagos.html';
        // Aquí puedes agregar la lógica para procesar el pago y vaciar el carrito
    };

    window.clearCart = function () {
        cart.items = [];
        cart.total = 0;
        updateCartUI();
        alert('Carrito vaciado');
    };

    // Nueva función para mostrar la descripción del producto en un modal con animación
    window.showProductDescription = function (description) {
        closeCartMenu(); // Cierra el menú del carrito al mostrar la descripción
        const modal = document.getElementById('product-modal');
        const productDescriptionElement = document.getElementById('product-description');

        productDescriptionElement.textContent = description;
        modal.style.display = 'block';
        modal.classList.add('show');
    };

    // Nueva función para cerrar el modal y reabrir el menú del carrito si estaba abierto previamente
    window.closeProductDescriptionModal = function () {
        const modal = document.getElementById('product-modal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            if (cartMenu.classList.contains('show')) {
                cartMenu.classList.add('show');
            }
        }, 500);
    };
});
