const highlights = [
  "A tiny Next.js starter",
  "Easy sections to edit",
  "Ready for photos, links, and updates",
];

const startSteps = [
  {
    title: "Open this folder",
    detail:
      "Use Terminal and move into the project folder. In most editors, you can also right-click the folder and choose an option like Open in Terminal.",
    command: "cd path/to/rebekah-duen-starter",
  },
  {
    title: "Install the tools",
    detail:
      "This downloads the website packages listed in package.json. You only need to do this the first time, or after packages change.",
    command: "npm install",
  },
  {
    title: "Start the website",
    detail:
      "This runs the local development server. Leave this terminal window open while you work.",
    command: "npm run dev",
  },
  {
    title: "Open it in a browser",
    detail:
      "Visit the local address below. When you edit and save files, the page will usually update by itself.",
    command: "http://localhost:3000",
  },
];

const pitfalls = [
  {
    problem: "The npm command is not found",
    fix: "Install Node.js from nodejs.org, choose the LTS version, then close and reopen Terminal.",
  },
  {
    problem: "localhost:3000 will not open",
    fix: "Check the terminal for a different address. If port 3000 is busy, Next.js may use 3001 instead.",
  },
  {
    problem: "Changes are not showing up",
    fix: "Save the file first, then refresh the browser. If it still looks old, stop the server with Control + C and run npm run dev again.",
  },
  {
    problem: "The terminal looks stuck",
    fix: "If it says Ready, it is working. Keep that window open and use the browser to view the site.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a href="#start">Start</a>
          <a href="#about">About</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">DUEN</p>
          <h1>Rebekah&apos;s little corner of the web</h1>
          <p className="intro">
            A friendly starter site for sharing projects, photos, favorite
            places, and whatever comes next.
          </p>
          <a className="button" href="#start">
            Start here
          </a>
        </div>
      </section>

      <section id="start" className="section startSection">
        <div className="sectionHeader">
          <p className="eyebrow">Beginner tutorial</p>
          <h2>How to start the app</h2>
          <p>
            Follow these steps in order. The commands go into Terminal, one at a
            time.
          </p>
        </div>

        <div className="steps">
          {startSteps.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="stepNumber">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <code>{step.command}</code>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section pitfallsSection">
        <div className="sectionHeader">
          <p className="eyebrow">Common pitfalls</p>
          <h2>When something feels broken</h2>
          <p>
            Most first-time setup problems are small environment issues. These
            are the ones beginners hit most often.
          </p>
        </div>

        <div className="pitfalls">
          {pitfalls.map((item) => (
            <article className="pitfall" key={item.problem}>
              <h3>{item.problem}</h3>
              <p>{item.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div>
          <p className="eyebrow">About</p>
          <h2>Made to be simple to change</h2>
        </div>
        <p>
          This page is intentionally small. Rebekah can swap this text for a
          short bio, add a photo, link to favorite work, or turn it into a
          personal homepage.
        </p>
      </section>

      <section id="notes" className="section featureGrid">
        {highlights.map((item) => (
          <article className="feature" key={item}>
            <h3>{item}</h3>
            <p>
              Edit the text in <code>app/page.tsx</code> and the colors in{" "}
              <code>app/globals.css</code>.
            </p>
          </article>
        ))}
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Say hello</h2>
        </div>
        <a href="mailto:rebekah@example.com">rebekah@example.com</a>
      </section>
    </main>
  );
}
