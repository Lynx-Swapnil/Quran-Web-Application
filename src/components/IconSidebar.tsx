import React from 'react';
import { Menu, Search, Check, Settings, MoreVertical } from 'lucide-react';
import Link from 'next/link';

interface IconSidebarProps {
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onSettingsClick?: () => void;
}

export const IconSidebar: React.FC<IconSidebarProps> = ({
  onMenuClick,
  onSearchClick,
  onSettingsClick,
}) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-white border-r border-slate-200 flex flex-col items-center justify-start pt-4 gap-6 z-50">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Home">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
        </button>
      </Link>

      {/* Search */}
      <button
        onClick={onSearchClick}
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Search"
      >
        <Search className="w-6 h-6 text-slate-600" />
      </button>

      {/* Menu */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-slate-600" />
      </button>

      {/* Bookmarks */}
      <Link href="/bookmarks" className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
        <Check className="w-6 h-6 text-slate-600" />
      </Link>

      {/* Settings */}
      <button
        onClick={onSettingsClick}
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Settings"
      >
        <Settings className="w-6 h-6 text-slate-600" />
      </button>

      {/* More Options */}
      <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="More">
        <MoreVertical className="w-6 h-6 text-slate-600" />
      </button>
    </div>
  );
};
