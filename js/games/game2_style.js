function meaning (url) {
    var f = document.forms[url];
    if (f) {
        var vars = window.location.search.substring(1).split("&");
        var count = vars[0].split("=")[1]
        var line_width = vars[1].split("=")[1]
        var radius = vars[2].split("=")[1]
        var time_color = vars[3].split("=")[1]

        $( "#count-result" ).html(count);
        $( "#line_width-result" ).html(line_width);
        $( "#radius-result" ).html(radius);
        $( "#time_color-result" ).html(time_color);

        $('#count').attr('value',count);
        $('#line_width').attr('value',line_width);
        $('#radius').attr('value',radius);
        $('#time_color').attr('value',time_color);
    }

    button_reset.onclick = function(){
        window.location.reload()
    }

    $( ".count" ).slider({
        animate: true,
        range: "min",
        value: count,
        min: 10,
        max: 500,
        step: 1,
        //Получаем значение и выводим его на странице
        slide: function( event, ui ) {
            $( "#count-result" ).html( ui.value );
        },
        //обновляем скрытое поле формы, так что можно передать данные с помощью формы
        change: function(event, ui) {
            $('#count').attr('value', ui.value);
        }
    });

    $( ".line_width" ).slider({
        animate: true,
        range: "min",
        value: line_width,
        min: 1,
        max: 100,
        step: 1,
        //Получаем значение и выводим его на странице
        slide: function( event, ui ) {
            $( "#line_width-result" ).html( ui.value );
        },
        //обновляем скрытое поле формы, так что можно передать данные с помощью формы
        change: function(event, ui) {
            $('#line_width').attr('value', ui.value);
        }
    });

    $( ".radius" ).slider({
        animate: true,
        range: "min",
        value: radius,
        min: 1,
        max: 100,
        step: 1,
        //Получаем значение и выводим его на странице
        slide: function( event, ui ) {
            $( "#radius-result" ).html( ui.value );
        },
        //обновляем скрытое поле формы, так что можно передать данные с помощью формы
        change: function(event, ui) {
            $('#radius').attr('value', ui.value);
        }
    });

    $( ".time_color" ).slider({
        animate: true,
        range: "min",
        value: time_color,
        min: 1,
        max: 100,
        step: 1,
        //Получаем значение и выводим его на странице
        slide: function( event, ui ) {
            $( "#time_color-result" ).html( ui.value );
        },
        //обновляем скрытое поле формы, так что можно передать данные с помощью формы
        change: function(event, ui) {
            $('#time_color').attr('value', ui.value);
        }
    });
}
