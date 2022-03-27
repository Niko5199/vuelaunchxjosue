import { createStore } from 'vuex';

export default createStore({
  state: {
    // * Sabores
    cantidadCho: '100 klg',
    precioCho: 'Chocolate $180',
    cantidadVai: '40 klg',
    precioVai: 'Vainilla $150',
    cantidadFres: '72 klg',
    precioFres: 'Fresa $134',

    // * Adornos
    adornoCrem: '30 klg',
    precioCrem: 'Crema $50',
    adornoMoño: '100 pzas',
    precioMoño: 'Moño $30',
    adornoOsos: '20 klg',
    precioOsos: 'Osos de Gomita $20',
    adornoPapel: '32 mts',
    precioPapel: 'Papel $30',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
