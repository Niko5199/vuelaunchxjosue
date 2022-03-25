<template>
  <div class="sab-personalizados">
    <h3>Dinos tus adornos favoritos</h3>
    <div>
      <div class="sabor-personalizado">
        <label>Dinos tu 1er adornos:</label>
        <input type="text" />
      </div>
      <div class="sabor-personalizado">
        <label>Dinos tu 2nd adorno:</label>
        <input type="text" />
      </div>
    </div>
    <div class="sabor-personalizado">
      <label>Adorno opcional:</label>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentAdP',
};
</script>

<style scoped>
.sab-personalizados {
  margin: 0px auto;
  width: 500px;
  border: 1px solid #ccc;
  box-shadow: 10px 5px 5px #ccc;
}
.sabores div {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.sabor-personalizado {
  padding: 10px;
}

.sabor-personalizado input {
  border-radius: 10px;
  height: 18px;
}
</style>
