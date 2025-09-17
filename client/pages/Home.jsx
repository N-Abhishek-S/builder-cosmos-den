import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { analyzeImage } from "../services/ai.js";
import { useCart } from "../context/CartContext.jsx";

export default function Home() {
  const heroRef = useRef(null);
  const uploadRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      uploadRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.2, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const onFile = (f) => {
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(f);
    setProgress(0);
    const tid = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(tid);
          return 100;
        }
        return p + 5;
      });
    }, 50);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    const res = await analyzeImage(file);
    setResult(res);
    setLoading(false);
    gsap.from(".result-card", { y: 14, opacity: 0, stagger: 0.05, duration: 0.5 });
  };

  return (
    <div className="space-y-10">
      <section ref={heroRef} className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-fuchsia-500/15 via-orange-400/10 to-cyan-400/15 border border-[hsl(var(--border))]">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Personalized fashion, powered by AI.
          </h1>
          <p className="mt-3 text-lg opacity-80">
            Upload a clear photo and ShadeSense will analyze your face shape and skin tone to recommend sunglasses and colors that flatter you.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#upload" className="px-6 py-3 rounded-2xl font-extrabold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-md hover:shadow-lg">Try it now</a>
            <a href="#how" className="px-6 py-3 rounded-2xl font-semibold bg-white dark:bg-neutral-900 border border-[hsl(var(--border))]">How it works</a>
          </div>
        </div>
      </section>

      <section id="upload" ref={uploadRef} className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-3xl p-6 border border-[hsl(var(--border))] bg-white dark:bg-neutral-900">
          <h2 className="text-2xl font-extrabold">Upload your photo</h2>
          <p className="opacity-80">Face forward photo with good lighting works best.</p>

          <label className="mt-5 block rounded-3xl border-2 border-dashed border-[hsl(var(--border))] bg-neutral-50 dark:bg-neutral-800/50 p-6 cursor-pointer hover:border-[hsl(var(--ring))] transition-colors">
            <input type="file" accept="image/*" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
            <div className="grid sm:grid-cols-[160px_1fr] gap-4 items-center">
              <div className="aspect-square w-full max-w-[160px] rounded-2xl bg-neutral-200/60 dark:bg-neutral-700/60 grid place-items-center overflow-hidden">
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="opacity-60">No image</span>
                )}
              </div>
              <div>
                <p className="font-semibold">Drag & drop or click to upload</p>
                <p className="text-sm opacity-70">JPG, PNG up to 5MB</p>
                <div className="mt-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <div className="h-3 rounded-full bg-[hsl(var(--primary))] transition-all" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-4 flex gap-3">
                  <button onClick={handleAnalyze} disabled={!file || loading} className="px-5 py-3 rounded-2xl font-extrabold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] disabled:opacity-50">
                    {loading ? "Analyzing..." : "Analyze with AI"}
                  </button>
                  <button onClick={() => { setFile(null); setPreview(""); setResult(null); setProgress(0); }} className="px-5 py-3 rounded-2xl font-semibold bg-neutral-200 dark:bg-neutral-800">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="rounded-3xl p-6 border border-[hsl(var(--border))] bg-white dark:bg-neutral-900">
          <h2 className="text-2xl font-extrabold">Your analysis</h2>
          {!result && <p className="opacity-70">Run an analysis to see personalized insights.</p>}
          {result && (
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="result-card rounded-2xl p-4 bg-neutral-50 dark:bg-neutral-800/50">
                <p className="text-sm opacity-70">Face shape</p>
                <p className="text-xl font-extrabold capitalize">{result.faceShape}</p>
              </div>
              <div className="result-card rounded-2xl p-4 bg-neutral-50 dark:bg-neutral-800/50">
                <p className="text-sm opacity-70">Skin tone</p>
                <p className="text-xl font-extrabold capitalize">{result.skinTone}</p>
              </div>
              <div className="result-card rounded-2xl p-4 bg-neutral-50 dark:bg-neutral-800/50">
                <p className="text-sm opacity-70">Recommended colors</p>
                <div className="mt-2 flex gap-2">
                  {result.palettes.map((hex) => (
                    <span key={hex} className="size-7 rounded-xl border" style={{ background: hex }} aria-label={hex} />
                  ))}
                </div>
              </div>
              <div className="result-card rounded-2xl p-4 bg-neutral-50 dark:bg-neutral-800/50">
                <p className="text-sm opacity-70">Sunglasses styles</p>
                <p className="text-lg font-bold capitalize">{result.sunglassesStyles.join(", ")}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {result && (
        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold">Top sunglasses for you</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {result.recommendations.sunglasses.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
            ))}
          </div>
          <h2 className="text-2xl font-extrabold mt-10">Outfits that match your palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {result.recommendations.outfits.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    const ctx = gsap.context(() => {
      gsap.set(el, { y: 0 });
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={cardRef} className="group rounded-3xl overflow-hidden border border-[hsl(var(--border))] bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
        <div className="absolute left-3 top-3 px-3 py-1 rounded-xl text-xs font-bold bg-white/80 backdrop-blur border">{product.style || product.type}</div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold leading-tight pr-2 line-clamp-1">{product.name}</p>
          <span className="font-extrabold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm opacity-70">⭐ {product.rating.toFixed(1)}</p>
        <button onClick={onAdd} className="mt-3 w-full px-4 py-3 rounded-2xl font-extrabold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
          Add to cart
        </button>
      </div>
    </div>
  );
}
