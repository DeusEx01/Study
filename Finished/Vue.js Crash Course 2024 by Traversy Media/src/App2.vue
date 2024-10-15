<script>
export default {
  data() {
    return {
      name: 'Alex Elers',
      status: 'active',
      tasks: [
        'Task 1',
        'Task 2', 
        'Task 3',
      ],
      link: 'https://www.youtube.com/watch?v=VeNfHj6MhgA'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if(this.status === 'pending') {
        this.status =  'inactive'
      } else {
        this.status = 'active'
      }
    }
  }
}
</script>


<template>
<h1>Hello, {{ name  }}</h1>
<p v-if="status === 'active'">User is active</p>
<p v-else-if="status === 'pending'">Now User is pending</p>
<p v-else="status">User is inactive</p>

<h2>Tasks below</h2>
<ul>
  <li v-for="task in tasks" :key="task"> {{ task }} </li>
</ul>
<a :href="link">TEXT IS HERE</a>
<a :href="link">TEXT IS HERE</a>
<br />
<button @click="toggleStatus">Change Status</button>
</template>

<style scoped>
button {
  padding: 10px;
  border-radius: 20px;
  width: 190px;
}
* {
  font-size: 25px;
}
h1 {
  font-size: 35px;
  color: purple;
}
</style>