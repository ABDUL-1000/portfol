import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode; // This should be string[] from your data
  id?: number;
  img?: string;
  link?: string;
}) => {
  // Cast icon to string array if it's passed as an array
  const iconArray = Array.isArray(icon) ? icon : [];
  
  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        {/* Title with external link icon */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-neutral-800 dark:text-neutral-200">
            {title}
          </h3>
          <ExternalLink className="w-4 h-4 text-neutral-400" />
        </div>
        
        {/* Image */}
        {img && (
          <div className="flex-1 min-h-[120px] rounded-xl overflow-hidden mb-3">
            <img 
              src={img} 
              alt={typeof title === 'string' ? title : 'Project image'} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Description */}
        {description && (
          <p className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-2 mb-3">
            {description}
          </p>
        )}
        
        {/* Technology Icons */}
        {iconArray.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {iconArray.map((iconUrl, index) => (
              <div 
                key={index} 
                className="w-6 h-6 relative group/icon"
                title={getTechName(iconUrl)}
              >
                <img 
                  src={iconUrl} 
                  alt="" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if icon doesn't load
                    console.error(`Failed to load icon: ${iconUrl}`);
                  }}
                />
              </div>
            ))}
          </div>
        )}
        
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {header}
        </div>
      </a>
    </div>
  );
};

// Helper function to get technology name from icon path
const getTechName = (iconPath: string): string => {
  const iconMap: Record<string, string> = {
    "/icons/next.svg": "Next.js",
    "/next.svg": "Next.js",
    "/icons/tailwind.svg": "Tailwind CSS",
    "/tailwind.svg": "Tailwind CSS",
    "/icons/typescript.svg": "TypeScript",
    "/typescript.svg": "TypeScript",
    "/icons/nodejs.svg": "Node.js",
    "/nodejs.svg": "Node.js",
    "/icons/shadcn.svg": "shadcn/ui",
    "/shadcn.svg": "shadcn/ui",
    "/icons/tanstack.svg": "TanStack Query",
    "/tanstack.svg": "TanStack Query",
    "/icons/zustand.svg": "Zustand",
    "/zustand.svg": "Zustand",
    "/icons/framer.svg": "Framer Motion",
    "/framer.svg": "Framer Motion",
    "/icons/threejs.svg": "Three.js",
    "/three.svg": "Three.js",
    "/icons/react.svg": "React",
    "/re.svg": "React",
    "/fm.svg": "Framer Motion",
    "/ts.svg": "TypeScript",
    "/tail.svg": "Tailwind CSS",
  };
  
  return iconMap[iconPath] || iconPath.split('/').pop()?.replace('.svg', '').replace('.jpg', '') || 'Tech';
};