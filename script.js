
// document.addEventListener("DOMContentLoaded", () => {
//   const customers = [
//     {
//       id: 1,
//       name: "Ann Culhane",
//       description: "Lorem ipsum...",
//       status: "Open",
//       rate: 70.0,
//       balance: -270.0,
//       deposit: 500.0,
//     },
//     {
//       id: 2,
//       name: "Ahmad Rosser",
//       description: "Lorem ipsum...",
//       status: "Paid",
//       rate: 70.0,
//       balance: 270.0,
//       deposit: 500.0,
//     },
//     {
//       id: 3,
//       name: "Zain Calzoni",
//       description: "Lorem ipsum...",
//       status: "Open",
//       rate: 70.0,
//       balance: -20.0,
//       deposit: 500.0,
//     },
//     {
//       id: 4,
//       name: "Leo Stanton",
//       description: "Lorem ipsum adas sansaka ak ahjhdsj dhsajd ajkh j",
//       status: "Inactive",
//       rate: 70.0,
//       balance: 600.0,
//       deposit: 500.0,
//     },
//     {
//       id: 5,
//       name: "Kaiya Vetrov",
//       description: "Lorem ",
//       status: "Open",
//       rate: 70.0,
//       balance: -350.0,
//       deposit: 500.0,
//     },
//     {
//       id: 6,
//       name: "Ryan Westervelt",
//       description: "Lorem ipsum asasdsa oad as asi aj as dia daodhaos oas ",
//       status: "Paid",
//       rate: 70.0,
//       balance: -270.0,
//       deposit: 500.0,
//     },
//     {
//       id: 7,
//       name: "Corey Stanton",
//       description: "Lorem ipsum...",
//       status: "Due",
//       rate: 70.0,
//       balance: 30.0,
//       deposit: 500.0,
//     },
//     {
//       id: 8,
//       name: "Adison Aminoff",
//       description: "Lorem ipsum...",
//       status: "Open",
//       rate: 70.0,
//       balance: -270.0,
//       deposit: 500.0,
//     },
//     {
//       id: 9,
//       name: "Alfredo Aminoff",
//       description: "Lorem ipsum...",
//       status: "Inactive",
//       rate: 70.0,
//       balance: 460.0,
//       deposit: 500.0,
//     },
//     {
//       id: 10,
//       name: "Alfredo Aminoff",
//       description: "Lorem ipsum...",
//       status: "Inactive",
//       rate: 70.0,
//       balance: 460.0,
//       deposit: 500.0,
//     },
//     {
//       id: 11,
//       name: "Alfredo Aminoff",
//       description: "Lorem ipsum...",
//       status: "Inactive",
//       rate: 70.0,
//       balance: 460.0,
//       deposit: 500.0,
//     },
//     {
//       id: 12,
//       name: "Alfredo Aminoff",
//       description: "Lorem ipsum...",
//       status: "Inactive",
//       rate: 70.0,
//       balance: 460.0,
//       deposit: 500.0,
//     },
//     {
//       id: 13,
//       name: "Alfredo Aminoff",
//       description: "Lorem ipsum...",
//       status: "Inactive",
//       rate: 70.0,
//       balance: 460.0,
//       deposit: 500.0,
//     },
//   ];

//   let currentPage = 1;
//   let rowsPerPage = 10;

//   function renderTable(page = 1) {
//     const tbody = document.querySelector("#customerTable tbody");
//     tbody.innerHTML = "";
//     const start = (page - 1) * rowsPerPage;
//     const end = page * rowsPerPage;
//     const pageData = customers.slice(start, end);

//     pageData.map((customer) => {
//       const row = document.createElement("tr");

//       // Define the class based on the status
//       let statusClass = "";
//       switch (customer.status) {
//         case "Open":
//           statusClass = "status-open";
//           break;
//         case "Paid":
//           statusClass = "status-paid";
//           break;
//         case "Due":
//           statusClass = "status-due";
//           break;
//         case "Inactive":
//           statusClass = "status-inactive";
//           break;
//         default:
//           break;
//       }

