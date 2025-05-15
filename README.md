# autobat-lab-site-template

This is a simplified, open-source version of the PayloadCMS + Next.js frontend that powers [autobat.com.au](https://autobat.com.au).

The live site showcases how I’ve built a secure, scalable lab environment on AWS for learning, experimentation, and real-world workloads. This repo strips out the personal and proprietary bits to provide a clean foundation others can build on.

---

## 💡 Purpose

The goal of this project is to share a working, minimal example of:

- Using **PayloadCMS** as a headless CMS for managing content
- Building a **static site with Next.js** using SSG (Static Site Generation)
- Keeping costs low (fits within AWS Free Tier)
- Learning front-end tooling as a backend-focused engineer

This is the same setup I use in my personal lab — a space where I explore AWS services, test ideas, and build re-usable patterns for client work and side projects.

---

## 📚 Learn More at [autobat.com.au](https://autobat.com.au)

Over at the main site, I’m documenting how the lab works, including:

- The **multi-account AWS landing zone** I use
- Secure foundations, IAM, networking, and cost controls
- Reusable architectures for **data platforms**, **APIs**, and **web frontends**
- Lessons learned from running production-like environments for myself and others

This repo is part of that effort — making it easier for others to get started with their own cloud-based lab setups.

---

## 🚀 What's Included

- A working PayloadCMS instance (runs locally)
- A statically rendered Next.js frontend
- Example content and API integration
- Key components: `content.ts`, `page.tsx`, `layout.tsx`
- No backend server in production — just static files + CDN

---

## 🛠️ Getting Started

1. Clone this repo

### PayloadCMS
1. `cd payload-cms`
2. Install dependencies (`npm install`)  
3. Run PayloadCMS locally (`npm run dev`)  
4. Navigate to [PayloadCMS admin site](http://localhost:3000/admin) **check the port allocation**
5. Login using admin@tester.com.au and password admin@tester

### next.js front end
1. `cd frontend`
2. Install dependencies (`npm install`)  
3. Run PayloadCMS locally (`npm run dev`)  
4. Navigate to [next.js home page](http://localhost:3001/) **check the port allocation**


---

## 📄 License

MIT — feel free to use, fork, and adapt it for your own lab or project.

---



