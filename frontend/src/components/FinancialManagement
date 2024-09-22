import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialManagement = () => {
  const [expenses, setExpenses] = useState([]);
  const [financialReports, setFinancialReports] = useState([]);
  const [expenseFormData, setExpenseFormData] = useState({
    property_id: '',
    expense_type: '',
    amount: '',
    date_incurred: '',
    description: '',
  });
  const [reportFormData, setReportFormData] = useState({
    property_id: '',
    report_type_id: '',
    total_income: '',
    total_expenses: '',
  });
  
  // Fetch expenses and financial reports on initial load
  useEffect(() => {
    fetchExpenses();
    fetchFinancialReports();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchFinancialReports = async () => {
    try {
      const response = await axios.get('http://localhost:8000/financial-reports');
      setFinancialReports(response.data);
    } catch (error) {
      console.error('Error fetching financial reports:', error);
    }
  };

  const handleExpenseChange = (e) => {
    setExpenseFormData({
      ...expenseFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReportChange = (e) => {
    setReportFormData({
      ...reportFormData,
      [e.target.name]: e.target.value,
    });
  };

  const createExpense = async () => {
    try {
      const response = await axios.post('http://localhost:8000/expenses', expenseFormData);
      setExpenses([...expenses, response.data]);
      setExpenseFormData({
        property_id: '',
        expense_type: '',
        amount: '',
        date_incurred: '',
        description: '',
      });
    } catch (error) {
      console.error('Error creating expense:', error);
    }
  };

  const createFinancialReport = async () => {
    try {
      const response = await axios.post('http://localhost:8000/financial-reports', reportFormData);
      setFinancialReports([...financialReports, response.data]);
      setReportFormData({
        property_id: '',
        report_type_id: '',
        total_income: '',
        total_expenses: '',
      });
    } catch (error) {
      console.error('Error creating financial report:', error);
    }
  };

  const handleSubmitExpense = (e) => {
    e.preventDefault();
    createExpense();
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    createFinancialReport();
  };

  return (
    <div>
      <h1>Financial Management</h1>
      
      <h2>Create Expense</h2>
      <form onSubmit={handleSubmitExpense}>
        <input
          type="number"
          name="property_id"
          placeholder="Property ID"
          value={expenseFormData.property_id}
          onChange={handleExpenseChange}
          required
        />
        <input
          type="text"
          name="expense_type"
          placeholder="Expense Type"
          value={expenseFormData.expense_type}
          onChange={handleExpenseChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expenseFormData.amount}
          onChange={handleExpenseChange}
          required
        />
        <input
          type="date"
          name="date_incurred"
          value={expenseFormData.date_incurred}
          onChange={handleExpenseChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={expenseFormData.description}
          onChange={handleExpenseChange}
          required
        />
        <button type="submit">Create Expense</button>
      </form>

      <h2>Create Financial Report</h2>
      <form onSubmit={handleSubmitReport}>
        <input
          type="number"
          name="property_id"
          placeholder="Property ID"
          value={reportFormData.property_id}
          onChange={handleReportChange}
          required
        />
        <input
          type="number"
          name="report_type_id"
          placeholder="Report Type ID"
          value={reportFormData.report_type_id}
          onChange={handleReportChange}
          required
        />
        <input
          type="number"
          name="total_income"
          placeholder="Total Income"
          value={reportFormData.total_income}
          onChange={handleReportChange}
          required
        />
        <input
          type="number"
          name="total_expenses"
          placeholder="Total Expenses"
          value={reportFormData.total_expenses}
          onChange={handleReportChange}
          required
        />
        <button type="submit">Create Report</button>
      </form>

      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description} - {expense.amount} - {expense.date_incurred}
          </li>
        ))}
      </ul>

      <h2>Financial Reports</h2>
      <ul>
        {financialReports.map(report => (
          <li key={report.id}>
            Report ID: {report.id}, Total Income: {report.total_income}, Total Expenses: {report.total_expenses}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialManagement;