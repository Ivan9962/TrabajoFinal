<template>
  <div class="mt-3 p-2">
    <b-row>
      <b-col cols="3 d-none d-xl-block d-xxl-block">
        <left-menu @datos_filtrados="datosFiltrados"></left-menu>
      </b-col>

      <b-col cols="12" class="d-block d-lg-none d-xl-none d-xxl-none">
        <b-row>
          <b-col cols="12" class="mb-3">
            <b-button v-b-toggle.collapse-1 variant="secondary" class="mr-2"
              >Ordenar por:
            </b-button>

            <b-button v-b-toggle.collapse-2 variant="secondary"
              >Filtros
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-filter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </b-button>
          </b-col>

          <b-col cols="12">
            <b-collapse id="collapse-1" class="mt-2 mb-2">
              <b-card>
                <p class="card-text">
                  ¿Como quieres ordenar las publicaciones?
                </p>

                <b-row>
                  <b-col cols="12 " class="mb-2">
                    <b-button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-filter-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                      Ordenar por precio
                    </b-button>
                  </b-col>

                  <b-col cols="12">
                    <b-button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-calendar-event"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                        />
                        <path
                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                        />
                      </svg>
                      Ordenar por fecha
                    </b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-collapse>

            <b-collapse id="collapse-2" class="mt-2 mb-2">
              <filtro-movil @datos_filtrados="datosFiltrados"></filtro-movil>
            </b-collapse>
          </b-col>
        </b-row>
      </b-col>

      <b-col v-if="state_no_data != true">
        <b-row
          class="
            filtros-secundarios
            mb-3
            d-none d-lg-block d-xl-block d-xxl-block
          "
        >
          <!-- precios -->
          <b-col
            cols="6"
            class="
              d-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block
            "
          >
            <b-row>
                  <b-col class="filtro">
                    <b-row>
                      <b-col cols="4">
                        <label for="" class="labels-text mt-1">Desde</label>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                          id="input-horizontal"
                          size="sm"
                          class="input-rango-precio"
                        ></b-form-input>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-dollar icon"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                          />
                        </svg>
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col class="filtro">
                    <b-row>
                      <b-col cols="4">
                        <label for="" class="labels-text mt-1">Hasta</label>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                          id="input-horizontal"
                          size="sm"
                          class="input-rango-precio"
                        ></b-form-input>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-dollar icon"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                          />
                        </svg>
                      </b-col>
                    </b-row>
                  </b-col>
            </b-row>
          </b-col>

          <!-- ordenar por: -->
          <b-col
            cols="6"
            class="
              final-filtro1
              d-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block
            "
          >
            <b-row>
              <b-col>
                <b-row>
                  <b-col>
                    <b-row>
                      <b-col>
                        <label for="" class="labels-text mt-1"
                          >Ordenar por:</label
                        >
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col cols="6">
                    <b-row>
                      <b-col>
                        <b-form-select
                          size="sm"
                          @change="ordenar_precio(state_ordernar_precio)"
                          v-model="state_ordernar_precio"
                          :options="options"
                        ></b-form-select>
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col>
                    <b-row>
                      <b-col>
                        <b-button size="sm" variant="light" class="btn-fecha">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-calendar-event"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                            />
                            <path
                              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                            />
                          </svg>
                          Fecha</b-button
                        >
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row>
          <b-col
            class=""
            xl="3"
            xxl="3"
            sm="6"
            cols="6"
            v-for="(pub, key) in publicaciones"
            :key="key"
          >
            <!-- cards -->
            <b-container class="card-style mb-2 shadow">
              <b-row class="contenedor-imagen-card">
                <b-col>
                  <b-img
                    :src="pub.portada"
                    class="mt-2 img-size"
                    fluid
                    alt="Fluid image"
                  >
                  </b-img>
                </b-col>
              </b-row>

              <!-- titulo -->
              <b-row>
                <b-col>
                  <label for="" class="mt-2 titulo-card">{{
                    pub.titulo
                  }}</label>
                </b-col>
              </b-row>

              <!-- precio-->
              <b-row>
                <b-col>
                  <label for="" class="label-precio">${{ pub.precio }}</label>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-button
                    size="sm"
                    variant="outline-primary"
                    class="btn-style"
                    v-b-modal.modal-xl
                    @click="set_datos_modal(key)"
                  >
                    
                    Detalles</b-button
                  >
                </b-col>
                
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-col>

      <b-col class="mt-4" v-if="state_no_data === true">
        
        
      </b-col>
    </b-row>

    <!-- modal del producto -->

    <b-modal id="modal-xl" size="xl" hide-footer>
      <b-row>
        <!--  carousel del anuncio -->
        <b-col cols="12" lg="6" xl="6">
          <carousel v-bind:url="imagenes_publicacion"></carousel>
        </b-col>

        <!--  datos del usuario y-->
        <b-col cols="12" lg="6" xl="6">
          <b-row class="text-center mt-3">
            <b-col class="titulo_anuncio">
              {{ anuncio_seleccionado.titulo }}
            </b-col>
          </b-row>

          <b-row class="text-center mt-3">
            <b-col> $ {{ anuncio_seleccionado.precio }} </b-col>
          </b-row>

          <b-row class="d-none d-lg-block d-xl-block">
            <b-col>
              <b-button variant="success"> Agregar al carrito </b-button>
            
            </b-col>
          </b-row>

          <b-row class="mt-3 ml-2">
            <b-col> Vendedor: {{ anuncio_seleccionado.vendedor }} </b-col>
            <b-col> Telefono: {{ anuncio_seleccionado.telefono }} </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="text-center mt-5">
        <b-col
          cols="12 "
          class="mt-5 mb-3 d-none d-lg-block d-xl-block d-xxl-block"
          >DESCRIPCION Y ESPECIFICACIONES</b-col
        >

        <!-- especificaciones -->
        <b-col cols="12" lg="6" xl="6" class="text-left">
          <b-row class="shadow mr-1 ml-1 pt-2 pb-2 mb-3">
            <b-col class="ml-5">
              <b-row>
                <b-col> Estado: </b-col>
              </b-row>

              <b-row>
                <b-col> Marca: </b-col>
              </b-row>

              <b-row>
                <b-col> Modelo: </b-col>
              </b-row>

              <b-row>
                <b-col> Pantalla: </b-col>
              </b-row>

              <b-row>
                <b-col> S.O: </b-col>
              </b-row>

              <b-row>
                <b-col> ROM: </b-col>
              </b-row>

              <b-row>
                <b-col> RAM: </b-col>
              </b-row>
            </b-col>

            <b-col>
              <b-row>
                <b-col> {{ anuncio_seleccionado.estado }} </b-col>
              </b-row>

              <b-row>
                <b-col> {{ anuncio_seleccionado.marca }} </b-col>
              </b-row>

              <b-row>
                <b-col> {{ anuncio_seleccionado.modelo }} </b-col>
              </b-row>

              <b-row>
                <b-col> {{ anuncio_seleccionado.pantalla }} pulgadas </b-col>
              </b-row>

              <b-row>
                <b-col> {{ anuncio_seleccionado.sistema }} </b-col>
              </b-row>

              <b-row>
                <b-col> {{ anuncio_seleccionado.rom }} GB </b-col>
              </b-row>

              <b-row>
                <b-col> {{ anuncio_seleccionado.ram }} GB </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" lg="6" xl="6" class="mb-3">
          <b-row class="shadow mr-1 ml-1 pt-2 pb-2">
            <b-col>
              {{ anuncio_seleccionado.descripcion }}
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="fixed-bottom mb-1 d-block d-lg-none d-xl-none">
        <b-col class="text-center">
          <b-button size="lg"> Comprar </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { db } from "../db";
