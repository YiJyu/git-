<template>
  <v-card height="100%"
          dark
          color="blue-grey">
    <v-card-text>
      <v-form>
        <v-row align="center"
               justify="center">
          <v-col cols="12"
                 md="10">
            <v-text-field label="Clone URL"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <div class="text-center">
        <v-btn rounded
               color="teal lighten-1 "
               dark
               @click="CloneRepository">Clone</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddRepo",
  methods: {
    ...mapMutations(["ChangeExpRepoAdd"]),
    //Clone Repository(API** Clone)
    CloneRepository: function() {
      this.$store.commit("ChangeExpRepoAdd");
    }
  }
};
</script>