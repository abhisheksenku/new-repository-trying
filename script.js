document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const downloadBtn = document.getElementById('downloadBtn');
  const tableBody = document.querySelector('#reportTable tbody');

  // Dummy: Simulate if user is premium (you'll fetch this from backend later)
  const isPremium = token && token.includes("premium");

  // Enable download for premium users
  if (isPremium) {
    downloadBtn.disabled = false;
  }

  // Sample data (replace with API data later)
  const sampleData = [
    { date: '2025-06-10', description: 'Groceries', category: 'Food', type: 'Expense', amount: 120 },
    { date: '2025-06-10', description: 'Freelance Project', category: 'Work', type: 'Income', amount: 500 },
    { date: '2025-06-09', description: 'Electricity Bill', category: 'Utilities', type: 'Expense', amount: 90 }
  ];

  function renderTable(data) {
    tableBody.innerHTML = '';
    data.forEach(item => {
      const row = `<tr>
        <td>${item.date}</td>
        <td>${item.description}</td>
        <td>${item.category}</td>
        <td>${item.type}</td>
        <td>₹${item.amount}</td>
      </tr>`;
      tableBody.insertAdjacentHTML('beforeend', row);
    });
  }

  renderTable(sampleData);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-filter');
      console.log(`Filtering: ${type}`);
      // In future: Filter logic based on backend
      renderTable(sampleData); // For now just show all
    });
  });

  downloadBtn.addEventListener('click', () => {
    let csvContent = "data:text/csv;charset=utf-8,Date,Description,Category,Type,Amount\n";
    sampleData.forEach(row => {
      const values = [row.date, row.description, row.category, row.type, row.amount];
      csvContent += values.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "expense_report.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
});
