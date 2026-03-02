export function extractDriveFileId(url: string): string | null {
  try {
    // أشهر شكل: /file/d/FILE_ID/view
    const m1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (m1?.[1]) return m1[1];

    // شكل: open?id=FILE_ID أو uc?id=FILE_ID
    const u = new URL(url);
    const id = u.searchParams.get("id");
    if (id) return id;

    return null;
  } catch {
    return null;
  }
}

export function driveThumbPrimary(fileId: string, width = 1200) {
  // غالبًا الأفضل كبداية
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}

export function driveThumbFallback(fileId: string, width = 1200) {
  // بديل قوي لو الأول فشل
  return `https://lh3.googleusercontent.com/d/${fileId}=w${width}`;
}