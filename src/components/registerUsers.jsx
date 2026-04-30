import { useState } from 'react';

export default function RegisterUser({ addUser }) {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', rating: 1, verified: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() === "") return alert("Name field must not be empty.");
        if (formData.rating < 1 || formData.rating > 5) return alert("Rating must be between 1 and 5 inclusive.");

        addUser({ ...formData, id: Date.now() });
        setFormData({ name: '', email: '', phone: '', rating: 1, verified: false }); // Reset
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="text" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <input type="text" placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            <input type="number" value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} />
            <label>Verified: <input type="checkbox" checked={formData.verified} onChange={e => setFormData({...formData, verified: e.target.checked})} /></label>
            <button type="submit">Register</button>
        </form>
    );
}