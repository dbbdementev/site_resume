button_start.onclick = function() {
    var count = $("#count").val();// Количество точек
    var point_size = $("#point_size").val(); // Размер одной точки
    var window_size = $("#window_size").val()*10;// Радиус активной области
    var time_step = $("#time_step").val()/10; // Скорость
    var x_radius = $("#x_radius").val()*50000; // Коэффициент изменения радиуса по оси X
    var y_radius = $("#y_radius").val()*50000; // Коэффициент изменения радиуса по оси Y
    var x_angle = $("#x_angle").val()*100; // Коэффициент скорости изменения угла по оси X
    var y_angle = $("#y_angle").val()*100; // Коэффициент скорости изменения угла по оси Y
    var colour_shift = $("#colour_shift").val()*3.59; // Сдвиг начальной точки радуги цветов (0 до 359)
    var colour_step = $("#colour_step").val()/30; // Cкорости изменения цвета от точки к точке
    var saturation = $("#saturation").val(); // Насыщенность цвета (от 0 до 100)
    var lightness = $("#lightness").val(); // Яркость (от 0 до 100)
    var transparency = $("#transparency").val()/100; // Прозрачность (от 0 до 1)
    var background_colour=$("#background_colour").val() // Цвет фона
    var t = 0;
    var c = document.querySelector("canvas");
    var context = c.getContext('2d');
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    function draw() {
        context.globalCompositeOperation = 'source-over';
        context.fillStyle = background_colour;
        context.fillRect(0, 0, c.width, c.height);
        var foo, i, j, r;
        foo = Math.sin(t) * 2 * Math.PI;
        for (i=0; i<count; ++i) {
            r = window_size * Math.sin(i * foo);
            context.globalCompositeOperation = '';
            context.fillStyle = 'hsla(' + (i*colour_step + colour_shift) + ',' + saturation + '%, ' + lightness +'%,' + transparency + ')';
            context.beginPath();
            context.arc(Math.cos(i + t*x_angle) * (r - t*x_radius) + (c.width / 2),
                Math.sin(i + t*y_angle) * (r - t*y_radius) + (c.height / 2),
                point_size, 0, Math.PI * 2);
            context.fill();
        }
        t += time_step/10000000;
        return t %= 2 * Math.PI;
    };
    function run() {
        window.requestAnimationFrame(run);
        draw();
    }
    run();
}

