import { LightbulbIcon } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <LightbulbIcon className="h-6 w-6 text-primary" />
      <span className="font-bold text-xl">AI-PGF Grant Writer</span>
    </div>
  );
};