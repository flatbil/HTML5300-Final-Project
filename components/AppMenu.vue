<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <b-navbar-brand href="#">HTML300 Final Project</b-navbar-brand>
    <b-navbar-toggle target="navbarNav"></b-navbar-toggle>
    <b-collapse id="navbarNav" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="item in menuItems"
          :key="item.id"
          @click="handleItemClick(item)"
        >
          {{ item.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <iframe
      src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Finquisitive-maamoul-b221bc.netlify.app%2F&layout&size&width=77&height=20&appId"
      width="77"
      height="20"
      style="border: none; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </nav>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from 'bootstrap-vue';

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Home', route: '/' },
        { id: 2, name: 'Images', route: '/images' },
        { id: 3, name: 'Accordion', route: '/accordion' },
        { id: 4, name: 'Grid', route: '/grid' },
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      // Handle menu item click event
      console.log(`Clicked ${item.name}`);
      this.$router.push(item.route); // Navigate to the clicked menu item's route
    },
  },
};
</script>

<style scoped>
</style>
