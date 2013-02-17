var serviceURL = "http://localhost/directory/services/";

//var programs;
program1=new Object();
program1.id="1";
program1.name='Test 1';

program2=new Object();
program2.id="2";
program2.name='Test 2';

program3=new Object();
program3.id="3";
program3.name='Test 3';

var programs = new Array();
programs[0] = program1;
programs[1] = program2;
programs[2] = program3;

$('#programListPage').bind('pageinit', function(event) {
	getProgramList();
});

function getProgramList() {
	
	$.each(programs, function(index, program) {
		$('#programList').append('<li><a href="employeedetails.html?id=' + program.id + '">' +
				'<h4>' + program.name  + '</h4>' +
				'</a></li>');
	});
	$('#programList').listview('refresh');
	
	
	/*$.getJSON(serviceURL + 'getprograms.php', function(data) {
		$('#programList li').remove();
		programs = data.items;
		$.each(programs, function(index, program) {
			$('#programList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#programList').listview('refresh');
	});*/
}