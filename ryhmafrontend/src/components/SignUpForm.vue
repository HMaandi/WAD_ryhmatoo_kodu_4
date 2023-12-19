<template>
    <form @submit.prevent="signup">
        <div>
            <h2>Sign Up</h2>
            <label>Email</label>
            <input v-model="email" type="email" required/>
            <label>Password</label>
            <input v-model="password" type="password" required/>
            <button type="submit">Sign Up</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "SignUpForm",
        data() {
            return {
                email: "",
                password: "",
            };
        },
        methods: {
            async signup() {
                var data = {
                    email: this.email,
                    password: this.password,
                };
                fetch("http://localhost:3000/api/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.status === 400) {
                        alert("User is already registered!");
                    }
                    else{
                        alert("User was successfully registered!")
                        this.email = "";
                        this.password = "";
                    }
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });
            }
        }
    }
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

button {
  border-radius: 5px;
  padding: 10px;
  background-color: #007bff; /* You can change the color to your preference */
  color: white;
  cursor: pointer;
}

</style>