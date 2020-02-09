<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <!-- <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link> -->
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">
      <div class="vx-row">
        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Information" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">IFSC COde</td>
                <td>{{ user_data.ifsc }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Bank Name</td>
                <td>{{ user_data.bank_name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Branch Name</td>
                <td>{{ user_data.branch_name }}</td>
              </tr>
            </table>
          </vx-card>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      user_data: null,
      user_not_found: false,
    }
  },
  
  async created() {
    const bankId = this.$route.params.bankId
    let response =  await axios.get('/api/bankbranch/'+ bankId)
    this.user_data = response.data.data
  },
  }


</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }


@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }

}

</style>
