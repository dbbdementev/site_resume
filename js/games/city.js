window.onload = function () {
      jQuery("#user-city").text('Вы живете в : '+ymaps.geolocation.country+', '
      +ymaps.geolocation.city+', '
      +ymaps.geolocation.region+'. '+'Пишите: dbbdementev@rambler.ru');
}