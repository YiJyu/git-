<template>
  <v-row justify="center">
    <v-dialog v-model="ChangeFromDlg"
              max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="light-blue darken-3"
               dark
               style="width:130px"
               v-on="on">ChangeFrom</v-btn>
      </template>
      <v-card class="justify-center"
              elevation="24">
        <v-card-title class="light-blue darken-3 white--text font-weight-bold justify-center">
          ChangeFrom
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="12"
                   sm="10">
              <v-text-field label="本次要ChangeFrom的Commit"
                            required></v-text-field>
            </v-col>
            <v-col cols="12"
                   sm="10">
              <v-text-field label="上次ChangeFrom的Commit"
                            required></v-text-field>
            </v-col>
            <v-col cols="12"
                   sm="10">
              <v-text-field label="SCR NO"
                            required></v-text-field>
            </v-col>
            <v-col cols="12"
                   sm="10">
              <v-text-field label="VERSION"
                            required></v-text-field>
            </v-col>
            <v-col cols="12"
                   md="10">
              <v-text-field label="系統名稱"
                            required></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row justify="center">
            <v-btn class="ma-1 light-blue darken-3 white--text"
                   @click="ChangeFromDlg = false">ChangeForm(UAT)文件</v-btn>
            <v-btn class="ma-1 light-blue darken-3 white--text"
                   @click="ChangeFromDlg = false">ChangeForm(PROD)文件</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    ChangeFromDlg: false //是否顯示此dialog
  })
};
</script>