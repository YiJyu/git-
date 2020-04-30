<template>
  <v-app>
    <Header />
    <v-container fill-height
                 fluid>
      <v-row align="center"
             justify="center">
        <v-col cols="12"
               md="10">
          <v-row align="center"
                 justify="center">
            <v-col cols="12"
                   sm="5"
                   lg="4">
              <Branch />
            </v-col>
            <v-col cols="12"
                   sm="2">
              <v-row justify="center">
                <DlgCompare />
              </v-row>
              <v-row justify="center"
                     class="mt-3">
                <DlgCheckout />
              </v-row>
              <v-row justify="center"
                     class="mt-3">
                <DlgChangeForm />
              </v-row>
            </v-col>
            <v-col cols="12"
                   sm="5"
                   lg="4">
              <Branch />
            </v-col>
          </v-row>
        </v-col>
        <DlgRepository />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DlgRepository from "./components/Dialog/DlgRepository";
import Branch from "./components/Branch";
import DlgCompare from "./components/Dialog/DlgCompare";
import DlgCheckout from "./components/Dialog/DlgCheckout";
import DlgChangeForm from "./components/Dialog/DlgChangeForm";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    DlgRepository,
    Branch,
    DlgCompare,
    DlgCheckout,
    DlgChangeForm,
    Header
  },
  data: () => ({
    methods: {}
  })
};
</script>
