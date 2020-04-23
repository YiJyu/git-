<template>
  <v-app>
    <v-card height="100%">
      <v-app-bar absolute
                 style="height:100px"
                 color="#3b6978"
                 dark>
        <Title />
      </v-app-bar>
      <v-container fill-height
                   fluid
                   class="topMargin">
        <v-row align="center"
               justify="center">
          <v-col cols="12"
                 md="10">
            <v-row align="center"
                   justify="center">
              <v-col cols="12"
                     sm="5"
                     lg="4">
                <BranchCommit />
              </v-col>
              <v-col cols="12"
                     sm="2">
                <Compare />
                <CheckoutDlg class="mt-3" />
                <ChangeFormDlg class="mt-3" />
              </v-col>
              <v-col cols="12"
                     sm="5"
                     lg="4">
                <BranchCommit />
              </v-col>
            </v-row>
          </v-col>
          <DlgRepository />
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import DlgRepository from "./components/DlgRepository";
import BranchCommit from "./components/Branch_Commit";
import Compare from "./components/Compare";
import CheckoutDlg from "./components/Checkout";
import ChangeFormDlg from "./components/ChangeForm";
import Title from "./components/Title";

export default {
  name: "App",
  components: {
    DlgRepository,
    BranchCommit,
    Compare,
    CheckoutDlg,
    ChangeFormDlg,
    Title
  },
  data: () => ({
    methods: {}
  })
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-weight: 600;
}
@media screen and (max-width: 600px) {
  .topMargin {
    margin-top: 60px;
  }
}
</style>
