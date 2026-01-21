// src/pages/Register.jsx
export default function Register() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Email" className="border p-2 rounded"/>
        <input type="password" placeholder="Password" className="border p-2 rounded"/>
        <button className="bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
