<template>
  <form-wizard color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Submit">
    <tab-content title="Step 1" class="mb-5" icon="feather icon-home" :before-change="validateStep1">

      <!-- tab 1 content -->
      <form data-vv-scope="step-1">
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input label="User id" v-model="userId" class="w-full" name="user_id" v-validate="'required|integer'" />
          <span class="text-danger">User id is Required is required</span>
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input label="Agency Name" v-model="agencyName" class="w-full" name="agency_name" v-validate="'required|alpha_spaces'" />
          <span class="text-danger">Agency is Required is required</span>
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input label="Owner Name"  v-model="ownerName" class="w-full" name="owner_name" v-validate="'required|alpha_spaces'" />
          <span class="text-danger">Owner Name is required</span>
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input  label="Office Address"  v-model="officeAddress" class="w-full" name="office_address" v-validate="'required|integer'" />
          <span class="text-danger">Please enter the office address</span>
        </div>
      </div>
      </form>
    </tab-content>

    <!-- tab 2 content -->
    <tab-content title="Step 2" class="mb-5" icon="feather icon-briefcase" :before-change="validateStep2">
      <form data-vv-scope="step-2">
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full">
          <vs-input label="Registered Name" v-model="registeredName" class="w-full mt-4" name="regiteredName" v-validate="'required|alpha_spaces'" />
          <span class="text-danger"></span>
          <vs-input  label="Registered Address Pin"  v-model="registeredAddressPin" class="w-full mt-4" name="register_address_pin" v-validate="'required|alpha_space'" />
          <span class="text-danger"></span>
        </div>
        <div class="vx-col md:w-1/2 w-full">
          <vs-input  label="Registered Address"  v-model="registeredAddress" class="w-full mt-4" name="register_address" v-validate="'required|alpha_space'" />
        </div>
      </div>
      </form>
    </tab-content>

    <!-- tab 3 content -->
    <tab-content title="Step 3" class="mb-5" icon="feather icon-image" :before-change="validateStep3">
      <form data-vv-scope="step-3">
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full">
          <vs-input label="Includes" v-model="includes" class="w-full mt-5" name="includes" v-validate="'required|alpha_spaces'" />
          <span class="text-danger"></span>
        </div>
        <div class="vx-col md:w-1/2 w-full">
          <vs-input v-model="excludes" class="w-full select-large mt-5" label="Excludes" v-validate = "'required|numeric'">
        </vs-input>
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-select v-model="status" class="w-full select-large" label="Event Status">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />
          </vs-select>
        </div>
        <div class="vx-col md:w-1/2 w-full md:mt-8">
          <div class="demo-alignment">
            <span>Requirements:</span>
            <div class="flex">
              <vs-checkbox>Staffing</vs-checkbox>
              <vs-checkbox>Catering</vs-checkbox>
            </div>
          </div>
        </div>
      </div>
      </form>
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

// For custom error message
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    package_title: {
      required: 'Package title is required',
      alpha: "Package title may only contain alphabetic characters"
    },
    partner_code: {
      required: 'Last name is required',
      alpha_num: "Last name may only contain alphanumeric characters"
    },
    validity_day: {
        required: 'Validity days required',
        numeric : "Days contain numerical value"
    },
    total_availability_quantity: {
      required: 'Email is required',
      numeric: "Please enter valid number"
    },
    child_price: {
      required: 'Job title name is required',
      alpha: "Job title may only contain alphabetic characters"
    },
    adult_price: {
      required: 'Adult Price is required',
      numeric: "Adult Pricemay only contain numerical value"
    },
    includes: {
      required: 'Event name is required',
      alpha: "Event name may only contain alphabetic characters"
    },
    excludes: {
      required: 'Event name is required',
      alpha: "Event name may only contain alphabetic characters"
    },

  }
};

// register custom messages
Validator.localize('en', dict);

export default {
  data() {
    return {
      userId:"",
      agencyName:"",
      ownerName: "",
      officeAddress:"",
      registeredName:"",
      registeredAddressPin:"",
      registeredAddress: "",

      includes: "",
      excludes: "",
      status: "plannning",
      statusOptions: [
        { text: "Pending", value: "pending" },
        { text: "In Progress", value: "in progress" },
        { text: "Published", value: "published" },
      ],
    }
  },
  methods: {
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-1').then(result => {
          if (result) {
            resolve(true)
          } else {
            reject("correct all values");
          }
        })
      })
    },
    validateStep2() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-2").then(result => {
          if (result) {
            resolve(true)
          } else {
            reject("correct all values");
          }
        })
      })
    },
    validateStep3() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-3").then(result => {
          if (result) {
            alert("Form submitted!");
            resolve(true)
          } else {
            reject("correct all values");
          }
        })
      })
    }
  },
  components: {
    FormWizard,
    TabContent
  }
}
</script>
