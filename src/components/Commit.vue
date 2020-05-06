<template>
  <v-fade-transition hide-on-leave="">
    <v-card class="mx-auto mt-2"
            max-width="344"
            max-height="700"
            outlined
            elevation="8"
            v-if="!initShow">
      <v-list-item class="blue-grey">
        <v-list-item-content>
          <v-list-item-title class="headline text-center white--text">{{branch}}</v-list-item-title>
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
               @click="CommitToBranch">重選分支</v-btn>
      </v-row>
    </v-card>
  </v-fade-transition>
</template>

<script>
import menu from "../data/menu.json";
import { mapState, mapMutations } from "vuex";

export default {
  props: ["initShow", "branch"],
  data: () => ({
    menu: menu //commit內容(API** COMMIT)
  }),
  computed: {
    ...mapState({
      allhide: "allhide",
      selectedCommit: "selectedCommit"
    })
  },
  methods: {
    ...mapMutations(["SelectItems"]),
    //選擇的Commit傳到共用的SelectItems方法
    SelectCommit: function(_hashCode) {
      this.$store.commit("SelectItems", _hashCode);
    },
    //Commit畫面轉Branch畫面
    CommitToBranch: function() {
      this.$emit("CommitToBranch");
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

<style scoped>
.actClick {
  color: #26a69a;
}
.v-list {
  height: 60vh;
  overflow-y: auto;
}
</style>