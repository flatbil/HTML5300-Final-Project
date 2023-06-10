<template>
  <div id="grid">
    <AppMenu/>
    <Header />
    <Nav />
    <div class="row" style="height: 100%;">
      <Sidebar />
      <MainContent />
    </div>
    <Article />
    <Footer />
  </div>
</template>

<script>
import Header from '../layouts/HeaderSection.vue';
import Nav from '../layouts/NavSection.vue';
import Sidebar from '../layouts/SidebarSection.vue';
import MainContent from '../layouts/MainContent.vue';
import Article from '../layouts/ArticleSection.vue';
import Footer from '../layouts/FooterSection.vue';
import AppMenu from '~/components/AppMenu.vue';


export default {
  name: 'AppGrid',
  components: {
    Header,
    Nav,
    Sidebar,
    MainContent,
    Article,
    Footer,
    AppMenu
  }
};
</script>
