<template>
  <div class="sabores">
    <h2>Selecciona tu sabor</h2>

    <div>
      <div class="sab">
        <input type="checkbox" id="sabor1" name="sabor1" value="Chocolate" />
        <label for="sabor1">Chocolate $180</label>
      </div>
      <div class="sab">
        <input type="checkbox" id="sabor2" name="sabor2" value="Vainilla" />
        <label for="sabor2">Vainilla $150</label><br />
      </div>
      <div class="sab">
        <input type="checkbox" id="sabor3" name="sabor3" value="Fresa" />
        <label for="sabor3">Fresa $180</label><br /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentSab',
};
</script>

<style scoped>
.sabores {
  margin: 0px auto;
  width: 500px;
  border: 1px solid #ccc;
  box-shadow: 10px 5px 5px #ccc;
}
.sabores div {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
