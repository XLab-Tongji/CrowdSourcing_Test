var csvUrl = '../coverage/coverage-summary.json';

function getJson(){
    $.ajax({
        url: csvUrl,
        type: 'GET',
        dataType: 'json',
        timeout: 1000,
        cache: false,
        async: false,
        error: function (err) {
            alert("加载json文档出错");
        },
        success: function (results) {
            console.log(results);

            var tbody = document.getElementById("coverage_body");

            for (var key in results){
                var result = results[key];
                var tr = document.createElement("tr");

                var lines = result.lines;
                var statements = result.statements;
                var functions = result.functions;
                var branches = result.branches;

                var td = document.createElement("td");
                name = key.split('\\').pop();
                td.innerHTML = name;
                tr.appendChild(td);
                //line
                var td = document.createElement("td");
                td.innerHTML = lines.covered;
                tr.appendChild(td);
                
                var td = document.createElement("td");
                td.innerHTML = lines.total;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.innerHTML = lines.pct + "%";
                tr.appendChild(td);
                //statement
                var td = document.createElement("td");
                td.innerHTML = statements.covered;
                tr.appendChild(td);
                
                var td = document.createElement("td");
                td.innerHTML = statements.total;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.innerHTML = statements.pct + "%";
                tr.appendChild(td);
                //functions
                var td = document.createElement("td");
                td.innerHTML = functions.covered;
                tr.appendChild(td);
                
                var td = document.createElement("td");
                td.innerHTML = functions.total;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.innerHTML = functions.pct + "%";
                tr.appendChild(td);
                //branches
                var td = document.createElement("td");
                td.innerHTML = branches.covered;
                tr.appendChild(td);
                
                var td = document.createElement("td");
                td.innerHTML = branches.total;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.innerHTML = branches.pct + "%";
                tr.appendChild(td);

                tbody.appendChild(tr);
            }

        }
    });
}

$(document).ready(function(){
    getJson();
});