<template>
  <main class="mt-5">
    <div class="row mb-5">
      <h3 class="mb-5">Header Classes</h3>
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6" :key="i">
            <td scope="row">
              <code>
                &lt;p <span class="text-primary">class</span>=<span
                  class="text-primary"
                  >"h{{ i }}"</span
                >&gt; </code
              >h{{ i }} Heading<code> &lt;/p&gt; </code>
            </td>
            <td>
              <p :class="'h' + i">h{{ i }} Heading</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row mb-5">
      <div class="col">
        <h3 class="mb-3">Secondary Text</h3>
        <div class="card">
          <div class="card-body">
            <h3>
              This is a heading <small class="text-muted">sub heading</small>
            </h3>
          </div>
          <div class="card-footer">
            <code>
              &lt;h3&gt;
              <p class="ms-3 mb-0 text-dark">This is a heading</p>
              <span class="ms-3">
                &lt;small
                <span class="text-primary">class</span>="text-muted"&gt;<span
                  class="text-dark"
                  >sub heading</span
                >&lt;/small&gt; </span
              ><br />
              &lt;/h3&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col">
        <h3 class="mb-3">Lead</h3>
        <div class="card">
          <div class="card-body">
            <p class="lead">This is a lead paragraph</p>
            <p>This is a paragraph</p>
          </div>
          <div class="card-footer">
            <code>
              &lt;p <span class="text-primary">class</span>="lead"&gt;
              <p class="ms-3 mb-0 text-dark">This is a lead paragraph</p>
              &lt;/p&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col">
        <h3 class="mb-3">Blockquote</h3>
        <div class="card">
          <div class="card-body">
            <figure>
              <blockquote class="blockquote">
                <p>A well known quote, in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div class="card-footer">
            <code>
              &lt;figure&gt;
              <p class="ms-3 mb-0">
                &lt;blockquote
                <span class="text-primary">class</span>="blockquote"&gt;<br />
                <span class="ms-3">
                  &lt;p&gt;<span class="text-dark"
                    >A well known quote, in a blockquote element.</span
                  >&lt;/p&gt; </span
                ><br />
                &lt;/blockquote&gt;<br />
                &lt;figcaption
                <span class="text-primary">class</span
                >="blockquote-footer"&gt;<br />
                <span class="ms-3">
                  &lt;p&gt;<span class="text-dark">Someone famous in</span>
                  &lt;cite <span class="text-primary">title</span>="Source
                  Title"&gt;<span class="text-dark">Source Title</span
                  >&lt;/cite&gt;&lt;/p&gt; </span
                ><br />
                &lt;/figcaption&gt;<br />
              </p>
              &lt;/figure&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Typography",
};
</script>

<style scoped>
</style>