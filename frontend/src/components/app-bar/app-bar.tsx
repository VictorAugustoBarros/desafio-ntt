import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function AppBar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      {/* Left Section */}
      <div className="flex flex-1 items-center gap-2">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-bold hidden sm:block">
            NTT Data Store
          </span>
        </Link>
      </div>

      {/* Center Navigation */}
      <nav className="flex flex-1 justify-center items-center gap-4">
        <Link
          href="/"
          className="font-medium hover:text-primary transition-colors"
          prefetch={false}
        >
          Produtos
        </Link>
      </nav>

      {/* Right Section (Avatar) */}
      <div className="flex flex-1 justify-end gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem disabled>SignOut</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
