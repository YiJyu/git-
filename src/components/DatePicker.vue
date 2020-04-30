<template>
  <v-row>
    <v-col cols="5">
      <v-menu ref="menuStart"
              v-model="menuStart"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y>
        <template v-slot:activator="{ on }">
          <v-text-field v-model="dateStart"
                        label="起始日期"
                        readonly
                        v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="dateStart"
                       @input="menuStart = false"
                       scrollable
                       no-title
                       class="dateHeight">
        </v-date-picker>
        <v-spacer></v-spacer>
        <v-row class="text-right">
          <v-col>
            <v-btn text
                   color="primary"
                   class="mt-0"
                   @click="ClosePickerStart">Clear</v-btn>
          </v-col>
        </v-row>
      </v-menu>
    </v-col>
    <v-col cols="2"
           class="d-flex align-self-center">
      <span class="font-weight-bold"
            style=" font-size: 20px;">~</span>
    </v-col>
    <v-col cols="5">
      <v-menu ref="menuEnd"
              v-model="menuEnd"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y>
        <template v-slot:activator="{ on }">
          <v-text-field v-model="dateEnd"
                        label="結束日期"
                        readonly
                        v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="dateEnd"
                       @input="menuEnd = false"
                       scrollable
                       no-title
                       class="dateHeight">
        </v-date-picker>
        <v-spacer></v-spacer>
        <v-row class="text-right">
          <v-col>
            <v-btn text
                   color="primary"
                   class="mt-0"
                   @click="ClosePickerEnd">Clear</v-btn>
          </v-col>
        </v-row>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dateStart: "", //開始日期
    dateEnd: "", //結束日期
    menuStart: false, //是否顯示開始日期的date-picker
    menuEnd: false //是否顯示結束日期的date-picker
  }),
  methods: {
    //清除開始日期
    ClosePickerStart: function() {
      this.menuStart = false;
      this.dateStart = "";
    },
    //清除結束日期
    ClosePickerEnd: function() {
      this.menuEnd = false;
      this.dateEnd = "";
    }
  }
};
</script>

<style scoped>
.dateHeight {
  height: 260px;
}
</style>