import { storage } from "../db";

const ref = storage.ref();
import LeftMenu from "./LeftMenu.vue";
import FiltroMovil from "./FiltroMovil.vue";
import Carousel from "./Carousel.vue";

export default {
  name: "ContenedorCards",

  components: {
    LeftMenu,
    FiltroMovil,
    Carousel,
  },

  data() {
    return {
      publicaciones: [],
      copia_publicaciones: null,
      state_no_data: false,
      state_ordernar_precio: null,

      anuncio_seleccionado: {
        titulo: "",
        vendedor: "",
        telefono: "",
        descripcion: "",
        estado: "",
        marca: "",
        modelo: "",
        pantalla: "",
        sistema: "",
        rom: "",
        ram: "",
        precio: "",
        id: "",
        portada: "",
      },

      options: [
        { value: "Ascendente", text: "Precio (Ascendente)" },
        { value: "Descendente", text: "Precio (Descendente)" },
        {value: "N/A", text: "No ordenar" }
      ],

      imagenes_publicacion: [],
    };
  },

  firestore: {
    publicaciones: db.collection("publicaciones"),
    copia_publicaciones: db.collection("publicaciones")
  },

  methods: {
    datosFiltrados(lista_publicaciones) {
      if (lista_publicaciones.length > 0) {
        this.publicaciones = lista_publicaciones;
        this.state_no_data = false;
      } else {
        this.state_no_data = true;
      }
    },

    set_datos_modal(posicion) {
      this.anuncio_seleccionado = this.publicaciones[posicion];
      this.get_imagenes_publicacion(this.anuncio_seleccionado.id);
    },

    get_imagenes_publicacion(id) {
      this.imagenes_publicacion = [];
      ref
        .child("/Imagenes/" + id)
        .listAll()
        .then((res) => {
          res.items.map((item) => {
            ref
              .child(item.location.path_)
              .getDownloadURL()
              .then((url) => {
                this.imagenes_publicacion.push(url);
              });
          });
        });
    },

    ordenar_precio(orden) {

      //let publicaciones_ordernadas = []
      let precios = [];
      let precios_ordenada = null;
      let copia = this.publicaciones.slice()

      if (orden === "Ascendente") {

        this.publicaciones = []

        this.copia_publicaciones.forEach((element) => {
          precios.push(element.precio);
        });

        //aca me quede
        precios_ordenada = precios.sort((a, b) => {
          return a - b;
        });

       
        //Aplicamos la busqueda para ordenar 
        precios_ordenada.forEach(element => {

          copia.forEach(element_publicaciones => {
            if(element == element_publicaciones.precio){
              this.publicaciones.push(element_publicaciones)
            }
          })

        })



        

       //Ascendente
      }else if(orden === 'Descendente'){

        this.publicaciones = []

        this.copia_publicaciones.forEach((element) => {
          precios.push(element.precio);
        });

        //tenemos los precios ordenados
        precios_ordenada = precios.sort((a, b) => {
          return b - a;
        });

        //Aplicamos la busqueda para ordenar 
        precios_ordenada.forEach(element => {

          copia.forEach(element_publicaciones => {
            if(element == element_publicaciones.precio){
              this.publicaciones.push(element_publicaciones)
            }
          })

        })




      }else{
        this.publicaciones = this.copia_publicaciones
      }

    },
  },
};
</script>

