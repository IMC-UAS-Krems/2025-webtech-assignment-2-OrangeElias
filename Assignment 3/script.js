const open = document.getElementById("openForm");
const close = document.getElementById("closeForm");
const form = document.getElementById("form");
const open2 = document.getElementById("openForm2")
const close2 = document.getElementById("closeForm2");
const form2 = document.getElementById("form2")
open.addEventListener("click", () => { /*Maximises the  Checkout*/ /* Got this code directy from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
    form.classList.add("open");
});

close.addEventListener("click", () => { /*Closes the Checkout */
    form.classList.remove("open");
});

let firstname /*Made all changeable values */
let lastname
let company
let address
let apartment
let city
let country
let state
let zipcode
let email
let phonenumber
const fishList = []; /*https://www.w3schools.com/js/js_arrays.asp fishList is an array to store strings for getting output */
const formList = {};
open2.addEventListener("click", () => {
    if (validateInput()) { /*https://www.w3schools.com/js/js_objects.asp */ /*When function is true, the rest executes*/
        formList.firstname = document.getElementById("firstname").value.trim(); /*Assigns every element to a list o be used later*/
        formList.lastname = document.getElementById("lastname").value.trim();
        formList.company = document.getElementById("company").value.trim();
        formList.address = document.getElementById("address").value.trim();
        formList.apartment = document.getElementById("apartment").value.trim();
        formList.city = document.getElementById("city").value.trim();
        formList.country = document.getElementById("country").value;
        formList.state = document.getElementById("state").value;
        formList.zipcode = document.getElementById("zipcode").value.trim();
        formList.phonenumber = document.getElementById("phonenumber").value.trim();

        ContactInfo();/*Contact Info gets executed and the div gets filled */
        form2.classList.add("open");/*The shopping Cart gets maximised */
        ShoppingCart(fishList); /*executes the function to get items being bought */
        Prices();/*Executes so you know what to pay */
    }

});

close2.addEventListener("click", () => {
    form2.classList.remove("open");
    form.classList.remove("open");
});

let Price = 0;
let items_amount = 0;
const Product1 = document.getElementById("Product1");
const Pproduct1 = 500;/*Price */
const Product2 = document.getElementById("Product2");
const Pproduct2 = 200;
const Product3 = document.getElementById("Product3");
const Pproduct3 = 50;
const Product4 = document.getElementById("Product4");
const Pproduct4 = 80;
const Product5 = document.getElementById("Product5");
const Pproduct5 = 20;
const Product6 = document.getElementById("Product6");
const Pproduct6 = 80;
const Product7 = document.getElementById("Product7");
const Pproduct7 = 50;
const Product8 = document.getElementById("Product8");
const Pproduct8 = 10;
const Product9 = document.getElementById("Product9");
const Pproduct9 = 30;
const Product10 = document.getElementById("Product10");
const Pproduct10 = 200;
/*Prices and amount of items getting bought get defined */
Product1.addEventListener("click", () => {
    Price = Price + Pproduct1;
    items_amount += 1;
    fishList.push("Random Eel found on the side of the street: 500€");
    ShoppingCart();
    Prices();

});
Product2.addEventListener("click", () => {
    Price = Price + Pproduct2;
    items_amount += 1;
    fishList.push("Fish: 200€");
    ShoppingCart();
    Prices();
});
Product3.addEventListener("click", () => {
    Price = Price + Pproduct3;
    items_amount += 1;
    fishList.push("Deadly fis: 50€");
    ShoppingCart();
    Prices();
});
Product4.addEventListener("click", () => {
    Price = Price + Pproduct4;
    items_amount += 1;
    fishList.push("Fresh Catched Fish: 80€");
    ShoppingCart();
    Prices();
});
Product5.addEventListener("click", () => {
    Price = Price + Pproduct5;
    items_amount += 1;
    fishList.push("Small Fish: 20€");
    ShoppingCart();
    Prices();
});
Product6.addEventListener("click", () => {
    Price = Price + Pproduct6;
    items_amount += 1;
    fishList.push("Red Ball fish: 80€");
    ShoppingCart();
    Prices();
});
Product7.addEventListener("click", () => {
    Price = Price + Pproduct7;
    items_amount += 1;
    fishList.push("Funny Fish: 50€");
    ShoppingCart();
    Prices();

});
Product8.addEventListener("click", () => {
    Price = Price + Pproduct8;
    items_amount += 1;
    fishList.push("Young fish: 10€");
    ShoppingCart();
    Prices();

});
Product9.addEventListener("click", () => {
    Price = Price + Pproduct9;
    items_amount += 1;
    fishList.push("Perfect fish: 30€");
    ShoppingCart();
    Prices();

});
Product10.addEventListener("click", () => {
    Price = Price + Pproduct10;
    items_amount += 1;
    fishList.push("Super fish: 200€");
    ShoppingCart();
    Prices();

});

