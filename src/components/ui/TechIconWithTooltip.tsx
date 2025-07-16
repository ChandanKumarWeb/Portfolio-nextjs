// components/TechIconWithTooltip.tsx
import * as Tooltip from "@radix-ui/react-tooltip";

export default function TechIconWithTooltip({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="text-xl text-gray-700 dark:text-gray-200 cursor-default">
            {icon}
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-black text-white px-2 py-1 rounded text-sm shadow-lg z-50"
            side="top"
            sideOffset={5}
          >
            {name}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
