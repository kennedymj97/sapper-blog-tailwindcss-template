<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h1 class="mb-6 text-4xl">Blog</h1>
  {#each posts as post, index} {#if index}
  <hr class="my-4"/>
  {/if}
  <div class="">
    <h2 class="mb-2 text-2xl">
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </h2>
    <p class="mb-2">{post.excerpt}</p>
    <div class="">
      <span class="">— {post.printDate}</span>
    </div>
  </div>
  {/each}
</div>
