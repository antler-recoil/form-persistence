import { useState } from 'react';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Success');
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <header className="card-header">
        <h1>Create your account</h1>
        <p>Tell us a little about yourself to get started.</p>
      </header>

      <div className="row">
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          rows="5"
          placeholder="Share a few sentences about your background..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <button type="submit" className="btn">
        Create account
      </button>
    </form>
  );
}

export default RegistrationForm;
