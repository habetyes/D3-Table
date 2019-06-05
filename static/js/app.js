// from data.js
var table = d3.select("#ufo-table");
var tbody = table.select("tbody");
// Build Default Table
for (var i = 0; i < data.length; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(data[i].datetime);
    trow.append("td").text(data[i].city);
    trow.append("td").text(data[i].state);
    trow.append("td").text(data[i].country);
    trow.append("td").text(data[i].shape);
    trow.append("td").text(data[i].durationMinutes);
    trow.append("td").text(data[i].comments);
}

var reset = d3.select("#reset")
var submission = d3.select("#filter-btn");

// When the form is completed and the submission button is clicked
submission.on("click", function () {
    // Prevent page refresh
    d3.event.preventDefault();
    // identify where the input is coming from
    var date = d3.select("#datetime");
    // capture the text from that input
    var dateFilter = date.property("value");
    // Filter the table based on the date entered
    var filteredTable = data.filter(date => date.datetime === dateFilter);
    // Clear table before appending only filtered rows
    tbody.selectAll("tr").remove()
    // Apply filtered data to table
    for (var i = 0; i < filteredTable.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(filteredTable[i].datetime);
        trow.append("td").text(filteredTable[i].city);
        trow.append("td").text(filteredTable[i].state);
        trow.append("td").text(filteredTable[i].country);
        trow.append("td").text(filteredTable[i].shape);
        trow.append("td").text(filteredTable[i].durationMinutes);
        trow.append("td").text(filteredTable[i].comments);
    }
});

// Allow user to reset table without having to refresh the page
reset.on("click", function(){
    d3.event.preventDefault();
    tbody.selectAll("tr").remove();
    for (var i = 0; i < data.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(data[i].datetime);
        trow.append("td").text(data[i].city);
        trow.append("td").text(data[i].state);
        trow.append("td").text(data[i].country);
        trow.append("td").text(data[i].shape);
        trow.append("td").text(data[i].durationMinutes);
        trow.append("td").text(data[i].comments);
    }
});
