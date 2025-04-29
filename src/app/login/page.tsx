import LoginForm from "./LoginForm";

export default async function loginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <LoginForm />
        </div>
    );
}
