<template>
  <v-app-bar absolute
             style="height:10vh"
             color="#3b6978"
             dark>
    <v-card class="orange font-weight-bold align-center d-flex titleCard"
            absolute
            dark
            elevation="8">
      <v-row justify="center">
        <v-toolbar-title>Git版控
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
  </v-app-bar>
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
.titleCard {
  height: 80px;
  width: 250px;
  top: 6vh;
  left: 5vw;
  border-radius: 1.5em !important;
}
</style>