import { GradientText } from "@/components/effects/text-effects";
import InfinityBandScroll from "@/components/ui/infinity-band-scroll";

export default function Testimonial1() {

  return (
    <div className="w-full grid place-content-center py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl leading-[1] md:text-6xl font-bold mb-6">
            <span className="block"><GradientText>About Me</GradientText></span>
          </h2>
        </div>

        {/* Main Heading with Images */}
        <div className="text-center max-w-none w-full relative text-foreground">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading">
            Crafting intuitive <br className="sm:hidden" />
            <span className="inline-block mx-2.5 align-middle relative cursor-pointer group">
              <span className="relative flex items-center justify-center sm:w-20 w-14 h-14 sm:h-20 origin-center transition-all duration-300 md:hover:scale-110 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[85%] h-[85%] text-foreground"
                  aria-hidden="true"
                >
                  <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
                  <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
                  <path d="m2.3 2.3 7.286 7.286" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </span>
            </span>
            User Interfaces and
          </h2>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading mt-2">
            architecting clean
            <span className="inline-block mx-2.5 align-middle relative cursor-pointer group">
              <span className="relative flex items-center justify-center sm:w-24 w-16 h-16 sm:h-24 origin-center transition-all duration-300 md:hover:scale-110 rounded-full p-1">
                <svg
                  viewBox="0 0 76 117"
                  className="w-auto h-[95%] text-foreground fill-current"
                >
                  <path d="M 9.877 37.673 C 8.511 37.673 7.146 37.939 5.936 38.525 C 2.405 40.094 0.751 42.991 0.751 46.793 L 0.751 53.282 C 0.751 55.582 1.04 57.892 1.595 60.092 L 4.726 72.506 C 5.758 76.685 9.499 79.614 13.84 79.614 L 38.409 79.614 C 43.605 79.614 47.834 75.402 47.834 70.24 L 47.834 55.548 L 56.616 32.555 C 57.027 31.483 57.249 30.355 57.249 29.217 C 57.249 24.054 53.019 19.843 47.834 19.843 C 43.927 19.843 40.396 22.264 39.042 25.889 L 38.409 27.492 L 38.409 23.358 C 38.409 18.196 34.179 13.984 28.994 13.984 C 23.81 13.984 19.58 18.196 19.58 23.358 L 19.58 32.92 C 18.992 32.81 18.403 32.732 17.815 32.732 C 14.429 32.732 11.342 34.678 9.866 37.673 Z M 17.815 37.419 C 19.436 37.419 20.912 38.37 21.567 39.84 L 24.287 45.81 L 26.896 51.491 L 24.876 51.491 C 22.411 51.491 20.246 53.205 19.724 55.593 L 14.062 43.212 C 13.807 42.692 13.696 42.106 13.696 41.52 C 13.696 39.254 15.539 37.419 17.815 37.419 Z M 9.688 42.372 C 12.486 42.372 13.363 44.605 14.362 46.804 L 19.214 57.417 C 19.469 57.936 19.58 58.522 19.58 59.108 C 19.58 61.374 17.748 63.209 15.461 63.209 C 13.84 63.209 12.375 62.259 11.709 60.788 L 5.825 47.899 C 5.647 47.534 5.492 46.948 5.492 46.506 C 5.492 44.052 7.257 42.361 9.688 42.361 Z M 52.542 29.217 C 52.542 29.803 52.431 30.355 52.242 30.908 L 43.127 54.708 L 43.127 57.24 L 39.375 53.172 C 38.376 52.111 36.943 51.491 35.467 51.491 L 28.195 51.491 L 24.287 42.957 L 24.287 23.358 C 24.287 20.76 26.385 18.671 28.994 18.671 C 31.615 18.671 33.713 20.76 33.713 23.358 L 33.713 46.804 L 36.066 46.804 L 43.416 27.537 C 44.115 25.735 45.88 24.53 47.834 24.53 C 50.443 24.53 52.542 26.652 52.542 29.217 Z M 13.84 74.927 C 11.675 74.927 9.799 73.457 9.289 71.378 L 6.158 58.953 C 5.68 57.129 5.458 55.184 5.458 53.282 L 5.458 49.944 L 10.643 61.297 C 11.487 63.165 13.407 64.381 15.461 64.381 C 18.037 64.381 20.279 62.513 20.69 59.948 C 21.678 61.23 23.221 62.037 24.876 62.037 L 32.536 62.037 L 32.536 60.866 L 24.876 60.866 C 22.633 60.866 20.612 59.031 20.612 56.764 C 20.612 54.531 22.3 52.663 24.587 52.663 L 35.467 52.663 C 36.61 52.663 37.709 53.139 38.487 53.979 L 43.116 58.953 L 43.116 70.24 C 43.116 72.838 41.029 74.927 38.409 74.927 Z" />
                </svg>
              </span>
            </span>
            code to bring <span className="font-extrabold text-foreground">seamless digital experiences to life</span>
            <span className="inline-block mx-2.5 align-middle relative cursor-pointer group">
              <span className="relative flex items-center justify-center sm:w-20 w-14 h-14 sm:h-20 origin-center transition-all duration-300 md:hover:scale-110 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles w-full h-full text-black dark:text-white"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </span>
            </span>.
          </h2>
        </div>

        <InfinityBandScroll />
      </div>
    </div>
  );
}
