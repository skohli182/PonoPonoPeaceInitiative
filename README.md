# Pono Pono Peace Initiative

The modernized website for the Pono Pono Peace Initiative — a 501(c)(3) charitable organization registered in Hawaii. The site has been modernized in its overall presenation, with key differences being a focus on accesiblity across multiple platforms, a revamped visual style, and removing user friction while keeping the message of the organization intact.

## Pages

| Route | Description |
|---|---|
| `/documentation` | Documentation relating to specific pages |
| `/src` | Contains the source files used for the projects (ex. where each page is stored) |
| `/components` | The .jsx and .css files for each page |
| `/About.jsx & /About.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the "About" Page |
| `/BlogDetail.jsx & /BlogDetail.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for loading the data from Supabase about Blogs into the Blog Page |
| `/BlogPage.jsx & /BlogPage.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the "Blog" Page |
| `/CompetitionPage.jsx & /CompetitionPage.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the "Competition" Page, specifically the Student Peacebuilder Competition |
| `/Contact.jsx & /Contact.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the "Contact" Page |
| `/DonatePage.jsx & /DonatePage.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the "Support" Page |
| `/Footer.jsx & /Footer.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the footer on the bottom of each page |
| `/Header.jsx & /Header.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the header on the top of each page |
| `/Hero.jsx & /Hero.css` | The .jsx/Java file with HTML markup and .css/Style Sheet files for the Home Page |
| `/Popup.jsx` | The .jsx/Java file that used when clicking on the cards present in the "About" Page |
| `/images` | Folder containing images that are called for the website, such as the website's logo |

## Technology used

- **React ** is used along with it's various website to build the .jsx files and .css files
- Some libraries used in React include useState and useMotion for the scrolling progress bar, Link for navigation around the website pages, etc.
- **Vite** is used to convert the .jsx code into files in order to build the website
- **Supabase** is used to store data for blogs contents, project contents, board member information, etc. In other words, Supabase is used to store data that will be updated reguarly throughout the website's lifespan.
- **EmailJS** is used for the Contact pgae, namely for the sending of emails
- **Stripe** is used for the Donation page, in order to facilitate the handling and transferring of donations

## Running the website locally

**Prerequisites:** Node.js (v18 or later) should be installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/PonoPonoPeaceInitiative.git
   # If no name is specified when cloning, then the default name is PonoPonoPeaceInitiative
   # If a different name is chosen, then cd into that directory instead
   cd PonoPonoPeaceInitiative
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
