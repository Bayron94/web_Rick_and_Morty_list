import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background p-2xl">
      <header className="text-3xl font-bold text-primary mb-6">My App</header>
      <main>{children}</main>
    </div>
  );
};
