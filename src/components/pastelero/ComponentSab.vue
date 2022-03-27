<template>
  <div class="sab-restantes">
    <div class="item">
      <h2>Sabores</h2>

      <label for="Sabores">Sabores: <span>3</span></label
      ><br />
      <label for="Sabores"
        >Chocolate: <span>{{ $store.state.cantidadCho }}</span></label
      ><br />
      <label for="Sabores"
        >Vainilla: <span>{{ $store.state.cantidadVai }}</span></label
      ><br />
      <label for="Sabores"
        >Fresa: <span>{{ $store.state.cantidadFres }}</span></label
      ><br />
    </div>
    <div class="item">
      <h2>Adornos</h2>

      <label for="Sabores"
        >Crema: <span>{{ $store.state.adornoCrem }}</span></label
      ><br />
      <label for="Sabores"
        >Moño: <span>{{ $store.state.adornoMoño }}</span></label
      ><br />
      <label for="Sabores"
        >Osos de Gomita: <span>{{ $store.state.adornoOsos }}</span></label
      ><br />
      <label for="Sabores"
        >Papel: <span>{{ $store.state.adornoPapel }}</span></label
      ><br />
    </div>
  </div>
</template>

<style scoped>
.sab-restantes {
  display: flex;
  justify-content: center;
  color: #3fb27f;
  font-weight: bold;
}

.item {
  margin: 20px;
  padding: 20px;
}
</style>
