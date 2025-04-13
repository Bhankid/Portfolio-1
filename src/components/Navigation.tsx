import { Home, User, Briefcase, PenTool as Tool, Mail } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'services', label: 'Services', icon: Tool },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navigation({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-col fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-800 z-50">
        <div className="flex justify-around p-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white scale-110'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <Icon className="w-6 h-6" />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}