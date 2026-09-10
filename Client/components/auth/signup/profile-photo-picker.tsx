"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Upload, UserRound, X } from "lucide-react";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AvatarPicker, AVATARS } from "./avatar-picker";

type ProfilePhotoPickerProps = {
  photo: File | null;
  avatar: string | null;
  onPhotoChange: (file: File | null) => void;
  onAvatarChange: (avatar: string | null) => void;
};

export function ProfilePhotoPicker({
  photo,
  avatar,
  onPhotoChange,
  onAvatarChange,
}: ProfilePhotoPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const value = photo ? "upload" : avatar ? "avatar" : null;
  const selectedAvatar = AVATARS.find((item) => item.id === avatar);

  function handleChange(value: string | null) {
    if (value === "upload") {
      inputRef.current?.click();
    }

    if (value === "avatar") {
      setAvatarOpen(true);
    }

    if (value === "skip") {
      clear();
    }
  }

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please choose an image smaller than 5MB.");
      return;
    }

    onPhotoChange(file);
    onAvatarChange(null);
    event.target.value = "";
  }

  function selectAvatar(id: string) {
    onAvatarChange(id);
    onPhotoChange(null);
    setAvatarOpen(false);
  }

  function clear() {
    onPhotoChange(null);
    onAvatarChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-after7-text">
        Profile photo
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={handleFile}
      />

      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger
          className="h-11 w-full border-border bg-after7-surface text-sm"
          aria-label="Profile photo"
        >
          <SelectValue placeholder="Add a profile photo (optional)" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="upload">
            <Upload className="size-4" />
            Upload a photo
          </SelectItem>

          <SelectItem value="avatar">
            <UserRound className="size-4" />
            Choose an avatar
          </SelectItem>

          <SelectItem value="skip">
            <X className="size-4" />
            Skip for now
          </SelectItem>
        </SelectContent>
      </Select>

      <AnimatePresence mode="wait">
        {photo && (
          <Preview
            title="Photo selected"
            description={photo.name}
            onRemove={clear}
          />
        )}

        {!photo && selectedAvatar && (
          <Preview
            title="Avatar selected"
            description={selectedAvatar.label}
            avatar={selectedAvatar.emoji}
            onRemove={clear}
          />
        )}
      </AnimatePresence>

      <AvatarPicker
        open={avatarOpen}
        value={avatar}
        onOpenChange={setAvatarOpen}
        onSelect={selectAvatar}
      />
    </div>
  );
}

function Preview({
  title,
  description,
  avatar,
  onRemove,
}: {
  title: string;
  description: string;
  avatar?: string;
  onRemove: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      className="mt-3 flex items-center gap-3 rounded-lg border border-border bg-after7-surface p-2"
    >
      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-after7-accent-soft text-2xl">
        {avatar ?? "🖼️"}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-after7-text">{title}</p>
        <p className="truncate text-xs text-after7-text-muted">{description}</p>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="rounded-md p-2 text-after7-text-muted hover:bg-background hover:text-after7-text"
        aria-label="Remove profile photo"
      >
        <X className="size-4" />
      </button>
    </motion.div>
  );
}
