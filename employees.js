
function employee_count (node) {
  // TODO: given this data structure for an organization,
  // provide the total employee count for the entire company.
  if (node.root) node = node.root

  if (!node.employees) return 1

  if (node.employees) {
    let sum = 1
    node.employees.forEach(employee => {
      sum += employee_count(employee)
    })
    return sum
  }
}

var org_chart = {
  root: {
    title: "CEO",
    employees: [
      {
        title: "1 Chief Financial Officer",
        employees: [
          {
            title: "2 VP Finance",
            employees: [
              {
                title: "3 Financial Accounting Manager",
                employees: [
                  {
                    title: "4 Financial Accountant III"
                  },
                  {
                    title: "5 Financial Accountant II"
                  },
                  {
                    title: "6 Financial Accountant I"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "7 Chief Information Officer",
        employees: [
          { title: "8 Admin. Assistant" },
          {
            title: "9 VP Information Security",
            employees: [
              { title: "10 Director Information Security" }
            ]
          },
          {
            title: "11 VP Enterprise Data",
            employees: [
              {
                title: "12 DBA Lead",
                employees: [
                  { title: "13 DBA II" },
                  { title: "14 DBA I" },
                ]
              },
              { title: "15 Data Developer III" },
              { title: "16 Reporting Analyst II" },
            ]
          },
          {
            title: "17 VP Network Infrastructure",
            employees: [
              { title: "18 Sys Ops Manager" },
              { title: "19 Network Ops Manager" },
            ]
          }
        ]
      }
    ]
  }
};

console.log(employee_count(org_chart))
