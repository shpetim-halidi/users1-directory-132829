export default function UserCard({ user }) {
    return (
        <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Rating: {user.rating}</p>
            <p>Verified: {user.verified ? "Yes" : "No"}</p>

            {}
            {user.verified === true && <p style={{color: 'blue'}}>Verified User</p>}
            {user.rating >= 4 && <p style={{color: 'orange'}}>Top rated</p>}
        </div>
    );
}