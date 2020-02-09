<!-- =========================================================================================
  File Name: UserEdit.vue
  Description: User Edit Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-edit">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
             </span>
    </vs-alert>

    <vx-card v-if="user_data">

      <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-input class="w-full" :value = "user_data.ifsc"  label="IFSC code" v-model="user_data.ifsc" />
      
    </div>
  </div>

  <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-input class="w-full" :value = "user_data.bank_name" label="Bank Name" v-model="user_data.bank_name" />
    </div>
  </div>
  
  <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-input class="w-full" 
      :value = "user_data.branch_name" label="Branch Name" v-model="user_data.branch_name" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vs-button @click="submit" class="mr-3 mb-2">Submit</vs-button>
      <vs-button color="warning" type="border" class="mb-2" >Reset</vs-button>
    </div>
  </div>
    </vx-card>
  </div>
</template>

<script>
import UserEditTabAccount     from "./UserEditTabAccount.vue"
import UserEditTabInformation from "./UserEditTabInformation.vue"
import UserEditTabSocial      from "./UserEditTabSocial.vue"

import axios from "@/axios";

// Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'

export default {
  components: {
    UserEditTabAccount,
    UserEditTabInformation,
    UserEditTabSocial,
  },
  data() {
    return {
      user_data: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed

        Please check it's watcher
      */
      activeTab: 0,
    }
  },
  watch: {
    activeTab() {
      this.fetch_user_data(this.$route.params.bankId)
    }
  },
  methods: {
    async fetch_user_data(userId) {
      let response =  await axios.get('/api/bankbranch/'+ userId)
      this.user_data = response.data.data
    },
    submit(){
      const data = {
        ifsc: this.user_data.ifsc,
        bank_name: this.user_data.bank_name,
        branch_name: this.user_data.branch_name
      }
      axios.put('/api/bankbranch/'+ this.$route.params.bankId,data)
    }

  },
  created() {
    // Register Module UserManagement Module
    // if(!moduleUserManagement.isRegistered) {
    //   this.$store.registerModule('userManagement', moduleUserManagement)
    //   moduleUserManagement.isRegistered = true
    // }
    this.fetch_user_data(this.$route.params.bankId)
  }
}

</script>
