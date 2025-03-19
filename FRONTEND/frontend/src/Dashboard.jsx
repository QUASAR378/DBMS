const Dashboard = () => (
    <div>
        <h2>Welcome to Brik Shah Clinic</h2>
        <p>Your health, our priority.</p>
    </div>
);

export default Dashboard;

// Login.jsx
const Login = () => {
    const { login } = useAuth();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;
