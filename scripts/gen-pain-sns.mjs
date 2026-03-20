import { fal } from "@fal-ai/client";
import { writeFileSync } from "fs";
import { join } from "path";

fal.config({ credentials: process.env.FAL_KEY });

console.log("生成中: pain-sns.jpg");
const result = await fal.subscribe("fal-ai/flux/schnell", {
  input: {
    prompt: "Smartphone lying on a clean wooden desk, social media app open on screen, warm soft natural window light, shallow depth of field, cozy minimal workspace. Warm beige and cream tones. No plants. No text on screen. High quality photography.",
    image_size: { width: 800, height: 600 },
    num_inference_steps: 4,
    num_images: 1,
    enable_safety_checker: false,
  },
  logs: false,
});

const res = await fetch(result.data.images[0].url);
writeFileSync(join("/Users/simo/krc-claude-lab/krc-business-site/public/generated", "pain-sns.jpg"), Buffer.from(await res.arrayBuffer()));
console.log("完了 ✓");
