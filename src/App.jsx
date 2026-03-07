import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  TrendingUp,
  Activity,
  CreditCard,
  Users,
  ArrowRight,
  BarChart3,
  Bot,
  Globe,
  Phone,
  Image as ImageIcon,
} from "lucide-react";
import "./index.css";

const WHATSAPP_NUMBER = "2348035208600";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Good for traders starting with one account.",
    features: [
      "1 trading account",
      "Forex + Gold support",
      "Client portal access",
      "Basic reporting",
    ],
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "Best for traders who want broader market access.",
    featured: true,
    features: [
      "Forex + Crypto + Deriv",
      "Priority onboarding",
      "Live runtime monitoring",
      "Trade history dashboard",
      "Manual support assistance",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-account setups and business partnerships.",
    features: [
      "Multi-account deployment",
      "Custom risk settings",
      "Advanced reporting",
      "Dedicated onboarding",
    ],
  },
];

const testimonials = [
  {
    name: "Forex Client",
    role: "Swing & intraday trader",
    text: "The portal made everything feel professional. I could see my trade history and account status without asking for updates.",
  },
  {
    name: "Deriv Client",
    role: "Synthetic indices trader",
    text: "The setup was clear, support was quick, and I liked that the system handled my account with clear rules and monitoring.",
  },
  {
    name: "Crypto Client",
    role: "Multi-market trader",
    text: "What sold me was the structured onboarding and the ability to support different market types under one service.",
  },
];

const faqs = [
  {
    q: "How does onboarding work?",
    a: "You choose a plan, message me through WhatsApp, send your trading account details, and after payment confirmation I activate your service and issue portal access.",
  },
  {
    q: "Which markets are supported?",
    a: "The service is built for Forex, Crypto, and Deriv synthetic indices depending on your plan and account setup.",
  },
  {
    q: "Do I need to keep my PC on?",
    a: "No. The service is positioned as a managed setup, so the goal is for you to monitor through the portal while I handle the operational side.",
  },
  {
    q: "How do payments work?",
    a: "For now, payments are handled manually. Once payment is confirmed, your account is set up and activated.",
  },
];

const proofImages = [
  {
    src: "/results/result1.jpg",
    title: "Trade result proof",
    text: "Client achieved consistent profits.",
  },
  {
    src: "/results/result2.jpg",
    title: "Dashboard or account proof",
    text: "Awesome account growth and monitoring.",
  },
  {
    src: "/results/result3.jpg",
    title: "Bot execution proof",
    text: "Awesome profit from automated trading.",
  },

   {
    src: "/results/result4.jpg",
    title: "Bot execution proof",
    text: "Awesome profit from automated trading.",
  },

   {
    src: "/results/result7.jpg",
    title: "Bot execution proof",
    text: "Awesome profit from automated trading.",
  },

   {
    src: "/results/result8.jpg",
    title: "Bot execution proof",
    text: "Awesome profit from automated trading.",
  },

   {
    src: "/results/result9.jpg",
    title: "Bot execution proof",
    text: "Awesome profit from automated trading.",
  },

   {
    src: "/results/result10.jpg",
    title: "Bot execution proof",
    text: "Awesome profit from automated trading.",
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title-wrap">
      <span className="badge badge-light">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  );
}

