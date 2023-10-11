const containerCards = document.querySelector("#listado-ventas");

const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Camper acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este camper acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panpramica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Condominio acogedor en zona céntrica",
    src: "https://beltafrajumar.com/wp-content/uploads/2021/03/exterior-apartamento-de-lujo-atardecer.jpg",
    descripcion:
      "Este moderno condominio cuenta con todas las comodidades para vivir sin ninguna preocupación",
    ubicacion: "1634 York Ave, New York, NY 10028",
    habitaciones: 7,
    baños: 6,
    costo: "12.000",
    smoke: true,
    pets: false,
  },
];

const buildingCards = () => {
  propiedadesVenta.forEach((propiedades) => {
    const card = document.createElement("div");
    card.className = `col-md-4 mb-4`;
    card.innerHTML = `
  <div class="card">
    <img src=${propiedades.src} />
    <div class="card-body">
      <h5 class="card-title">${propiedades.nombre}</h5>
      <p class="card-text">
        ${propiedades.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i>${propiedades.habitaciones} |
        <i class="fas fa-bath"></i>${propiedades.baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
        ${
          propiedades.smoke
            ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
            : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }
        ${
          propiedades.pets
            ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
            : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
        }
    </div>
  </div>
    `;

    containerCards.appendChild(card);
  });
};

buildingCards();