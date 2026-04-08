import { Search, HelpCircle, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              className="size-10"
            >
              <path fill="none" d="M0,0h40v40H0V0z"></path>
              <g>
                <path
                  d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
                  fill="#34A853"
                ></path>
              </g>
            </svg>
            <span className="text-2xl font-medium font-google text-foreground text-[#5f6368]">
              Google Play
            </span>
          </div>
          <nav className="hidden items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Jogos
            </a>
            <a
              href="#"
              className="text-sm text-gplay-green font-medium border-b-2 border-gplay-green pb-1"
            >
              Apps
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Livros
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Crianças
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-secondary">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-secondary">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gplay-blue flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