//       row.innerHTML = `
//           <td class="select-cell"><input type="checkbox"></td>
//           <td>${customer.id}</td>
//           <td>${customer.name}</td>
//           <td>${customer.description}</td>
//           <td class="${statusClass}">
//             <select class="status-select">
//               <option value="Open" ${
//                 customer.status === "Open" ? "selected" : ""
//               }>Open</option>
//               <option value="Paid" ${
//                 customer.status === "Paid" ? "selected" : ""
//               }>Paid</option>
//               <option value="Inactive" ${
//                 customer.status === "Inactive" ? "selected" : ""
//               }>Inactive</option>
//               <option value="Due" ${
//                 customer.status === "Due" ? "selected" : ""
//               }>Due</option>
//             </select>
//           </td>
//           <td> $ <input type="number" class="rate-input" value="${
//             customer.rate
//           }"></td>
//           <td> $ <input type="number" class="balance-input ${
//             customer.balance < 0 ? "balance-negative" : "balance-positive"
//           }" value="${customer.balance}"></td>
//           <td> $ <input type="number" class="deposit-input" value="${
//             customer.deposit
//           }"></td>
//         `;

//       // Update status
//       row.querySelector(".status-select").addEventListener("change", (e) => {
//         customer.status = e.target.value;
//         const statusTd = e.target.parentNode;
//         statusTd.className = `status-${e.target.value.toLowerCase()}`;
//       });

//       // Update rate
//       row.querySelector(".rate-input").addEventListener("change", (e) => {
//         customer.rate = parseFloat(e.target.value);
//       });

//       // Update balance
//       row.querySelector(".balance-input").addEventListener("input", (e) => {
//         const newBalance = parseFloat(e.target.value);
//         customer.balance = newBalance;
//         e.target.className = `balance-input ${
//           newBalance < 0 ? "balance-negative" : "balance-positive"
//         }`;
//       });

//       // Update deposit
//       row.querySelector(".deposit-input").addEventListener("change", (e) => {
//         customer.deposit = parseFloat(e.target.value);
//       });

//       // Add event listener to checkbox
//       const checkbox = row.querySelector(".select-cell input[type='checkbox']");
//       checkbox.addEventListener("change", (e) => {
//         if (e.target.checked) {
//           row.classList.add("selected");
//         } else {
//           row.classList.remove("selected");
//         }
//       });

//       tbody.appendChild(row);
//     });

//     document.getElementById(
//       "pageInfo"
//     ).textContent = `Page ${currentPage} of ${Math.ceil(
//       customers.length / rowsPerPage
//     )}`;
//   }

//   function handleSearch() {
//     const query = document.getElementById("search").value.toLowerCase();
//     const filteredCustomers = customers.filter(
//       (customer) =>
//         customer.name.toLowerCase().includes(query) ||
//         customer.description.toLowerCase().includes(query)
//     );
//     renderTable(filteredCustomers);
//   }

//   function handlePagination(direction) {
//     const maxPage = Math.ceil(customers.length / rowsPerPage);
//     if (direction === "next" && currentPage < maxPage) {
//       currentPage++;
//     } else if (direction === "prev" && currentPage > 1) {
//       currentPage--;
//     }
//     renderTable(currentPage);
//   }

//   function handleRowsPerPageChange(value) {
//     rowsPerPage = parseInt(value);
//     renderTable();
//   }
//   // Function to add a new customer
//   function addCustomer() {
//     const newCustomer = {
//       id: customers.length + 1,
//       name: prompt("Enter customer name:"),
//       description: prompt("Enter customer description:"),
//       status: "Open",
//       rate: parseFloat(prompt("Enter customer rate:")),
//       balance: parseFloat(prompt("Enter customer balance:")),
//       deposit: parseFloat(prompt("Enter customer deposit:")),
//     };
//     customers.push(newCustomer);
//     renderTable(currentPage);
//     console.log(customers);
//   }

  



