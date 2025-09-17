import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import gsap from "gsap";

export default function Layout({ children }) {
  const { items, total, removeFromCart, updateQty, clear } = useCart();
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    );
  }, []);

  useEffect(() => {
    // Close cart when route changes
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <header
        ref={headerRef}
        className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 dark:bg-black/60 border-b border-[hsl(var(--border))]"
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div
              className="size-10 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-orange-400 shadow-md"
              aria-hidden
            />
            <span className="font-extrabold text-xl tracking-tight">
              ShadeSense
            </span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/auth"
              className="px-4 py-2 rounded-xl font-semibold bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] transition-colors"
            >
              Sign In
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-xl font-extrabold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
            >
              Cart ({items.reduce((a, b) => a + b.qty, 0)})
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>

      <footer className="mt-16 border-t border-[hsl(var(--border))]">
        <div className="container mx-auto py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="opacity-70">
            © {new Date().getFullYear()} ShadeSense AI
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
        </div>
      </footer>

      {open && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 grid grid-cols-[1fr_auto]"
        >
          <div className="bg-black/30" onClick={() => setOpen(false)} />
          <aside className="w-[92vw] sm:w-[420px] h-full bg-white dark:bg-neutral-900 shadow-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold">Your Cart</h2>
              <button
                onClick={() => setOpen(false)}
                className="size-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 grid place-items-center font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {items.length === 0 && (
                <p className="opacity-70">Your cart is empty.</p>
              )}
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex gap-3 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60"
                >
                  <img
                    src={it.image}
                    alt={it.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold leading-tight">{it.name}</p>
                    <p className="text-sm opacity-70">${it.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQty(it.id, Math.max(1, it.qty - 1))
                        }
                        className="size-8 rounded-lg bg-neutral-100 dark:bg-neutral-700"
                      >
                        -
                      </button>
                      <span className="min-w-6 text-center">{it.qty}</span>
                      <button
                        onClick={() => updateQty(it.id, it.qty + 1)}
                        className="size-8 rounded-lg bg-neutral-100 dark:bg-neutral-700"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(it.id)}
                        className="ml-auto text-sm px-3 py-1 rounded-lg bg-red-500 text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[hsl(var(--border))]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold">Subtotal</span>
                <span className="font-extrabold text-lg">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/checkout"
                  className="flex-1 text-center px-4 py-3 rounded-xl font-extrabold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-md"
                >
                  Checkout
                </Link>
                <button
                  onClick={clear}
                  className="px-4 py-3 rounded-xl font-semibold bg-neutral-200 dark:bg-neutral-800"
                >
                  Clear
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
