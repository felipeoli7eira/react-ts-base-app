import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    if (!isAuthenticated) {
        return <Navigate to='' replace />;
    }

    return <Outlet />;
};

export default Protected;
