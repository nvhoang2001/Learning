<template>
  <ul>
    <resource-list
      v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
      @delete="deleteResource(resource.id)"
    />
  </ul>
</template>

<script>
import ResourceList from './ResourceList.vue';

export default {
  inject: ['resources', 'deleteResource'],
  components: { ResourceList },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
