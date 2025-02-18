import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import SwaggerDocs from "./mi-api-swagger/swagger.js";


export default async function Home() {

  const resUsers = await fetch("http://localhost:3000/api/users");
  const users = await resUsers.json();


  const resProducts = await fetch("http://localhost:3000/api/products");
  const products = await resProducts.json();

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bienvenido a la API de Next.js</h1>
	<SwaggerDocs />
      <h2>Usuarios:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

      <h2>Productos:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </main>
  );
}

