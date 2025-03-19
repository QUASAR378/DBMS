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