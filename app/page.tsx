export default function ShutdownPage() {
  return (
    <main className="shutdown-root">
      <div className="shutdown-card">
        <p className="shutdown-logo">SmartPractice</p>
        <span className="shutdown-badge">June 2026</span>

        <h1>Thank you to everyone who supported us along the way.</h1>

        <p className="shutdown-notice">
          Active services have been discontinued as of <strong>June 2026</strong>.
        </p>

        <p className="shutdown-contact">
          For any urgent administrative or support inquiries regarding historical data,
          please <a href="mailto:support@smartpractice.com">contact us</a>.
        </p>
      </div>

      <footer className="shutdown-footer">&copy; SmartPractice</footer>
    </main>
  );
}
