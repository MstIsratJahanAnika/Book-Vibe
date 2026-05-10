export default function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 to-slate-200 px-4">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-slate-200">
                <h1 className="text-8xl font-extrabold text-indigo-600 mb-4">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-slate-800 mb-3">
                    Page Not Found
                </h2>

                <p className="text-slate-500 mb-8 leading-relaxed">
                    Sorry, the page you are looking for does not exist or may have been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-2xl bg-slate-200 hover:bg-slate-300 transition font-medium">
                        Go Back
                    </button>

                    <a href="/"
                        className="px-6 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium">
                        Go Home
                    </a>
                </div>

                <div className="mt-10 text-sm text-slate-400">
                    Error Code: 404
                </div>
            </div>
        </div>
    );
}
