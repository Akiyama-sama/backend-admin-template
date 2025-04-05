import {createBrowserRouter} from 'react-router-dom';
import { lazy } from 'react';

import Index from '../features/app/layout';
import Dashboard from '../features/dashboard/dashboard';

const Order = lazy(() => import('../features/manageView/order/order.tsx'));
const Employee = lazy(() => import('../features/manageView/employee/employee'));
const User = lazy(() => import('../features/manageView/users/user.tsx'));

const Error = lazy(() => import('../features/errors/error'));
const ForbiddenError = lazy(() => import('../features/errors/forbidden'));
const NotFoundError = lazy(() => import('../features/errors/not-found-error'));
const UnauthorizedError = lazy(() => import('../features/errors/unauthorized-error'));
const MaintenanceError = lazy(() => import('../features/errors/maintenance-error'));

const AuthLayout = lazy(() => import('../features/auth/auth-layout'));
const SignIn1 = lazy(() => import('../features/auth/sign-in/sign-in-1'));
const SignIn2 = lazy(() => import('../features/auth/sign-in/sign-in-2'));
const SignUp = lazy(() => import('../features/auth/sign-up/sign-up'));
const ForgotPassword = lazy(() => import('../features/auth/forgot-password/forgot-password'));
const Otp = lazy(() => import('../features/auth/otp/otp'));


const Settings = lazy(() => import('../features/settings/settings'));
const SettingsAccount = lazy(() => import('../features/settings/account'));
const SettingsAppearance = lazy(() => import('../features/settings/appearance'));
const SettingsNotifications = lazy(() => import('../features/settings/notifications'));
const SettingsDisplay = lazy(() => import('../features/settings/display'));
//import { AuthGuard } from './guard/auth-guard';
export const router =createBrowserRouter([
    {
        path:'/',
        element:<Index/>,
        children:[{
            index:true,
            element:<Dashboard />
        },
        {
            path:'manageView/order',
            element:<Order />
        },
        {
            path:'manageView/employee',
            element:<Employee />
        },
        {
            path:'manageView/users',
            element:
                //<AuthGuard allowedRoles={['admin']}> 路由守卫示例
                    <User />
                //</AuthGuard>
        },
        ]
    },
    {
        path:'/errors',
        element:<Error />,
        children:[
            {
                path:'forbidden',
                element:<ForbiddenError />
            },
            {
                path:'not-found',
                element:<NotFoundError />
            },
            {
                path:'unauthorized',
                element:<UnauthorizedError />
            },
            {
                path:'maintenance',
                element:<MaintenanceError />
            },
           
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout />,
        children:[
            {
                path:'signin',
                element:<SignIn1 />
            },
            
            {
                path:'signup',
                element:<SignUp />
            },
            {
                path:'forgot-password',
                element:<ForgotPassword />
            },
            {
                path:'otp',
                element:<Otp />
            }
        ],
        
    },
    {
        path:'/auth/signin2',
        element:<SignIn2 />
    },
    {
        path:'/settings',
        element:<Index />,
        children:[
            {
                path:'',
                element:<Settings />,
                children:[
                    {
                        path:'account',
                        element:<SettingsAccount />
                    },
                    {
                        path:'appearance',
                        element:<SettingsAppearance />
                    },
                    {
                        path:'notifications',
                        element:<SettingsNotifications />
                    },
                    {
                        path:'display',
                        element:<SettingsDisplay />
                    }
                ]
            }
        ]
    }

        
])
