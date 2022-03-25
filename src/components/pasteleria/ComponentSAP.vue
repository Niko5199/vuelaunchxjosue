<template>
  <div class="sab-personalizados">
    <h3>Dinos tus sabores</h3>
    <div>
      <div class="sabor-personalizado">
        <label>Dinos tu 1er sabor:</label>
        <input type="text" />
      </div>
      <div class="sabor-personalizado">
        <label>Dinos tu 2nd sabor:</label>
        <input type="text" />
      </div>
    </div>
    <div class="sabor-personalizado">
      <label>Sabor opcional:</label>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentSAP',
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
