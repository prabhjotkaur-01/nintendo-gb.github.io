// <!-- code author - Prabhjot kaur -->

// Load the header
const headerContainer = document.querySelector('#header-container');
headerContainer.innerHTML = `
    <header>
        <h1>Game Boy-Nintendo</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="contact.html">Contact us</a></li>
            </ul>
        </nav>
    </header>
`;

document.cookie = "myCookie=myValue; SameSite=None; Secure";



// Load the footer
const footerContainer = document.querySelector('#footer-container');
footerContainer.innerHTML = `
    <footer>
        <p>&copy; 2023 Game Boy by Nintendo. All rights reserved.</p>
    </footer>
`;
