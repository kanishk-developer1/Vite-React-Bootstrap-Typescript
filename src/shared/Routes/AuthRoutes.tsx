import React, { FC } from "react";

interface AuthRouteProps {
    children: React.ReactNode
}

export const AuthRoute:FC<AuthRouteProps> = ({ children }) => {
    return children
}