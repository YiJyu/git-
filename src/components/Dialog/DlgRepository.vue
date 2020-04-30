<template>
  <v-dialog v-model="RepositoryDlg"
            max-width="500px"
            persistent>
    <template v-slot:activator="{ on }">
      <v-btn color="orange"
             class="pa-auto repositoryBtn"
             dark
             rounded
             absolute
             v-on="on"
             @click="ChangeExp">
        Repository
      </v-btn>
    </template>
    <v-card class=""
            height="330px">
      <v-window v-model="step">
        <!-- 登入 -->
        <v-window-item :value="1">
          <v-card-title class="white--text orange  font-weight-bold justify-center">
            Git 帳號
          </v-card-title>
          <v-card-text>
            <v-row justify="center"
                   class=" ma-0 mt-3">
              <v-col cols="12"
                     md="10">
                <v-text-field label="帳號"></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center"
                   class=" ma-0">
              <v-col cols="12"
                     md="10">
                <v-text-field label="密碼"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-row justify="center">
            <v-btn class="mb-3 white--text orange"
                   @click="SaveLogIn">確認</v-btn>
          </v-row>
        </v-window-item>
        <!-- 選擇Repository -->
        <v-window-item :value="2">
          <v-card-title class="white--text blue-grey font-weight-bold justify-center">
            選擇Repository
          </v-card-title>
          <v-card-text>
            <v-row justify="center"
                   class=" ma-0 mt-5 pt-5">
              <v-col cols="12"
                     md="11">
                <v-select v-model="repo"
                          :items="repository"
                          menu-props="auto"
                          label="Select Repository"
                          hide-details
                          single-line></v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-row justify="end"
                 class="mr-5">
            <v-btn class="white--text orange mt-5 mr-5"
                   @click="SaveRepo">確認</v-btn>
          </v-row>
          <v-card-title class="blue-grey justify-center plus"
                        style="margin-top:30px"
                        @click="ChangeExpRepoAdd">
            <v-icon class="white--text">mdi-plus</v-icon>
          </v-card-title>
        </v-window-item>
      </v-window>
    </v-card>
    <v-expand-transition>
      <v-card v-show="expAddRepo"
              height="165px"
              width="100%">
        <AddRepo />
      </v-card>
    </v-expand-transition>
  </v-dialog>
</template>

<script>
import AddRepo from "../AddRepo";
import { mapState, mapMutations } from "vuex";

export default {
  name: "DlgRepository",
  data: () => ({
    repository: ["CITI_IISS", "CITI_CARD_SPM"], //Repository資料
    repo: "", //選取的Repository資料
    RepositoryDlg: true, //是否顯示此Dialog
    step: 1 //顯示的windows位置
  }),
  components: {
    AddRepo
  },
  methods: {
    ...mapMutations(["ChangeRepository", "ChangeExpRepoAdd"]),
    //選取Repository
    SaveRepo: function() {
      this.$store.commit("ChangeRepository", this.repo);
      this.RepositoryDlg = false;
      if (this.expAddRepo === true) {
        this.$store.commit("ChangeExpRepoAdd");
      }
    },
    //登入
    SaveLogIn: function() {
      this.step = 2;
    },
    //預設「新增Repository的Expand區域」為不顯示
    ChangeExp: function() {
      this.$store.state.expAddRepo = false;
    }
  },
  computed: {
    ...mapState({
      repository: "repository",
      expAddRepo: "expAddRepo"
    })
  }
};
</script>

<style scoped>
.plus {
  transition-duration: 0.5s;
}
.plus:hover {
  opacity: 0.8;
  cursor: pointer;
}
.repositoryBtn {
  bottom: 6vh;
  right: 5vw;
}
</style>