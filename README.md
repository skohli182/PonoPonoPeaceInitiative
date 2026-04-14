# Pono Pono Peace Initiative

A website for the Ponopono Peace Initiative — an organization that works to grow the impact of peacebuilding in the Pacific region. The site provides information about the organization's mission, ongoing projects, blog updates, a student peacebuilder competition, and a donation page.

## Pages

| Route | Description |
|---|---|
| `/` | Home — mission overview and current opportunities |
| `/about` | About the team and board members |
| `/projects` | Ongoing and past projects |
| `/blog` | Blog posts and updates |
| `/competition` | Student Peacebuilder Competition details |
| `/donate` | Donation page via Stripe |
| `/contact` | Contact form |

## Tech Stack

- **React 19** with React Router for client-side routing
- **Vite** for development and bundling
- **Supabase** for blog content
- **EmailJS** for the contact form
- **Stripe** for donations

## Running Locally

**Prerequisites:** Node.js (v18 or later) and npm installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/PonoPonoPeaceInitiative.git
   cd PonoPonoPeaceInitiative/ponoponopeaceinitiative
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Other Commands

```bash
npm run build    # Build for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```
