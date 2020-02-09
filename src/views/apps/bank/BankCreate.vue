<template>
<div>
  <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-input class="w-full"  label="IFSC code" v-model="ifsc_code" />
    </div>
  </div>

  <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-input class="w-full" label="Bank Name" v-model="bank_name" />
    </div>
  </div>
  
  <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-input class="w-full" label="Branch Name" v-model="branch_name" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vs-button @click="submit" class="mr-3 mb-2">Submit</vs-button>
      <vs-button color="warning" type="border" class="mb-2" >Reset</vs-button>
    </div>
  </div>
</div>
</template>
<script>
import axios from "@/axios.js";
export default {
  
  data(){
    return{
      ifsc_code:'',
      bank_name:'',
      branch_name:''
    }
  },
  methods: {
    submit(){
      const data = {
        ifsc: this.ifsc_code,
        bank_name: this.bank_name,
        branch_name: this.branch_name
      }
      axios.post('/api/bankbranch',data)
    }
  }
  
}
</script>
