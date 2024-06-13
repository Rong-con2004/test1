// Danh sách sinh viên dưới dạng JSON array
var students = [
  { name: "John Doe", age: 20 },
  { name: "Jane Smith", age: 22 },
  { name: "Bob Johnson", age: 19 },
  { name: "Sarah Lee", age: 21 },
  { name: "Rock Lee", age: 30 },
  { name: "Anne Marie", age: 32 },
  { name: "Maroon 5", age: 29 },
  { name: "Adriana Proenza", age: 27 },
  { name: "Kina Mark", age: 37 },
  { name: "Sarah Han", age: 19 },
  { name: "Orange Perri", age: 30 },
  { name: "Whitney Houston", age: 40 },
  { name: "Tyler Jan", age: 36 },
];

// Hiển thị danh sách sinh viên trong bảng
function displayStudents() {
  var table = $("#student-table tbody");
  table.empty();
  for (var i = 0; i < students.length; i++) {
    var row = $("<tr></tr>");
    row.append("<td>" + students[i].name + "</td>");
    row.append("<td>" + students[i].age + "</td>");
    table.append(row);
  }
}

// Sắp xếp danh sách sinh viên
function sortTable(column) {
  students.sort(function (a, b) {
    var x = column === 0 ? a.name : a.age;
    var y = column === 0 ? b.name : b.age;
    return x < y ? -1 : x > y ? 1 : 0;
  });
  displayStudents();
}

// Lọc danh sách sinh viên theo tên
$("#name-filter-btn").click(function () {
  var filterText = $("#name-filter").val().toLowerCase();
  $("table tbody tr").each(function () {
    var name = $(this).find("td:first-child").text().toLowerCase();
    if (name.includes(filterText)) {
      $(this).addClass("highlight");
    } else {
      $(this).removeClass("highlight");
    }
  });
});

// Lọc danh sách sinh viên theo tuổi
$("#age-filter-btn").click(function () {
  var filterAge = parseInt($("#age-filter").val());
  $("table tbody tr").each(function () {
    var age = parseInt($(this).find("td:last-child").text());
    if (age < filterAge) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
});

// Hiển thị lại danh sách sinh viên
$("#reset-btn").click(function () {
  $("#name-filter").val("");
  $("#age-filter").val("");
  $("table tbody tr").show();
  $("table tbody tr").removeClass("highlight");
  displayStudents();
});

// Hiển thị danh sách sinh viên ban đầu
displayStudents();