//   document.getElementById("search").addEventListener("input", handleSearch);
//   document
//     .getElementById("prevPage")
//     .addEventListener("click", () => handlePagination("prev"));
//   document
//     .getElementById("nextPage")
//     .addEventListener("click", () => handlePagination("next"));

//   const rowsPerPageSelect = document.getElementById("rowsPerPageSelect");
//   rowsPerPageSelect.addEventListener("change", (event) => {
//     handleRowsPerPageChange(event.target.value);
//   });

//   // Add event listener for adding a customer
//   document.getElementById("addCustomer").addEventListener("click", addCustomer);

//   renderTable();
// });


document.addEventListener("DOMContentLoaded", () => {
    const customers = [
      {
        id: 1,
        name: "Ann Culhane",
        description: "Lorem ipsum...",
        status: "Open",
        rate: 70.0,
        balance: -270.0,
        deposit: 500.0,
      },
      {
        id: 2,
        name: "Ahmad Rosser",
        description: "Lorem ipsum...",
        status: "Paid",
        rate: 70.0,
        balance: 270.0,
        deposit: 500.0,
      },
      {
        id: 3,
        name: "Zain Calzoni",
        description: "Lorem ipsum...",
        status: "Open",
        rate: 70.0,
        balance: -20.0,
        deposit: 500.0,
      },
      {
        id: 4,
        name: "Leo Stanton",
        description: "Lorem ipsum adas sansaka ak ahjhdsj dhsajd ajkh j",
        status: "Inactive",
        rate: 70.0,
        balance: 600.0,
        deposit: 500.0,
      },
      {
        id: 5,
        name: "Kaiya Vetrov",
        description: "Lorem ",
        status: "Open",
        rate: 70.0,
        balance: -350.0,
        deposit: 500.0,
      },
      {
        id: 6,
        name: "Ryan Westervelt",
        description: "Lorem ipsum asasdsa oad as asi aj as dia daodhaos oas ",
        status: "Paid",
        rate: 70.0,
        balance: -270.0,
        deposit: 500.0,
      },
      {
        id: 7,
        name: "Corey Stanton",
        description: "Lorem ipsum...",
        status: "Due",
        rate: 70.0,
        balance: 30.0,
        deposit: 500.0,
      },
      {
        id: 8,
        name: "Adison Aminoff",
        description: "Lorem ipsum...",
        status: "Open",
        rate: 70.0,
        balance: -270.0,
        deposit: 500.0,
      },
      {
        id: 9,
        name: "Alfredo Aminoff",
        description: "Lorem ipsum...",
        status: "Inactive",
        rate: 70.0,
        balance: 460.0,
        deposit: 500.0,
      },
      {
        id: 10,
        name: "Alfredo Aminoff",
        description: "Lorem ipsum...",
        status: "Inactive",
        rate: 70.0,
        balance: 460.0,
        deposit: 500.0,
      },
      {
        id: 11,
        name: "Alfredo Aminoff",
        description: "Lorem ipsum...",
        status: "Inactive",
        rate: 70.0,
        balance: 460.0,
        deposit: 500.0,
      },
      {
        id: 12,
        name: "Alfredo Aminoff",
        description: "Lorem ipsum...",
        status: "Inactive",
        rate: 70.0,
        balance: 460.0,
        deposit: 500.0,
      },
      {
        id: 13,
        name: "Alfredo Aminoff",
        description: "Lorem ipsum...",
        status: "Inactive",
        rate: 70.0,
        balance: 460.0,
        deposit: 500.0,
      },
    ];
  
    let currentPage = 1;
    let rowsPerPage = 10;
    
  
    function renderTable(page = 1) {
      
      const tbody = document.querySelector("#customerTable tbody");
      tbody.innerHTML = "";
      const start = (page - 1) * rowsPerPage;
      const end = page * rowsPerPage;
      const pageData = customers.slice(start, end);
    
      pageData.map((customer) => {
        const row = document.createElement("tr");
    
        // Define the class based on the status
        let statusClass = "";
        switch (customer.status) {
          case "Open":
            statusClass = "status-open";
            break;
          case "Paid":
            statusClass = "status-paid";
            break;
          case "Due":
            statusClass = "status-due";
            break;
          case "Inactive":
            statusClass = "status-inactive";
            break;
          default:
            break;
        }
    
        row.innerHTML = `
          <td class="select-cell"><input type="checkbox"></td>
          <td>${customer.id}</td>
          <td>${customer.name}</td>
          <td>${customer.description}</td>
          <td class="${statusClass}">
            <select class="status-select">
              <option value="Open" ${
                customer.status === "Open" ? "selected" : ""
              }>Open</option>
              <option value="Paid" ${
                customer.status === "Paid" ? "selected" : ""
              }>Paid</option>
              <option value="Inactive" ${
                customer.status === "Inactive" ? "selected" : ""
              }>Inactive</option>
              <option value="Due" ${
                customer.status === "Due" ? "selected" : ""
              }>Due</option>
            </select>
          </td>
          <td><input type="number" class="rate-input" value="${
            customer.rate
          }"></td>
          <td class="${customer.balance < 0 ? 'balance-negative' : 'balance-positive'}">${
            customer.balance < 0
              ? "-$" + Math.abs(customer.balance).toFixed(2)
              : "$" + customer.balance.toFixed(2)
          }</td>
          <td>$${customer.deposit.toFixed(2)}</td>
        `;
        
        row.querySelector(".status-select").addEventListener("change", (e) => {
          customer.status = e.target.value;
          const statusTd = e.target.parentNode;
          statusTd.className = `status-${e.target.value.toLowerCase()}`;
        });
  
        row.querySelector(".rate-input").addEventListener("change", (e) => {
          customer.rate = parseFloat(e.target.value);
        });
    
        // Add event listener to checkbox
        const checkbox = row.querySelector(".select-cell input[type='checkbox']");
        checkbox.addEventListener("change", (e) => {
          if (e.target.checked) {
            row.classList.add("selected");
          } else {
            row.classList.remove("selected");
          }
        });
    
        tbody.appendChild(row);
      });
    
      document.getElementById(
        "pageInfo"
      ).textContent = `Page ${currentPage} of ${Math.ceil(
        customers.length / rowsPerPage
      )}`;
    }
  
    function handleSearch() {
        const query = document.getElementById("search").value.toLowerCase();
        const filteredCustomers = customers.filter(
          (customer) =>
            customer.name.toLowerCase().includes(query) ||
            customer.description.toLowerCase().includes(query)
        );
        currentPage = 1; // Reset to the first page when searching
        renderTable(currentPage, filteredCustomers);
      }
    
      function handlePagination(direction) {
        const maxPage = Math.ceil(customers.length / rowsPerPage);
        if (direction === "next" && currentPage < maxPage) {
          currentPage++;
        } else if (direction === "prev" && currentPage > 1) {
          currentPage--;
        }
        renderTable(currentPage);
      }
    
      function handleRowsPerPageChange(value) {
        rowsPerPage = parseInt(value);
        renderTable();
      }
    
      document.getElementById("search").addEventListener("input", handleSearch);
      document
        .getElementById("prevPage")
        .addEventListener("click", () => handlePagination("prev"));
      document
        .getElementById("nextPage")
        .addEventListener("click", () => handlePagination("next"));
    
      const rowsPerPageSelect = document.getElementById("rowsPerPageSelect");
      rowsPerPageSelect.addEventListener("change", (event) => {
        handleRowsPerPageChange(event.target.value);
      });
    
      renderTable();
    });