
let employees = [];

// Add employee
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };

    employees.push(emp);
    alert("Employee Added!");
}

// Display all employees
function displayEmployees() {
    let output = "";

    for (let emp of employees) {
        output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Dept: ${emp.department}<br>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Filter salary > 50000
function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "";
    filtered.forEach(emp => {
        output += `${emp.name} - ₹${emp.salary}<br>`;
    });

    document.getElementById("output").innerHTML = output;
}

// Total salary
function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

// Average salary
function averageSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = employees.length ? total / employees.length : 0;

    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg;
}

// Count department
function countDepartment() {
    let deptInput = prompt("Enter department name:");

    let count = 0;

    for (let emp of employees) {
        if (emp.department.toLowerCase() === deptInput.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        `Employees in ${deptInput}: ${count}`;
}
