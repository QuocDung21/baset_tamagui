import { useState, useEffect } from 'react';

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export default function useAuth() {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isLoading: true,
        isAuthenticated: false,
    });

    useEffect(() => {
        // Simulate checking for existing auth token
        const checkAuthStatus = async () => {
            try {
                // Here you would check for stored token and validate it
                // const token = await AsyncStorage.getItem('authToken');
                // if (token) {
                //   const user = await validateToken(token);
                //   setAuthState({ user, isLoading: false, isAuthenticated: true });
                // } else {
                //   setAuthState({ user: null, isLoading: false, isAuthenticated: false });
                // }

                // For demo purposes, set loading to false after 1 second
                setTimeout(() => {
                    setAuthState(prev => ({ ...prev, isLoading: false }));
                }, 1000);
            } catch (error) {
                setAuthState({ user: null, isLoading: false, isAuthenticated: false });
            }
        };

        checkAuthStatus();
    }, []);

    const login = async (email: string, password: string) => {
        setAuthState(prev => ({ ...prev, isLoading: true }));

        try {
            // Simulate API call
            const response = await new Promise<User>((resolve) => {
                setTimeout(() => {
                    resolve({
                        id: '1',
                        email,
                        name: 'Demo User'
                    });
                }, 1000);
            });

            setAuthState({
                user: response,
                isLoading: false,
                isAuthenticated: true,
            });

            return { success: true };
        } catch (error) {
            setAuthState(prev => ({ ...prev, isLoading: false }));
            return { success: false, error: 'Login failed' };
        }
    };

    const logout = async () => {
        setAuthState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
        });
    };

    return {
        ...authState,
        login,
        logout,
    };
} 