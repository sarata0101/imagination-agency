"use client";

import Image, { ImageProps } from "next/image";
import { useMemo, useState } from "react";
import { extractDriveFileId, driveThumbFallback, driveThumbPrimary } from "@/lib/drive-thumb";

type Props = {
  thumbUrl?: string | null;
  driveUrl?: string | null;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ProjectThumb({
  thumbUrl,
  driveUrl,
  alt,
  fill = true,
  className,
  sizes,
  priority,
}: Props) {
  const fileId = useMemo(() => (driveUrl ? extractDriveFileId(driveUrl) : null), [driveUrl]);

  const drivePrimary = fileId ? driveThumbPrimary(fileId, 1200) : null;
  const driveAlt = fileId ? driveThumbFallback(fileId, 1200) : null;

  // ترتيب المصادر:
  // 1) thumbUrl (لو أنتِ مرفعاها على Supabase)
  // 2) Drive primary (لو الرابط file)
  // 3) Drive fallback
  // 4) placeholder
  const sources = useMemo(() => {
    const arr = [];
    if (thumbUrl) arr.push(thumbUrl);
    if (drivePrimary) arr.push(drivePrimary);
    if (driveAlt) arr.push(driveAlt);
    arr.push("/placeholder.svg");
    return arr;
  }, [thumbUrl, drivePrimary, driveAlt]);

  const [srcIndex, setSrcIndex] = useState(0);
  const src = sources[srcIndex];

  const isDrive = !!fileId && (src === drivePrimary || src === driveAlt);

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      // Drive thumbnails ساعات Next optimizer بيتعب معها، فبنخليه unoptimized
      unoptimized={isDrive}
      onError={() => {
        // جرّبي المصدر اللي بعده
        setSrcIndex((i) => Math.min(i + 1, sources.length - 1));
      }}
    />
  );
}