class Table {
  constructor(table) {
    this.table = table;
  }

  createHeader(data) {
    let up = "<thead><tr>";
    let down = "</tr></thead>";
    data.forEach((d) => {
      up += `<th>${d}</th>`;
    });

    return up + down;
  }

  createBody(data) {
    let up = "<tbody>";
    let down = "</tbody>";

    data.forEach((row, index) => {
      up += `
        <tr>
          <td>${index + 1}</td>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
        </tr>
      `;
    });

    return up + down;
  }

  input(element) {
    let table = `<table class='table table-hover border-info'>
    ${this.createHeader(this.table.head)}
    ${this.createBody(this.table.data)}
      </table>`;
    element.innerHTML = table;
  }
}

const library = new Table({
  head: ["#", "Name", "Email", "Country"],
  data: [
    ["Kim Jong-Un", "dprk@example.kp", "North Korea"],
    ["Xi Jinping", "prc@example.cn", "Mainland China"],
    ["Phạm Minh Chính", "srv@example.vn", "Vietnam"],
    ["Phankham Viphavanh", "lpdr@example.la", "Laos"]
  ]
});
const table = document.getElementById("table");
library.input(table);

// latihan