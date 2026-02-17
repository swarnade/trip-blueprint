import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSuccess = async (credentialResponse) => {

    try {
      console.log(credentialResponse.credential)
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
        token: credentialResponse.credential,
      });
      console.log(response);
      if(response.status === 201) {
        alert("Signup successful! You can now log in.");
      } else {
        setError("Signup failed");
      }
    } catch (err) {
      alert("Failed to sign up. Please try again.");
      setError(err.response?.data?.err || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#f5f9ff] relative overflow-hidden">
      {/* Travel Aura */}
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-sky-200 rounded-full blur-[130px] opacity-70" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-emerald-200 rounded-full blur-[130px] opacity-60" />

      {/* Card */}
      <div className="relative z-10 w-[90%] max-w-[520px]">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.06)] p-10 md:p-12">
          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl blur opacity-30"></div>
              <div className="relative w-24 h-20 bg-white rounded-2xl flex items-center justify-center shadow border">
                <img
                  src="https://img.freepik.com/premium-vector/travel-logo_669204-8.jpg?semt=ais_user_personalization&w=740&q=80"
                  alt="Trip Blueprint"
                  className="w-18 h-14"
                />
              </div>
            </div>

            <p className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
              Trip <span className="text-sky-600">Blueprint</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Plan smarter. Travel better.
            </p>
          </div>

          {/* Welcome */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-slate-800">
              Start your next journey
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              AI-powered itineraries, routes, stays & experiences — all in one
              place.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 text-sm text-red-500 bg-red-50 border border-red-100 py-3 px-4 rounded-xl text-center">
              {error}
            </div>
          )}

          {/* Login */}
          {loading ? (
            <div className="flex flex-col items-center py-4">
              <div className="w-6 h-6 border-2 border-sky-600 border-t-transparent rounded-full animate-spin mb-2"></div>
              <span className="text-xs text-slate-500">Signing you in…</span>
            </div>
          ) : (
            <div className="flex justify-center hover:-translate-y-1 transition">
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
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#fdfefe] px-4 text-slate-400 tracking-widest">
                travel smarter
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
              Create your travel blueprint
            </a>
          </p>

          <div className="mt-10 text-center text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold">
            Explore • Plan • Go
          </div>
        </div>
      </div>
    </div>
  );
}
