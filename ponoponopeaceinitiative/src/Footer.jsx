import './Footer.css'
function Footer()
{
    return (
    <footer className="footer-container">
      <div className="footer-left img">
        <img src="../images/logo.png" alt = "Pono Pono Logo"/>
      </div>

      <div className="footer-right">
        <h2 className="footer-title">Pono Pono Peace Initiative</h2>

        <div className="footer-links">
          <div className="footer-column">
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
          </div>

          <div className="footer-column" style = {{ transform: "translateX(7rem) translateY(1rem)", }}>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="footer-column">
  <h2 className="footer-title">Follow us</h2>
  <div className="social-icons">
    <img src="../images/linkedin.png" className="contact-image" />
    <img src="../images/instagram.png" className="contact-image" />
    <img src="../images/facebook.png" className="contact-image" />

  </div>
          </div>

        </div>
      </div>
      </footer>)
}
export default Footer; 