import { createContext } from 'react';
import {useAuthStore} from '@/store/authStore';
import {  useLocation } from 'react-router-dom';
import { useEffect } from 'react';  
import { User } from '@/features/manageView/users/data/schema';
interface AuthContextType {
    auth: {
      currentUser: User | null;
      setCurrentUser: (currentUser: User | null) => void;
      accessToken: string;
      setAccessToken: (accessToken: string) => void;
      resetAccessToken: () => void;
      reset: () => void;
    };
    isAuthenticated: boolean;
  } 
const AuthProviderContext=createContext<AuthContextType | null>(null);
// 不需要权限的公共路由列表
const PUBLIC_ROUTES = ['/auth/signin', '/auth/signup', '/auth/forgot-password'];

export function AuthProvider({children}: {children: React.ReactNode}) {
    const {auth} = useAuthStore();
    const location = useLocation();
    
    // 检查当前路径是否为公共路由
    const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);
    
    // 检查用户是否已认证
    const isAuthenticated = Boolean(auth.currentUser && auth.accessToken);
    
    // 路由保护逻辑
    useEffect(() => {
        // 如果不是公共路由，并且用户未认证，则重定向到登录页
        if (!isPublicRoute && !isAuthenticated) {
            // 使用 navigate 函数而不是直接返回 Navigate 组件
            const navigate = () => {
                window.location.href = `/auth/signin?redirect=${location.pathname}`;
            };
            navigate();
        }
    }, [isAuthenticated, isPublicRoute, location.pathname]);
    
    // 提供认证状态和方法给子组件
    const contextValue = {
        auth,
        isAuthenticated,
    };
    
    return (
        <AuthProviderContext.Provider value={contextValue}>
            {children}
        </AuthProviderContext.Provider>
    );
}
