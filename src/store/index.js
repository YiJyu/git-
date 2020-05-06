import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repository:"",//選取的repository
    expAddRepo:false,//是否顯示「新增Repository的Expand區域」
    selectedCommit:[],//選取Commit
    allhide: false//判斷選擇Repository，是否顯示Branch或Commit
  }, 
  getters:{
  },
  mutations: {
    //儲存選取的repository
    ChangeRepository(state,repo) {
      state.repository=repo;
      state.allhide=true;
    },
    //選擇Repository後，重新選擇Branch
    HideCommit(state){
      state.allhide=false;
    },
    //改變是否顯示「新增Repository的Expand區域」
    ChangeExpRepoAdd(state) {
      state.expAddRepo=!state.expAddRepo;
    },
    //選擇的Commit儲存至共用state.selectedCommit
    SelectItems: function(state,_hashCode) {
      setTimeout(() => {
        //判斷是否已選取
        if (state.selectedCommit.indexOf(_hashCode) != -1) {
          state.selectedCommit.splice(state.selectedCommit.indexOf(_hashCode), 1);
          return;
        }

        //判斷選取個數不可超過兩個
        if (state.selectedCommit.length > 1) {
          state.selectedCommit.splice(0, 1);
        }
        state.selectedCommit.push(_hashCode);
      }, 100);
    }
  },
  actions: {
  },
  modules: {}
})