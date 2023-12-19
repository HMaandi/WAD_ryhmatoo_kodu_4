<template>
  <div id="login-page" class="signup-form">
    <form @submit.prevent="login">
      <h2>Login</h2>
      <label for="email">Email:</label>
      <input v-model="email" id="email" type="email" required />

      <label for="password">Password:</label>
      <input v-model="password" id="password" type="password" required />

      <div class="button-group">
        <button type="submit">Login</button>
        <span>Or</span>
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const data = {
        email: this.email,
        password: this.password
      };
      try {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });

        if (response.status === 200) {
          alert("Login successful!");
        } else {
          alert("Login failed!");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  }
};
</script>

<style scoped>
.signup-form {
  border-radius: 10px;
  padding: 20px;
  display: inline-block;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 15px;
  display: block;
}

button, .button-group a {
  border-radius: 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-group button, .button-group span, .button-group a {
  margin: 0 10px;
}
</style>