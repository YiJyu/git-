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
                         @click="ConverttoList">
                    確定
                  </v-btn>
                </v-card>
              </template>
            </v-card>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </v-hover>
    <!-- 分支commit內容 -->
    <template>
      <v-fade-transition hide-on-leave="">
        <v-card class="mx-auto"
                max-width="344"
                max-height="700"
                outlined
                elevation="8"
                v-if="!initShow">
          <v-list-item class="blue-grey">
            <v-list-item-content>
              <v-list-item-title class="headline text-center  white--text">{{branch}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list shaped>
            <v-list-item-group multiple
                               v-model="selectedCommit">
              <v-list-item v-for="item in menu"
                           :key="item.hashCode"
                           :value="item.hashCode"
                           :id="item.hashCode"
                           @click="SelectCommit(item.hashCode)"
                           class="actClick">
                <v-list-item-content>
                  <v-list-item-title>{{item.commitname | truncate(30)}}</v-list-item-title>
                  <v-list-item-subtitle v-text="
                           item.author">
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-row class="justify-center ma-3">
            <v-btn class="blue-grey"
                   dark
                   @click="ConverttoList">重選分支</v-btn>
          </v-row>
        </v-card>
      </v-fade-transition>
    </template>
  </div>
</template>

<script>
import menu from "../data/menu.json";
import DatePicker from "./DatePicker";
import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({
    initShow: true, //是否顯示「外層選擇Branch」
    expSelect: false, //是否顯示「分支select」
    menu: menu, //commit內容(api)
    branchs: ["Dev", "Uat", "Master"], //分支選項(api)
    branch: "" //選擇的分支,
  }),
  components: {
    DatePicker
  },
  computed: {
    ...mapState({
      selectedCommit: "selectedCommit"
    })
  },
  methods: {
    ...mapMutations(["SelectItems"]),
    //顯示分行下拉選單
    ShowBranch: function() {
      this.expSelect = !this.expSelect;
    },
    //顯示或關閉commit資訊
    ConverttoList: function() {
      this.initShow = !this.initShow;
      setTimeout(() => {
        this.expSelect = !this.expSelect;
      }, 100);
    },
    //選擇的Commit傳到共用的SelectItems方法
    SelectCommit: function(_hashCode) {
      this.$store.commit("SelectItems", _hashCode);
    }
  }
};
</script>

<style scoped>
.actClick {
  color: #26a69a;
}
.v-list {
  height: 500px;
  overflow-y: auto;
}
</style>
