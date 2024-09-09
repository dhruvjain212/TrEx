const { fetchExpenses, deleteExpenses, addExpenses } = require('../controllers/ExpenseController');

const router = require('express').Router()

//request to fetch all the expense of user by user_id
router.get('/', fetchExpenses)
router.post('/', addExpenses)
router.delete('/:expenseId', deleteExpenses)

module.exports = router;