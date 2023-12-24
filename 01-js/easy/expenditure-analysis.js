/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const groupedTransactions = transactions.reduce((acc, transaction) => {
      const {category, price} = transaction;
      // 1. Category not present
      if(!acc[category]) acc[category] = {category, expenditure: 0}

      // 2. Category present
      acc[category].expenditure += price
      return acc
    }, {})

    return Object.values(groupedTransactions); // Return the values in array
}

const transactions = [
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 2,
		timestamp: 16560768000011,
		price: 20,
		category: 'Food',
		itemName: 'Burger',
	},
  {
		id: 3,
		timestamp: 2656076800000,
		price: 30,
		category: 'Rent',
		itemName: 'Home',
	},
  {
		id: 4,
		timestamp: 5656076800000,
		price: 60,
		category: 'Travel',
		itemName: 'Rishikesh',
	},
  {
		id: 5,
		timestamp: 5656076800000,
		price: 40,
		category: 'Travel',
		itemName: 'Manali',
	}
]

console.log(calculateTotalSpentByCategory(transactions))

module.exports = calculateTotalSpentByCategory;
