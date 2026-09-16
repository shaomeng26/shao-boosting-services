/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


function closeMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.remove("active");

}


/* =========================
   ORDER FORM
========================= */

function submitOrder(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const link =
        document.getElementById("link").value;

    const service =
        document.getElementById("service").value;

    const amount =
        document.getElementById("amount").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        "Hello Shao Boosting Services!%0A%0A" +

        "I would like to place an order.%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +
        "%0A" +

        "Facebook Link: " +
        encodeURIComponent(link) +
        "%0A" +

        "Service: " +
        encodeURIComponent(service) +
        "%0A" +

        "Budget: " +
        encodeURIComponent(amount) +
        "%0A" +

        "Additional Message: " +
        encodeURIComponent(message);


    /*
       SHAО BOOSTING SERVICES
       WhatsApp:
       0926 302 6252

       International format:
       639263026252
    */

    const whatsappNumber =
        "639263026252";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;


    window.open(
        whatsappURL,
        "_blank"
    );

}