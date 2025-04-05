import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
type AuthGuardProps = {
    allowedRoles?: string[];
    children: React.ReactNode;
}
export function AuthGuard({ allowedRoles = [], children }: AuthGuardProps) {
    const { auth } = useAuthStore();
    
    if (!auth.currentUser || !auth.accessToken) {
      return <Navigate to="/auth/signin" replace />;
    }
    if (allowedRoles.length > 0 && !allowedRoles.includes(auth.currentUser.role)) {
        return <Navigate to="/errors/forbidden" replace />;
    }
    return children;
}
