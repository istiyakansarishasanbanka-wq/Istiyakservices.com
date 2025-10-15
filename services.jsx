function Services() {
  const services = [
    { name: "PAN Card", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html", icon: "🪪" },
    { name: "Aadhaar Card", url: "https://uidai.gov.in/my-aadhaar/get-aadhaar.html", icon: "🔗" },
    { name: "Voter ID", url: "https://voterportal.eci.gov.in/", icon: "🗳" },
    { name: "Ration Card", url: "https://nfsa.gov.in/portal/apply-ration-card", icon: "📄" },
    { name: "E-Shram Card", url: "https://eshram.gov.in/", icon: "💼" },
    { name: "Ayushman Card", url: "https://pmjay.gov.in/", icon: "🏥" },
    { name: "RTPS", url: "https://serviceonline.bihar.gov.in/", icon: "🏛" },
    { name: "Convert JPG/PDF", url: "https://www.ilovepdf.com/", icon: "🖼" },
    { name: "Resume Maker", url: "https://www.canva.com/resumes/templates/", icon: "📄" },
    { name: "Freelancing", url: "https://www.freelancer.in/", icon: "💻" },
    { name: "Job Portal", url: "https://www.apna.co/", icon: "🧑‍💼" },
    { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/", icon: "🔗" }
  ];
  return (
    <div className="container">
      <h2>All Government & Online Services</h2>
      <div className="service-icons">
        {services.map(service => (
          <a key={service.name} href={service.url} target="_blank" rel="noopener noreferrer" className="icon" title={service.name}>
            <span style={{ fontSize: "36px" }}>{service.icon}</span>
            <span>{service.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
export default Services;
