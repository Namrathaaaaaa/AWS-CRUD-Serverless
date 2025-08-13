// App.js

import { useAuth } from "react-oidc-context";
import Home from "./Home";
import { deleteAccessToken } from "./utils/apis";

function App() {
    const auth = useAuth();

    console.log("auth", auth);


    const signOutRedirect = () => {
        const clientId = "3i4kgch0ttgt2e7gln4h8lfu9l";
        const logoutUri = "https://d1eer3ni80c7v4.cloudfront.net";
        const cognitoDomain = "https://ap-south-1tmaca2whe.auth.ap-south-1.amazoncognito.com";
        deleteAccessToken();
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <>
                <button onClick={() => signOutRedirect()} >Sign out</button>
                <Home />
            </>

        );
    }

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
        </div>
    );
}

export default App;