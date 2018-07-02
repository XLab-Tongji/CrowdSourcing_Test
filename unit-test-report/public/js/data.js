
var tests = [];

var Test = function (class_name, count, skipped, failures, errors, total_time, pass_out, fail_out) {
    this.class_name = class_name;
    this.count = count;
    this.skipped = skipped;
    this.failures = failures;
    this.errors = errors;
    this.total_time = total_time;
    this.pass_out = pass_out;
    this.fail_out = fail_out;
    this.testcase = [];

}

var TestCase = function (name, time, state) {
    this.name = name;
    this.time = time;
    this.state = state;
}

var url = [];


    url = getUrl();
    url.forEach(element => {
        $.ajax({
            url: element,
            type: 'GET',
            dataType: 'xml',
            timeout: 1000,
            cache: false,
            async: false,
            error: function (xml) {
                alert("加载xml文档出错");
            },
            success: function (xml) {
                $(xml).find("testsuite").each(function (i) { //查找所有testsuite节点并遍历
                    var class_name = $(this).attr("name");
                    var count = $(this).attr("tests");
                    var skipped = $(this).attr("skipped");
                    var failures = $(this).attr("failures");
                    var errors = $(this).attr("errors");
                    var total_time = $(this).attr("time");
                    var pass_out = $(this).children("system-out").text();
                    var fail_out = $(this).children("system-err").text();
                    if(fail_out === ""){
                        fail_out = "<![CDATA[]]>";
                    }
                    var test = new Test(class_name, count, skipped, failures, errors, total_time, pass_out, fail_out);
                    $(this).find("testcase").each(function (j, val) {
                        var name = $(val).attr("name");
                        var time = $(val).attr("time");
                        var state = '';
                        if($(val).find("failure").length === 0){
                            state = 'Pass';
                        }else{
                            state = 'Fail';
                        }
                        var testcase = new TestCase(name, time, state);
                        test.testcase.push(testcase);
                    });
                    tests.push(test);
                });
            }
        });
    });
