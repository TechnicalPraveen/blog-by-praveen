import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <span className="contactTitle">Contact Us</span>
      <form className="contactForm">
        <label>Name</label>
        <input
          className="contactInput"
          type="text"
          placeholder="Enter your name..."
        />
        <label>Email</label>
        <input
          className="contactInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Message</label>
        <textarea
          className="contactInput"
          type="textArea"
          placeholder="Write your queries..."
        />
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}