function updateStates() { /*States get corresponding states */
    const state = document.getElementById("state");
    const country = document.getElementById("country").value;

    state.innerHTML = ""; /*https://www.w3schools.com/jsref/prop_html_innerhtml.asp*/

    if (country === "AT") {
        state.innerHTML += "<option>Niederösterreich</option>";
        state.innerHTML += "<option>Oberösterreich</option>";
        state.innerHTML += "<option>Wien</option>";
        state.innerHTML += "<option>Burgenland</option>";
        state.innerHTML += "<option>Kärnten</option>";
        state.innerHTML += "<option>Steiermark</option>";
        state.innerHTML += "<option>Tirol</option>";
        state.innerHTML += "<option>Vorarlberg</option>";
        state.innerHTML += "<option>Salzburg</option>";
    } else if (country === "DE") {
        state.innerHTML += "<option>Bayern</option>";
        state.innerHTML += "<option>NRW</option>";
        state.innerHTML += "<option>Baden-Württemberg</option>";
        state.innerHTML += "<option>Berlin</option>";
        state.innerHTML += "<option>Brandenburg</option>";
        state.innerHTML += "<option>Bremen</option>";
        state.innerHTML += "<option>Hamburg</option>";
        state.innerHTML += "<option>Hessen </option>";
        state.innerHTML += "<option>Mecklenburg-Vorpommern</option>";
        state.innerHTML += "<option>Niedersachsen</option>";
        state.innerHTML += "<option>Rheinland-Pfalz</option>";
        state.innerHTML += "<option>Saarland</option>";
        state.innerHTML += "<option>Sachsen</option>";
        state.innerHTML += "<option>Sachsen-Anhalt</option>";
        state.innerHTML += "<option>Schleswig-Holstein</option>";
        state.innerHTML += "<option>Thüringen</option>";

    } else if (country === "CH") {
        state.innerHTML += "<option>Aargau</option>";
        state.innerHTML += "<option>Appenzell Ausserrhoden</option>";
        state.innerHTML += "<option>Appenzell Innerrhoden</option>";
        state.innerHTML += "<option>Basel-Landschaft</option>";
        state.innerHTML += "<option>Basel-Stadt</option>";
        state.innerHTML += "<option>Bern</option>";
        state.innerHTML += "<option>Freiburg</option>";
        state.innerHTML += "<option>Genf</option>";
        state.innerHTML += "<option>Glarus</option>";
        state.innerHTML += "<option>Graubünden</option>";
        state.innerHTML += "<option>Jura</option>";
        state.innerHTML += "<option>Luzern</option>";
        state.innerHTML += "<option>Neuenburg</option>";
        state.innerHTML += "<option>Nidwalden</option>";
        state.innerHTML += "<option>Obwalden</option>";
        state.innerHTML += "<option>St. Gallen</option>";
        state.innerHTML += "<option>Schaffhausen</option>";
        state.innerHTML += "<option>Schwyz</option>";
        state.innerHTML += "<option>Solothurn</option>";
        state.innerHTML += "<option>Tessin</option>";
        state.innerHTML += "<option>Thurgau</option>";
        state.innerHTML += "<option>Uri</option>";
        state.innerHTML += "<option>Waadt</option>";
        state.innerHTML += "<option>Wallis</option>";
        state.innerHTML += "<option>Zug</option>";
        state.innerHTML += "<option>Zürich</option>";

    }
}


function validateInput() { /*This function checks, if the inputs are valid and sends an alert if not */
    firstname = document.getElementById("firstname").value.trim();
    lastname = document.getElementById("lastname").value.trim();
    company = document.getElementById("company").value.trim();
    address = document.getElementById("address").value.trim();
    apartment = document.getElementById("apartment").value.trim();
    city = document.getElementById("city").value.trim();
    country = document.getElementById("country").value;
    state = document.getElementById("state").value;
    zipcode = document.getElementById("zipcode").value.trim();
    phonenumber = document.getElementById("phonenumber").value.trim();

    if (firstname.trim() === "") { /*A friend told me to use Trim, because the space input gets trimmed away */
        alert("Please insert your First name");
        return false; /*https://www.w3schools.com/jsref/met_win_alert.asp */
    }
    if (lastname.trim() === "") {
        alert("Please isnert your Last name");
        return false;
    }

    if (address.trim() === "") {
        alert("Please insert your adress");
        return false;
    }
    if (city.trim() === "") {
        alert("Please insert your city");
        return false;
    }
    if (country === "") {/*Doesnt need trim, because its not a textfield */
        alert("Please choose your country");
        return false;
    }
    if (state === "") {
        alert("Please choose your state/region");
        return false;
    }
    if (zipcode.trim() === "") {
        alert("Please insert your zip code");
        return false;
    }

    const zipValid = /^\d{4,6}$/; /*https://www.regular-expressions.info/floatingpoint.html */
    if (zipValid.test(zipcode) === false) {
        alert("Please insert a valid zip code");
        return false;
    }

    /*https://www.w3schools.com/js/js_regexp.asp */
    if (phonenumber.trim() !== "") { /*Checks if their even is something in the input field */ /**https://www.w3schools.com/js/js_comparisons.asp*/
        const phoneNumber = /^\d{6,15}$/; /*https://www.w3schools.com/jsref/jsref_regexp_test.asp#:~:text=Description.%20The%20test()%20method%20tests%20for%20a,it%20returns%20true%2C%20otherwise%20it%20returns%20false. */
        if (phoneNumber.test(phonenumber) === false) {/*Checks if its a valid number*/
            alert("Please insert a valid Phone number");
            return false;
        }
    }
    /*https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp https://www.w3schools.com/jsref/jsref_regexp_onemore.asp https://www.w3schools.com/jsref/jsref_regexp_zeroone.asp*/

    return true; /*Need the true value for the addEventListener function above*/
}

