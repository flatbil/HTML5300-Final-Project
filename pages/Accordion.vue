<template>
  <div class="accordion">
    <AppMenu />
    <b-card no-body v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
      <b-card-header header-tag="header" class="p-0">
        <b-button block v-b-toggle="'collapse' + index" variant="light" class="text-left">
          {{ item.title }}
        </b-button>
      </b-card-header>
      <b-collapse :id="'collapse' + index" accordion="accordionItems">
        <b-card-body>
          {{ item.content }}
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import AppMenu from '~/components/AppMenu.vue';

export default {
  name: 'AppAccordion',
  components: {
    AppMenu,
  },
  data() {
    return {
      accordionItems: [
        {
          title: 'Hello One',
          content: 'Hello There',
        },
        {
          title: 'Hello Two',
          content: 'General Kenobi!',
        },
        {
          title: 'Hello Three',
          content: 'Hello There again',
        },
      ],
    };
  },
};
</script>

<style>

</style>
