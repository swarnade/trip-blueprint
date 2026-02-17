import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSuccess = async (credentialResponse) => {
    try {
      console.log(credentialResponse.credential);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        {
          token: credentialResponse.credential,
        },
        { withCredentials: true },
      );
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.status === 404) {
        alert("User not found. Please sign up first.");
        navigate("/signup");
      } else {
        alert("Failed to log in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="relative min-h-screen w-screen flex items-center justify-center bg-[#0b1220] overflow-hidden font-sans">
    {/* Ambient Gradients */}
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-500/30 rounded-full blur-[180px]" />
    <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-[180px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

    {/* Card */}
    <div className="relative z-10 w-[92%] max-w-[480px]">
      <div className="relative rounded-[2.8rem] p-[1px] bg-gradient-to-br from-sky-400/40 via-white/20 to-emerald-400/40">
        <div className="rounded-[2.7rem] bg-white/80 backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.25)] px-10 py-12">

          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl blur-md opacity-40"></div>
              <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <img
                  src="https://img.freepik.com/premium-vector/travel-logo_669204-8.jpg"
                  alt="Trip Blueprint"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900">
              Trip <span className="text-sky-600">Blueprint</span>
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Design journeys. Not just trips.
            </p>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-slate-800">
              Start planning like a pro
            </h2>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              AI-powered itineraries, routes, stays, and experiences — built
              around how *you* travel.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 text-sm text-red-600 bg-red-50 border border-red-100 py-3 px-4 rounded-xl text-center">
              {error}
            </div>
          )}

          {/* Auth */}
          {loading ? (
            <div className="flex flex-col items-center py-6">
              <div className="w-7 h-7 border-2 border-sky-600 border-t-transparent rounded-full animate-spin mb-3"></div>
              <span className="text-xs text-slate-500">
                Securing your journey…
              </span>
            </div>
          ) : (
            <div className="flex justify-center transition hover:scale-[1.02] active:scale-95">
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => setError("Google login failed")}
                theme="outline"
                size="large"
                shape="pill"
                width="100%"
              />
            </div>
          )}

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[10px] uppercase tracking-[0.3em] text-slate-400 font-semibold">
                Travel Intelligence
              </span>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-slate-500">
            New here?{" "}
            <a
              href="/signup"
              className="text-sky-600 font-semibold hover:underline"
            >
              Create your blueprint
            </a>
          </p>

          <div className="mt-10 text-center text-[10px] tracking-[0.35em] uppercase text-slate-400 font-bold">
            Explore • Plan • Go
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
