<template>
  <div
    class="text-white text-center font-bold p-4 mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        :type="isPasswordVisible ? 'text' : 'password'"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <span class="eye--position object-left w-full">
        <!-- eslint-disable-next-line -->
        <i :class="isPasswordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'" @click="setIsPasswordVisibility" />
      </span>
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
        hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>

export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:6|max:32',
      },
      isPasswordVisible: false,
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_msg: 'Please wait! We are logging you in.',
    };
  },
  methods: {
    setIsPasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_msg = 'Please wait! We are logging you in.';

      try {
        await this.$store.dispatch('login', values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = 'bg-red-500';
        this.login_alert_msg = 'Invalid login details.';
        return;
      }

      this.login_alert_variant = 'bg-green-500';
      this.login_alert_msg = 'Success! You are now logged in.';
      window.location.reload();
    },
  },
};
</script>
<style>
.eye--position {
  cursor: pointer;
  justify-content: flex-end;
  display: flex;
  z-index: 10;
  position: absolute;
  margin-top: 44px;
  margin-left: -15px;
}
</style>
>
