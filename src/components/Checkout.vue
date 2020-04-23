<template>
  <v-row justify="center">
    <v-dialog v-model="CheckoutDlg"
              max-width="600px">
      <template v-slot:activator="{on}">
        <v-btn color="cyan darken-2"
               dark
               style="width:130px"
               v-on="on">Checkout</v-btn>
      </template>
      <v-card class="justify-center"
              elevation="24">
        <v-card-title class="cyan darken-2 white--text font-weight-bold justify-center">
          {{CurrentTitle}}
        </v-card-title>
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-row justify="center">
                <v-col cols="12"
                       sm="10">
                  <v-text-field label="本次要Checkout的Commit"
                                required></v-text-field>
                </v-col>
                <v-col cols="12"
                       sm="10">
                  <v-text-field label="上次Checkout的Commit"
                                required></v-text-field>
                </v-col>
                <v-col cols="12"
                       sm="10">
                  <v-text-field label="SCR NO"
                                required></v-text-field>
                </v-col>
                <v-col cols="12"
                       sm="10">
                  <v-text-field label="系統名稱"
                                required></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-row justify="end"
                     class="mr-2 mb-2">
                <v-btn class="mr-2 cyan--text text--darken-2 text-right"
                       @click="step = 2">查看已Checkout文件</v-btn>
                <v-btn class="cyan darken-2 white--text"
                       @click="CheckoutDlg = false">Checkout文件</v-btn>
              </v-row>
            </v-card-actions>
          </v-window-item>
          <v-window-item :value="2">
            <v-card-text>
              <v-list disabled>
                <div v-for="(item, i) in items"
                     :key="i">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title v-html="item"
                                         class="text-wrap"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                </div>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-row justify="center"
                     class="mr-2 mb-2">
                <v-btn class="cyan darken-2 white--text"
                       @click="step = 1">返回</v-btn>
              </v-row>
            </v-card-actions>
          </v-window-item>
        </v-window>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    CheckoutDlg: false, //是否顯示此dialog
    step: 1, //顯示的window位置
    items: [
      //已Checkout過文件
      "CapOne/DBModels/SqlServer1.generated.cs",
      "IISS/Areas/IISS/Controllers/AlertDetailController.csIISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISS/Areas/IISS/Controllers/AttachmentController.cs",
      "IISS/Areas/IISS/Controllers/ReportController.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_DlgAttachment.cshtmlIISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsAFORD.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtmlIISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISSService/Models/AlertInfoInsAGADVViewModel.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInvMACTV.cshtml",
      "IISSService/Models/AlertRespViewModel.cs",
      "IISS/Areas/IISS/Views/Call/BodyCall.cshtml",
      "IISS/Content/Style/images/user2.jpg",
      "IISSService/ImportModels/ImportInvFRQIRModel.cs",
      "IISSService/Models/AlertInfoInsREPLAViewModel.cs",
      "IISS/Content/Style/images/banners/Banner_RCC_2.jpg",
      "IISS/Content/Style/images/avatars/L4163.gif",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsMULTI.cshtml",
      "IISS/Content/Style/images/avatars/L26157.gif",
      "IISS/Content/Style/images/avatars/L9019.gif",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialIISSQuestion.cshtml",
      "IISS/Content/Style/images/avatars/L8917.gif",
      "CapOne/DBModels/SqlServer1.generated.cs",
      "IISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISS/Areas/IISS/Controllers/AttachmentController.cs",
      "IISS/Areas/IISS/Controllers/ReportController.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_DlgAttachment.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsAFORD.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtml",
      "IISSService/Models/AlertInfoInsAGADVViewModel.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInvMACTV.cshtml",
      "IISSService/Models/AlertRespViewModel.cs",
      "IISS/Areas/IISS/Views/Call/BodyCall.cshtml",
      "IISS/Content/Style/images/user2.jpg",
      "IISSService/ImportModels/ImportInvFRQIRModel.cs",
      "IISSService/Models/AlertInfoInsREPLAViewModel.cs",
      "IISS/Content/Style/images/banners/Banner_RCC_2.jpg",
      "IISS/Content/Style/images/avatars/L4163.gif",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsMULTI.cshtml",
      "IISS/Content/Style/images/avatars/L26157.gif",
      "IISS/Content/Style/images/avatars/L9019.gif",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialIISSQuestion.cshtml",
      "IISS/Content/Style/images/avatars/L8917.gif"
    ]
  }),
  computed: {
    //依window的位置顯示標題
    CurrentTitle: function() {
      switch (this.step) {
        case 1:
          return "Checkout";
        case 2:
          return " 已Checkout文件";
        default:
          return "Checkout";
      }
    }
  }
};
</script>