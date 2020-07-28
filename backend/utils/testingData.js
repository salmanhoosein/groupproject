let email = "testCase2@gmail.com"
module.exports = {
  userData: {
    email: email,
    password: "password123",
  },
  profileData: {
    userId: null,
    email: null,
    fullName: "John Doe",
    addressOne: "321 St",
    addressTwo: "123",
    city: "Houston",
    state: "TX",
    zip: "12345",
  },
  fuelFormData: {
    userId: null,
    email: null,
    gallonsRequested: Math.floor(Math.random() * 1000),
    deliveryAddress: "1234 Test Address",
    deliveryDate: "7/03/2020",
    price: 12,
    amountDue: 1000,
  },
  pricingData: {
    userId: null,
    email: email,
    gallonsRequested: Math.floor(Math.random() * 1000),
    deliveryAddress: "1234 Test Address",
    deliveryDate: "7/03/2020",
  },
};
