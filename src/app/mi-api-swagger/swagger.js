import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swaggerJsdoc from "swagger-jsdoc";


const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Testeo de API",
      version: "1.0.0",
      description: "testeo de API's con swagger en REACT",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "localhost",
      },
    ],
  },

  apis: ["src/app/api/users/route.js","src/app/api/product/route.js","src/app/api/products/route.js"], 
};


const swaggerSpec = swaggerJsdoc(swaggerOptions);

const SwaggerDocs = () => {
  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <SwaggerUI spec={swaggerSpec} />
    </div>
  );
};

export default SwaggerDocs;

