<!-- 外層選擇Branch -->
<template>
  <div>
    <v-hover v-slot:default="{ hover }"
             v-if="initShow">
      <v-card :elevation="hover ? 16 : 2"
              class="mx-auto d-flex align-center blue-grey lighten-5"
              height="350"
              max-width="350">
        <v-card-text class="font-weight-medium text-center subtitle-1">
          <v-btn class="mr-5 mb-2 blue-grey--text"
                 elevation="5"
                 @click="ShowBranch">
            選擇Branch
          </v-btn>
          <!-- 選擇分支select -->
          <v-expand-transition>
            <v-card v-show="expSelect"
                    width="100%">
              <template>
                <v-card class="justify-center">
                  <v-card-text class="pb-0">
                    <v-select v-model="branch"
                              :items="branchs"
                              menu-props="auto"
                              label="Select Branch"
                              hide-details
                              single-line></v-select>
                    <DatePicker />
                  </v-card-text>
                  <v-btn class="mb-5 cyan darken-2"
                         dark
                         @click="CommitOrBranch">
                    確定
                  </v-btn>
                </v-card>
              </template>
            </v-card>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </v-hover>
    <Commit :initShow="initShow"
            :branch="branch"
            @CommitToBranch="CommitOrBranch" />
  </div>
</template>

<script>
import DatePicker from "./DatePicker";
import Commit from "./Commit";
import { mapState } from "vuex";

export default {
  data: () => ({
    initShow: true, //是否顯示「外層選擇Branch」
    expSelect: false, //是否顯示「分支select」
    branchs: ["Dev", "Uat", "Master"], //分支選項(API** 分支)
    branch: "" //選擇的分支,
  }),
  components: {
    DatePicker,
    Commit
  },
  computed: {
    ...mapState(["allhide"])
  },
  methods: {
    //顯示分支下拉選單
    ShowBranch: function() {
      this.expSelect = !this.expSelect;
    },
    //顯示或關閉commit資訊
    CommitOrBranch: function() {
      this.initShow = !this.initShow;
      this.$store.commit("HideCommit");
      setTimeout(() => {
        this.expSelect = !this.expSelect;
      }, 100);
    }
  },
  watch: {
    allhide: function() {
      if (this.allhide === true) {
        this.initShow = true;
      }
    }
  }
};
</script>

