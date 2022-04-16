<template>
  <main class="login">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Register</h2>
        <input type="email" placeholder="Email address" v-model="register_form.email">
        <input v-model="register_form.password" type="password" placeholder="Password" />
        <input type="submit" value="Register">
      </form>
      <form class="login" @submit.prevent="login">
        <h2>Login</h2>
        <input type="email" placeholder="Email address" v-model="login_form.email">
        <input v-model="login_form.password" type="password" placeholder="Password" />
        <input type="submit" value="Login">
      </form>
    </section>
  </main>
</template>

<script setup>
import { useStore } from '../stores/user'
import { ref } from 'vue';

const login_form = ref({})
const register_form = ref({})
const store = useStore();

const login = async () => {
  store.login(login_form.value)
}
const register = async () => {
  store.register(register_form.value)
}

</script>

<style scoped>

.forms{
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}
  h2{
    font-size: 2rem;
    color: #fff;
    text-align: center;
  }

  form{
    display: flex;
    flex-direction: column;
    max-width: 15rem;
    gap: 1rem;
    margin-top: 2rem;
  }

  input{
    transition: all 0.5s ease;

  }
  input[type="email"], input[type="password"]{
    padding: 0.5rem;
    border: 5px solid transparent;
    border-radius: 6px;
  }
  input[type="submit"]{
    border: 5px solid transparent;

    background-color: #cbf557;
    color: #333;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 16px;
  }
  input[type="email"]:focus,
  input[type="password"]:focus{
    outline: none;
    border: 5px solid #cbf557;
  }
  input[type="submit"]:focus{
    outline: none;
    border: 5px solid #cbf557;
    background-color: #fff;
    color: #333;
  }
  input[type="submit"]:hover{
    transform: scale(1.05);
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.233);
  }
  input[type="submit"]:active{
    transform: scale(1);
    box-shadow: inset 5px 5px 10px rgba(54, 54, 54, 0.233);
  }
</style>