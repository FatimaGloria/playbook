//Modular información de una app: DiDi Food

//Objeto user 
const user= {
    name: "Fatima",
    lastName: "Gloria",
    phoneNumber: "123 451 5412",
    password: "pas5word",
    email: "fatima.gloria@gmail.com"
}

// Objeto Restaurant
const restaurant= {
    restaurantName: "Name",
    ratingStars: 4,
    waitingTime: 30,
    deliveryCost: 25,
    storeHours: "Monday - Friday: 11am to 11pm",
    storeLocation: "Location",
    menu: {
        popular: "Popular food",
        promos: "Promos",
        generalMenu: "List of Dishes",
        extras: "Extras"
    } 
}

// Objeto order
const order= {
    userAddress: "Address",
    deliveryOptions: {
        outside: "Leave it outside",
        atDoor: "Meet me at the door"
    },
    paymentOptions: {
        creditCard: "credit card info",
        cash: "Max. 600 pesos"
    },
    orderInfo: "Order info",
    total: "Total of your order"
}