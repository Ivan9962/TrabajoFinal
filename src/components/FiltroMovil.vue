<template>
  <div>
    <b-container
      display: none
      class="
        mt-4
        menuIzquierdo
        d-block d-lg-none d-xl-none d-xxl-none
      "
    >

      

      <b-row class="mb-2 mt-2">
        <b-col class="mt-2">
          Estado del telefono
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col>
          <b-form-select @change="set_publicaciones_filtradas(false)" v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>

      <!-- filtro para marcas -->
      <label for="marca" class="mb-1">Marca</label>

      <b-form-group   v-slot="{ ariaDescribedby }">
        <b-list-group-item v-for="(marca,key) in listaMarcas"  :key="key" class=" d-flex justify-content-between align-items-center ">
            <b-form-checkbox @change="set_publicaciones_filtradas()" v-model="seleccion_marca" :value="marca" :aria-describedby="ariaDescribedby">
            <label for="" class="ml-3 texts">{{ marca }}</label>
            </b-form-checkbox>
            <b-badge class="items ml-3"  pill></b-badge>
        </b-list-group-item>
      </b-form-group>
       
      <label for="sistema" class="mb-1 mt-2">Sistema</label>
      <b-form-group   v-slot="{ ariaDescribedby }">
        <b-list-group-item v-for="(sistema,key) in listaSistemas"  :key="key" class=" d-flex justify-content-between align-items-center ">
            <b-form-checkbox @change="set_publicaciones_filtradas()" v-model="seleccion_sistema" :value="sistema" :aria-describedby="ariaDescribedby">
            <label for="" class="ml-3 texts">{{ sistema }}</label>
            </b-form-checkbox>
            <b-badge class="items ml-3"  pill></b-badge>
        </b-list-group-item>
      </b-form-group>
      

      

      
      
    </b-container>
  </div>
</template>

