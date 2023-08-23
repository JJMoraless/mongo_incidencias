import db from "./config.js";

await db.createCollection("trainers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: "string",
          description: "El nombre es obligatorio y debe ser un string",
        },
        emailPersonal: {
          bsonType: "string",
          description: "El email personal es obligatorio",
        },
        emailCorporativo: {
          bsonType: "string",
          description: "El email corporativo es obligatorio",
        },
        telefonoMovil: {
          bsonType: "string",
          description: "El teléfono móvil es obligatorio",
        },
        telefonoResidencia: {
          bsonType: "string",
          description: "El teléfono de residencia es obligatorio",
        },
        telefonoEmpresa: {
          bsonType: "string",
          description: "El teléfono de la empresa es obligatorio",
        },
        salon_id: {
          bsonType: ["objectId", "null"],
          description: "El id del salón es obligatorio o nulo",
        },
      },
    },
  },
});

import db from "./config.js";
await db.createCollection("areas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: "string",
          description: "lel nombre es obligatorio y es string",
        },
      },
    },
  },
});

import db from "./config.js";
await db.createCollection("salones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "area_id"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: "string",
          description: "lel nombre es obligatorio y es string",
        },
        area_id: {
          bsonType: "objectId",
          description: "la area_id es obligatoria",
        },
        equipos: {
          bsonType: "array",
          description: "lista de equipos",
          items: {
            bsonType: "object",
            required: ["codigo", "nombre"],
            properties: {
              codigo: {
                bsonType: "string",
                description: "codigo del equipo",
              },
              nombre: {
                bsonType: "string",
                description: "nombre del equipo",
              },
            },
          },
        },
      },
    },
  },
});

import db from "./config.js";
await db.createCollection("incidencias", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["descripcion"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        categoria: {
          bsonType: "string",
          enum: ["leve", "moderada", "grave"],
          description: "la categoria es obligatoria y es un string",
        },
        tipo: {
          bsonType: "string",
          description: "el tipo es obligatorio y es un string",
          enum: ["software", "hardware"],
        },
        fecha_reporte: {
          bsonType: ["date", "string"],
          description: "la fecha_reporte es obligatoria",
        },
        descripcion: {
          bsonType: "string",
          description: "la descripcion es obligatoria",
        },
        salon_id: {
          bsonType: ["objectId", "null"],
          description: "el salon_id es obligatorio",
        },
      },
    },
  },
});

import db from "./config.js";
await db.createCollection("campers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
        },
        nombre: {
          bsonType: "string",
          description: "el nombre es obligatorio y es string",
        },
        email: {
          bsonType: "string",
          description: "el email es obligatorio y es string",
        },
        salon_id: {
          bsonType: "objectId",
          description: "el salon_id es obligatorio",
        },
      },
    },
  },
});
