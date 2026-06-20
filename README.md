<div align="center">
  <img src="src/assets/logos/Logos-1.png" alt="SkyLink Logo" width="120" height="120">

  # SkyLink - Premium Flight Booking & Operations Portal

  > *Empowering Journeys, Connecting Worlds.*  
  > A modern, type-safe React platform for passenger flight reservations and administrator airline operations.

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62B)](https://vite.dev/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TanStack Query](https://img.shields.io/badge/Tanstack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
</div>

---

## 📋 Project Overview

SkyLink is a standalone, browser-based airline reservation system built for both passengers and administrators. It handles the full reservation lifecycle — from flight search and ticket booking to payment processing and admin management.

---

## 👥 User Roles

| Role | Description |
|---|---|
| **Passenger** | Registers, searches for flights, books tickets, selects seats, and manages reservations |
| **Administrator** | Manages flights, destinations/airports, aircraft fleets, users, and views booking reports |

---

## ⚙️ Core Features

### ✈️ Passenger Suite
- **User Authentication:** Registration, login, profile settings, and email OTP verification.
- **Flight Discovery:** Real-time search, filters (categories, price, schedule), and destination promos.
- **Interactive Booking Flow:** Step-by-step seat allocation, meal selection, and payment options.
- **Manage Bookings:** Reschedule picker, cancellation policies, refund processing, and detailed receipt views.
- **Payment Processing:** Integrated mock payment gateways with secure captured/refunded statuses.

### 💼 Administrator Portal
- **Dashboard Metrics:** Live KPIs, route booking analytics, and revenue forecast charting.
- **Flight Control:** Create, update, or cancel flight schedules with active-booking warnings.
- **Destinations & Fleet:** Manage airport information, set standard timezone rules, control fleets, and seat class layouts.
- **User Management:** View profile metrics, change statuses (active/suspend) with required log reasons.
- **Operations Reports:** Export system booking data to CSV, view machine-learning based cancellation risk logs.

---

## 🛠️ Tech Stack (Frontend)

| Tool | Purpose |
|---|---|
| **React 19** | Modern UI library with context state management |
| **TypeScript** | Type safety and autocompletion interfaces |
| **Vite** | Fast dev server and optimized production bundles |
| **Tailwind CSS v4** | Modern utility-first styling with advanced CSS vars |
| **TanStack Query** | High-performance API cache and synchronization |
| **React Router DOM** | Declarative client-side routing |

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skylink-frontend.git

# Navigate into the project
cd skylink-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Copy the example environment file and fill in your api endpoint:

```bash
cp .env.example .env
```

Create a `.env` file with the following variable:
```env
VITE_API_URL=http://localhost:8000/api/v1
```

---

## 📐 Non-Functional Requirements

- **Performance:** System pages respond/initialize within 2 seconds.
- **Security:** Encrypted tokens, secure auth gate check, role-restricted routes.
- **Usability:** Premium dark/light themes, sleek animations, and mobile-responsive overlays.
- **Reliability:** Auto-reconnect queries and local storage backup session state.
- **Compatibility:** Runs smoothly on all modern browsers (Chrome, Edge, Safari, Firefox).

---

## 📄 License

This project is developed as part of an academic software engineering requirement. All rights reserved.