function ContactInfo() { /*https://www.w3schools.com/js/js_htmldom_html.asp */
    const contactDiv = document.getElementById("Contact-Info");
    contactDiv.innerHTML = ` 
        <h3>Contact-Info</h3>
        <ul>
        <li>First name: ${formList.firstname}</li>
        <li>Last name: ${formList.lastname}</li>
        <li>Company: ${formList.company}</li>
        <li>Address: ${formList.address}</li>
        <li>Apartment: ${formList.apartment}</li>
        <li>City: ${formList.city}</li>
        <li>Country: ${formList.country}</li>
        <li>State:  ${formList.state}</li>
        <li>ZIP code: ${formList.zipcode}</li>
        <li>Phone number: ${formList.phonenumber}</li>
        </ul>
    `;/*Inner html inserts the different list items with their corresponding input into the div "Contact-Info" */
}
function ShoppingCart() {
    const Shoppingcart = document.getElementById("Shopping-Cart");
    let randomtext = `<h3>Your Shopping Cart</h3><ul>`;

    fishList.forEach(function (item) {/*Function, that adds every chosen fish to the list */
        randomtext += `<li>${item}</li>`; /*https://www.w3schools.com/jsref/jsref_foreach.asp */
    });

    randomtext += `</ul>`;

    Shoppingcart.innerHTML = randomtext;

}
/*I wanted to make you able to delete your Items from the order, but the code is too complex for me and would take too long*/
function Prices() {
    const fishPrice = document.getElementById("Prices");/*https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round */
    if (code.value === "SafeSeals") {
        fishPrice.innerHTML = `
            <p>Price:------------------------------------------------------${Price}€</p>
            <p>Taxcut:----------------------------------------------------- +20%
            <p>With Tax:-----------------------------------------------------${Math.round(Price * 1.2)}</p>
            <p>Discount SafeSeals -30%:-----------------------------------------${Math.round(Price * 0.3)}€</p>
            <hr>
            <p>Final Price:-----------------------------------------------------------------${Math.round(Price * 1.2 * 0.7)}€</p>
            `}
    else {
        fishPrice.innerHTML = `
        <p>Price:------------------------------------------------------${Price}€</p>
        <p>Taxcut:----------------------------------------------------- +20%</p>
        <p>With Tax:-----------------------------------------------------${Math.round(Price * 1.2)}€</p>
        <hr>
        <p>Final Price:-----------------------------------------------------------------${Math.round(Price * 1.2)}€</p>`
    }
}

const submitdiscount = document.getElementById("submitdiscount")
const code = document.getElementById("discount")
submitdiscount.addEventListener("click", () => {
    if (code.value === "SafeSeals" && items_amount >= 3) {
        Prices()
        alert("Your code has been succesfully applied")
    }
    else {
        alert("Please insert a valid Discount Code or add more items to your Shopping cart")
    }
});
const Finish = document.getElementById("Finish")
const Form3 = document.getElementById("Form3")
const Form4 = document.getElementById("Form4")
Form4.addEventListener("submit", function (e) {

    if (Price === 0) { /*https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault */
        alert("Please add something to your shopping cart")
        e.preventDefault(); /*Tells event is being explicitly handled, so page reset wont coem through until the whole function was checked */
        return;/*returns nothing -> means Order cant be submitted*/
    }

    alert("Thank you for buying food for our seals. You order has been submitted!")
    /*Reset of items for buying something new*/
    fishList.length = 0;
    Price = 0;
    items_amount = 0;
    ShoppingCart();
    Prices();
})
