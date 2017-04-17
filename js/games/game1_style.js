function meaning (url) {
    var f = document.forms[url];
    if (f) {
        var vars = window.location.search.substring(1).split("&");
        var count=vars[0].split("=")[1]
        var point_size=vars[1].split("=")[1]
        var window_size = vars[2].split("=")[1]
        var time_step = vars[3].split("=")[1]
        var x_radius = vars[4].split("=")[1]
        var y_radius = vars[5].split("=")[1]
        var x_angle = vars[6].split("=")[1]
        var y_angle =  vars[7].split("=")[1]
        var colour_shift = vars[8].split("=")[1]
        var colour_step = vars[9].split("=")[1]
        var saturation = vars[10].split("=")[1]
        var lightness =  vars[11].split("=")[1]
        var transparency = vars[12].split("=")[1]

        $( "#count-result" ).html(count);
        $( "#point_size-result" ).html(point_size);
        $( "#window_size-result" ).html(window_size);
        $( "#time_step-result" ).html(time_step);
        $( "#x_radius-result" ).html(x_radius);
        $( "#y_radius-result" ).html(y_radius);
        $( "#x_angle-result" ).html(x_angle);
        $( "#y_angle-result" ).html(y_angle);
        $( "#colour_shift-result" ).html(colour_shift);
        $( "#colour_step-result" ).html(colour_step);
        $( "#saturation-result" ).html(saturation);
        $( "#lightness-result" ).html(lightness);
        $( "#transparency-result" ).html(transparency);

        $('#count').attr('value',count);
        $('#point_size').attr('value',point_size);
        $('#window_size').attr('value',window_size);
        $('#time_step').attr('value',time_step);
        $('#x_radius').attr('value',x_radius);
        $('#y_radius').attr('value',y_radius);
        $('#x_angle').attr('value',x_angle);
        $('#y_angle').attr('value',y_angle);
        $('#colour_shift').attr('value',colour_shift);
        $('#colour_step').attr('value',colour_step);
        $('#saturation').attr('value',saturation);
        $('#lightness').attr('value',lightness);
        $('#transparency').attr('value',transparency);
    }

    button_reset.onclick = function(){
        window.location.reload()
    }

    $( ".count" ).slider({
        animate: true,
        range: "min",
        value: count,
        min: 0,
        max: 2000,
        step: 10,
        //Получаем значение и выводим его на странице
        slide: function( event, ui ) {
            $( "#count-result" ).html( ui.value );
        },
        //обновляем скрытое поле формы, так что можно передать данные с помощью формы
        change: function(event, ui) {
            $('#count').attr('value', ui.value);
        }
    });

    $( ".point_size" ).slider({
        animate: true,
        range: "min",
        value: point_size,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#point_size-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#point_size').attr('value', ui.value);
        }
    });

    $( ".time_step" ).slider({
        animate: true,
        range: "min",
        value: time_step,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#time_step-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#time_step').attr('value', ui.value);
        }
    });

    $( ".window_size" ).slider({
        animate: true,
        range: "min",
        value: window_size,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#window_size-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#window_size').attr('value', ui.value);
        }
    });

    $( ".x_radius" ).slider({
        animate: true,
        range: "min",
        value: x_radius,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#x_radius-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#x_radius').attr('value', ui.value);
        }
    });

    $( ".y_radius" ).slider({
        animate: true,
        range: "min",
        value: y_radius,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#y_radius-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#y_radius').attr('value', ui.value);
        }
    });

    $( ".x_angle" ).slider({
        animate: true,
        range: "min",
        value: x_angle,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#x_angle-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#x_angle').attr('value', ui.value);
        }
    });

    $( ".y_angle" ).slider({
        animate: true,
        range: "min",
        value: y_angle,
        min: -100,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#y_angle-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#y_angle').attr('value', ui.value);
        }
    });

    $( ".colour_shift" ).slider({
        animate: true,
        range: "min",
        value: colour_shift,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#colour_shift-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#colour_shift').attr('value', ui.value);
        }
    });

    $( ".colour_step" ).slider({
        animate: true,
        range: "min",
        value: colour_step,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#colour_step-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#colour_step').attr('value', ui.value);
        }
    });

    $( ".saturation" ).slider({
        animate: true,
        range: "min",
        value: saturation,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#saturation-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#saturation').attr('value', ui.value);
        }
    });

    $( ".lightness" ).slider({
        animate: true,
        range: "min",
        value: lightness,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#lightness-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#lightness').attr('value', ui.value);
        }
    });

    $( ".transparency" ).slider({
        animate: true,
        range: "min",
        value: transparency,
        min: 0,
        max: 100,
        step: 0,
        slide: function( event, ui ) {
            $( "#transparency-result" ).html( ui.value );
        },
        change: function(event, ui) {
            $('#transparency').attr('value', ui.value);
        }
    });
}