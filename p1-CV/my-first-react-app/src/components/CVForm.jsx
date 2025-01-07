import React from "react";

function CVForm({ cvData, setCvData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({ ...cvData, [name]: value });
  };

  return (
    <form className="cv-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={cvData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={cvData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={cvData.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={cvData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Education:
        <textarea
          name="education"
          value={cvData.education}
          onChange={handleChange}
        />
      </label>
      <label>
        Experience:
        <textarea
          name="experience"
          value={cvData.experience}
          onChange={handleChange}
        />
      </label>
      <label>
        Skills:
        <textarea
          name="skills"
          value={cvData.skills}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default CVForm;
