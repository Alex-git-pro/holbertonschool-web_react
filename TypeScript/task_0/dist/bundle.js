/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var student1 = {
    firstName: 'Euang',
    lastName: 'Thong',
    age: 38,
    location: 'Thailande',
};
var student2 = {
    firstName: 'Aun',
    lastName: 'Ice',
    age: 41,
    location: 'Thailande',
};
var studentsList = [student1, student2]; // <-- CORRECT !
var table = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
firstNameHeader.style.border = '1px solid black';
firstNameHeader.style.padding = '8px';
var locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '8px';
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9BLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFdBQVc7Q0FDdEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsV0FBVztDQUN0QixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7QUFFdEUsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztBQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7QUFFeEMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUvQyxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELGVBQWUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0FBQzNDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0FBQ2pELGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUV0QyxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELGNBQWMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQ3hDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0FBQ2hELGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUVyQyxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLFNBQVMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFdEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU3QixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztJQUMzQixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzlDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0lBQy9DLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUVwQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztJQUM5QyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFbkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTlCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgU3R1ZGVudCB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBhZ2U6IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbn1cblxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0V1YW5nJyxcbiAgbGFzdE5hbWU6ICdUaG9uZycsXG4gIGFnZTogMzgsXG4gIGxvY2F0aW9uOiAnVGhhaWxhbmRlJyxcbn07XG5cbmNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuICBmaXJzdE5hbWU6ICdBdW4nLFxuICBsYXN0TmFtZTogJ0ljZScsXG4gIGFnZTogNDEsXG4gIGxvY2F0aW9uOiAnVGhhaWxhbmRlJyxcbn07XG5cbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07IC8vIDwtLSBDT1JSRUNUICFcblxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xudGFibGUuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG50YWJsZS5zdHlsZS5ib3JkZXJDb2xsYXBzZSA9ICdjb2xsYXBzZSc7XG5cbmNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbmNvbnN0IGZpcnN0TmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5maXJzdE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSAnRmlyc3QgTmFtZSc7XG5maXJzdE5hbWVIZWFkZXIuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG5maXJzdE5hbWVIZWFkZXIuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuXG5jb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5sb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG5sb2NhdGlvbkhlYWRlci5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJztcbmxvY2F0aW9uSGVhZGVyLnN0eWxlLnBhZGRpbmcgPSAnOHB4JztcblxuaGVhZGVyUm93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUhlYWRlcik7XG5oZWFkZXJSb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkZXIpO1xuXG50YWJsZS5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuXG5zdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gIGNvbnN0IGZpcnN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBmaXJzdE5hbWVDZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5maXJzdE5hbWU7XG4gIGZpcnN0TmFtZUNlbGwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gIGZpcnN0TmFtZUNlbGwuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuXG4gIGNvbnN0IGxvY2F0aW9uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGxvY2F0aW9uQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG4gIGxvY2F0aW9uQ2VsbC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJztcbiAgbG9jYXRpb25DZWxsLnN0eWxlLnBhZGRpbmcgPSAnOHB4JztcblxuICByb3cuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lQ2VsbCk7XG4gIHJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkNlbGwpO1xuXG4gIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=