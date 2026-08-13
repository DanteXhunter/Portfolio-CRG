# Portafolio

Mi portafolio personal: una presentación breve de quién soy y un espacio donde reúno los
proyectos que he construido.

## Stack

- [Next.js](https://nextjs.org) 15 con App Router y TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [next-themes](https://github.com/pacocoursey/next-themes) para el cambio de tema
- [react-icons](https://react-icons.github.io/react-icons/) para la iconografía

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda en [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/          Rutas: portada, /about y /projects
components/   Componentes compartidos (navbar, tarjetas, pie de página)
data/         Contenido del sitio: perfil y listado de proyectos
public/       Logotipo e imágenes
```

## Cómo edito el contenido

Todo el texto vive en `data/`, no en las páginas:

- `data/profile.ts` — nombre, biografía, redes sociales, habilidades y stack.
- `data/projects.ts` — listado de proyectos. Para añadir uno nuevo basta con agregar un
  objeto al arreglo y colocar su logotipo en `public/projects/`.

Los colores del tema claro y oscuro están definidos como variables CSS al inicio de
`app/globals.css`.

## Despliegue

```bash
npm run build
```

El proyecto está preparado para desplegarse en [Vercel](https://vercel.com) sin
configuración adicional.
