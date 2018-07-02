var csvUrl = '../reports/jacocoCsv.csv';

function getCsv(){
    $.ajax({
        url: csvUrl,
        type: 'GET',
        dataType: 'text',
        timeout: 1000,
        cache: false,
        async: false,
        error: function (err) {
            alert("加载csv文档出错");
        },
        success: function (result) {
            Papa.parse(result, {
                complete: function(results) {
                    console.log("Finished:", results.data);

                    results.data.splice(0, 1);
                    results.data.pop();

                    var tbody = document.getElementById("coverage_body");
                    results.data.forEach(result => {
                        var tr = document.createElement("tr");
                        var missed = 0;
                        for (var i = 0; i < result.length; i++){

                            if(i > 2 && i%2 == 1){
                                missed = parseInt(result[i]);
                            }

                            var td = document.createElement("td");
                            if(i > 2 && i%2 == 0){
                                if(missed == 0)
                                    td.innerHTML = result[i] + '(100.00%)';
                                else
                                    td.innerHTML = result[i] + '('+ (100*parseInt(result[i])/(parseInt(result[i]) + missed)).toFixed(2) +'%)';
                            }
                            else{
                                td.innerHTML = result[i];
                            }
                            
                            tr.appendChild(td);
                        }
                        tbody.appendChild(tr);
                    });
                }
            });
        }
    });
}

$(document).ready(function(){
    getCsv();
});