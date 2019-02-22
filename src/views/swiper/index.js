export default {
    data() {
      return {
          swiperOption: {
              pagination: {
                el: '.swiper-pagination',
              },
              autoplay: {
                delay: 1500,
                stopOnLastSlide: false,
                disableOnInteraction: false
              }
          },
          swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {},
}
