"use client";
import { Dialog } from "@base-ui/react/dialog";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const AVATARS = [
  { id: "avatar-1", emoji: "🙂", label: "Friendly" },
  { id: "avatar-2", emoji: "😎", label: "Cool" },
  { id: "avatar-3", emoji: "😊", label: "Happy" },
  { id: "avatar-4", emoji: "🤓", label: "Nerdy" },
  { id: "avatar-5", emoji: "🧑", label: "Person" },
  { id: "avatar-6", emoji: "👩", label: "Woman" },
  { id: "avatar-7", emoji: "👨", label: "Man" },
  { id: "avatar-8", emoji: "🧑‍🎨", label: "Artist" },
] as const;

type Props = {
  open: boolean;
  value: string | null;
  onOpenChange: (open: boolean) => void;
  onSelect: (id: string) => void;
};

export function AvatarPicker({ open, value, onOpenChange, onSelect }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className="
            fixed inset-0 z-50 bg-black/0 backdrop-blur-0
            transition-all duration-300
            data-open:bg-black/55
            data-open:backdrop-blur-[3px]
          "
        />
        <Dialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Popup
            className="
              w-full max-w-sm overflow-hidden rounded-2xl
              border border-border bg-background shadow-2xl outline-none
              data-open:animate-in data-open:fade-in-0
              data-open:zoom-in-[0.96]
              data-closed:animate-out data-closed:fade-out-0
              data-closed:zoom-out-[0.98]
              duration-300
            "
          >
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <Dialog.Title className="text-base font-semibold text-after7-text">
                  Choose an avatar
                </Dialog.Title>

                <Dialog.Description className="text-sm text-after7-text-muted">
                  Pick one that feels like you
                </Dialog.Description>
              </div>

              <Dialog.Close className="rounded-lg p-2 text-after7-text-muted hover:bg-after7-accent-soft">
                <X className="size-4" />
              </Dialog.Close>
            </header>

            <div className="grid grid-cols-4 gap-3 p-5">
              {AVATARS.map((avatar, index) => {
                const selected = value === avatar.id;

                return (
                  <motion.button
                    key={avatar.id}
                    type="button"
                    onClick={() => onSelect(avatar.id)}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.25,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    className={`
                      relative flex aspect-square items-center justify-center
                      rounded-xl border bg-after7-surface text-3xl
                      transition-colors
                      ${
                        selected
                          ? "border-after7-accent bg-after7-accent-soft"
                          : "border-border hover:border-after7-accent/60"
                      }
                    `}
                    aria-label={`Choose ${avatar.label} avatar`}
                  >
                    {avatar.emoji}

                    {selected && (
                      <span className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-after7-accent text-after7-black">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <p className="pb-5 text-center text-xs text-after7-text-subtle">
              You can change this later.
            </p>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
