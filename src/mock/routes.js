const routes = [
  {
    id: 1,
    name: "Centro ↔ Barrios Principales",
    routes: [
      { name: "Centro ↔ Palogrande", distance: "2 km", time: "5-7 min" },
      { name: "Centro ↔ Chipre", distance: "3 km", time: "8-10 min" },
      { name: "Centro ↔ La Enea", distance: "5 km", time: "10-15 min" },
      { name: "Centro ↗ La Fuente (Cable aéreo)", distance: "4 km", time: "10-12 min" },
      { name: "Centro ↗ Milán", distance: "6 km", time: "15 min" }
    ]
  },
  {
    id: 2,
    name: "Palogrande (Zona Universitaria) ↔ Otros Barrios",
    routes: [
      { name: "Palogrande ↔ Chipre", distance: "3 km", time: "8-10 min" },
      { name: "Palogrande ↔ La Enea", distance: "7 km", time: "15-20 min" },
      { name: "Palogrande ↗ Los Cámbulos", distance: "5 km", time: "12-15 min" }
    ]
  },
  {
    id: 3,
    name: "Chipre (Zona Rosa) ↔ Otros Barrios",
    routes: [
      { name: "Chipre ↗ La Francia", distance: "4 km", time: "10-12 min" },
      { name: "Chipre ↗ San Marcel", distance: "6 km", time: "15 min" },
      { name: "Chipre ↗ Villa Café", distance: "8 km", time: "20 min" }
    ]
  },
  {
    id: 4,
    name: "La Enea (Zona Industrial) ↔ Otros Barrios",
    routes: [
      { name: "La Enea ↗ El Carmen", distance: "5 km", time: "10-15 min" },
      { name: "La Enea ↗ Bosque Popular", distance: "6 km", time: "15 min" },
      { name: "La Enea ↗ La Linda", distance: "8 km", time: "20 min" }
    ]
  },
  {
    id: 5,
    name: "Otros Trayectos Importantes",
    routes: [
      { name: "Chipre ↗ La Sultana", distance: "7 km", time: "15-20 min" },
      { name: "San Marcel ↗ Villa Pilar", distance: "4 km", time: "10 min" },
      { name: "Los Cámbulos ↗ El Rosal", distance: "5 km", time: "12 min" }
    ]
  }
];

export default routes;

// DONE