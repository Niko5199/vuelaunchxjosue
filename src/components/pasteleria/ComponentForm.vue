<template>
  <form action="" class="formulario">
    <h2>Formulario</h2>
    <div>
      <div class="item">
        <label for="name" class="label">Nombres: </label>
        <input
          type="text"
          placeholder="Ingresa tus nombres"
          maxlength="30"
        /><br />
      </div>
      <div class="item">
        <label for="name" class="label">Apellidos: </label>
        <input
          type="text"
          placeholder="Ingresa tus apellidos"
          maxlength="30"
        /><br />
      </div>
      <div class="item">
        <label for="name" class="label">Correo: </label>
        <input type="email" placeholder="Ingresa tu email" /><br />
      </div>
      <div class="item">
        <label for="name" class="label">Telefono: </label>
        <input type="tel" placeholder="Ingresa tu Telefono" /><br />
      </div>
      <div class="item">
        <label for="descripcion" class="descripcion">Descripción:</label><br />
        <textarea name="texto" id="textarea" cols="30" rows="10"></textarea>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ComponentForm',
};
</script>

<style scoped>
.formulario {
  margin: 0px auto;
  width: 500px;
  border: 1px solid #ccc;
  box-shadow: 10px 5px 5px #ccc;
  color: #3fb27f;
  font-weight: bold;
}

.formulario div {
  padding: 10px;
}

.formulario .class {
  padding: 10px;
}

.formulario input {
  border-radius: 10px;
  height: 18px;
}
</style>
