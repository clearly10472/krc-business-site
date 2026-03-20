import { fal } from "@fal-ai/client";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const outputDir = "/Users/simo/krc-claude-lab/krc-business-site/public/generated";
mkdirSync(outputDir, { recursive: true });

fal.config({ credentials: process.env.FAL_KEY });

async function gen(prompt, filename, width, height) {
  console.log(`生成中: ${filename}`);
  const result = await fal.subscribe("fal-ai/flux/schnell", {
    input: { prompt, image_size: { width, height }, num_inference_steps: 4, num_images: 1, enable_safety_checker: false },
    logs: false,
  });
  const res = await fetch(result.data.images[0].url);
  writeFileSync(join(outputDir, filename), Buffer.from(await res.arrayBuffer()));
  console.log(`✓ ${filename}`);
}

const images = [
  {
    filename: "hero.jpg",
    prompt: "Soft warm morning light streaming through large windows onto a clean minimal white desk. Warm cream and beige tones, soft bokeh background, lush green plant in corner, golden hour glow. Clean, airy, inviting, professional. No text, no people. High quality photography.",
    width: 1440, height: 900
  },
  {
    filename: "service-sns.jpg",
    prompt: "Clean minimal flat lay of a smartphone with soft pastel green background, small succulent plant, white notebook. Warm natural lighting, top-down view. Soft shadows. Professional product photography style. No text on screen. Warm and approachable.",
    width: 800, height: 600
  },
  {
    filename: "service-writing.jpg",
    prompt: "Minimal clean desk with open notebook, fountain pen, small plant, warm morning light. Cream and warm white tones. Soft natural shadows. Cozy professional workspace. No text. High quality photography, warm and inviting.",
    width: 800, height: 600
  },
  {
    filename: "service-automation.jpg",
    prompt: "Clean organized minimal workspace, laptop on white desk, small potted plant, warm natural light from window. Neat and tidy. Warm beige and white tones. Professional and calm atmosphere. No text, no faces. High quality photography.",
    width: 800, height: 600
  },
  {
    filename: "case-study.jpg",
    prompt: "Elegant Japanese beauty salon interior, warm soft lighting, white and beige tones, minimalist design with plants, comfortable styling chair, professional and welcoming atmosphere. Cinematic photography, warm golden tones. No people, no text.",
    width: 800, height: 600
  },
  {
    filename: "cta-bg.jpg",
    prompt: "Soft abstract warm background with gentle bokeh light circles, cream and warm white tones with subtle green plant elements blurred in background. Peaceful, airy, clean. No text, no faces. Warm natural light. High quality.",
    width: 1440, height: 800
  },
];

console.log("=== FlowBoost Lab 画像生成 ===");
for (const img of images) {
  await gen(img.prompt, img.filename, img.width, img.height);
}
console.log("\n完了 ✓");
