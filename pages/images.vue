<template>
  <div>
    <AppMenu />
    <h1>Images</h1>

    <!-- Carousel -->
    <b-carousel
      id="mycarousel"
      controls
      indicators
      :interval="0"
      background="#ababab"
    >
      <!-- Slide items -->
      <b-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :img-src="image.src"
        :alt="image.alt"
        :caption="image.title"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import AppMenu from '~/components/AppMenu.vue';

export default {
  name: 'ImagesPage',
  components: {
    AppMenu,
  },
  data() {
    return {
      images: [
        { src: require('~/assets/Front.jpg'), alt: 'Image 1', title: 'Front View' },
        { src: require('~/assets/Livingroom.jpg'), alt: 'Image 2', title: 'Living Room' },
        { src: require('~/assets/Hall.jpg'), alt: 'Image 3', title: 'Hallway' },
        { src: require('~/assets/View.jpg'), alt: 'Image 4', title: 'Scenic View' },
      ],
    };
  },
};
</script>

<style>
#mycarousel {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
}
</style>
