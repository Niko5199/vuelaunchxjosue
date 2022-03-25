<template>
  <div class="adornos">
    <h2>Selecciona tu Adorno</h2>
    <div>
      <div class="ador">
        <input type="checkbox" id="adorno1" class="adorno1" value="moño" />
        <label for="adorno1">Moño $30</label><br />
      </div>
      <div class="ador">
        <input type="checkbox" id="adorno2" class="adorno2" value="osos" />
        <label for="adorno2">Osos de Gomita $20</label><br />
      </div>

      <div class="ador">
        <input type="checkbox" id="adorno3" class="adorno3" value="crema" />
        <label for="adorno3">Crema $50</label><br />
      </div>

      <div class="ador">
        <input type="checkbox" id="adorno1" class="adorno1" value="papel" />
        <label for="adorno1">Papel $30</label><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentAd',
};
</script>

<style scoped>
.adornos {
  margin: 0px auto;
  width: 500px;
  border: 1px solid #ccc;
  box-shadow: 10px 5px 5px #ccc;
}
.adornos div {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
</style>
