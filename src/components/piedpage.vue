<script>
export default {
  name: "foo-ter",
};
</script>

<template>
  <div class="footer">
    <div class="menulogo">
      <a href="#/"
        ><img
          class="logo"
          alt="Vue logo"
          src="../assets/navbar/Lakson-logo.png"
      /></a>
    </div>
    <div class="menufooter">All rights reserved.</div>
  </div>
</template>

<style>
.footer {
  /* position: absolute; */
  background-color: #cd2428;
  border: 1px solid #faf5d0;
  height: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* margin: 1rem; */
  color: #faf5d0;
  font-size: 1.2rem;
  font-family: "Cormorant Garamond", serif;
  font-weight: 100;
  /* bottom: 1rem;
  left: 1rem;
  right: 1rem; */
}
.menufooter {
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 1rem;
}
</style>