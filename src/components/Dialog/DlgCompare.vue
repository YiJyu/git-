<template>
  <v-dialog v-model="CompareDlg"
            scrollable
            max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="teal darken-1"
             style="width:130px"
             dark
             v-on="on">比對檔案</v-btn>
    </template>
    <v-card>
      <v-card-title class="teal darken-1 font-weight-bold justify-center white--text ">比對檔案</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-list>
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
      <v-divider></v-divider>
      <v-card-actions>
        <v-row justify="center">
          <v-btn class="teal darken-1 white--text"
                 @click="CompareDlg=false">關閉</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    CompareDlg: false, //是否顯示此dialog
    items: [
      //比對資料
      "CapOne/DBModels/SqlServer1.generated.cs",
      "IISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISS/Areas/IISS/Controllers/AttachmentController.cs",
      "IISS/Areas/IISS/Controllers/ReportController.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_DlgAttachment.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsAFORD.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtml",
      "CapOne/DBModels/SqlServer1.generated.cs",
      "IISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISS/Areas/IISS/Controllers/AttachmentController.cs",
      "IISS/Areas/IISS/Controllers/ReportController.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_DlgAttachment.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsAFORD.cshtmlIISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtml",
      "CapOne/DBModels/SqlServer1.generated.cs",
      "IISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISS/Areas/IISS/Controllers/AttachmentController.cs",
      "IISS/Areas/IISS/Controllers/ReportController.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_DlgAttachment.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsAFORD.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtmlIISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtml",
      "CapOne/DBModels/SqlServer1.generated.cs",
      "IISS/Areas/IISS/Controllers/AlertDetailController.cs",
      "IISS/Areas/IISS/Controllers/AttachmentController.cs",
      "IISS/Areas/IISS/Controllers/ReportController.cs",
      "IISS/Areas/IISS/Views/AlertDetail/_DlgAttachment.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsAFORD.cshtml",
      "IISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtmlIISS/Areas/IISS/Views/AlertDetail/_PartialAlertInsHIVOL.cshtml"
    ]
  })
};
</script>