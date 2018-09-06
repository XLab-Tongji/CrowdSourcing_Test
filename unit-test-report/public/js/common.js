
/*---LEFT BAR ACCORDION----*/
$(function () {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        //        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

var Script = function () {

    //    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if (diff > 0)
            $("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
        else
            $("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
    });



    //    sidebar toggle

    $(function () {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.fa-bars').click(function () {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-210px'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
    });

    tests.forEach(function (item, i) {
        var pass_out = item.pass_out;
        var fial_out = item.fial_out;
        item.testcase.forEach(function (testcase, j) {
            var failure = 0;
            if (testcase.state == 'Fail') {
                failure = 1;
                $('tbody#state_tbody').append($("<tr ><td><a href=''>" + testcase.name +
                "</a></td><td>" + failure +
                "</td><td>0</td><td>" + testcase.time +
                "s</td><td><span class='label label-warning label-mini'>" +
                testcase.state + "</span></td></tr>"));
            } else {
                $('tbody#state_tbody').append($("<tr><td><a href=''>" + testcase.name +
                    "</a></td><td>" + failure +
                    "</td><td>0</td><td>" + testcase.time +
                    "s</td><td><span class='label label-success label-mini'>" +
                    testcase.state + "</span></td></tr>"));
            }
            $('.steps').append($("<label>" + testcase.name + "</label>"))
            var style = '';
            if( i == 0 && j ==0){
                style = 'display: block';
            }else{
                style = 'display: none';
            }
            $('#text').append($("<div id='" + testcase.name + "'" + "style='" + style  +"'><span class = 'code'><pre id ="+ testcase.name +">"+ pass_out +"</pre></span></div>"))
        })
    });

    $('.steps').find('label').each(function(i, val){
        $(val).click(function(){
            var name = $(val).text();
            if ($('#' + name).is(":visible") === true) {

            } else {
                $('#' + name).show();
                $('.steps').find('label').each(function(j){
                    if($(this).text() != name){
                        $('#' + $(this).text()).hide();
                    }
                })
            }
        })
    });

    $('#std2').click(function(){
        $('#text').find('pre').each(function(i, val){
            if($(val).is(":visible") === true){
                name = $(val).attr('id');
                tests.forEach(function(item){
                    std_err = item.fail_out;
                    item.testcase.forEach(function(testcase){
                        if(name == testcase.name){
                            $(val).text(std_err);
                        }
                    })
                }) 
            }
        })
    });
    $('#std1').click(function(){
        $('#text').find('pre').each(function(i, val){
            if($(val).is(":visible") === true){
                name = $(val).attr('id');
                tests.forEach(function(item){
                    std_out = item.pass_out;
                    item.testcase.forEach(function(testcase){
                        if(name == testcase.name){
                            $(val).text(std_out);
                        }
                    })
                }) 
            }
        })
    })

}();