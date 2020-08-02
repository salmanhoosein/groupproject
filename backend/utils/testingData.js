const faker = require("faker");
const testingData = {
  userData: {
    email: faker.internet.email(),
    password: "password123",
  },
  profileData: {
    userId: null,
    email: null,
    fullName: "John Doe",
    addressOne: "1234 Test Address",
    addressTwo: "123",
    city: "Houston",
    state: "TX",
    zip: "12345",
  },
  fuelFormData: {
    userId: null,
    email: null,
    gallonsRequested: 1500,
    deliveryAddress: "1234 Test Address",
    deliveryDate: "7/03/2020",
    price: 1.695,
    amountDue: 2542.5,
  },
  pricingData: {
    userId: null,
    email: null,
    gallonsRequested: 1500,
    deliveryAddress: "1234 Test Address",
    deliveryDate: "7/03/2020",
  },
};

module.exports = testingData;
