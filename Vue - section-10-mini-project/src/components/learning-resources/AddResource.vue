<template>
  <base-dialog title="Invalid Input" v-if="!validInput" @close="hideError">
    <template #default>
      <p>At least one input is empty</p>
      <p>Please check your input.</p>
    </template>
    <template #actions>
      <base-button @click="hideError"> Close </base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit="addResourceHandler">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <textarea name="desc" id="desc" cols="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      validInput: true,
    };
  },
  methods: {
    addResourceHandler(e) {
      e.preventDefault();
      const title = e.target.title.value,
        description = e.target.desc.value,
        link = e.target.link.value;

      if (
        title.trim() === '' ||
        description.trim() === '' ||
        link.trim() !== ''
      ) {
        this.validInput = false;
        return;
      }

      this.addResource(title, description, link);
    },
    hideError() {
      this.validInput = true;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
