<template>
  <v-card class="orange font-weight-bold align-center d-flex "
          absolute
          dark
          elevation="8"
          style="height:80px;width:250px;top:70px;left:50px;border-radius:15px">
    <v-row justify="center">
      <v-toolbar-title class="ml-2">Git版控
      </v-toolbar-title>
      <v-tooltip bottom
                 v-if="repository">
        <template v-slot:activator="{ on }">
          <v-chip dark
                  v-on="on"
                  class="ml-3 blue-grey darken-1">
            {{repository| truncate(20)}}
          </v-chip>
        </template>
        <span>{{repository}}</span>
      </v-tooltip>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      repository: "repository"
    })
  }
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .topAlign {
    top: 20px !important;
    left: auto !important;
    z-index: 999;
  }
}
</style>