<script>
import { db } from "../db";
export default {
  data() {
    return {
      listaMarcas: ["Samsung", "Nokia", "Huawei", "iPhone", "Xiaomi"],
      listaSistemas: ["Android", "Windows", "ios"],
      listaPantallas: ["6", "5.5", "5"],
      selected: 'Ambos',
      options: [
        { value: "Nuevo", text: "Nuevo" },
        { value: "Usado", text: "Usado" },
        { value: "Ambos", text: "Ambos" },
      ],

      seleccion_marca: [],
      seleccion_sistema: [],
      seleccion_pantalla: [],

      publicaciones: [],
    };
  },

  firestore: {
    publicaciones: db.collection("publicaciones"),
  },

  methods: {

    set_publicaciones_filtradas() {
      
      
      const estado = this.selected
      const marca = this.seleccion_marca
      const sistema = this.seleccion_sistema
      const pantalla = this.seleccion_pantalla
      let publicaciones = this.publicaciones.slice()
      let data_filtrada = []

      //Comenzamos a filtrar por estado
      publicaciones.forEach((element) => {
        //comprobamos que haya seleccionado un estado de telefono
        if (estado != "Ambos") {
          //seleccionara solo nuevos o usados dependiendo del filtro que se selecciono
          if (element.estado === estado) {
            //verificamos que tambien se filtrara por marcas de lo contrario lo omitimos
            if (marca.length != 0) {
              //iteramos las marcas que selecciono el usuario hasta encontrar coincidencias
              marca.forEach((element_marca) => {
                if (element.marca === element_marca) {
                  //verificamos si se filtrara por sistema
                  if (sistema.length != 0) {
                    //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
                    sistema.forEach((element_sistema) => {
                      if (element.sistema === element_sistema) {
                        //verificamos si se va a filtrar por pantalla
                        if (pantalla.length != 0) {
                          //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                          pantalla.forEach((element_pantalla) => {
                            //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                            if (element.pantalla === element_pantalla) {
                              data_filtrada.push(element);
                            } 

                          });

                          //se omite el filtro de pantalla y se agrega la coincidencia si existe
                        } else {
                          //agregamos la coincidencia
                          data_filtrada.push(element);
                        }
                      } 

                    });

                    //se omite filtro de sistema
                  } else {
                    //verificamos si se va a filtrar por pantalla
                    if (pantalla.length != 0) {
                      //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                      pantalla.forEach((element_pantalla) => {
                        //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                        if (element.pantalla === element_pantalla) {
                          data_filtrada.push(element);
                        } 

                      });

                      //se omite el filtro de pantalla y se agrega la coincidencia si existe
                    } else {
                      //agregamos la coincidencia
                      data_filtrada.push(element);
                    }
                  }
                } 

              });

              //se omite el filtro de marca
            } else {
              //verificamos si se filtrara por sistema
              if (sistema.length != 0) {
                //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
                sistema.forEach((element_sistema) => {
                  if (element.sistema === element_sistema) {
                    //verificamos si se va a filtrar por pantalla
                    if (pantalla.length != 0) {
                      //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                      pantalla.forEach((element_pantalla) => {
                        //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                        if (element.pantalla === element_pantalla) {
                          data_filtrada.push(element);
                        } 

                      });

                      //se omite el filtro de pantalla y se agrega la coincidencia si existe
                    } else {
                      //agregamos la coincidencia
                      data_filtrada.push(element);
                    }
                  } 

                });

                //se omite filtro de sistema
              } else {
                //verificamos si se va a filtrar por pantalla
                if (pantalla.length != 0) {
                  //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                  pantalla.forEach((element_pantalla) => {
                    //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                    if (element.pantalla === element_pantalla) {
                      data_filtrada.push(element);
                    } 

                  });

                  //se omite el filtro de pantalla y se agrega la coincidencia si existe
                } else {
                  //agregamos la coincidencia
                  data_filtrada.push(element);
                }
              }
            }
          }

        } else {
          //aca no importa si es nuevo o usado
          if (estado === "Ambos" || estado === 'null') {
            if (marca.length != 0) {
              //iteramos las marcas que selecciono el usuario hasta encontrar coincidencias
              marca.forEach((element_marca) => {
                if (element.marca === element_marca) {
                  //verificamos si se filtrara por sistema
                  if (sistema.length != 0) {
                    //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
                    sistema.forEach((element_sistema) => {
                      if (element.sistema === element_sistema) {
                        //verificamos si se va a filtrar por pantalla
                        if (pantalla.length != 0) {
                          //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                          pantalla.forEach((element_pantalla) => {
                            //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                            if (element.pantalla === element_pantalla) {
                              data_filtrada.push(element);
                            } 

                          });

                          //se omite el filtro de pantalla y se agrega la coincidencia si existe
                        } else {
                          //agregamos la coincidencia
                          data_filtrada.push(element);
                        }
                      } 

                    });

                    //se omite filtro de sistema
                  } else {
                    //verificamos si se va a filtrar por pantalla
                    if (pantalla.length != 0) {
                      //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                      pantalla.forEach((element_pantalla) => {
                        //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                        if (element.pantalla === element_pantalla) {
                          data_filtrada.push(element);
                        } 

                      });

                      //se omite el filtro de pantalla y se agrega la coincidencia si existe
                    } else {
                      //agregamos la coincidencia
                      data_filtrada.push(element);
                    }
                  }
                } 

              });

              //se omite el filtro de marca
            } else {
              //verificamos si se filtrara por sistema
              if (sistema.length != 0) {
                //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
                sistema.forEach((element_sistema) => {
                  if (element.sistema === element_sistema) {
                    //verificamos si se va a filtrar por pantalla
                    if (pantalla.length != 0) {
                      //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                      pantalla.forEach((element_pantalla) => {
                        //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                        if (element.pantalla === element_pantalla) {
                          data_filtrada.push(element);
                        } else {
                          console.log(
                            "no se econtraron resultados para " +
                              element_pantalla +
                              " pulgadas"
                          );
                        }
                      });

                      //se omite el filtro de pantalla y se agrega la coincidencia si existe
                    } else {
                      //agregamos la coincidencia
                      data_filtrada.push(element);
                    }
                  } 

                });

                //se omite filtro de sistema
              } else {
                //verificamos si se va a filtrar por pantalla
                if (pantalla.length != 0) {
                  //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                  pantalla.forEach((element_pantalla) => {
                    //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                    if (element.pantalla === element_pantalla) {
                      data_filtrada.push(element);
                    } 

                  });

                  //se omite el filtro de pantalla y se agrega la coincidencia si existe
                } else {
                  //agregamos la coincidencia
                  data_filtrada.push(element);
                }
              }
            }
          }
        }
      });

      this.$emit("datos_filtrados", data_filtrada);
      
      
    },
  },
};


</script>

<style scoped>
.menuIzquierdo {
  width: 100%;
  scroll-behavior: smooth;
}

.items {
  background-color: #b4846c;
}






</style>
