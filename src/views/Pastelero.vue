<template>
  <div class="container">
    <div class="item-flx">
      <ComponentSab />
    </div>
    <ComponentTable />
  </div>
</template>

<script>
import ComponentSab from '../components/pastelero/ComponentSab.vue';
import ComponentTable from '../components/pastelero/ComponentTable.vue';

export default {
  name: 'Pastelero',
  components: {
    ComponentSab,
    ComponentTable,
  },
};
</script>
