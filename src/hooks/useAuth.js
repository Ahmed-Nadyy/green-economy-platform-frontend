import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated on mount
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      // TODO: Fetch user data using token
    }
  }, []);

  const login = async (email, password) => {
    try {
      // TODO: Replace with actual API call
      const response = await mockLoginAPI(email, password);
      const { token, userData } = response;

      localStorage.setItem('authToken', token);
      setIsAuthenticated(true);
      setUser(userData);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Mock API call - Replace with actual API integration
  const mockLoginAPI = async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation
    if (email === 'admin@example.com' && password === 'password') {
      return {
        token: 'mock-jwt-token',
        userData: {
          id: 1,
          email: 'admin@example.com',
          name: 'Admin User'
        }
      };
    }

    throw new Error('Invalid credentials');
  };

  return {
    isAuthenticated,
    user,
    login,
    logout
  };
};

export { useAuth };
export default useAuth;