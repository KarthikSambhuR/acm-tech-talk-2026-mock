# ACM TechTalk 2026 Website

The official, production-ready web platform for **ACM TechTalk 2026**—the flagship annual technical symposium hosted by the ACM Student Chapter at Amal Jyothi College of Engineering (AJCE), Kerala. 

This platform is engineered for ultra-fast performance, high availability, and a modern user experience, showcasing the event schedule, featured speaker lineups, and registration pipelines.

## 🚀 Architecture & Tech Stack

The site is built as a fully decoupled, local-first, statically compiled web application leveraging the modern Next.js ecosystem.

* **Framework:** [Next.js](https://nextjs.org/) (App Router architecture)
* **Deployment Strategy:** Static Site Generation (SSG) via `output: 'export'` for zero-server overhead, maximum edge-caching capability, and instant page loads.
* **Styling:** Tailwind CSS (configured with a dark-mode first, cyberpunk-inspired high-tech aesthetic).
* **Assets:** Optimized vector graphics, customized component animations, and responsive responsive layouts designed to match the "Spark Innovation" theme.

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or higher) and a package manager (`npm`, `pnpm`, or `yarn`) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/acm-techtalk-2026.git](https://github.com/your-username/acm-techtalk-2026.git)
   cd acm-techtalk-2026

```

2. Install dependencies:
```bash
npm install
# or
bun install

```



### Development Server

Run the local development server with hot-reloading:

```bash
npm run dev
# or
bun run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build & Static Export

To compile the application into static HTML/CSS/JS assets (optimized for hosting on decentralized platforms, Cloudflare Pages, or traditional object storage like AWS S3/R2):

```bash
npm run build

```

The build process triggers `next build` and generates an optimized production ready static bundle inside the `out/` directory.

## 🌐 Key Sections Implemented

* **Dynamic Countdown Timer:** A client-side optimized precision countdown component tracking the time remaining until August 13, 2026.
* **Speaker Matrix:** A clean card grid showcasing key profiles from Google, Microsoft Research, IBM Quantum Labs, Razorpay, AWS, and the Ethereum Foundation.
* **Interactive Timeline:** A step-by-step breakdown of the event schedule, optimized for scanability from the Morning Inauguration through to the Afternoon Ethical Hacking Workshops and Panel Discussions.
* **Lead Capture & Inquiries:** A responsive connection module with integrated contact channels (`acm@ajce.in`) and a validation-ready user feedback form.
```
