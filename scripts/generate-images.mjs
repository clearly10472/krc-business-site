import { fal } from "@fal-ai/client";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "../public/generated");

mkdirSync(outputDir, { recursive: true });

fal.config({
  credentials: process.env.FAL_KEY,
});

async function generateImage(prompt, filename, width = 1440, height = 900) {
  console.log(`\n生成中: ${filename}`);
  console.log(`プロンプト: ${prompt.slice(0, 80)}...`);

  try {
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt,
        image_size: { width, height },
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: false,
      },
      logs: false,
    });

    const imageUrl = result.data.images[0].url;
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const outputPath = join(outputDir, filename);
    writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`✓ 保存完了: public/generated/${filename}`);
  } catch (err) {
    console.error(`✗ エラー: ${filename}`, err.message);
  }
}

const images = [
  {
    filename: "hero-bg.jpg",
    prompt:
      "Abstract dark background for a Japanese AI technology company website. Deep dark charcoal texture with subtle warm amber and forest green ambient light glows. Minimal, sophisticated, premium corporate aesthetic. No text, no people, no logos. Cinematic lighting, bokeh depth of field, ultra high quality.",
    width: 1440,
    height: 900,
  },
  {
    filename: "services-bg.jpg",
    prompt:
      "Dark premium Japanese office atmosphere, soft bokeh background, warm ambient lighting, blurred modern workspace with plants and soft light. Sophisticated, calm, professional. No text, no faces, dark tones with warm accents. Ultra high quality photography style.",
    width: 1440,
    height: 800,
  },
  {
    filename: "cta-bg.jpg",
    prompt:
      "Serene dark abstract background with very subtle organic flowing shapes, deep forest green and charcoal, ethereal soft glow, premium luxury brand aesthetic. No text. Cinematic, moody, elegant. Ultra high quality.",
    width: 1440,
    height: 800,
  },
];

console.log("=== Stonemark 画像生成スクリプト ===");
console.log(`生成する画像: ${images.length}枚`);

for (const img of images) {
  await generateImage(img.prompt, img.filename, img.width, img.height);
}

console.log("\n=== 完了 ===");