function ProofCard({ item }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card proof-card">
      {!imgError ? (
        <img
          src={item.src}
          alt={item.title}
          className="proof-image"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="proof-placeholder">
          <ImageIcon size={26} />
          <p>Add image to {item.src}</p>
        </div>
      )}

      <div className="proof-content">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    market: "Forex + Crypto + Deriv",
    plan: "Pro",
    capital: "",
    broker: "",
    notes: "",
  });

  const completion = useMemo(() => {
    const fields = [form.fullName, form.email, form.whatsapp, form.market, form.plan];
    const done = fields.filter(Boolean).length;
    return Math.round((done / fields.length) * 100);
  }, [form]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function openWhatsapp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = `Hello Samuel, I want to sign up for your MT5 SaaS trading service.

Full Name: ${form.fullName}
Email: ${form.email}
WhatsApp: ${form.whatsapp}
Preferred Plan: ${form.plan}
Market Interest: ${form.market}
Broker / Exchange: ${form.broker}
Estimated Capital: ${form.capital}
Notes: ${form.notes}`;

    openWhatsapp(message);
  }

  function handleQuickWhatsapp() {
    const quickMsg =
      "Hello Samuel, I want to learn more about your MT5 SaaS trading service and how to get started.";
    openWhatsapp(quickMsg);
  }

  function scrollToSignup() {
    document.getElementById("signup-funnel")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand-wrap">
            <div className="brand-icon">
              <Bot size={20} />
            </div>
            <div>
              <p className="brand-title">MT5 SaaS Automation</p>
              <p className="brand-subtitle">Managed multi-market trading service</p>
            </div>
          </div>

          <nav className="desktop-nav">
            <a href="#features">Features</a>
            <a href="#proof">Results</a>
            <a href="#pricing">Pricing</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>

          <button className="btn btn-outline" onClick={scrollToSignup}>
            Client Signup
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-copy"
            >
              <span className="badge">Forex + Crypto + Deriv Automation</span>

              <h1 className="hero-title">
                Managed trading SaaS with a professional client portal and direct signup funnel.
              </h1>

              <p className="hero-text">
                I help traders run a more structured automated trading setup with account monitoring,
                trade visibility, subscription control, and support across Forex, Crypto, and Deriv synthetic markets.
              </p>

              <div className="hero-actions">
                <button className="btn" onClick={scrollToSignup}>
                  Start on WhatsApp <ArrowRight size={16} />
                </button>
                <a className="btn btn-outline" href="#proof">
                  View Results
                </a>
              </div>

              <div className="stats-grid">
                <div className="card stat-card">
                  <p className="stat-value">3</p>
                  <p className="stat-label">Markets</p>
                </div>
                <div className="card stat-card">
                  <p className="stat-value">Live</p>
                  <p className="stat-label">Client Portal</p>
                </div>
                <div className="card stat-card">
                  <p className="stat-value">Managed</p>
                  <p className="stat-label">Service Model</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card hero-panel">
                <div className="hero-panel-head">
                  <h3>
                    <BarChart3 size={18} /> Service Snapshot
                  </h3>
                </div>

                <div className="hero-panel-body">
                  <div className="feature-mini-grid">
                    {[
                      {
                        icon: Activity,
                        title: "Runtime visibility",
                        text: "Clients can view account status, floating PnL, and active positions.",
                      },
                      {
                        icon: Shield,
                        title: "Admin control",
                        text: "Manage activation, expiry, portal access, and subscription details.",
                      },
                      {
                        icon: TrendingUp,
                        title: "Trade history",
                        text: "Track open and closed trades inside a structured client portal.",
                      },
                      {
                        icon: Globe,
                        title: "Scalable service",
                        text: "Built to look and operate like a real managed trading SaaS.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="mini-box">
                        <item.icon size={18} />
                        <p className="mini-box-title">{item.title}</p>
                        <p className="mini-box-text">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="success-note">
                    <p className="success-note-title">Simple sales angle</p>
                    <p>
                      Instead of selling raw bot files, sell a managed trading service with onboarding,
                      support, monitoring, and client access.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="Core features"
              title="Everything needed to look like a real trading SaaS business"
              text="Position your service as a structured product with onboarding, account monitoring, client access, and managed subscription control."
            />

            <div className="grid-4">
              {[
                {
                  icon: Bot,
                  title: "Multi-market support",
                  text: "Run and market the service for Forex, Crypto, and Deriv synthetic indices under one offer.",
                },
                {
                  icon: Users,
                  title: "Client portal",
                  text: "Each client gets a login to view subscription, runtime status, and trade history.",
                },
                {
                  icon: CreditCard,
                  title: "Manual onboarding ready",
                  text: "Receive payment manually, then activate the client from your admin dashboard.",
                },
                {
                  icon: Shield,
                  title: "Operational control",
                  text: "Enable, disable, expire, and manage access while keeping delivery organized.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="card feature-card"
                >
                  <div className="feature-icon">
                    <item.icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="section-block section-soft">
          <div className="container">
            <SectionTitle
              eyebrow="Proof / results"
              title="Screenshots that show the service is real and working for clients"
              text="Real proof makes the service far more believable than just written claims."
            />

            <div className="grid-3">
              {proofImages.map((item) => (
                <ProofCard key={item.src} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="How it works"
              title="A simple funnel that turns interest into onboarded clients"
              text="This process helps you qualify leads quickly and move the right people into paid onboarding."
            />

            <div className="grid-4">
              {[
                "Glance/View through our page and checks pricing, proof, and features.",
                "Fill the form and continue directly to WhatsApp.",
                "We answer questions, confirm if they are a good fit, and receive payment manually.",
                "We onboard you, create portal access, and activate the service.",
              ].map((step, idx) => (
                <div key={step} className="card step-card">
                  <div className="step-pill">{idx + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="Pricing"
              title="Our Affordable Plans"
              text="We are open for discussion. We can adjust based on account size, support level, or market coverage."
            />

            <div className="grid-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card pricing-card ${plan.featured ? "pricing-featured" : ""}`}
                >
                  <div className="pricing-head">
                    <div className="pricing-title-row">
                      <h3>{plan.name}</h3>
                      {plan.featured ? <span className="badge">Popular</span> : null}
                    </div>
                    <div className="price-row">
                      <span className="price">{plan.price}</span>
                      <span className="price-period">{plan.period}</span>
                    </div>
                    <p className="pricing-desc">{plan.description}</p>
                  </div>

                  <ul className="pricing-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="btn btn-full" onClick={scrollToSignup}>
                    Choose {plan.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signup-funnel" className="section-block">
          <div className="container signup-grid">
            <div className="card">
              <div className="card-header">
                <h3>Signup funnel</h3>
                <p>Fill this in and continue directly to WhatsApp so we can discuss your setup.</p>
              </div>

              <form className="form-grid" onSubmit={handleSubmit}>
                <div>
                  <label>Full name</label>
                  <input
                    value={form.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="name@email.com"
                    required
                  />
                </div>

                <div>
                  <label>WhatsApp</label>
                  <input
                    value={form.whatsapp}
                    onChange={(e) => updateField("whatsapp", e.target.value)}
                    placeholder="+234..."
                    required
                  />
                </div>

                <div>
                  <label>Preferred plan</label>
                  <input
                    value={form.plan}
                    onChange={(e) => updateField("plan", e.target.value)}
                    placeholder="Pro"
                  />
                </div>

                <div>
                  <label>Market interest</label>
                  <input
                    value={form.market}
                    onChange={(e) => updateField("market", e.target.value)}
                    placeholder="Forex / Crypto / Deriv"
                  />
                </div>

                <div>
                  <label>Broker / exchange</label>
                  <input
                    value={form.broker}
                    onChange={(e) => updateField("broker", e.target.value)}
                    placeholder="Exness / Deriv / Binance"
                  />
                </div>

                <div className="full-span">
                  <label>Estimated capital</label>
                  <input
                    value={form.capital}
                    onChange={(e) => updateField("capital", e.target.value)}
                    placeholder="$500, $2,000, ₦ equivalent..."
                  />
                </div>

                <div className="full-span">
                  <label>Notes</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="Tell me your goals, preferred markets, or account setup."
                    rows={5}
                  />
                </div>

                <div className="full-span progress-box">
                  <div>
                    <p className="progress-title">Form completion</p>
                    <p className="progress-text">
                      Complete the key fields so I can understand your setup faster.
                    </p>
                  </div>
                  <div className="progress-value">{completion}%</div>
                </div>

                <div className="full-span action-row">
                  <button type="submit" className="btn">
                    Continue on WhatsApp
                  </button>
                  <button type="button" className="btn btn-outline" onClick={handleQuickWhatsapp}>
                    Talk on WhatsApp
                  </button>
                </div>
              </form>
            </div>

            <div className="side-stack">
              <div className="card">
                <div className="card-header">
                  <h3>Why prospects convert</h3>
                </div>
                <div className="info-list">
                  <div className="conversation-box">
                    <p>
                      I know most people are tired of empty bot promises, so the way I position this service is simple:
                      I don’t just tell a prospect that the bot works — I show the structure behind it.
                    </p>
                    <p>
                      I show that there is a client portal, monitored runtime, trade history, subscription control,
                      and an actual onboarding process. That alone makes it feel more serious and trustworthy.
                    </p>
                    <p>
                      Then the real difference comes from proof. When a prospect sees genuine screenshots of trade results,
                      account activity, and the dashboard itself, it becomes easier for them to believe they are dealing with
                      a real working service and not just marketing talk.
                    </p>
                    <p>
                      That is why this page should speak like a real person, show real proof, and move the prospect straight
                      into WhatsApp where I can answer questions and close them properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Direct contact</h3>
                </div>
                <div className="info-row">
                  <Phone size={16} />
                  <span>WhatsApp onboarding support</span>
                </div>
                <div className="muted-box">
                  <p>
                    I prefer to handle all communication through WhatsApp because it’s more direct, personal, and convenient for most people.
                    It also allows me to quickly answer questions, build rapport, and guide them through the onboarding process without back-and-forth emails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="Testimonials"
              title="What clients say about the service"
              text="Testimonials our clients use to build trust and show the value of your service."
            />

            <div className="grid-3">
              {testimonials.map((item) => (
                <div key={item.name} className="card testimonial-card">
                  <p className="testimonial-text">“{item.text}”</p>
                  <div className="testimonial-meta">
                    <p className="testimonial-name">{item.name}</p>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-block section-soft">
          <div className="container">
            <SectionTitle
              eyebrow="FAQ"
              title="Common questions before a client signs up"
              text="Handle objections early so the person knows what to expect before the first conversation."
            />

            <div className="faq-grid">
              {faqs.map((item) => (
                <div key={item.q} className="card faq-card">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <p className="footer-title">MT5 SaaS Automation</p>
            <p className="footer-text">Managed trading service for Forex, Crypto, and Deriv.</p>
          </div>
          <div className="footer-text">
            Built to convert leads into paying managed-service clients.
          </div>
        </div>
      </footer>
    </div>
  );
}