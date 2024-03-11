// Sample store inventory with prices in USD
const storeInventory = {
    item1: 25,  // USD
    item2: 40,  // USD
    item3: 15   // USD
  };
  
  // Exchange rate: 1 USD = 80 INR
  const exchangeRate = 80;
  
  // Function to convert USD to INR
  const convertToINR = (usdPrice) => usdPrice * exchangeRate;
  
  // Use the map function to create a new object with prices in INR
  const inventoryInRupees = Object.fromEntries(
    Object.entries(storeInventory).map(([item, usdPrice]) => {
      return [item, convertToINR(usdPrice)];
    })
  );
  
  // Display the result
  console.log("Original Inventory (USD):", storeInventory);
  console.log("Inventory in Rupees (INR):", inventoryInRupees);
  