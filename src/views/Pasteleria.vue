<template>
  <div class="container">
    <ComponentInfo />
    <div class="containers">
      <ComponentSab />
      <ComponentAd />
    </div>
    <div class="containers-2">
      <ComponentSAP />
      <ComponentAdP />
    </div>
    <ComponentForm />
  </div>
</template>

<script>
import ComponentInfo from '@/components/pasteleria/ComponentInfo.vue';
import ComponentSab from '@/components/pasteleria/ComponentSab.vue';
import ComponentAd from '@/components/pasteleria/ComponentAd.vue';
import ComponentSAP from '@/components/pasteleria/ComponentSAP.vue';
import ComponentAdP from '@/components/pasteleria/ComponentAdP.vue';
import ComponentForm from '@/components/pasteleria/ComponentForm.vue';

export default {
  name: 'Pasteleria',
  components: {
    ComponentInfo,
    ComponentSab,
    ComponentAd,
    ComponentSAP,
    ComponentAdP,
    ComponentForm,
  },
};
</script>

<style scoped>
.container .frm {
  display: flex;
}

.containers {
  display: flex;

  margin: 10px;
  padding: 40px;
  color: #3fb27f;
  font-weight: bold;
}

.containers-2 {
  display: flex;

  margin: 10px;
  padding: 40px;
  color: #3fb27f;
  font-weight: bold;
}
</style>
