<template>
  <b-navbar variant="success" class="py-2">
    <b-container fluid>
      <b-row class="col d-flex flex-row justify-content-between">
        <b-col cols="auto" class="px-3">Nav Item</b-col>
        <b-col cols="auto" class="px-3 d-none d-sm-inline">Nav Item</b-col>
        <b-col cols="auto" class="px-3 d-none d-md-inline">Nav Item</b-col>
        <b-col cols="auto" class="px-3 d-none d-lg-inline">Nav Item</b-col>
        <b-col cols="auto" class="px-3 d-none d-xl-inline">Nav Item</b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNav',
};
</script>
