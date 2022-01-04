<template>
    <section>
        <base-card>
            <h2>Submitted Experiences</h2>
            <div>
                <base-button @click="loadExperiences"
                    >Load Submitted Experiences</base-button
                >
            </div>
            <p v-if="isLoading">Loading...</p>
            <p v-else-if="error">{{ error }}</p>
            <p v-else-if="results.length === 0">
                No stored experiences found. Adding some survey first.
            </p>
            <ul v-else>
                <survey-result
                    v-for="result in results"
                    :key="result.id"
                    :name="result.name"
                    :rating="result.rating"
                ></survey-result>
            </ul>
        </base-card>
    </section>
</template>

<script>
import { DB_URL } from '../../config';
import SurveyResult from './SurveyResult.vue';

export default {
    components: {
        SurveyResult,
    },
    data() {
        return {
            results: [],
            isLoading: false,
            error: null,
        };
    },
    methods: {
        loadExperiences() {
            this.error = null;
            this.isLoading = true;
            fetch(`${DB_URL}/surveys.json`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((data) => {
                    const results = [];
                    for (const id in data) {
                        results.push({
                            id,
                            name: data[id].userName,
                            rating: data[id].rating,
                        });
                    }
                    this.results = results;
                })
                .catch((err) => {
                    console.log(err);
                    this.error =
                        'Failed to fetch data - Please try again later.';
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },

    mounted() {
        this.loadExperiences();
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
