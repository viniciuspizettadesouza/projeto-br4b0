import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-black px-4">
      <div className="max-w-sm w-full space-y-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Sign in</h1>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Use your Google account to access the app
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 border border-gray-300 shadow hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 488 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M488 261.8C488 403.3 391.3 504 248 504S8 403.3 8 261.8 104.7 20 248 20c66.6 0 123.7 24.5 167.1 64.6l-67.7 65.1C322.4 123.7 287.6 108 248 108c-89.7 0-162.3 75.1-162.3 165.8 0 90.6 72.6 165.7 162.3 165.7 85.7 0 140.8-61.3 146.4-115.6H248v-92.1h240c2.2 13.2 4 26.5 4 41z" />
            </svg>
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
