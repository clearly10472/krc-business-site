import { fal } from "@fal-ai/client";
import { writeFileSync } from "fs";
import { join } from "path";

fal.config({ credentials: process.env.FAL_KEY });

const outputDir = "/Users/simo/krc-claude-lab/krc-business-site/public/generated";

async function gen(prompt, filename) {
  console.log(`生成中: ${filename}`);
  const result = await fal.subscribe("fal-ai/flux/schnell", {
    input: {
      prompt,
      image_size: { width: 800, height: 600 },
      num_inference_steps: 4,
      num_images: 1,
      enable_safety_checker: false,
    },
    logs: false,
  });
  const res = await fetch(result.data.images[0].url);
  writeFileSync(join(outputDir, filename), Buffer.from(await res.arrayBuffer()));
  console.log(`✓ ${filename}`);
}

await gen(
  "Smartphone on a wooden desk showing social media feed, warm natural light, soft bokeh background, small plant nearby. Cozy cafe or office atmosphere. Warm beige tones. No text on screen. Top-down flat lay. High quality photography.",
  "pain-sns.jpg"
);

await gen(
  "Person sitting at a laptop in a small office, looking tired and overwhelmed, staring at the screen. Warm indoor lighting, cluttered desk with papers and coffee cup. Realistic candid photography. Warm tones. No face clearly visible.",
  "pain-writing.jpg"
);

await gen(
  "Stack of papers, documents, and notebooks on a busy desk with a pen and calculator. Office paperwork overload. Warm indoor lighting. Top-down view. Warm beige and white tones. No text visible. High quality photography.",
  "pain-admin.jpg"
);

console.log("\n完了 ✓");
