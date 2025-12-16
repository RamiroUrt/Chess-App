# ♟️ Chess-App

![Banner del proyecto](banner.png)

Aplicación web de ajedrez desarrollada con **FastAPI** en el backend y **React + TypeScript** en el frontend.  
Permite jugar una partida completa de ajedrez desde el navegador, validando los movimientos a través de una API REST.

---

## 🧩 Estructura del proyecto

```text
Chess-App/
│
├── chess_api/
│   └── main.py
│
└── chess_client/
    └── src/
        ├── components/
        │   ├── Board.tsx
        │   └── Square.tsx
        │
        ├── context/
        │   └── MoveProvider.tsx
        │
        ├── hooks/
        │   └── useApi.ts
        │
        ├── App.tsx
        └── index.css
```

## 🚀 Funcionalidades

- Tablero de ajedrez interactivo

- Movimientos validados desde el backend

- Turnos automáticos (blancas / negras)

- Reinicio de partida

- Renderizado dinámico de piezas en SVG

- Notificaciones visuales de errores y estado del juego

- Comunicación Frontend ↔ Backend vía API REST

## 🛠️ Tecnologías utilizadas
- Backend

- Python

- FastAPI

- python-chess

- CORS Middleware

### Frontend

- React

- TypeScript

- Context API

- Custom Hooks

- react-hot-toast

- html-react-parser

- DOMPurify

## ⚙️ Backend – FastAPI (chess_api)
Endpoints
Obtener piezas
```bash
GET /pieces
```
Realizar movimiento
```bash
GET /make_move/{move}
```

Respuesta:
```bash
{
  "move_made": "e2e4",
  "turn": "black",
  "legal_moves": ["e7e5", "g8f6"]
}

```

Reiniciar juego
```bash
GET /reset
```

## ▶️ Ejecutar el backend
```bash
cd chess_api
uvicorn main:app --reload
```

### Servidor disponible en:

http://localhost:8000

🎨 Frontend – React (chess_client)
## ▶️ Ejecutar el frontend
```bash
cd chess_client
npm install
npm run dev
```


Aplicación disponible en:

http://localhost:5173

## 🔗 Comunicación Frontend ↔ Backend

El frontend consume la API desde:

API_URL = "http://localhost:8000"


CORS habilitado para:

http://localhost:5173

http://localhost:3000