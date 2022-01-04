<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedComponent: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Go to Google',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedComponent === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedComponent === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedComponent = tab;
    },
    addResource(title, desc, link) {
      this.storedResources.push({
        id: new Date().toISOString(),
        title,
        description: desc,
        link,
      });
      this.setSelectedTab('stored-resources');
    },
    deleteResource(resId) {
      console.log(this.storedResources);
      this.storedResources.splice(
        this.storedResources.findIndex((res) => res.id === resId),
        1
      );
      console.log(this.storedResources);
    },
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
};
</script>

<style scoped></style>
