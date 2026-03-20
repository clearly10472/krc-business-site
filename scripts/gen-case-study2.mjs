import { fal } from "@fal-ai/client";
import { writeFileSync } from "fs";
import { join } from "path";

fal.config({ credentials: process.env.FAL_KEY });

console.log("生成中...");
const result = await fal.subscribe("fal-ai/flux/schnell", {
  input: {
    prompt: "Realistic photo of a Japanese male chiropractor therapist smiling warmly while performing a massage treatment on a patient lying on a treatment table. Bright clean treatment room, white walls, warm natural lighting. Professional and friendly atmosphere. High quality realistic photography.",
    image_size: { width: 800, height: 600 },
    num_inference_steps: 4,
    num_images: 1,
    enable_safety_checker: false,
  },
  logs: false,
});

const res = await fetch(result.data.images[0].url);
writeFileSync(join("/Users/simo/krc-claude-lab/krc-business-site/public/generated", "case-study.jpg"), Buffer.from(await res.arrayBuffer()));
console.log("完了 ✓");
