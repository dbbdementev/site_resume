window.onload = (function() {   // когда загрузится вся страница
    VK.init(function() {    // инициализируем Vk API
    // узнаём flashVars, переданные приложению GET запросом. Сохраняем их в переменную flashVars
    var parts=document.location.search.substr(1).split("&");
    var flashVars={}, curr;
    for (i=0; i<parts.length; i++) {
        curr = parts[i].split('=');
        // записываем в массив flashVars значения. Например: flashVars['viewer_id'] = 1;
        flashVars[curr[0]] = curr[1];
    }

});