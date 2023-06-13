<template>
  <div class="accordion">
    <AppMenu />
    <b-card no-body v-for="(item, index) in accordionItems" :key="index" :accordion="true" :show="index === 0" class="accordion-item">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info">
          {{ item.title }}
        </b-button>
      </b-card-header>
      <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <!-- Conditionally render the component if it is the RhymeForm -->
          <template v-if="item.content === 'RhymeForm'">
            <RhymeForm />
          </template>
          <!-- Render other contents as plain text -->
          <p v-else>{{ item.content }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import AppMenu from '~/components/AppMenu.vue';
import RhymeForm from '~/components/RhymeForm.vue';

export default {
  name: 'AppAccordion',
  components: {
    AppMenu,
    RhymeForm,
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
          title: 'Make a Rhyme',
          content: 'RhymeForm',
        },
      ],
    };
  },
};
</script>
