import { build as viteBuild } from "vite";
import { rm, readdir, rename, lstat, unlink } from "fs/promises";
import { join, resolve } from "path";

async function buildAll() {
  const root = resolve();
  const distDir = join(root, "dist");
  const publicDir = join(distDir, "public");

  await rm(distDir, { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  if (await lstat(publicDir).catch(() => null)) {
    console.log("Moving files to root dist folder...");
    const files = await readdir(publicDir);
    for (const file of files) {
      const oldPath = join(publicDir, file);
      const newPath = join(distDir, file);
      
      if (await lstat(newPath).catch(() => null)) {
        await rm(newPath, { recursive: true, force: true });
      }
      await rename(oldPath, newPath);
    }
    await rm(publicDir, { recursive: true, force: true });
  }
  
  console.log("Build complete! Static files are in /dist");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
