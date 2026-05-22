// Events topics majorly asked in product 
const EventEmitter = require("events");

// Scenario 1 - Chat Application (zoho)
const chatEvents = new EventEmitter();

// Group area
chatEvents.on('newMessage', (user, message) => {
    console.log(`New Message from ${user}: ${message}`);
});

chatEvents.emit('newMessage', 'Narasimhan', 'Kindly join the session');
chatEvents.emit('newMessage', 'Guna', 'Joining sir');

// Scenario 2 - Payment (Razorpay, BHIM, PayPal)
const paymentEvent = new EventEmitter();

paymentEvent.once('processPayment', (amount) => {
    console.log(`Payment of ${amount} processed successfully`);
});

console.log("User clicked the pay button");
paymentEvent.emit('processPayment', 5000);

console.log("User clicked the pay button again")
paymentEvent.emit('processPayment', 5000);
// second entry - it will automatically be ignored