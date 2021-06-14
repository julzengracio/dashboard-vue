<template>
  <div>
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Typography</li>
        </ol>
      </nav>
    </header>
    <main class="mt-5">
      <h3 class="mb-5">Header Classes</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6" :key="i">
            <td scope="row align-middle">
              <code>
                &lt;p <span class="text-primary">class</span>=<span class="text-primary">"h{{i}}"</span>&gt;
              </code>h{{i}} Heading<code>
                &lt;/p&gt;
              </code>
            </td>
            <td>
              <p :class="'h'+ i">h{{i}} Heading</p>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  name: "Typography",
};
</script>

<style scoped>
</style>