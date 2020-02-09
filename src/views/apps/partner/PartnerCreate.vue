<template>
  <form-wizard color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Submit">
    <tab-content title="Step 1" class="mb-5" icon="feather icon-home" :before-change="validateStep1">

      <!-- tab 1 content -->
      <form data-vv-scope="step-1">
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input label="Partner Name" v-model="agencyName" class="w-full" name="package_title" v-validate="'required|alpha_spaces'" />
          <span class="text-danger">Title is Required is required</span>
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input label="Partner Code"  v-model="partnerCode" class="w-full" name="partner_code" v-validate="'required|alpha_spaces'" />
          <span class="text-danger">Partner Code is required</span>
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input type="number" label="Available quantity"  v-model="total_availability_quantity" class="w-full" name="total_availability_quantity" v-validate="'required|integer'" />
          <span class="text-danger">Quantity is required</span>
        </div>
        <div class="vx-col md:w-1/2 w-full mt-5">
          <vs-input type = "number" v-model="validity_day" class="w-full select-large" label="Validity Days" name = 'validity_day' v-validate ="'required|numeric'" />
            <!-- <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" /> -->
        </div>
      </div>
      </form>
    </tab-content>

    <!-- tab 2 content -->
    <tab-content title="Step 2" class="mb-5" icon="feather icon-briefcase" :before-change="validateStep2">
      <form data-vv-scope="step-2">
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full">
          <vs-input type = 'number' label="Adult Price" v-model="adultPrice" class="w-full mt-4" name="adult_price" v-validate="'required|numeric'" />
          <span class="text-danger"></span>

          <vs-input type= "number" label="Child Price"  v-model="childPrice" class="w-full mt-4" name="child_price" v-validate="'required|numeric'" />
          <span class="text-danger"></span>
        </div>
        <div class="vx-col md:w-1/2 w-full">
          <vs-textarea v-model="textarea" label="Short discription" class="md:mt-10 mt-6 mb-0" rows="5" />
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
      packageTitle: "",
      partnerCode: "",
      total_availability_quantity: "",
      validity_day: 1,
      adultPrice: "",
      childPrice: "",
      textarea: "",
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
