import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './styles/index.css';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="header">
        <Link className="brand" to="/">✦ Voices of the Forgotten Machines</Link>
        <nav aria-label="Main navigation">
          <Link to="/worlds">Explore</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/ask">Ask</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

function Home() {
  return <main className="hero"><p className="eyebrow">An interplanetary story archive</p><h1>Every machine has a story.</h1><p>Meet the explorers that crossed the silence—and discover what they left behind.</p><Link className="button" to="/worlds">Begin exploring <span aria-hidden="true">→</span></Link></main>;
}

function Page({ eyebrow, title, text, children }) {
  return <main className="content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p>{children}</main>;
}

function Worlds() {
  return <Page eyebrow="Choose a world" title="Where shall we begin?" text="Explore the Moon and Mars archive. Verified map layers and locations will be added in the next implementation steps."><div className="cards"><Link className="card moon" to="/map/moon"><small>THE MOON</small><strong>Quiet footprints</strong><span>Explore lunar missions and their artifacts.</span></Link><Link className="card mars" to="/map/mars"><small>MARS</small><strong>Red planet, long journeys</strong><span>Meet robotic explorers and their missions.</span></Link></div></Page>;
}

function Placeholder({ title }) {
  return <Page eyebrow="Archive in progress" title={title} text="This feature is planned, but its source-verified content and interactions have not been implemented yet."><Link className="text-link" to="/worlds">← Explore the worlds</Link></Page>;
}

function App() {
  return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/worlds" element={<Worlds />} /><Route path="/map/:world" element={<Placeholder title="Planetary map" />} /><Route path="/story/:artifactId" element={<Placeholder title="Artifact story" />} /><Route path="/quiz" element={<Placeholder title="Mission quiz" />} /><Route path="/ask" element={<Placeholder title="Ask the archive" />} /><Route path="/about" element={<Placeholder title="About this project" />} /><Route path="*" element={<Placeholder title="Page not found" />} /></Routes></Layout>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>);
