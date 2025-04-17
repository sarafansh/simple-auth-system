import AuthCard from "@/components/auth/AuthCard";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Welcome</h1>
          <p className="text-gray-500">Sign in to your account or create a new one</p>
        </div>
        <AuthCard />
      </div>
    </div>
  );
};

export default Index;
