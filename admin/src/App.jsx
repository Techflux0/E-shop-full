import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <div className="mx-auto max-w-[1500px]">
        <Navbar />
        <Admin />
      </div>
    </main>
  )
}