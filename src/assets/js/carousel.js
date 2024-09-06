if ($(".tf-swiper").length > 0) {
  var spacing = $(".tf-swiper").data("space-between");
  var preview = $(".tf-swiper").data("preview");
  var tablet = $(".tf-swiper").data("tablet");
  var desktop = $(".tf-swiper").data("desktop");
  var swiper4 = new Swiper(".tf-swiper", {
    speed: 1500,
    slidesPerView: preview,
    loop: false,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: desktop,
      },
      500: {
        slidesPerView: tablet,
      },
    },
  });
}
if ($(".tf-swiper3").length > 0) {
  var spacing = $(".tf-swiper3").data("space-between") || 0; // Asegura que el valor por defecto sea 0
  var preview = $(".tf-swiper3").data("preview");
  var tablet = $(".tf-swiper3").data("tablet");
  var desktop = $(".tf-swiper3").data("desktop");
  var swiper4 = new Swiper(".tf-swiper3", {
    speed: 1500,
    slidesPerView: preview,
    loop: false,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: desktop,
      },
      500: {
        slidesPerView: tablet,
      },
      320: { // Este es el nuevo breakpoint para móviles
        slidesPerView: 6, // Puedes ajustar este valor según lo que necesites para móviles
      },
    },
  });
}


if ($(".tf-swiper-2").length > 0) {
  var spacing = $(".tf-swiper-2").data("space-between");
  var preview = $(".tf-swiper-2").data("preview");
  var tablet = $(".tf-swiper-2").data("tablet");
  var desktop = $(".tf-swiper-2").data("desktop");
  var swiper4 = new Swiper(".tf-swiper-2", {
    speed: 1500,
    slidesPerView: preview,
    loop: false,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: desktop,
      },
      500: {
        slidesPerView: tablet,
      },
    },
  });
}