<style scoped>
:root {
  --gray: #6c757d;
  --gray-dark: #343a40;
  --dark: #343a40;
  --primary: #ffebc9;
}

.card-style {
  height: 14.5rem;
  transition: all 0.5s ease-in-out;
  transform: scale(1);
}

.card-style:hover {
  height: 14.5rem;
  transition: all 0.5s ease-in-out;
  transform: scale(1.1);
}

.img-size {
  width: 9rem;
  height: 6.1rem;
}

.contenedor-imagen-card {
  max-width: 14rem;
  max-height: 6rem;
}

.titulo-card {
  color: var(--gray);
  font-weight: bold;
}

.label-precio {
  color: #b4846c;
}

.btn-style {
  background-color: white;
  font-weight: bold;
  color: #b4846c;
  border: 1px solid #b4846c;
  border-radius: 10px;
  font-size: 12px;
}

.btn-style:hover {
  background: #a8775f;
  border: 1px solid #a8775f;
  color: white;
}

.btn-style:focus {
  background: #a8775f;
  color: white;
  box-shadow: none;
}

.time-publicacion {
  margin-top: 5px;
  font-size: 12px;
  color: var(--gray);
}

.estado_cell {
  background-color: #e6cca9;
  padding: 0;
  height: 21px;
  margin-left: 20px;
  margin-top: 5px;
  font-size: 13px;
  max-width: 60px;
  border: 1px #b4846c;
  border-radius: 10px;
  color: white;
  opacity: 5;
}

.filtros-secundarios {
  height: 2rem;
}

.labels-text {
  color: var(--gray);
}

.final-filtro1 {
  border: none;
  border-left: 2px solid #b4846c;
}

.filtro {
  position: relative;
}

.icon {
  position: absolute;
  top: 7px;
  left: 20px;
}

.input-rango-precio {
  text-indent: 15px;
}

.titulo-anuncio {
  font-size: 2rem;
  color: var(--gray);
  font-weight: bold;
}

.btn-fecha{
  background-color: white;
  width: 100px;
  border: 1px solid var(--gray);
}

.btn-fecha:hover{
  border: 1px solid var(--dark);
}
</style>
